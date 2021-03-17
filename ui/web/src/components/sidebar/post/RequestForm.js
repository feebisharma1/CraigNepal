import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

async function postCategories() {
    const posted = await axios.post("")

}

export default function MultilineTextFields() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Name"
                    multiline
                    rowsMax={4}
                    value={value}
                    onChange={handleChange}
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="Email"
                    multiline
                    rowsMax={4}
                    value={value}
                    onChange={handleChange}
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="Phone Number"
                    multiline
                    rowsMax={4}
                    value={value}
                    onChange={handleChange}
                />
            </div>
            <br/>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Categories</FormLabel>
                    <RadioGroup aria-label="categories" name="categories" value={value} onChange={handleChange}>
                        <FormControlLabel value="jobs" control={<Radio />} label="Jobs" />
                        <FormControlLabel value="sale" control={<Radio />} label="Sale" />
                        <FormControlLabel value="free" control={<Radio />} label="Free" />
                        <FormControlLabel value="gigs" control={<Radio />} label="Gigs" />
                        <FormControlLabel value="community" control={<Radio />} label="Community" />
                    </RadioGroup>
                </FormControl>
            </div>
            <br/>
            <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue=" "
                variant="outlined"
            />
            <br/>
            <Button variant="contained" color="primary">
                Post
            </Button>
        </form>
    );
}
