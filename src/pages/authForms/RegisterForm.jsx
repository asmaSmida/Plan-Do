
import React, { state, useState } from 'react'
import axios from 'axios'
import classes from './auth.module.css';

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
        console.log( err.response);
        setError(err.response.data.message);
      }) 
  }




  return (
    <div className={classes.auth}>
      <form onSubmit={submitHandler} method='POST'>
        <h2>Page d'enregistrement</h2>
        <div className="form-group">
          <label>name:</label>
          <input onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} type="name" className="form-control" name="name" id="name" aria-describedby="nameHelpId" />

        </div>
        <div className="form-group">
          <label>Email:</label>
          <input onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId" />

        </div>
        <div className="form-group">
          <label >mot de passe</label>
          <input onChange={e => setDetails({ ...details, password: e.target.value })} type="password" name="password" id="password" className="form-control" placeholder="password" aria-describedby="helpId" />
          <input type="submit" value="register " />
        </div>
      </form>
        <h4>{error}</h4>
    </div>
  )
}
