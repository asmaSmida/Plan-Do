import React from 'react';
import classes from './services.module.css';
import HouseIcon from '@mui/icons-material/House';
export default function Services() {
    return (
        <div className={classes.servicesCom}>
            <h1 className={classes.title}>Nos Services</h1>
            <h5>Découvrez nos savoir-faire !</h5>
            <hr className={classes.hr}></hr>
            <div className={classes.services}>
                    <div className={classes.service}>
                        <div className={classes.iconDiv}>
                            <HouseIcon className={classes.icon} style={{ fontSize: 30 }} />
                        </div>
                        <h1>
                            lorem ipsum
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam text ever since the 1300s,
                        </p>
                    </div>
                    <div className={classes.service}>
                        <div className={classes.iconDiv}>
                            <HouseIcon className={classes.icon} style={{ fontSize: 30 }} />
                        </div>
                        <h1>
                            lorem ipsum
                        </h1>
                        <p>
                            Lorem Ipsum is simply aut dicptatem eius rerum sitndae assumque iste corrupti reiciendis voluptatem aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1300saut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam
                        </p>
                    </div>
                    <div className={classes.service}>
                        <div className={classes.iconDiv}>
                            <HouseIcon className={classes.icon} style={{ fontSize: 30 }} />
                        </div>
                        <h1>
                            lorem ipsum
                        </h1>
                        <p>
                            Lorem Ipsum is aut dicta possimus sint mollitia iste corruptiendis recusandae assumenda consectetur porro architecto ipsum ipsam  quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1300s,
                        </p>
                    </div>
                    <div className={classes.service}>
                        <div className={classes.iconDiv}>
                            <HouseIcon className={classes.icon} style={{ fontSize: 30 }} />
                        </div>
                        <h1>
                            lorem ipsum
                        </h1>
                        <p>
                            Lorem Ipsum aut dicta possimus sint mollitia sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1300s,
                        </p>
                    </div>
            </div>
        </div>
    )
}