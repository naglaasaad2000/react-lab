import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";
import {Container,Nav,Navbar} from 'react-bootstrap'
import { NavLink} from "react-router-dom";
export  function MyNav(){
    return(
     <>
     <Navbar expand="lg" className="nav-color fixed-top ">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            <img src="./images/logo.png" style={{ width: "50px", height: "50px" }} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-5">
              <NavLink to="/" className={({isActive})=>{return isActive ? 'text-link  nav-link ' :'nav-link link-color'}}>Home</NavLink>
              <NavLink to="about" className={({isActive})=>{return isActive ? 'text-link  nav-link ' :'nav-link link-color'}} >About</NavLink>
              <NavLink to="sample" className={({isActive})=>{return isActive ? 'text-link  nav-link ' :'nav-link link-color'}}>Latest books</NavLink>
              <NavLink to="all_books" className={({isActive})=>{return isActive ? 'text-link  nav-link ' :'nav-link link-color'}}>All books</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>)
    
}