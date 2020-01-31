import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

class Home extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <section className="main">
    {/*content*/}
    <div className="content">
      {/*banner-bottom*/}
      <div className="ban-bottom-w3l">
        <div className="container-fluid">
          <div className="col-md-2 ban-bottom">
          </div>
          <div className="col-md-4 ban-bottom">
            <div className="ban-top">
              <img src="images/mens/men1.png" className="img-responsive" alt="product" />
              <div className="ban-text">
              <a href="/men"> <h4>Men
</h4></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 ban-bottom">
            <div className="ban-top">
              <img src="images/womens/women1.jpeg" className="img-responsive" alt="product" />
              <div className="ban-text">
              <a href="/women"> <h4>Women</h4></a>
              </div>
            </div>
          </div>
         {/* <div className="col-md-4 ban-bottom">
            <div className="ban-top">
              <img src="images/womens/designer1.jpg" className="img-responsive" alt="product" />
              <div className="ban-text">
                <h4>Designers</h4>
              </div>
            </div>
          </div>*/}
          <div className="clearfix" />
        </div>
      </div>
      {/*banner-bottom*/}
    </div>
    {/*content*/}
    <br /><br />
    <div className="readysignup">
      <section className="readysignup_container">
        <div className="readysignup_background">
          <h1 className="readysignup_title">Ready to Sign Up?</h1>
          <div className="readysignup_frame">
            <div className="readysignup_content">
              <a href="Register" className="readysignup_button-primary">Pick your Styles and stylist</a>
              <p className="readysignup_fine-print">Already have an account?
                <a className="readysignup_fine-print" href="/login">&nbsp;Sign in »</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <br /><br />
    </section>
    <Footer />
    </div>

    );
  }
}

export default Home
