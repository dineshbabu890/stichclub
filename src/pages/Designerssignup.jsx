import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import axios from 'axios';
import API_CONST from '../api/api';

class Designersignup extends Component {
  constructor(){
    super();
    this.state = {
      username:'',
      fname:'',
      lname:'',
      gender:'',
      email:'',
      password:'',
      mobileno:'',
      experience:'',
      category:''
    }
    this.signup = this.signup.bind(this);
  }
  onTextChange(name,value){
    this.setState({[name]:value})
    
  }
  signup(){
    let signupData = {
      username : this.state.username,
      fname : this.state.firstname,
      lname : this.state.lastname,
      gender : this.state.gender,
      email : this.state.email,
      password : this.state.password,
      mobileno : this.state.mobileno,
      experience : this.state.experience,
      category : this.state.category
    }
    axios.post(`${API_CONST.DEV_URL+API_CONST.DESIGNERSIGNUP_API}`,signupData)
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
          Designer Sign Up
        </span>
      </div>
      <form className="login100-form validate-form">
        <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
          <span className="label-input100">Username</span>
          <input autofocus="autofocus" onChange={(event) => {this.onTextChange('username',event.target.value)}} required="required" value={this.state.username} className="input100" type="text" name="designer[username]" id="designer_username" placeholder="Enter username" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-26" data-validate="Firstname is required">
          <span className="label-input100">First Name</span>
          <input onChange={(event) => {this.onTextChange('firstname',event.target.value)}} required="required" value={this.state.firstname} className="input100" type="text" name="designer[firstname]"  id="designer_firstname" placeholder="Enter firstname" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-26" data-validate="Lastname is required">
          <span className="label-input100">Last Name</span>
          <input onChange={(event) => {this.onTextChange('lastname',event.target.value)}} required="required" value={this.state.lastname} className="input100" type="text" name="designer[lastname]" id="designer_lastname" placeholder="Enter lastname" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-26" data-validate="Gender is required">
          <span className="label-input100">Gender</span>
          <input onChange={(event) => {this.onTextChange('gender',event.target.value)}} required="required" value={this.state.gender} className="input100" type="text" name="designer[gender]" id="designer_gender" placeholder="Enter gender" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-26" data-validate="Email is required">
          <span className="label-input100">Email</span>
          <input onChange={(event) => {this.onTextChange('email',event.target.value)}} required="required" value={this.state.email} className="input100" type="email" name="designer[email]" id="designer_email" placeholder="Enter email" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-18" data-validate="Password is required">
          <span className="label-input100">Password</span>
          <input onChange={(event) => {this.onTextChange('password',event.target.value)}} required="required" value={this.state.password} className="input100" type="password" name="designer[password]" id="designer_password" placeholder="Enter password" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-26" data-validate="Mobileno is required">
          <span className="label-input100">Mobile No</span>
          <input onChange={(event) => {this.onTextChange('mobileno',event.target.value)}} required="required" value={this.state.mobileno} className="input100" type="number" name="designer[mobileno]" id="designer_mobileno" placeholder="Enter mobileno" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-26" data-validate="Experience is required">
          <span className="label-input100">Experience</span>
          <input onChange={(event) => {this.onTextChange('experience',event.target.value)}} required="required" value={this.state.experience} className="input100" type="text" name="designer[experience]" id="designer_experience" placeholder="Enter experience" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-26" data-validate="Category is required">
          <span className="label-input100">Category</span>
          <input onChange={(event) => {this.onTextChange('category',event.target.value)}} required="required" value={this.state.category} className="input100" type="text" name="designer[category]" id="designer_category" placeholder="Enter category" />
          <span className="focus-input100" />
        </div>
        <div className="flex-sb-m w-full p-b-30">
          <div>
            <a href="" className="txt1">
              Forgot Password?
            </a>
            <p>Already have an account?<a href="/designer_login" className="useterms">Log in »</a></p>
          </div>
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn" onClick={this.signup}>
            Sign Up
          </button>
        </div>
            </form>
    </div>
  </div>
</div>

      </section>
    <Footer/>

      </div>
    );
  }
}

export default Designersignup
