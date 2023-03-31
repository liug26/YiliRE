import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

interface HChecboxGroupProps
{
    checkboxValues: { [key : string] : boolean };
    onChange(state : { [key : string] : boolean }) : any;
}

export default function HCheckboxGroup(props: HChecboxGroupProps)
{
    const [state, setState] = React.useState(props.checkboxValues);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
        props.onChange({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const keys = Object.keys(state);
    const values = Object.values(state);

    let checkBoxes = [];
    for (let i = 0; i < keys.length; i++)
    {
        checkBoxes.push(
            <FormControlLabel control={
                <Checkbox checked={values[i]} onChange={handleChange} name={keys[i]} key={keys[i]}/>
            }
            label={
                <Typography color='black'variant='h5' fontFamily='Cormorant Garamond' key={keys[i]}>
                    {keys[i]}
                </Typography>
            }/>
        );
    }

    return (
        <Box sx={{display: 'flex'}}>
            <FormControl required error={false} component="fieldset" variant="standard">
                <FormGroup row>
                    {checkBoxes}
                </FormGroup>
            </FormControl>
        </Box>
    );
}