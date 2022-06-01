import React from 'react';
import classes from './Whoarewe.module.css';
import {Link} from 'react-router-dom';

export default function Whoarewe() {
    return(
    <div className={classes.whoContainer}>
    <div className={classes.whoarewecontainer}>
        <div className={classes.whoarewetext}>
            <h1>Le 1er site de location des maisons d'hôtes pour vos évènements en Tunisie !</h1>
            <br />
            <hr></hr>
            <br />
            <p>Filtrez par type de logement, nombre d’invités et durée du séjour. Notre site Web vous proposera une liste de résultats basés sur vos besoins. Vous pouvez voir les photos, les prix les avis des précédents locataires et plus. Une fois convaincus, réservez directement via notre plateforme et payez en toute sécurité.</p>
        </div>
        <Link to="/estates"><button className={classes.btn}>Voir Nos Espaces et Maisons</button></Link>
        </div>
    
    </div>
    );
}