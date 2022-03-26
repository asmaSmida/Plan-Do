import React from 'react';
import classes from './SingleEstablish.module.css';
import Dar from './Dar-Kenza.jpg';
import agent from './agent.jpg';
import Map from '../../map/Map';

export default function SingleEstablish(){
    return(
        <div className={classes.singleContainer}>
            <div className={classes.header}>
                <div>
                    <h3>Dar Kenza</h3>
                    <h5>Kelibia, 8000</h5>
                </div>
                <div>
                    <button>Revenir à liste des etablissements</button>
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.img}>
                    <img src={Dar} alt="dar Kenza" />
                </div>
                <div className={classes.row}>
                    <div className={classes.column}>
                        <div>
                        <h2>Establishement Description</h2>
                        <p className={classes.p}>Property Description
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar quam id dui posuere blandit.
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                        </p>
                        </div>
                        <div>
                            <h2>Amenities</h2>
                            <ul>
                                <li>
                                    Parking
                                </li>
                                <li>
                                    Garden
                                </li>
                                <li>
                                    Outdoor Kitchen
                                </li>
                                <li>
                                    Internet
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.column}>
                        <h2>Quick Summary</h2>
                        <p className={classes.p}>
                                Property ID:1134
                                Location: Kelibia, IL 606543
                                Property Type: House
                                Area:340m 2
                                Beds:4
                                Baths:2
                                Garage: 1
                        </p>
                    </div>
                </div>
                <div className={classes.agent}>
                    <h2>Contact Agent</h2>
                    <div className={classes.agentbody}>
                        <div>
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
                            <p className={classes.p}>Formulaire</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr ></hr>
            <div className={classes.map}>
            <Map latitude="33.230490" longitude="-8.499030" /></div>
        </div>
    );
}