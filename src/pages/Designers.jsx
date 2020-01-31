import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';


class Designers extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="howtowork_section___14DEF howtowork_gateway___Design ">
        {/* <h2 class="howtowork_section-title___2S6np">How It Works</h2> */}
          <div className="content">
              <br />
              <div className="container-fluid">
                {/* <h2 class="text-left shop" style="font-size:2em;">Hello, "Manideep Sai"</h2> */}
              {/*banner-bottom*/}
              <div className="ban-bottom-w3l">
                  <div className="container">
                  <div className="ban-bottom">
                      <h3 className="text-left mens_head">Pick your Designers</h3>
                      <br />
                      <div className="ban-top">
                      <p className="text-left banner_text">A great wardrobe starts with your perfect fit. 
                      <br />Our Stylists discover clothing for you, hand 
                      <br />selected for your unique size &amp; style.</p>
                  <br />
                      </div>
                  </div>
               <span> <a href="/pickyourdesigners"><button type="button" className="nextdesigner">
              <span>Explore Designers</span></button></a>
              <div className="clearfix" />
              <a href="/designer_Signup"><button type="button" className="nextdsignup">
              <span>Designer Signup</span></button></a>
              <div className="clearfix" /></span>
          </div>
          </div>
          {/*banner-bottom*/}
          </div>
      </div>
      {/*content*/}
      </section>
      


        <Footer />
      </div>
    );
  }
}

export default Designers
