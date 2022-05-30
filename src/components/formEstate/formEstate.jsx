import React, { useState } from "react";
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormControlLabel, FormGroup } from "@material-ui/core";
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import classes from './formEstate.module.css';
const FormEstate = () => {

    const [checkedpiscine, setChekedPiscine] = useState(false);
    const [checkedrestaurant, setChekedRestaurant] = useState(false);
    const [checkedhammam, setChekedHammam] = useState(false);
    const [checkedplage, setChekedPlage] = useState(false);
    const [checkedpatrimoine, setChekedPatrimoine] = useState(false);
    const [checkedrandonnee, setChekedRandonnee] = useState(false);
    const defaultValues = {
        nom: "",
        description: "",
        localisation: "",
        summary: "",
        amenities: "",
        image: "",
        piscine: checkedpiscine,
        restaurant: false,
        hammam: false,
        patrimoine: false,
        plage: false,
        randonnee: false,
        
    };

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
        const estate = {
            name: formValues.nom,
            description: formValues.description,
            localisation: formValues.localisation,
            summary: formValues.summary,
            amenities: formValues.amenities,
            image: formValues.image,
            piscine: checkedpiscine,
            // formValues.piscine,
            restaurant: formValues.restaurant,
            hammam: formValues.hammam,
            patrimoine: formValues.patrimoine,
            plage: formValues.plage,
            randonnee: formValues.randonnee,
            
        }
        const token = localStorage.getItem('token');

        axios.post('http://localhost:5000/plando/estate/add-estate', estate, {
            headers: ({
                Authorization: 'Bearer ' + token
            })
        })
            .then(res => {
                console.log(estate);
                window.location.assign('/')
            })
            .catch(err => {
                console.log(err.response);
                console.log(formValues);
                // setShow(true);
                // setError(err.response.data.message);

            })
    };

    const handleFileChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        if (e.target.input.files.length) {
            const upload_file = e.target.files[0];
            const fileName = e.target.files[0].name;
            const formData = new FormData();
            formData.append('file', upload_file); 
            formData.append('fileName', fileName);
            const request = axios.post("http://localhost:3000/upload", formData)
                .then(function (response) {
                    console.log('successfully uploaded', upload_file);
                });
                setFormValues({
                    ...formValues,
                    [name]: formData,
                });
        } else {
            console.log('You need to select a file');
        }
    };
    return (
        <form onSubmit={handleSubmit} className={classes.formEstate}>
            <h2>Adding your Estate</h2>
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
                        onChange={e => handleInputChange(e)}
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
                                    checked={checkedpiscine}
                                    onChange={e => {
                                        setChekedPiscine(!checkedpiscine)
                                        setFormValues(
                                            {
                                                ...formValues, piscine: !checkedpiscine
                                            })
                                    }}
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
                                    checked={checkedplage}
                                    onChange={e => {
                                        setChekedPlage(!checkedplage)
                                        setFormValues(
                                            {
                                                ...formValues, plage: !checkedplage
                                            })
                                    }}
                                    // {e => setFormValues({ ...formValues, leisure: { ...formValues.leisure, plage: e.target.value } })}
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
                                    checked={checkedrestaurant}
                                    onChange={e => {
                                        setChekedRestaurant(!checkedrestaurant)
                                        setFormValues(
                                            {
                                                ...formValues, restaurant: !checkedrestaurant
                                            })
                                    }}
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
                                    // value={formValues.hammam}
                                    checked={checkedhammam}
                                    onChange={e => {
                                        setChekedHammam(!checkedhammam)
                                        setFormValues(
                                            {
                                                ...formValues,
                                                hammam: !checkedhammam
                                                // leisure: { ...formValues.leisure, hammam: !checkedhammam }
                                            })
                                    }}
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
                                    checked={checkedpatrimoine}
                                    onChange={e => {
                                        setChekedPatrimoine(!checkedpatrimoine)
                                        setFormValues(
                                            {
                                                ...formValues,
                                                patrimoine: !checkedpatrimoine
                                            })
                                    }}
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
                                    checked={checkedrandonnee}
                                    onChange={e => {
                                        setChekedRandonnee(!checkedrandonnee)
                                        setFormValues(
                                            {
                                                ...formValues, randonnee: !checkedrandonnee
                                            })
                                    }}
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