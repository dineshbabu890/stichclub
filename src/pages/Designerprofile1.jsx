import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

class DesignerProfile1 extends Component {
 render() {
  return (
   <div>
    <Navbar />
    <section className="howtowork_section___14DEF howtowork_gateway___M3NtC">
 <div className="content">
  <br/>
  <div className="container-fluid">
    <div>
  <div className="form-row">
  <div className="col form-group">
   <label className="text-center">ADDRESS</label> 
   <input type="text" className="form-control" placeholder="Address 1" />
  </div> 
  </div>
  </div>
  <div>
  <div className="form-row">
  <div className="col form-group">
   <label className="text-center"></label> 
   <input type="text" className="form-control" placeholder="Address 2" />
  </div> 
 </div>
 
 <div>
 <div className="form-row">
  <div className="col form-group">
   <label className="text-center"></label> 
   <input type="text" className="form-control" placeholder="Address 3" />
  </div>
 </div>
 </div>
 <div>
 <div className="form-row">
  <div className="col form-group">
   <label className="text-center"></label> 
   <input type="text" className="form-control" placeholder="PIN CODE" />
  </div>
 </div>
 </div>
 
 <div className="form-row">
 <div className="col form-group">
 <label className="text-center">SUMMARY</label> 
  <textarea rows="10" cols="50" className="form-control" placeholder="Share" />
 </div> 
</div> 
  </div>
  </div>
  </div>
  <div>
  <a href="/mens_step"><button className="example_e"><span>Share</span></button></a>
    <div className="clearfix" />
    </div>

</section>

    <Footer />
  
    </div>
  );
}
}

export default DesignerProfile1
