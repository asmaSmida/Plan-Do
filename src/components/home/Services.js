import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import useWindowPosition from '../../hooks/useWindowPosition';
const places = [
  {
    title: 'Réservation',
    description:
      "Trouvez des logements que vous n'auriez jamais pensé à chercher et Réservez des places magiques pour vous en Tunisie.",
    imageUrl: process.env.PUBLIC_URL + '/assets/home2.jpg',
    time: 1500,
  },
  {
    title: 'Les Informations',
    description:
      'Vous pouvez voir les photos, les prix les avis des hôtes et ce que les précédents locataires ont pensé de la place.',
    imageUrl: process.env.PUBLIC_URL + '/assets/home3.jpg',
    time: 1500,
  },
  {
    title: 'Les Tendances',
    description:
      "Découvrez les tendances des places disponibles et découvrez une sélection des logements les mieux notés dans la Tunisie",
    imageUrl: process.env.PUBLIC_URL + '/assets/home4.jpg',
    time: 1500,
  },
  {
    title: 'Mes Favoris',
    description:
      'Vous pouvez enregistrer vos bons plans les ajouter à votre liste de favoris. Ainsi Vous trouverez rapidement vos favoris. ',
    imageUrl: process.env.PUBLIC_URL + '/assets/home1.jpg',
    time: 1500,
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    marginTop: '5rem'
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      {places.map(function (place, i) {
        return <ImageCard place={place} key={i} checked={checked} />
      })}
    </div>
  );
}
