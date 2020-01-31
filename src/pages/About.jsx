import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

class About extends Component {
  render() {
    return (
     <div>
 <Navbar />
    <section className="top-discount-area d-md-flex align-items-center">
      {/* Single Discount Area */}
      <div className="single-discount-area">
        <h5>Free Shipping &amp; Easy to Returns</h5>
        <h6><a href=" ">BUY NOW</a></h6>
      </div>
      {/* Single Discount Area */}
      <div className="single-discount-area">
        <h5>20% Discount for All</h5>
        <h6>USE CODE: Syslib</h6>
      </div>
      {/* Single Discount Area */}
      <div className="single-discount-area">
        <h5>20% Discount for Students</h5>
        <h6>USE CODE: Syslib</h6>
      </div>
    </section>
    <br />
    <section>
      <div className="quickview_body">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="quickview_pro_img">
                <img src="img/about.jpg" alt="products1"/>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="quickview_pro_des">
                <h4 className="title text-center">About Us</h4>
                <br />
                <div className="banner-content">
                  <p>SYSTRAY helps people to E-Commerce their product ideas.
                    <br /><br />
                    At our core, SYSTRAY operates on Imagination, Individuality, Good, &amp; Impact.
                    <br /><br />
                    We deliver Innovative , Relaible &amp; Smart Products.
                    <br /><br />
                    At SYSTRAY, we make magic We dream it, And then do it together every day reinventing what’s possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-12 col-lg-7">
              <h5 className="text-center">Our Products</h5>
              <div className="banner-content">
                <h6>Men Products!</h6>
                <p>Men's Clothing - Choose from a variety of clothing for men online in India at best rates. Check out casual party wear, formal wear, western wear, nightwear from top brands.</p>
              </div>
              <div className="banner-content">
                <h6>Women Products!</h6>
                <p>Women's Clothing - Choose from a variety of clothing for men online in India at best rates. Check out casual party wear, formal wear, western wear, nightwear from top brands.</p>
              </div>
              <div className="banner-content">
                <h6>Kids Products!</h6>
                <p>Kids Clothing - Choose from a variety of clothing for men online in India at best rates. Check out casual party wear, formal wear, western wear, nightwear from top brands.</p>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="quickview_pro_img">
                <img src="img/products.jpg"  alt="products" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><br />
    <Footer />
    </div>

    );
  }
}

export default About
