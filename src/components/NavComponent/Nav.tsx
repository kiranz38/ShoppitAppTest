import React from "react";
import { Nav } from 'react-bootstrap';

export const NavComponent = () => {
    

  return (<>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
    <div className="container">
    <a className="navbar-brand" href="#">Shoppit </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
        </li>
        </ul>
    </div>
    </div>
    </nav>
    <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
   
    <Nav.Item as="li">
      <Nav.Link eventKey="disabled">Shop</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="disabled">Track</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="disabled">FAQ</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="disabled">Refer a Friend</Nav.Link>
    </Nav.Item>
   
  </Nav></>
)
}