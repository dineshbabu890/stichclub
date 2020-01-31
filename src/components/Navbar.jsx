import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
     <div>
  <header className="header">
    <div className="container-fluid">
      
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon" /></label>
      <ul className="menu">
        {/* <li><a href="/dashboard/">Home</a></li> */}
        <li><a href="/women">Women</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/designers">Designers</a></li>
        {/* <li><a href="/mail/">Contact</a></li> */}
      </ul>
      <div className="logoNameWrap">
        <a href="/" className="logo" style={{color: '#fff', fontFamily: 'Audiowide', margin: '0px 5em'}}>
        {/* <img class="" src="images/logo.png"  alt="product"="image" style="width: 160px;"> */}
        STICHCLUB
        </a>
      </div>
      <div className="top-right">
        <ul>
          <li><a href="/howitworks">How it Works</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/login">Sign In</a></li>

        </ul>
      </div>
    </div>
  </header>
</div>


    );
  }
}

export default Navbar;
