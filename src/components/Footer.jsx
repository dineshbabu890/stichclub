import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
  {/*-footer-*/}
  <div className="footer-w3l">
    <div className="container">
      <div className="footer-grids">
        <div className="col-md-6 footer-grid">
          <h4>About </h4>
          <p>StichClub will change the way people find clothes by communicating with style experts. StichClub will help you to choose perfect clothes &amp; accessories by consulting the best designers.</p>
          <div className="social-icon">
            <a href=" "><i className="icon" /></a>
            <a href=" "><i className="icon1" /></a>
            <a href=" "><i className="icon2" /></a>
            <a href=" "><i className="icon3" /></a>
          </div>
        </div>
        <div className="col-md-3 footer-grid">
          <h4>My Account</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="">Products</a></li>
            <li><a href="/">Your Designers</a></li>
            <li><a href="/">Checkout</a></li>
          </ul>
        </div>
        {/* <div class="col-md-3 footer-grid">
              <h4>Information</h4>
              <ul>
                  <li><a href="/dashboard">Home</a></li>
                  <li><a href="/yourproducts">Products</a></li>
              </ul>
          </div> */}
        <div className="col-md-3 footer-grid foot">
          <h4>Contacts</h4>
          <ul>
            <li><i className="glyphicon glyphicon-map-marker"/>
            <a href="">StichClub</a></li>
            <a href="">
            </a><li><a href=" "><i className="glyphicon glyphicon-earphone" /></a>
            <a href=" ">+1 123-456-7890</a></li>
            <li><i className="glyphicon glyphicon-envelope" />
            <a href="mailto:info@systray.in"> info@stichclub</a></li>
          </ul>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
  {/*-footer-*/}
  {/*copy*/}
  <div className="copy-section">
    <div className="container">
      <div className="copy-left">
        <p>© 2019 Systray . All rights reserved | Design by <a href="https://systray.in/">Systray LLP</a></p>
      </div>
      {/* <div className="copy-right">
        <img src="../appe/static/images/card.png"  alt="product" />
        </div> */}
      <div className="clearfix" />
    </div>
  </div>
  {/*copy*/}
</div>

    );
  }
}

export default Footer;
