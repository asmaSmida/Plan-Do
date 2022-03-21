import React from 'react';
import  classes  from './Acceuil.module.css';
import Whoarewe from '../../components/whoarewe/Whoarewe';
import FirstImage from '../../components/firstPageImage/FirstImage';

export default function Acceuil(){
    return(
        <div className={classes.container}>
            <FirstImage />
            <Whoarewe/>
        </div>
    );
}