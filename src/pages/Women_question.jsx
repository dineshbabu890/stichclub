import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { FormGroup, Label, Input } from 'reactstrap';


class WomenQuestion extends Component {
  state = {
    checked: true
  }
  renderModalQuestions(){
    return (
      <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
    
          <div className="modal-header">
            <h4 className="modal-title">We would like to Approve Womens Fitting Size !!</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
    
          <div className="modal-body">
          <FormGroup check>
          <Label check>
            <Input type="checkbox" id="chk1"  onChange={e => this.setState({ checked: e.target.checked })}/>{' '}
            Womens Fitting
          </Label>
        </FormGroup>
          </div>
    
          <div className="modal-footer">
            <a  href="/women_question1" className="btn btn-primary">Continue</a>
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
        <section className="howtowork_section___14DEF howtowork_gateway___M3NtCE">
            <div className="content">
              <div className="container-fluid">
                {/*banner-bottom*/}
                
                <div className="ban-bottom-w3l">
                  <div className="container-fluid">
                  

                  <h2 className="text-left shop" style={{fontSize: '2em'}}>Hello, "Manideep Sai"</h2>
                  <div className="ban-bottom">
                  <br />
                </div>
                </div>
                <div className="container">
                <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-8">
                <h4 className="text-left mens_head">What are you looking for?</h4>
                </div>
                </div>
                  <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-8">
                    <div className="ban-bottom">
                      <div className="ban-top">
                        <fieldset>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox1" type="checkbox"/>
                          <label htmlFor="checkbox1">
                            Find better fitting clothes
                          </label>
                        </div>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox2" type="checkbox" />
                          <label htmlFor="checkbox2">
                            Save time shopping
                          </label>
                        </div>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox3" type="checkbox" />
                          <label htmlFor="checkbox3">
                            Prepare for an upcoming occasion trip
                          </label>
                        </div>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox4" type="checkbox" />
                          <label htmlFor="checkbox4">
                            Advice putting outfits together
                          </label>
                        </div>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox5" type="checkbox" />
                          <label htmlFor="checkbox5">
                            Just Looking for something new
                          </label>
                        </div>
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox6" type="checkbox" />
                          <label htmlFor="checkbox6">
                            Discover or elevate my style
                          </label>
                        </div>
                      </fieldset>

                      </div>
                    </div><br />
                   <br />
        <div className="clearfix" />
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-4">
      <div className="ban-bottom">
      <div className="ban-top">
      <div id="main_search">
        <div className="birthday">
        {this.renderModalQuestions()}
          <button type="button"className="example_e" data-toggle="modal" data-target="#myModal">
          <span>NEXT</span></button>
        </div>
      </div>
    </div>
  </div>
  </div>
      </div>
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

export default WomenQuestion
