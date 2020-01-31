import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';


class DesignerProfile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="howtowork_section___14DEF howtowork_gateway___M3NtM">
        {/* <h2 class="howtowork_section-title___2S6np">How It Works</h2> */}
          <div className="content">
              <br />
              <div className="container-fluid">
                {/* <h2 class="text-left shop" style="font-size:2em;">Hello, "Manideep Sai"</h2> */}
              {/*banner-bottom*/}
              

            <div>
  <div id="about" className="container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-sm-12 picture">
          <img src="https://www.atomix.com.au/media/2015/06/atomix_user31.png" className="rounded-circle" alt="designers" />
        </div>
        <div className="col-md-9 col-sm-12 offset-md-1">
          <h2 className="text-left">Michael clark</h2>
          <h4 className="designation">Designer</h4><br />
          <p>Praesent vitae viverra augue. In pellentesque lorem aliquam bibendum tristique. Maecenas sed nunc sit amet arcu lacinia mattis. Donec justo enim, tristique vitae lorem sed, blandit tincidunt nulla. Nunc arcu ligula, pellentesque et condimentum sed, semper quis neque. Sed eget risus eget dolor mattis finibus in ac orci. Donec vitae posuere quam, sed pretium lacus. Nullam ut risus maximus, ultrices sapien vel, malesuada magna. Maecenas finibus augue eget dictum mollis.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container" id="cv">
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-sm-12">
          <h3>Skills</h3>
        </div>
        <div className="col-md-9 col-sm-12 offset-md-1">
          <div className="skills">
            <h4>Shirts</h4>
            <div className="skill-item">
              <div className="progress">
                <div className="progress-bar" style={{width: '60%'}} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-12"></div>
        <div className="col-md-9 col-sm-12 offset-md-1">
        <div className="skills">
          <h4>Pants</h4>
          <div className="skill-item">
            <div className="progress">
              <div className="progress-bar" style={{width: '80%'}} />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="row">
        <div className="col-md-2 col-sm-12">
          <h3>Experience</h3>
        </div>
        <div className="col-md-9 col-sm-12 offset-md-1">
          <div className="exp">
            <div className="box">
              <h4>Systray</h4>
              <p>Description</p>
            </div>
            <div className="box">
              <h4>Telligen</h4>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 col-sm-12">
          <h3>Education</h3>
        </div>
        <div className="col-md-9 col-sm-12 offset-md-1">
          <div className="box">
            <h4>JNTUH</h4>
            <p>B.Tech</p>
          </div>
          <div className="box">
            <h4>JNTUA</h4>
            <p>SSC</p>
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

export default DesignerProfile
