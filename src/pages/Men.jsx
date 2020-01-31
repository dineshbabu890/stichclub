import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { FormGroup, Label, Input } from 'reactstrap';


class Men extends Component {
  state = {
    checked: true
  }
  renderModalQuestions(){
    return (
      <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
    
          <div className="modal-header">
            <h4 className="modal-title">We would like to learn more from you !!</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
    
          <div className="modal-body">
          <FormGroup check>
          <Label check>
            <Input type="checkbox" id="chk1"  onChange={e => this.setState({ checked: e.target.checked })}/>{' '}
            Check me out
          </Label>
        </FormGroup>
          </div>
    
          <div className="modal-footer">
            <a  href="/men_question" className="btn btn-primary">Continue</a>
            <button type="button" className="btn btn-light" data-dismiss="modal">None of these</button>
          </div>
    
        </div>
      </div>
    </div>)
  }
  render() {
    return (
      <div>
        <Navbar />
        <section className="howtowork_section___14DEF howtowork_gateway___M3NtD">
        {/* <h2 class="howtowork_section-title___2S6np">How It Works</h2> */}
          <div className="content">
              <br />
              <div className="container-fluid">
                {/* <h2 class="text-left shop" style="font-size:2em;">Hello, "Manideep Sai"</h2> */}
              {/*banner-bottom*/}
              <div className="ban-bottom-w3l">
                  <div className="container">
                  <div className="ban-bottom">
                      <h3 className="text-left mens_head">Pick your Style and Stylist</h3>
                      <br />
                      <div className="ban-top">
                      <p className="text-left banner_text">A great wardrobe starts with your perfect fit. 
                      <br />Our Stylists discover clothing for you, hand 
                      <br />selected for your unique size &amp; style.</p>
                  <br />
                      </div>
                  </div>
              {this.renderModalQuestions()}
              
              <button type="button" className="next" data-toggle="modal" data-target="#myModal">
              <span>Getting Started </span></button>
              <div className="clearfix" />
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

export default Men
