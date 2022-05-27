import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormControlLabel, FormGroup } from "@material-ui/core";
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import classes from './formEstate.module.css';

const defaultValues = {
    nom: "",
    description: "",
    localisation: "",
    summary: "",
    amenities: "",
    leisure: {
        piscine: false,
        restaurant: false,
        hammam: false,
        patrimoine: false,
        plage: false,
        randonnee: false,
    },
};
const FormEstate = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
    ;
    return (
        <form onSubmit={handleSubmit} className={classes.formEstate}>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item>
                    <TextField
                        id="nom-input"
                        name="nom"
                        label="Nom"
                        type="text"
                        value={formValues.nom}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="description-input"
                        name="description"
                        label="Description"
                        type="text"
                        value={formValues.description}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="localisation-input"
                        name="localisation"
                        label="localisation"
                        value={formValues.localisation}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="amenities-input"
                        name="amenities"
                        label="amenities"
                        value={formValues.amenities}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="summary-input"
                        name="summary"
                        label="summary"
                        value={formValues.summary}
                        onChange={handleInputChange}
                    />
                </Grid>
                <br></br>
                <Grid container alignItems="center" justify="center" direction="row">
                    <FormGroup>
                        <FormControlLabel
                            label="Piscine"
                            control={
                                <Checkbox
                                    defaultChecked = {false}
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />
                            }
                        />
                        <FormControlLabel
                            label="Plage"
                            control={
                                <Checkbox
                                    defaultChecked = {false}
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />
                            }
                        />
                        <FormControlLabel
                            label="Restaurant"
                            control={
                                <Checkbox
                                    defaultChecked = {false}
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />
                            }
                        />
                        <FormControlLabel
                            label="Hammam"
                            control={
                                <Checkbox
                                    defaultChecked = {false}
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />
                            }
                        />
                        <FormControlLabel
                            label="Patrimoine"
                            control={
                                <Checkbox
                                    defaultChecked = {false}
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />
                            }
                        />
                         <FormControlLabel
                            label="Randonnée"
                            control={
                                <Checkbox
                                    defaultChecked = {false}
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />
                            }
                        />
                    </FormGroup>
                </Grid>
                <br></br>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Grid>
        </form>
    );
};
export default FormEstate;