import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

class Forgotpw extends Component {
  render() {
    return (
      <div>
        <Navbar />
        
        <section className="howtowork_section___14DE1 howtowork_gateway___M3NtF">
  <div className="content"><br /><br />
    {/*banner-bottom*/}
    <div className="ban-bottom-w3l">
      <div className="container"><br />

<div className="sign-in">
<form className="sign-in-form" id="new_user" action="/login" acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" defaultValue="✓" /><input type="hidden" name="authenticity_token" defaultValue="casPKKCGAYFM0XZRJ6DnTyMW+4gf8SgguVkOzVRF66pKNMmKBiqMVS/ldK0rF5J4kDmu3et66ugbWoMmEMGtjA==" />
  <div className="sign-in__title">
   Forgot Password
  </div>
  <div className="sign-in-input">
    <div className="sign-in-input__container sign-in-input__container--first">
      <label className="sign-in__input-label" htmlFor="user_login">Enter your mail</label>
      <input autofocus="autofocus" required="required" className="sign-in__input-field" type="text" name="user[login]" id="user_login" />
    </div>
  </div>
  <div className="sign-in__forgot-password">
    <div className="sign-in__forgot-password--text"><a title="Forgot your password?" className="sign-in__forgot-password--link" href="/password/new">
        Resend Mail <div className="icon-arrow-right sign-in__arrow--small" />
      </a>      </div>
  </div>
  
</form>
</div>

        <div className="ban-bottom">
          <div className="ban-top">
            <a className="loginp" href=""><input type="submit" className="square-button square-button--watermelon square-button__sign-in"/></a>
          </div>
        </div><br />
        <div className="clearfix" />
      </div>
    </div>
    <p>Already i have a password stichclub account  ? <a href="/login" className="useterms">Sign in »</a></p>
    {/*banner-bottom*/}
  </div>
  {/*content*/}
</section>

        <Footer />
      </div>
    );
  }
}

export default Forgotpw
