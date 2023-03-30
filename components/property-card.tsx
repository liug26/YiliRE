import * as React from 'react';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

// based on https://mui.com/material-ui/react-card/
function PropertyCard(props: any)
{
  return (
    <Card>
      <CardActionArea onClick={() => {}} >
        <CardMedia
          component='img'
          height="400rem"
          image="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography variant="h5">
                Address of the house
            </Typography>
            <Typography variant="h5">
                $30000
            </Typography>
          </Box>
          <Typography variant='subtitle1' color="text.secondary">
            3 Beds | 2 Baths | 1000 ft<sup>2</sup>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PropertyCard;