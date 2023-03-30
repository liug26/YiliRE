import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PropertyCard from './property-card';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const propties =
[
    { 'image': '' }
];

function FeaturedProperties(props: any)
{
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
    return (
        <Box>
            <Grid container spacing='3rem' marginBottom='3rem'>
        <Grid item xs={6}>
          <PropertyCard>xs</PropertyCard>
        </Grid>
        <Grid item xs={6}>
          <PropertyCard>xs</PropertyCard>
        </Grid>
        <Grid item xs={6}>
          <PropertyCard>xs</PropertyCard>
        </Grid>
      </Grid>
      <MobileStepper
      variant="dots"
      steps={2}
      position="static"
      activeStep={activeStep}
      sx={{ width: '100%', flexGrow: 1, marginTop: '1rem' }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 1}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
        </Box>
    );
}

export default FeaturedProperties;