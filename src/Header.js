import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Profile from './components/Profile';
import Logout from './components/Logout'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div>
        <Navbar.Brand style={{marginRight: '60vw'}}>ParkPal</Navbar.Brand>
        </div>
        <div style={{
      textAlign: 'right',
      width: '100%',
      paddingRight: '1rem',
      paddingTop: '1rem',
      display: 'flex',
      justifyContent: 'space-evenly',

      }}>
        <NavItem><Link to="/" className="nav-link" style={{color: 'white'}}>Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link" style={{color: 'white'}}>About</Link></NavItem>
        <Profile />
        </div>
        <div style={{
      paddingRight: '1rem',
      }}>
        <Logout />
        </div>

      </Navbar>
    )
  }
}

export default Header;
