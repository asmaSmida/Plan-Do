import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>PLAN and DO</h1>
        <div className="links">
          <Link to="/" className="link-button">Home</Link>
          <Link to="/"className="link-button">View Places</Link>
          <Link to="/annif"className="link-button">Anniversary Places</Link>
          <Link to="/teambuilding"className="link-button">TeamBuilding Places</Link>
          <Link to="/shoot"className="link-button">PhotoShoot Places</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;