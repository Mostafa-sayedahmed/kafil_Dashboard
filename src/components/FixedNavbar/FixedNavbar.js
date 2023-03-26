
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import  style  from './FixedNavbar.module.css';
import '../../index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../image/main-logo.svg';

function FixedNavbar(){

  // Navbar

return(

<>

<Navbar collapseOnSelect className= {`${style.myNav} fixed-top `} dir="rtl" expand="lg">
      <Container>
      <Navbar.Toggle />
      <Link to="/">
          <img width={"95px"} src={logo}  alt="" />
      </Link>
      <Navbar.Collapse className='flex-grow-0'>
        <Nav className={`${style.nav}`}>
          <Nav.Item>
            <NavLink className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} to="/dashboard" as={Link} >
                الصفحة الرئيسية
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Container>
</Navbar>

</>


)
    
}


export default FixedNavbar;