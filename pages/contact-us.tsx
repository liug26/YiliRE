import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ThemeProvider, responsiveFontSizes, createTheme } from "@mui/material/styles";
import { theme } from '@/pages/index'
import AppBar from '@/components/appbar';
import ColorButton from '@/components/color-button';
import HCheckboxGroup from '@/components/h-checkbox-group';
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useRouter } from 'next/router'


const emailTo = 'dawangyi1@126.com';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref)
{
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function ContactUs(props: any)
{
    // ref https://www.freecodecamp.org/news/routing-in-nextjs-beginners-guide/
    const router = useRouter();
    let {query: {buy}} = router;
    if (buy === undefined)
        buy = 'true';
    const checkboxValues =
    {
        'Buy Home': buy === 'true', 'Sell Home': buy !== 'true', 'Other': false
    } as { [key : string] : boolean };

    const menuLinks = [
        {label: 'Home Search', link: '', onClick: () => { window.open('https://www.zillow.com/profile/yilicoffee/'); }}
    ];

    const [checboxState, setCheckboxState] = React.useState(checkboxValues);
    const [snackBarState, setSnackBarState] = React.useState(
    {
        severity: '',
        visibility: false,
        text: ''
    });
    const [info, setInfo] = React.useState({
        firstName: '', lastName: '', email: '', phone: '', price: '', message: ''
    });

    
    const onCheckboxChange = (state : { [key : string] : boolean }) =>
    {
        setCheckboxState(state);
    };
    
    const handleWarnBarClose = (event?: React.SyntheticEvent | Event, reason?: string) =>
    {
        if (reason === 'clickaway')
            return;
        setSnackBarState({...snackBarState, visibility : false});
    };

    const onInfoChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        setInfo({
          ...info,
          [event.target.name]: event.target.value,
        });
    };

    const onSubmit = async () =>
    {
        // if none of the checkboxes are selected
        if (Object.values(checboxState).every(element => !element))
        {
            setSnackBarState({severity: 'warning', text: 'Please select a field of interest', visibility: true});
            return;
        }

        const infoKeys = Object.keys(info);
        const infoValues = Object.values(info);
        for (let i = 0; i < infoKeys.length; i++)
            if (infoKeys[i] != 'message' && infoValues[i] == '')
            {
                setSnackBarState({severity: 'warning', text: 'Please enter all required info', visibility: true});
                return;
            }

        const res = await fetch('api/nodemailer',
        {
			method: 'POST',
			headers:
            {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(
            {
                fullname: `${info['firstName']} ${info['lastName']}`,
                email: info['email'],
                phone: info['phone'],
                price: info['price'],
                foi: checboxState,
                message: info['message'],
                emailTo: emailTo
            })
		})
    
        const { error } = await res.json();
        if (error)
            setSnackBarState({severity: 'error', text: 'Unknown error occured, please send us an email manually to contact us', visibility: true});
        else
            setSnackBarState({severity: 'success', text: 'Your reponse was successfully recorded', visibility: true});
    };

    // style based on https://www.isluxury.com/contact-us/
    return (
        <React.StrictMode>
        <ThemeProvider theme={theme}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    	    <Head>
                <title>YL Real Estate</title>
                <meta name='description' content='YL Real Estate' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <nav>
                <AppBar menuLinks={menuLinks} enableTopTransparent={false}/>
            </nav>
            <main id='contact-us'>
                <Typography color='black' variant='h2' fontFamily='Playfair Display' padding='1rem 0rem 0rem 0rem'>
					Contact Form
				</Typography>
                <Typography className='fifty-centered-text' color='black' variant='h5' fontFamily='Cormorant Garamond' padding='2rem 0rem 0rem 0rem'>
                    Thank you for your interest in getting in touch with us.<br/>
                    Tell us about your inquiry and we will get back to you as soon as possible.
				</Typography>
                <Grid className='fifty-centered-text' container spacing='2rem' padding='2rem 0rem 0rem 0rem' width='50%'>
                    <Grid item xs={6}>
                        <TextField name='firstName' required label='First Name' sx={{width: '100%'}} onChange={onInfoChange}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField name='lastName' required label='Last Name' sx={{width: '100%'}} onChange={onInfoChange}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField name='email' required label='Email' sx={{width: '100%'}} onChange={onInfoChange}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField name='phone' required label='Phone' sx={{width: '100%'}} onChange={onInfoChange}/>
                    </Grid>
                    <Grid item xs={12} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Typography color='black' variant='h5' fontFamily='Cormorant Garamond' padding='0rem 2rem 0rem 0rem'>
                            Field of Interest:
                        </Typography>
                        <HCheckboxGroup checkboxValues={checkboxValues} onChange={onCheckboxChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name='price' required label='What is your price point?' sx={{width: '100%'}} onChange={onInfoChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name='message' multiline label='Message' sx={{width: '100%'}} onChange={onInfoChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <ColorButton title='Submit' onClick={onSubmit}/>
                    </Grid>
                </Grid>
                <Snackbar id='warn-bar' open={snackBarState['visibility']} autoHideDuration={6000} onClose={handleWarnBarClose}>
                    <Alert onClose={handleWarnBarClose} severity={snackBarState['severity'] == 'warning' ? 'warning' :
                    snackBarState['severity'] == 'success' ? 'success' : snackBarState['severity'] == 'error' ? 'error' : 'info'}
                    sx={{width: '100%'}}>
                        <Typography color='white' variant='body1' fontFamily='Cormorant Garamond'>
                            {snackBarState['text']}
                        </Typography>
                    </Alert>
                </Snackbar>
            </main>
        </ThemeProvider>
        </React.StrictMode>
    );
}