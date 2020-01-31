import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import axios from 'axios';
import API_CONST from '../api/api';

class Designerlogin extends Component {
  constructor(){
    super();
    this.state = {
      email:'',
      password:''
    }
    this.login = this.login.bind(this);
  }
  onTextChange(name,value){
    this.setState({[name]:value})
    
  }
  login(){
    let loginData = {
      email : this.state.email,
      password : this.state.password
    }
    axios.post(`${API_CONST.DEV_URL+API_CONST.DESIGNERLOGIN_API}`,loginData)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    return (
      <div>
        <Navbar />
        <section className="howtowork_section___14DE1 howtowork_gateway___M3NtF">
        <div className="limiter">
  <div className="container-login100">
    <div className="wrap-login100">
      <div className="login100-form-title" style={{backgroundImage: 'url(images/banner4.jpg)'}}>
        <span className="login100-form-title-1">
          Designer Log in
        </span>
      </div>
      <form className="login100-form validate-form">
        <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
          <span className="label-input100">Email</span>
          <input autofocus="autofocus" onChange={(event) => {this.onTextChange('email',event.target.value)}} required="required"  value={this.state.email} className="input100" type="email" name="designer[email]" id="designer_email" placeholder="Enter email" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-18" data-validate="Password is required">
          <span className="label-input100">Password</span>
          <input autofocus="autofocus" onChange={(event) => {this.onTextChange('password',event.target.value)}} required="required"  value={this.state.password} className="input100" type="password" name="designer[password]" id="designer_password" placeholder="Enter password" />
          <span className="focus-input100" />
        </div>
        
        <div className="flex-sb-m w-full p-b-30">
          <div>
            <a href="" className="txt1">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn" onClick={this.login}>
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

        
        </section>

    <Footer />

      </div>
    );
  }
}

export default Designerlogin