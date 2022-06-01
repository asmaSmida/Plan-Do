import { ClassNames } from "@emotion/react";
import { Link } from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = () => {
  
    return (
      <nav className={classes.navbar}>
        <h3>PLAN and DO</h3>
        <div className={classes.links}>
          <Link to="/" className={classes.linkButton}>Home</Link>
          <Link to="/estates"className={classes.linkButton}>Places</Link>
          <Link to="/annif"className={classes.linkButton}>Anniversary Places</Link>
          <Link to="/teambuilding"className={classes.linkButton}>TeamBuilding Places</Link>
          <Link to="/shoot"className={classes.linkButton}>PhotoShoot Places</Link>
          <Link to="/contactUs"className={classes.linkButton}>Contact Us</Link>
          {/* <Link to="/signup" ><button type="button" className={classes.button}>s'inscrire</button></Link>
          <Link to="/signin" ><button type="button" className={classes.button} >se connecter</button></Link>
         */}
        </div>
      </nav>
    );
  }
   
  export default Navbar;