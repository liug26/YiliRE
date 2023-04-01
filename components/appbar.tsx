import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';

const leftMargin = '3rem';
const centerText='EYR';
const fontFamily='Arapey';

interface AppBarProps
{
	menuLinks:
    {
        label: string;
        link: string;
        onClick() : any;
    }[];
    enableTopTransparent? : boolean; // defaults to true
}

export default function AppBar(props: AppBarProps)
{
    useEffect(() =>
    {
        const appBar = document.getElementById('app-bar');
        if (props.enableTopTransparent === false && appBar != null)
        {
          appBar.style.backgroundColor = 'white';
          appBar.style.color = 'black';
        }
        const onScroll = () =>
        {
            if (appBar != null)
                if ((props.enableTopTransparent === undefined || props.enableTopTransparent) && window.scrollY === 0)
                {
                    appBar.style.backgroundColor = 'transparent';
                    appBar.style.color = 'white';
                }
                else
                {
                    appBar.style.backgroundColor = 'white';
                    appBar.style.color = 'black';
                }
        };
        window.addEventListener("scroll", onScroll);
        return () =>
        {
          window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const menuLinksHTML = [];
    for (let menuLink of props.menuLinks)
    {
        if (menuLink.link === '')
        {
            menuLinksHTML.push(<Link key={menuLink.label} variant='h6' underline='none'color='inherit' onClick={menuLink.onClick}
            tabIndex={0} component='button' sx={{marginLeft: leftMargin}} fontFamily={fontFamily}>
                {menuLink.label}
            </Link>);
        }
        else
        {
            menuLinksHTML.push(<Link variant='h6' underline='none' color='inherit' href={menuLink.link} sx={{marginLeft: leftMargin}}
            fontFamily={fontFamily}>
                {menuLink.label}
            </Link>);
        }
    }

    return (
        <MuiAppBar id='app-bar' elevation={0} position='fixed'>
            <MuiToolbar sx={{justifyContent: 'space-between'}}>
                <Box sx={{flex: 1}} />
                <Link href='/' underline='none' variant='h4' color='inherit' fontFamily={fontFamily}>
                    {centerText}
                </Link>
                <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                    {menuLinksHTML}
                </Box>
            </MuiToolbar>
      </MuiAppBar>
  );
}