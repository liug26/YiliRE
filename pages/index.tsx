import Head from 'next/head'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ThemeProvider, responsiveFontSizes, createTheme } from "@mui/material/styles";
import Carousel from '@/components/carousel';
import AppBar from '@/components/appbar';
import FeaturedProperties from '@/components/featured-properties';
import Collage from '@/components/collage';
import ColorButton from '@/components/color-button';
import React from 'react';
import { padding } from '@mui/system';


export let homeTheme = createTheme({
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
homeTheme = responsiveFontSizes(homeTheme);


const headerImages = [
	'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
	'https://images.coolhouseplans.com/plans/44207/44207-b600.jpg'
]; 
const menuLinks = [
	{label: 'About', link: '', onClick: () =>
	{
		var about = document.getElementById('about');
		if (about != null)
			about.scrollIntoView({behavior:"smooth", block: "start", inline: "nearest"});
	}},
	{label: 'Home Search', link: '', onClick: () => {}},
	{label: 'Contact Us', link: '', onClick: () => {}}
];


export default function Home()
{
  	return (
	<React.StrictMode>
    <ThemeProvider theme={homeTheme}>
    	<Head>
    		<title>YL Real Estate</title>
        	<meta name='description' content='YL Real Estate' />
        	<meta name='viewport' content='width=device-width, initial-scale=1' />
        	<link rel='icon' href='/favicon.ico' />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
		</Head>
		<nav>
			<AppBar menuLinks={menuLinks} leftMargin='3rem' centerText='YLRE' fontFamily='Arapey'/>
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
			<FeaturedProperties />
		</section>
		<section id='neighborhoods'>
			<Typography variant='h3' fontFamily='Playfair Display' marginBottom='3rem'>
				Neighborhoods
			</Typography>
			<Collage />
		</section>
		<section id='home-contact-us'>
			<Typography variant='h2' fontFamily='Arapey' marginBottom='1rem'>
				Contact Us
			</Typography>
			<Typography variant='h6' fontFamily='Cormorant Garamond' marginBottom='3rem' width='50%' textAlign='center'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis corrupti ipsum eaque voluptatem! Praesentium placeat, veritatis sint quam odio molestias dolore, fugit blanditiis repudiandae, voluptatum laboriosam minima. Nam, totam!
			</Typography>
			<Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem'}}>
				<ColorButton title='List Your Home' onClick={() => {}}/>
				<ColorButton title='Buy a Home' onClick={() => {}}/>
			</Box>
		</section>
		<footer>
			<Typography variant='h2' color='white' fontFamily='Arapey' padding='5rem 2rem 1rem 2rem'>
            	YLRE
        	</Typography>
			<span className='material-symbols-outlined'>
				call
				<Typography display='inline' variant='h6' color='white' fontFamily='Arapey' padding='1rem'>
					123-123-1234
        		</Typography>
			</span>
			<span className='material-symbols-outlined'>
				alternate_email
				<Link href='' display='inline' variant='h6' color='inherit' fontFamily='Arapey' padding='1rem'>
					something@email.com
        		</Link>
			</span>
			<Typography variant='h6' color='white' fontFamily='Arapey' padding='2rem' width='50%' textAlign='center'>
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
    /*
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )*/
}
