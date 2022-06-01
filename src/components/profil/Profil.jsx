import React from 'react';
import './Profil.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Footer from '../footer/Footer'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const Profil = () => {
    const { id } = useParams();
    //   const host = JSON.parse(localStorage.getItem("host"));
    const [host, setHost] = useState('');
    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:5000/plando/host/${id}`)
            .then(response => {
                setHost(response.data);
                console.log("hey", host);
            }
            )
            .catch(err => console.log(err));

    }, []);


    return (
        <>
        <div className='profilContainer'>
            <Card sx={{ minWidth: 275, textAlign: "center"}}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        Bienvenu dans votre propre espace
                    </Typography>
                    <Typography variant="h4" component="div">
                        Bien{bull}Ve{bull}Nu
                    </Typography>
                    <Typography sx={{ mb: 1.8 }} color="text.info">
                        {host.name}
                        <br />
                    </Typography>
                    <Typography variant="body2">
                        Votre Email : <br></br>
                        {host.email}
                        <br />
                    </Typography>
                    <Typography variant="body2">
                        Votre Téléphone : <br></br>
                        {host.telephone}
                        <br />
                    </Typography>
                    <Typography variant="body2">
                        Votre Région : <br></br>
                        {host.region}
                        <br />
                    </Typography>
                </CardContent>
            </Card>
        </div>
        <Footer />
        </>
    );
}

export default Profil;
