import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface ImageProps
{
	images: string[];
    showStepper: boolean;
	interval: number;
}

// based on https://mui.com/material-ui/react-stepper/#text-with-carousel-effect
export default function Carousel(props: ImageProps)
{
	const images = props.images;
	const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
    setActiveStep(step);
    };
    // sx={{ width: '100%', flexGrow: 1 }}
    return (
        <Box>
            <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange}
            enableMouseEvents interval={props.interval}>
                {images.map((step, index) => (
                    <div key={step}>
                    {Math.abs(activeStep - index) <= 2 ? (
                        <Box component='img' sx={{height: '100%', display: 'block', width: '100%', overflow: 'hidden'}}
                        src={step} alt=''/>
                    ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            {props.showStepper ? 
                <MobileStepper id = 'stepper' steps={maxSteps} position='static' activeStep={activeStep} nextButton={
                    <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1}>	
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                    </Button>
                }
                backButton={
                <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
                </Button>
                }
            /> : ""}
        </Box>
    );
}