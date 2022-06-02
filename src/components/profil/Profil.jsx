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
import ShowItem from '../places/ShowItem';
import ShowHostItem from '../places/ShowHostItem';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Profil = () => {
    const token = localStorage.getItem("token");
    //   const host = JSON.parse(localStorage.getItem("host"));
    const [host, setHost] = useState('');
    const [estates, setEstates] = useState([]);
    const deleteHandler = (id, e) => {
        e.preventDefault();
        setEstates(estates.filter(item => item._id !== id))

    }
    useEffect(() => {
        axios.get(`http://localhost:5000/plando/host/me`, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
            .then(response => {
                setHost(response.data);
                console.log("hey", host);
            }
            )
            .catch(err => console.log(err));
        axios.get(`http://localhost:5000/plando/host/myestates`, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
            .then(response => {
                setEstates(response.data);
                console.log("hey", host);
            }
            )
            .catch(err => console.log(err));

    }, []);


    return (
        <>
            <div className='profilContainer'>
                <Card sx={{ minWidth: 275, textAlign: "center" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                            Bienvenue dans votre propre espace
                        </Typography>
                        <Typography variant="h4" component="div">
                            Bien{bull}Ve{bull}Nue
                        </Typography>
                        <Typography sx={{ mb: 1.5,fontSize: 25 }} color="text.info">
                            {host.name}
                            <br />
                        </Typography>
                        <Typography sx={{ mb: 1.5,fontSize: 20 }} variant="body2">
                            Email : 
                            {host.email}
                            <br /> 
                        </Typography>
                        <Typography sx={{ mb: 1.5,fontSize: 20 }} variant="body2">
                            Téléphone : 
                            {host.telephone} 
                            <br />
                        </Typography>
                        <Typography sx={{ mb: 1.5,fontSize: 20 }} variant="body2">
                            Région : 
                            {host.region}
                            <br />
                        </Typography>
                    </CardContent>
                </Card>

            </div>
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    {
                        estates.length ?
                            estates.map(
                                estate =>
                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                        <ShowHostItem place={estate} deleteHandler={deleteHandler}/>
                                         
                                    </div>
                            )
                            : null
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profil;
