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


export default function SingleEstablish() {

    const {id}=useParams();
    const [estate, setEstate] = useState('')
    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:5000/plando/estate/${id}`)
            .then(response => {
                setEstate(response.data);
                console.log("hey", estate);
            }
            )
            .catch(err => console.log("hiiiiiiiiiiiiiiiiiiiii"));

    }, []);
    return (
        <div className={classes.singleContainer}>
            <div className={classes.header}>
                <div className={classes.vl}>
                    <h3>{estate.name}</h3>
                    <h5>{estate.localisation}</h5>
                </div>
                <div className={classes.links}>
                    <Link to="/estates">
                        <button type="button">Revenir à liste des etablissements</button>
                    </Link>
                    <button>
                        Réserver l'éspace
                    </button>
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.img}>
                    <img src={estate.image} alt={Dar} />
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
                            <hr className={classes.hrEst} />
                            <p className={classes.p}>{estate.description}
                            </p>
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div>
                            <h2>Quick Summary</h2>
                            <hr className={classes.hrEst} />
                            <p className={classes.p}>
                                {estate.summary}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.row}>
                    <div>
                        <h2>Amenities</h2>
                        <hr className={classes.hrEst} />
                        <p className={classes.p}>{estate.amenities}</p>
                    </div>
                </div>
                {/* <div className={classes.agent}>
                    <h2>Contact d'Agent</h2>
                    <hr className={classes.hrEst} />
                    <div className={classes.agentbody}>
                        <div className={classes.image}>
                            <img src={agent} alt='agent'></img>
                        </div>
                        <div>
                            <p className={classes.p}>
                                {estate.owner.name}
                            </p>
                            <p className={classes.p}>
                                Phone:
                                {estate.owner.telephone}</p>
                            <p className={classes.p}>
                                Email:
                                {estate.owner.email}</p>
                            <p className={classes.p}>
                                Region:
                                {estate.owner.region}
                            </p>
                        </div>
                        <div>
                            <h3 className={classes.contactAgent}>Remplir le formulaire pour contacter le host</h3>
                            <Contact />
                        </div>
                    </div>
    </div>*/}
            </div>
            <hr ></hr>
            <div className={classes.map}>
                <Map latitude="33.230490" longitude="-8.499030" className={classes.map} /></div>
            <Footer />
        </div>
    );
}