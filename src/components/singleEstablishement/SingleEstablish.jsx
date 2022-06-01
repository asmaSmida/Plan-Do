import React, { useEffect, useState } from 'react';
import classes from './SingleEstablish.module.css';
import Dar from './Dar-Kenza.jpg';
import agent from './agent.jpg';
import Map from '../../map/Map'; 
import Leisure from '../leisure/leisure';
import Footer from '../footer/Footer';
import Contact from '../form/form';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


export default function SingleEstablish(){

    const id=useParams("id");
    const [estate, setEstate] = useState({})
  
    useEffect(() => {
      const fetchEstate = async () =>{
        try {
          const {estate: response} = await axios.get('http://localhost:5000/plando/estate/'+id);
          console.log(response);
          setEstate(response);
        } catch (error) {
          
          console.error(error.message);
        }
      }
      fetchEstate();
    }, []);
    
    return(
        <div className={classes.singleContainer}> 
            <div className={classes.header}>
                <div className={classes.vl}>
                    <h3>{estate.nom}</h3>
                    <h5>{estate.localisation}</h5>
                </div>
                <div>
                    <Link to="/estates">
                        <button type="button">Revenir à liste des etablissements</button>
                    </Link>
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.img}>
                    <img src={Dar} alt="dar Kenza" />
                </div>
                <div>
                    <Leisure 
                    hammam={estate.hammam} 
                    restaurant={estate.restaurant} 
                    piscine={estate.piscine}
                    patrimoine={estate.patrimoine}
                    plage={estate.plage}
                    randonnee={estate.randonnee}
                     />
                </div>
                <div className={classes.row}>
                    <div className={classes.column}>
                        <div>
                        <h2>Establishement Description</h2>
                        <hr className={classes.hrEst}/>
                        <p className={classes.p}>{estate.description}
                        </p>
                        </div>
                        <div>
                            <h2>Amenities</h2><hr className={classes.hrEst}/>
                            {estate.amenities}
                        </div>
                    </div>
                    <div className={classes.column}>
                        <h2>Quick Summary</h2><hr className={classes.hrEst}/>
                        <p className={classes.p}>
                                {estate.summary}
                        </p>
                    </div>
                </div>
                <div className={classes.agent}>
                    <h2>Contact Agent</h2><hr className={classes.hrEst}/>
                    <div className={classes.agentbody}>
                        <div className={classes.image}>
                            <img src={agent} alt='agent'></img>
                        </div>
                        <div>
                            <p className={classes.p}>
                            Anabella Geller
                            Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                            </p>
                            <p className={classes.p}>
                            Phone:
                            (222) 4568932</p>
                            <p className={classes.p}>
                            Mobile:
                            777 287 378 737</p>
                            <p className={classes.p}>
                            Email:
                            annabella@example.com</p>
                            <p className={classes.p}>
                            Skype:
                            Annabela.ge
                            </p>
                        </div>
                        <div>
                            <h3 className={classes.contactAgent}>Fill the form to contact the agent</h3>
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
            <hr ></hr>
            <div className={classes.map}>
            <Map latitude="33.230490" longitude="-8.499030" className={classes.map} /></div>
            <Footer />
        </div>
    );
}