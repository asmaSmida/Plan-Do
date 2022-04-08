import { ClassNames } from "@emotion/react";
import { Link } from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={classes.navbar}>
        <h3>PLAN and DO</h3>
        <div className={classes.links}>
          <Link to="/" className={classes.linkButton}>Home</Link>
          <Link to="/single"className={classes.linkButton}>Single Place</Link>
          <Link to="/annif"className={classes.linkButton}>Anniversary Places</Link>
          <Link to="/teambuilding"className={classes.linkButton}>TeamBuilding Places</Link>
          <Link to="/shoot"className={classes.linkButton}>PhotoShoot Places</Link>
          <Link to="/register" ><button type="button" className="btn btn-success btn-sm register-button">s'inscrire</button></Link>
          <Link to="/login" ><button type="button" className="btn btn-secondary btn-sm login-button " >se connecter</button></Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;