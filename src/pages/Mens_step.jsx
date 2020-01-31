import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

class MensStep extends Component {
  
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
                  <h3 className="text-left mens_heads">Let us know more about you</h3>
                  <br />
                </div>
                </div>
                    <div className="container">
                  <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <div className="ban-bottom">
                      <div className="ban-top">
                        <h4 className="text-center  mens_head">How tall  are you ?</h4>
                        <br />
                        <div id="main_search">
                        <div className="height">
                  <input type="number" name="feets" min={1} max={10} /> Ft. 
                  <input type="number" name="inches" min={1} max={12} /> In.
            </div>
                </div>
                      </div>
                    </div><br />
                    <div className="ban-bottom">
                      <div className="ban-top">
                        <br />
                        <h4 className="text-center  mens_head">What is your Weight ?</h4>
                        <br />
                        <div id="main_search">
                      <div className="kgs">
                <input type="number" name="lbs" min={1} max={500} /> Lbs/Kgs
            </div>

              </div>
                      </div>
                    </div><br />
                    <div className="ban-bottom">
                      <div className="ban-top">
                        <br />
                        <h4 className="text-center  mens_head">When is your birthday ?</h4><br />
                        <div id="main_search">
                        <div className="birthday">
                        <input type="date" name="bday" className="bdate" />
                        </div>
            </div>
                      </div>
                    </div><br />
                <div className="ban-bottom"><div className="ban-top"><div id="main_search">
                  <div className="birthday">
                    <a href="/">
                      <button className="example_e"><span>Share </span></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

        
        <div className="clearfix" />
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

export default MensStep
