import React, {useState} from 'react'
import axios from 'axios' 
import { ClassNames } from '@emotion/react'
import classes from './auth.module.css';

// import './auth.css';
const LoginForm = () => {
  const[details,setDetails]=useState({email:"",password:""})
  
  const submitHandler =(e)=>{
    e.preventDefault();
    const registred ={
      email:details.email,
      password:details.password
    }
    
    axios.post('http://localhost:5000/plando/auth/login',registred)
    .then(res=>{console.log(res);
      window.location.assign('/') })
    .catch(err=>console.log(err.response.data.message)) 
    //

  }
  

    return (
      // <div className={classes.auth}> 
      //   <form  onSubmit={submitHandler}>
      //       <div className="form-group">
      //         <h2>Page de connexion  </h2>  
      //         <label>Email:</label>
      //         <input onChange={e=>setDetails({...details, email: e.target.value})} value={details.email} type="email" className="form-control" name="email" id="email1" aria-describedby="emailHelpId" />
              
      //       </div>    
      //       <div className="form-group">
      //         <label >mot de passe</label>
      //         <input onChange={e=>setDetails({...details,password:e.target.value})} type="password" name="password" id="password1" className="form-control" placeholder="password" aria-describedby="helpId"/>
      //         <input type="submit" value="login" />
      //       </div>  
      //   </form>
      // </div>
      <div className={classes.container}> 
      <div className={classes.loginform}>
        <h2 className={classes.headerTitle}>Connexion</h2>
        <form onSubmit={submitHandler} method='POST'>
          <div> 
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
              <button type="submit">se connecter</button>
            </div>
          </div>
        </form> 
      </div>
    </div>
      
    )
}

export default LoginForm
