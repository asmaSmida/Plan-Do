
import { Link } from "react-router-dom";
import './Navbar.module.css';
import React from "react";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
const NavbarComp = () => {

  const isAuth = () => {
    if (localStorage.getItem("token")) return true
    else return false;
  }

  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("sign");
    window.location.reload();
    window.location.assign("/")
  }
  const sign = (event) => {
    localStorage.setItem("sign", event.target.innerText)
  }
  return (
    <>
      <style type="text/css">
        {`
    .bg-custom   { 
      background: linear-gradient( to right,#03444A , #9AD3DA );
    } 
    .navbar-custom .navbar-brand ,
    .navbar-custom .navbar-toggler,
    .navbar-custom .nav-item
     {
            color: white;
    }

    .nav-custom .nav-link  { 
      border-color:white;
      color:white;
    }
    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }  
    #responsive-navbar-nav{
      color:white
    }
    #collasible-nav-dropdown{color:white}
    `}
      </style>
      <Navbar collapseOnSelect sticky="top" text="custom" expand="lg" bg="custom" variant="dark"  >
        <Container >
          <Navbar.Brand as={Link} to={"/"}>PLAN&DO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-primary" variant="custom" >
              <Nav.Link eventKey="1" as={Link} to={"/"}>Accueil</Nav.Link>
              <Nav.Link as= {Link} to={"/estates"}> Places </Nav.Link>
              <Nav.Link as={Link} to={"/Annif"}>Mariage</Nav.Link>
              <Nav.Link as={Link} to={"/Annif"}>Anniversaire</Nav.Link>
              <Nav.Link as={Link} to={"/teamBuilding"}>TeamBuilding</Nav.Link>
              <Nav.Link as={Link} to={"/shoot"}>PhotoShoot</Nav.Link>
            </Nav>
            <Nav>
              {isAuth() ? (
                <Nav className="me-auto text-primary" variant="custom" >
                  {(localStorage.getItem("sign") === "client") 
                  // || (localStorage.getItem("sign") === "Sign up Client") 
                  ?
                    ( <Nav.Link as={Link} to={"/client-profile"}  >Profil</Nav.Link> ) :

                    (<div>
                      <Nav.Link as={Link} to={"/host-profile"} style={{float:"right"}}>Profil</Nav.Link> 
                      <Nav.Link as={Link} to={"/add-estate"}style={{float:"left"}}>Ajouter une place</Nav.Link>

                    </div>)
                  }
                  <Nav.Link as={Link} to={"/"} onClick={signout}>Déconnecter</Nav.Link>
                </Nav>

              ) : (
                <NavDropdown title="connexion" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/register"}>S'inscrire</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/register-owner"}>Devenir Hote</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/login"}>Connexion client</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/login-host"}>Connexion Hote </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  
    </>
  );
}

export default NavbarComp;