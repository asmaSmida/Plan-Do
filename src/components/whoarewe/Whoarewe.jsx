import React from 'react';
import classes from './Whoarewe.module.css';
import agency from './agency.jpg';

export default function Whoarewe() {
    return(
    <div className={classes.whoarewecontainer}>
        <div className={classes.whoarewetext}>
            <h1>What is Lorem Ipsum?</h1>
            <hr></hr>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className={classes.whoareweimg}>
            <img src={agency} alt='us' />
        </div>
    </div>
    );
}