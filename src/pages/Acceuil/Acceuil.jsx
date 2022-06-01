import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../../components/home/Header';
import PlaceToVisit from '../../components/home/Services';
import Footer from '../../components/footer/Footer';
import Whoarewe from '../../components/whoarewe/Whoarewe';
import ContactUs from '../contactUs/ContactUs';


const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/home.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
  }));

export default function Acceuil(){
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <PlaceToVisit />
        <Whoarewe />
        <ContactUs />
        <Footer/>
      </div>
    );
}