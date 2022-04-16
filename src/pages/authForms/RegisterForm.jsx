
import React, { state, useState } from 'react'
import axios from 'axios'
import { ClassNames } from '@emotion/react';
import classes from './auth.module.css';
// import './auth.css';
export default function RegisterForm() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" })
  const [error, setError] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();

    // const cryptedPassword= bcrypt.hash(details.password,10)
    const registred = {
      name: details.name,
      email: details.email,
      password: details.password
    }
    axios.post('http://localhost:5000/plando/auth/register', registred)
      .then(res => {
        res.save();
        console.log(registred);
        window.location.assign('/')
      })
      .catch(err => {
        console.log(typeof err);
        if (typeof err !== 'undefined') {
          console.log(err.response);
          setError(err.response.data.message);
        }
        if (typeof err === 'undefined')
          window.location.assign('/')
      })
  }




  return ( 
    <div className={classes.container}> 
      <div className={classes.loginform}>
        <h2 className={classes.headerTitle}>Inscription</h2>
        <form onSubmit={submitHandler} method='POST'>
          <div>
            <div className={classes.row}>
              <label>name:</label>
              <input onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} type="name" className="form-control" name="name" id="name" placeholder='name' aria-describedby="nameHelpId" />

            </div>
            <div className={classes.row}>
              <label>Email:</label>
              <input onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} type="email" className="form-control" name="email" id="email" placeholder="email" aria-describedby="emailHelpId" />

            </div>
            <div className={classes.row}>
              <label >mot de passe</label>
              <input onChange={e => setDetails({ ...details, password: e.target.value })} type="password" name="password" id="password" className="form-control" placeholder="password" aria-describedby="helpId" />

              {/* <input className='button row' type="submit" value="register " /> */}
            </div>
            <span  ></span>
            <div id="button" className={classes.row}>
              <button type="submit">register</button>
            </div>
          </div>
        </form>
        <h4>{error}</h4>
      </div>
    </div>
  )
}
