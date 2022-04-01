import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h3>PLAN and DO</h3>
        <div className="links">
          <Link to="/" className="link-button">Home</Link>
          <Link to="/single"className="link-button">Single Place</Link>
          <Link to="/annif"className="link-button">Anniversary Places</Link>
          <Link to="/teambuilding"className="link-button">TeamBuilding Places</Link>
          <Link to="/shoot"className="link-button">PhotoShoot Places</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;