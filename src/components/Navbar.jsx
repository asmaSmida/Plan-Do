import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>PLAN and DO</h1>
        <div className="links">
          <Link to="/" className="link-button">Home</Link>
          <Link to="/"className="link-button">View Places</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;