import React from "react";
import { Nav } from 'react-bootstrap';

export const NavComponent = () => {
    return (<Nav style={{position:"relative",padding:"1%",borderBottom:"normal #909090 1px "}} defaultActiveKey="/home" as="ul">
    <Nav.Item className="NavItem" as="li">
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
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
   
  </Nav>)
}