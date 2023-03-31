import * as React from 'react';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react';

// based on https://mui.com/material-ui/react-card/
export default function PropertyCard(props: {property: {address: string; price: number; subtitle: string; image: string;}})
{
    const prop = props.property;
    useEffect(() =>
    {
        const propertySubtitle = document.getElementById(prop.address);
        if (propertySubtitle != null)
            propertySubtitle.innerHTML=prop.subtitle;
    }, []);

    return (
        <Card>
            <CardActionArea onClick={() => {}} >
                <CardMedia component='img' height='400rem' image={prop.image}
                alt={prop.address}/>
                <CardContent>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Typography variant="h5">
                            {prop.address}
                        </Typography>
                        <Typography variant="h5">
                            ${prop.price.toLocaleString('en-US')}
                        </Typography>
                    </Box>
                    <Typography id={prop.address} variant='subtitle1' color='text.secondary'/>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}