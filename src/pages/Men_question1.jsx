


import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

class MenQuestion1 extends Component {
  render() {
    return (
      <div>
        <Navbar />
       <section className="howtowork_section___14DEF howtowork_gateway___M3NtC">
  {/* <h2 class="howtowork_section-title___2S6np">How It Works</h2> */}
  <div className="content">
    <br />
    <div className="container-fluid">
     
      {/*banner-bottom*/}
      <div className="ban-bottom-w3l">
      <div className="container-fluid">
      <h2 className="text-left shop" style={{fontSize: '2em'}}>Hello, "Manideep Sai"</h2>
      <div className="ban-bottom">
      <h3 className="text-left mens_heads">Let us know about your style</h3>
      <br />
    </div>
    </div>
        <div className="container">
          <div className="ban-bottom">
            <h3 className="text-center mens_head">How do you like your shirt to fit?</h3>  <br />
            <div className="ban-top">              
              <p className="text-center">( Select all that apply. )</p>
              <br />
              <div className="shirt">
              <div className="selection">
         <input id="slimm" name="slimmshirt" type="radio" />
         <label htmlFor="slimm">SLIM</label>
       </div>
       <div className="selection">
         <input id="regular" name="regularshirt" type="radio" />
         <label htmlFor="regular">REGULAR</label>
       </div>
              <div className="selection">
              <input id="dontknow" name="dontknowshirt" type="radio" />
              <label htmlFor="dontknow">I Don't Know</label>
              </div>
        </div>
                   </div>
                 </div>
                 <br />
          <div className="ban-bottom">
          <h3 className="text-center mens_head">How do you like your pants to fit?</h3>  <br />
            <div className="ban-top">
            <p className="text-center">( Select all that apply.)</p>
            <br />
            <div className="pants">
            <div className="selection">
            <input id="slim" name="slimpants" type="radio" />
            <label htmlFor="slim">SLIM</label>
          </div>
          <div className="selection">
            <input id="burger" name="burgerpants" type="radio" />
            <label htmlFor="burger">STRAIGHT</label>
          </div>
          <div className="selection">
            <input id="relaxed" name="relaxedpants" type="radio" />
            <label htmlFor="relaxed">RELAXED</label>
          </div>
          </div>
            </div>
          </div>
          <br /> 
          <div className="ban-bottom">
          <h3 className="text-center mens_head">How do you typically spend on those items?</h3><br />  
            <div className="ban-top">
            <p className="text-center ">( We want to send you cloths at prices you're comfortable with. )</p>
            <br />
            <div className="mwshoes">
            <p className="text-center items">Shoes</p><br/>
            <div className="row">
            <div className="col-md-3"></div>
                <div className="selection bodyshapes">
                <img src={"images/mens/shoes1.png"} alt="slim" />
                </div>
                <div className="col-md-3">
                <div className="selection">
                  <input id="shoe" name="mwshoes" type="radio" />
                  <label htmlFor="shoe">50-100K</label>
                </div>
                <div className="selection">
                  <input id="shoe1" name="mwwshoes" type="radio" />
                  <label htmlFor="shoe1">100-200K</label>
                </div>
                <div className="selection">
                  <input id="shoe2" name="mmwwshoes" type="radio" />
                  <label htmlFor="shoe2">200K+</label>
                </div>
                </div>
          </div>
          </div>
          <br />

          <div className="mwsweaters">
          <p className="text-center items">Sweaters</p><br/>
          <div className="row">
          <div className="col-md-3"></div>
              <div className="selection bodyshapes">
              <img src={"images/mens/sweters.png"} alt="skinny"/>
              </div>
              <div className="col-md-3">
              <div className="selection">
              <input id="sweaters" name="mwwsweaters" type="radio" />
              <label htmlFor="sweaters">50-100K</label>
            </div>
            <div className="selection">
              <input id="sweaters1" name="mwsweaters" type="radio" />
              <label htmlFor="sweaters1">100-200K</label>
            </div>
            <div className="selection">
              <input id="sweaters2" name="mwssweaters" type="radio" />
              <label htmlFor="sweaters2">200K+</label>
            </div>
              </div>
        </div>
        </div>
        <br />
        <div className="mwjeans">
        <p className="text-center items">Jeans</p><br/>
        <div className="row">
        <div className="col-md-3"></div>
            <div className="selection bodyshapes">
            <img src={"images/womens/jeanss.png"} alt="skinny"/>
            </div>
            <div className="col-md-3">
            <div className="selection">
              <input id="jeans" name="mwwjeans" type="radio" />
              <label htmlFor="jeans">50-100K</label>
            </div>
            <div className="selection">
              <input id="jeans1" name="1jeans" type="radio" />
              <label htmlFor="jeans1">100-200K</label>
            </div>
            <div className="selection">
              <input id="jeans2" name="2jeans" type="radio" />
              <label htmlFor="jeans2">200K+</label>
            </div>
            </div>
      </div>
      </div>
            </div>
          </div>
          <br />
          <div className="ban-bottom">
          <h3 className="text-center mens_head">Whats your shirt size?</h3>  
            <div className="ban-top">
            <br />
            <div className="size">
            <div className="row"> 
            <div className="col-md-3"></div>
            <div className="col-md-2">
            <div className="selection">
            <input id="short" name="ssize" type="radio" />
            <label htmlFor="short">S</label>
          </div>
          <div className="selection">
            <input id="xlarge" name="xlsize" type="radio" />
            <label htmlFor="xlarge">XL</label>
          </div>
          </div>
          <div className="col-md-2">
          <div className="selection">
          <input id="medium" name="msize" type="radio" />
          <label htmlFor="medium">M</label>
        </div>
        <div className="selection">
          <input id="xxlarge" name="xxlsize" type="radio" />
          <label htmlFor="xxlarge">XXL</label>
        </div>
    <div className="selection">
    <input id="dont" name="dsize" type="radio" />
          <label htmlFor="dont">I Don't Know</label>
      </div>
        </div>
            <div className="col-md-2">
                <div className="selection">
                  <input id="long" name="lsize" type="radio" />
                  <label htmlFor="long">L</label>
                </div>
                <div className="selection">
                  <input id="xxxlarge" name="xxxlsize" type="radio" />
                  <label htmlFor="xxxlarge">XXXL</label>
                </div>
             </div>
          </div>
          </div>
            </div>
          </div>
          <br />

          <div className="ban-bottom">
          <h3 className="text-center mens_head">Whats your waist size?</h3>  
            <div className="ban-top">
            <br />
            <div className="wrist">
            <div className="row"> 
            <div className="col-md-3"></div>
            <div className="col-md-2">
            <div className="selection">
            <input id="wrist1" name="wrist" type="radio" />
            <label htmlFor="wrist1">30</label>
          </div>
          <div className="selection">
            <input id="wrist2" name="2wrist" type="radio" />
            <label htmlFor="wrist2">36</label>
          </div>
          </div>
          <div className="col-md-2">
          <div className="selection">
          <input id="wrist3" name="3wrist" type="radio" />
          <label htmlFor="wrist3">32</label>
        </div>
        <div className="selection">
          <input id="wrist4" name="4wrist" type="radio" />
          <label htmlFor="wrist4">38</label>
        </div>
    <div className="selection">
    <input id="know" name="kwrist" type="radio" />
    <label htmlFor="know">I Don't Know</label>
      </div>
        </div>
            <div className="col-md-2">
                <div className="selection">
                  <input id="wrist5" name="5wrist" type="radio" />
                  <label htmlFor="wrist5">34</label>
                </div>
                <div className="selection">
                  <input id="wrist6" name="6wrist" type="radio" />
                  <label htmlFor="wrist6">40</label>
                </div>
             </div>
          </div>
          </div>
            </div>
          </div>
        <a href="/mens_step3"><button className="example_e"><span> NEXT</span></button></a>
       {/*<button class="btn"><span>Hover me!</span></button>*/}
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

export default MenQuestion1
