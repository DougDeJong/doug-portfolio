// components/Navbar.js
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component{

render(){

  return (
    <nav className="navbar navbar-light bg-light">

        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/music'>Musician</Link>
        <Link to='/hockey'>Hockey Content Creator</Link>
        <Link to='/webdev'>Web Developer</Link>
  
    </nav>
  )
}
}

export default Navbar;