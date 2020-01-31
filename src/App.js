import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Home from './pages/Home.jsx';

import Men from './pages/Men.jsx';
import MenQuestion from './pages/Men_question.jsx';
import MenQuestion1 from './pages/Men_question1.jsx';
import MensStep from './pages/Mens_step.jsx';
import MensStep3 from './pages/Mens_step3.jsx';

import Women from './pages/Women.jsx';
import WomenQuestion from './pages/Women_question.jsx';
import WomenQuestion1 from './pages/Women_question1.jsx';
import WomensStep from './pages/Womens_step.jsx';
import WomensStep3 from './pages/Womens_step3.jsx';

import Designers from './pages/Designers.jsx';
import Designerssignup from './pages/Designerssignup.jsx';
import PickYourDesigners from './pages/Pickyourdesigners.jsx';
import DesignerProfile from './pages/Designer_profile.jsx';
import Designerlogin from './pages/Designerlogin.jsx';


import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Otpverify from './pages/Otpverify.jsx';
import Forgotpw from './pages/Forgotpw.jsx';
import Howitworks from './pages/Howitwork.jsx';
import FAQ from './pages/Faq.jsx';
import DesignerProfile1 from './pages/Designerprofile1.jsx';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/men" component={Men}/>
          <Route path="/women" component={Women}/>
          <Route path="/designers" component={Designers}/>
          <Route path="/pickyourdesigners" component={PickYourDesigners}/>
          <Route path="/designerprofile" component={DesignerProfile}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/otpverify" component={Otpverify}/>
          <Route path="/forgotpw" component={Forgotpw}/>
          <Route path="/howitworks" component={Howitworks}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/men_question" component={MenQuestion}/>
          <Route path="/women_question" component={WomenQuestion}/>
          <Route path="/women_question1" component={WomenQuestion1}/>
          <Route path="/men_question1" component={MenQuestion1}/>
          <Route path="/mens_step" component={MensStep}/>
          <Route path="/mens_step3" component={MensStep3}/>
          <Route path="/womens_step" component={WomensStep}/>
          <Route path="/womens_step3" component={WomensStep3}/>
          <Route path="/designer_Signup" component={Designerssignup}/>
          <Route path="/designer_profile1" component={DesignerProfile1}/>
          <Route path="/designer_login" component={Designerlogin}/>
        </div>
      </Router>
    );
  }
}

export default App;
