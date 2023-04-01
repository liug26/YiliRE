import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { ThemeProvider, responsiveFontSizes, createTheme } from "@mui/material/styles";
import Carousel from '@/components/carousel';
import AppBar from '@/components/appbar';
import FeaturedProperties from '@/components/featured-properties';
import Collage from '@/components/collage';
import ColorButton from '@/components/color-button';
import React from 'react';
import { useRouter } from 'next/router'
import useSWR from 'swr';
import {playfairDisplay} from '@/utils/fonts'


//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export let theme = createTheme({
    typography: {
        fontFamily: ['Cormorant Garamond', 'Arapey', 'Playfair Display', 'serif'].join(',')
    },
    palette: {
        primary: {
            dark: '#1a1212',
            main: '#c4c4c4',
            light: '#c4c4c4'
        }
    }
});
theme = responsiveFontSizes(theme);


function shuffle(array: string[])
{
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
  

export default function Home()
{
    const router = useRouter();
    const {data, error} = useSWR('/api/re-static-data', fetcher);
    if (error)
    {
        console.log(`unable to fetch static data: ${error}`);
        return;
    }
    if (!data)
    {
        // still loading data
        return;
    }
    const headerImages = shuffle(data.contents.headerImages);

    const menuLinks = [
        {label: 'About', link: '', onClick: () =>
        {
            var about = document.getElementById('about');
            if (about != null)
                about.scrollIntoView({behavior:"smooth", block: "start", inline: "nearest"});
        }},
        {label: 'Home Search', link: '', onClick: () => { window.open('https://www.zillow.com/profile/yilicoffee/'); }},
        {label: 'Contact Us', link: '', onClick: () => { router.push('contact-us') }}
    ];

    // style based on https://homesinsantabarbara.com/
  	return (
        <React.StrictMode>
        <ThemeProvider theme={theme}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'/>
            <Head>
                <title>YL Real Estate</title>
                <meta name='description' content='YL Real Estate' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <nav>
                <AppBar menuLinks={menuLinks}/>
            </nav>
            <header className='container'>
                <Box className='half-darkened'>
                    <Carousel images={headerImages} showStepper={false} interval={10000} />
                </Box>
                <Box className='centered'>
                    <Typography color='white' variant='h1' fontFamily='Playfair Display'>
                        YL Real Estate
                    </Typography>
                    <Typography color='white' variant='h4'>
                        Some description over here
                    </Typography>
                </Box>
            </header>
            <section id='about'>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                    <img id='avatar' src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
                        alt='About us'/>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '5rem'}}>
                        <Typography variant='h2' fontFamily='Playfair Display'>
                            Yi Li
                        </Typography>
                        <Typography variant='subtitle1' fontFamily='Playfair Display'>
                            Some description
                        </Typography>
                        <br/><br/>
                        <Typography variant='h5' fontFamily='Playfair Display'><i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aliquid sint accusamus, quod laboriosam repudiandae sequi iure incidunt temporibus necessitatibus tempora dicta, ullam iusto perspiciatis architecto nesciunt sapiente eaque maxime.
                            <br/><br/>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eligendi voluptatem dignissimos sequi quam autem dolore soluta porro voluptate nostrum obcaecati inventore aperiam ea illum, necessitatibus, architecto modi nemo? Provident.
                        </i></Typography>
                    </Box>
                </Box>
            </section>
            <section id='properties'>
                <Typography variant='h3' fontFamily='Playfair Display' marginBottom='3rem'>
                    Featured Properties
                </Typography>
                <FeaturedProperties properties={data.contents.featuredProperties}/>
            </section>
            <section id='neighborhoods'>
                <Typography variant='h3' fontFamily='Playfair Display' marginBottom='3rem'>
                    Neighborhoods
                </Typography>
                <Collage itemData={data.contents.neighborhoods} cols={data.contents.neighborhoods_cols}/>
            </section>
            <section id='home-contact-us'>
                <Typography variant='h2' fontFamily='Arapey' marginBottom='1rem'>
                    Contact Us
                </Typography>
                <Typography className='fifty-centered-text' variant='h6' fontFamily='Cormorant Garamond' marginBottom='3rem'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis corrupti ipsum eaque voluptatem! Praesentium placeat, veritatis sint quam odio molestias dolore, fugit blanditiis repudiandae, voluptatum laboriosam minima. Nam, totam!
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem'}}>
                    <ColorButton title='List Your Home' onClick={() => {router.push({ pathname: 'contact-us', query: {buy: false}}); }}/>
                    <ColorButton title='Buy a Home' onClick={() => {router.push({ pathname: 'contact-us', query: {buy: true}}); }}/>
                </Box>
            </section>
            <footer>
                <Typography variant='h2' color='white' fontFamily='Arapey' padding='5rem 2rem 1rem 2rem'>
                    YLRE
                </Typography>
                <span className='material-symbols-outlined'>
                    call
                    <Typography display='inline' variant='h6' color='white' fontFamily='Arapey' padding='1rem'>
                        (626) 227-4160
                    </Typography>
                </span>
                <span className='material-symbols-outlined'>
                    alternate_email
                    <Link href='' display='inline' variant='h6' color='inherit' fontFamily='Arapey' padding='1rem'>
                        something@email.com
                    </Link>
                </span>
                <span className='material-symbols-outlined'>
                    business
                    <Typography display='inline' variant='h6' color='white' fontFamily='Arapey' padding='1rem'>
                        McSen Commercial 400 Spectrum Center
                    </Typography>
                </span>
                <span className='material-symbols-outlined'>
                    <Typography display='inline' variant='h6' color='white' fontFamily='Arapey' padding='1rem'>
                        Irvine, CA 92618
                    </Typography>
                </span>
                <Typography className='fifty-centered-text' variant='h6' color='white' fontFamily='Arapey' padding='2rem'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quos error impedit veritatis laudantium officia fuga alias placeat, suscipit aliquid tempore repellendus laboriosam architecto. Rerum atque natus nisi error eos.
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <Typography variant='subtitle1' color='white' fontFamily='Arapey' padding='2rem 0rem 2rem 5rem'>
                        COPYRIGHT © 2023
                    </Typography>
                    <Typography variant='subtitle1' color='white' fontFamily='Arapey' padding='2rem 4rem 2rem 0rem'><i>
                        Website designed and developed by Guo.
                    </i></Typography>
                </Box>
            </footer>
        </ThemeProvider>
        </React.StrictMode>
    );
}
