import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

interface CollageProps
{
    itemData:
    {
        image: string;
        title: string;
    }[];
    cols: number;
}

// based on https://mui.com/material-ui/react-image-list/
export default function Collage(props: CollageProps)
{
    return (
        <ImageList sx={{width: '100%', height: 'auto'}} cols={props.cols}>
            {props.itemData.map((item) => (
                <ImageListItem key={item.title}>
                    <img src={`${item.image}?w=164&h=164&fit=crop&auto=format`} srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title} loading='lazy' className='quarter-darkened'/>
                    <Box className='centered' textAlign='center'>
                        <Typography color='white' variant='h3' fontFamily='Cormorant Garamond'>
                            {item.title}
                        </Typography>
                    </Box>
                </ImageListItem>
            ))}
        </ImageList>
    );
}