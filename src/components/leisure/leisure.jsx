import React from 'react';
import WavesIcon from '@mui/icons-material/Waves';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MuseumIcon from '@mui/icons-material/Museum';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import HotTubIcon from '@mui/icons-material/HotTub';
import HikingIcon from '@mui/icons-material/Hiking';
import classes from './leisure.module.css';

export default function Leisure (props){
    return(
        <div className={classes.leisure}>
           {(props.piscine) &&
               <div>
               <WavesIcon className={classes.iconLeisure} />
               <h3>Piscine</h3>
               </div>}
             
            {(props.resto) &&
               <div>
               <RestaurantIcon className={classes.iconLeisure} />
               <h3>Restaurant</h3>
               </div>
           }    
             {(props.patrimoine) &&
               <div>
               <MuseumIcon className={classes.iconLeisure} />
               <h3>Patrimoine</h3>
               </div>
           }    
            {(props.plage) &&
               <div>
               <BeachAccessIcon className={classes.iconLeisure} />
               <h3>Plage</h3>
               </div>
           }   
           { (props.rando) &&
               <div>
               <HikingIcon className={classes.iconLeisure} />
               <h3>Randonnée</h3>
               </div>
           }   
            {(props.hammam) &&
               <div>
               <HotTubIcon className={classes.iconLeisure} />
               <h3>Hammam</h3>
               </div>
           }   


        </div>
    )
}