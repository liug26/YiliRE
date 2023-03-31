import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PropertyCard from './property-card';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

interface FeaturedPropertiesProps
{
    properties:
    {
        address: string;
        price: number;
        subtitle: string;
        image: string;
    }[];
};

export default function FeaturedProperties(props: FeaturedPropertiesProps)
{
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () =>
    {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () =>
    {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const propertiesLen = props.properties.length;
    const stepperSteps = Math.ceil(propertiesLen / 4);
    const propertyCards = [];
    for (let i = activeStep * 4; i < propertiesLen && i < activeStep * 4 + 4; i++)
        propertyCards.push(
            <Grid item xs={6}>
                <PropertyCard property={props.properties[i]}/>
            </Grid>
        );

    return (
        <Box width='100%'>
            <Grid container spacing='3rem' marginBottom='2rem'>
                {propertyCards}
            </Grid>
            <MobileStepper variant='dots' steps={stepperSteps} position='static' activeStep={activeStep} 
            sx={{width: '100%', flexGrow: 1, marginTop: '1rem'}} nextButton={
                <Button size='large' onClick={handleNext} disabled={activeStep === stepperSteps - 1}>
                    <Typography variant='h6' color='grey'>
                        Next
                    </Typography>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button size='large' onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    <Typography variant='h6' color='grey'>
                        Back
                    </Typography>
                </Button>
            }
            />
        </Box>
    );
}