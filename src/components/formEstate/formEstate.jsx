import React, { useState } from "react";
import axios from 'axios';
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
    image: ""
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
        axios.post('http://localhost:5000/plando/estate/add-estate', formValues)
            .then(res => {
                console.log(formValues);
                window.location.assign('/')
            })
            .catch(err => {
                console.log(err.response);
                // setShow(true);
                // setError(err.response.data.message);

            })
    };

    // const handleFileChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({
    //         ...formValues,
    //         [name]: value,
    //     });
    //     if (e.target.input.files.length) {
    //         const upload_file = e.target.files[0];
    //         const formData = new FormData();
    //         formData.append('file', upload_file);

    //         const request = axios.post(this.props.cfg_url + '/upload', formData)
    //             .then(function (response) {
    //                 console.log('successfully uploaded', upload_file);
    //             });
    //     } else {
    //         console.log('You need to select a file');
    //     }
    // };
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
                <Grid item>
                    <TextField
                        id="image_input"
                        type="file"
                        name="file"
                        value={formValues.image}
                        onChange={handleInputChange} />
                </Grid>
                <br></br>
                <Grid container alignItems="center" justify="center" direction="row">
                    <FormGroup>
                        <FormControlLabel
                            label="Piscine"
                            control={
                                <Checkbox
                                    value={formValues.leisure.piscine}
                                    onChange={e => setFormValues({ ...formValues, leisure: { ...formValues.leisure, piscine: true } })}
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
                                    value={formValues.leisure.plage}
                                    onChange={e => setFormValues({ ...formValues, leisure: { ...formValues.leisure, plage: true } })}
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
                                    value={formValues.leisure.restaurant}
                                    onChange={e => setFormValues({ ...formValues, leisure: { ...formValues.leisure, restaurant: true } })}
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
                                    value={formValues.leisure.hammam}
                                    onChange={e => setFormValues({ ...formValues, leisure: { ...formValues.leisure, hammam: true } })}
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
                                    onChange={e => setFormValues({ ...formValues, leisure: { ...formValues.leisure, patrimoine: true } })}
                                    value={formValues.leisure.patrimoine}
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
                                    value={formValues.leisure.randonnee}
                                    onChange={e => setFormValues({ ...formValues, leisure: { ...formValues.leisure, randonnee: true } })}
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