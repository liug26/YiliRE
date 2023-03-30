import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// based on https://mui.com/material-ui/react-button/
export default function ColorButton({title, onClick} : {title: string, onClick: () => any})
{
    return (
        <Button id='color-button' variant='outlined' onClick={onClick}>
            <Typography id='color-button-text' variant='h4'>
                {title}
            </Typography>
        </Button>
    );
}