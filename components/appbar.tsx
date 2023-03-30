import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';


interface AppBarProps
{
	menuLinks:
    {
        label: string;
        link: string;
        onClick() : any;
    }[];
    leftMargin: string;
    centerText: string;
    fontFamily: string;
}

function AppBar(props: AppBarProps)
{
    useEffect(() =>
    {
        let onScroll = () =>
        {
            const appBar = document.getElementById('app-bar');
            if (appBar != null)
                if (window.scrollY === 0)
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
    });

    const menuLinksHTML = [];
    for (let menuLink of props.menuLinks)
    {
        if (menuLink.link === '')
        {
            menuLinksHTML.push(<Link
                variant="h6"
                underline="none"
                  color='inherit'
                  onClick={menuLink.onClick} tabIndex={0} component="button"
                  sx={{marginLeft: props.leftMargin}}
                  fontFamily={props.fontFamily}
              >
                {menuLink.label}
              </Link>);
        }
        else
        {
            menuLinksHTML.push(<Link
                variant="h6"
                underline="none"
                  color='inherit'
                href={menuLink.link}
                  sx={{marginLeft: props.leftMargin}}
                  fontFamily={props.fontFamily}
              >
                {menuLink.label}
              </Link>);
        }
    }

  return (
    <div>
      <MuiAppBar id='app-bar' elevation={0} position="fixed">
        <MuiToolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ flex: 1 }} />
          <Typography variant='h4' color='inherit' fontFamily={props.fontFamily}>
            {props.centerText}
          </Typography>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {menuLinksHTML}
          </Box>
        </MuiToolbar>
      </MuiAppBar>
    </div>
  );
}

export default AppBar;