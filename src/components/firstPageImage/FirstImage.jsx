import React from 'react';
import Navbar from '../navbar/Navbar';
import classes from './FirstImage.module.css';


export default function FirstImage(){
    return(
        <div className={classes.firstImageContainer} >
            <Navbar />
            <h1>Plan & Do </h1>
            <h2>Do it the right way</h2>
        </div>
    );
}