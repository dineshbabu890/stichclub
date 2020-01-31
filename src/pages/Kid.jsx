import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

class Kid extends Component {
  render() {
    return (
      <div>
        <Navbar />
        
        <div>
  <section className="top-discount-area d-md-flex align-items-center">
    {/* Single Discount Area */}
    <div className="single-discount-area">
      <h5>Free Shipping &amp; Easy to Returns</h5>
      <h6><a href=" ">BUY NOW</a></h6>
    </div>
    {/* Single Discount Area */}
    <div className="single-discount-area">
      <h5>20% Discount for All</h5>
      <h6>USE CODE: Syslib</h6>
    </div>
    {/* Single Discount Area */}
    <div className="single-discount-area">
      <h5>20% Discount for Students</h5>
      <h6>USE CODE: Syslib</h6>
    </div>
  </section>
  {/* ****** Quick View Modal Area Start ****** */}
  <div className="modal fade" id="quickview" tabIndex={-1} role="dialog" aria-labelledby="quickview" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content">
        <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="modal-body">
          <div className="quickview_body">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <div className="quickview_pro_img">
                    <img src="img/product-img/product-1.jpg" alt="produts"/>
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="quickview_pro_des">
                    <h4 className="title">Boutique Silk Dress</h4>
                    <div className="top_seller_product_rating mb-15">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </div>
                    <h5 className="price">$120.99 <span>$130</span></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?</p>
                    <a href="product-details.html">View Full Product Details</a>
                  </div>
                  {/* Add to Cart Form */}
                  <form className="cart" method="post">
                    <div className="quantity">
                    <span className="qty-minus"> 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true" /></span>
                      <input type="number" className="qty-text" id="qty" step={1} min={1} max={12} name="quantity" defaultValue={1} />
                      <span className="qty-plus"><i className="fa fa-plus" aria-hidden="true" /></span>
                    </div>
                    <button type="submit" name="addtocart" value={5} className="cart-submit">Add to cart</button>
                    {/* Wishlist */}
                    <div className="modal_pro_wishlist">
                      <a href="wishlist.html" target="_blank"><i className="ti-heart" /></a>
                    </div>
                    {/* Compare */}
                    <div className="modal_pro_compare">
                      <a href="compare.html" target="_blank"><i className="ti-stats-up" /></a>
                    </div>
                  </form>
                  <div className="share_wf mt-30">
                    <p>Share With Friend</p>
                    <div className="_icon">
                      <a href=" "><i className="fa fa-facebook" /></a>
                      <a href=" "><i className="fa fa-twitter"  /></a>
                      <a href=" "><i className="fa fa-pinterest"  /></a>
                      <a href=" "><i className="fa fa-google-plus"  /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ****** Quick View Modal Area End ****** */}
  <section className="shop_grid_area section_padding_100">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <div className="shop_sidebar_area">
            <div className="widget catagory mb-50">
              {/*  Side Nav  */}
              <div className="nav-side-menu">
                <h6 className="mb-0">Catagories</h6>
                <div className="menu-list">
                  <ul id="menu-content2" className="menu-content collapse out">
                    {/* Single Item */}
                    <li data-toggle="collapse" data-target=" women2">
                      <a href=" ">Women Wear</a>
                      <ul className="sub-menu collapse" id="women2">
                        <li><a href=" ">Women Shirts</a></li>
                        <li><a href=" ">Women Pants</a></li>
                        <li><a href=" ">Women T-Shirts</a></li>
                      </ul>
                    </li>
                    {/* Single Item */}
                    <li data-toggle="collapse" data-target=" man2" className="collapsed">
                      <a href=" ">Men Wear</a>
                      <ul className="sub-menu collapse" id="man2">
                        <li><a href=" ">Men Shirts</a></li>
                        <li><a href=" ">Men Pants</a></li>
                        <li><a href=" ">Men T-Shirts</a></li>
                      </ul>
                    </li>
                    {/* Single Item */}
                    <li data-toggle="collapse" data-target=" kids2" className="collapsed">
                      <a href=" ">Kids Wear</a>
                      <ul className="sub-menu collapse show" id="kids2">
                        <li><a href=" ">Kids Dresses</a></li>
                        <li><a href=" ">Mini Dresses</a></li>
                      </ul>
                    </li>
                    {/* Single Item */}
                    <li data-toggle="collapse" data-target=" footwear2" className="collapsed">
                      <a href=" ">Accessories</a>
                      <ul className="sub-menu collapse" id="footwear2">
                        <li><a href=" ">Women Accessories</a></li>
                        <li><a href=" ">Men Accessories</a></li>
                        <li><a href=" ">Kids Accessories</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-9">
          <div className="shop_grid_product_area">
            <div className="row">
              {/* Single gallery Item */}
              <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.2s">
                {/* Product Image */}
                <div className="product-img">
                  <img src="img/product-img/product-1.jpg"  alt="produts"  />
                  <div className="product-quicview">
                    <a href="product-details.html" data-toggle="modal" data-target=" quickview"><i className="ti-plus" /></a>
                  </div>
                </div>
                {/* Product Description */}
                <div className="product-description">
                  <h4 className="product-price">$39.90</h4>
                  <p>Jeans midi cocktail dress</p>
                  {/* Add to Cart */}
                  <a href=" " className="add-to-cart-btn">ADD TO CART</a>
                </div>
              </div>
              {/* Single gallery Item */}
              <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.3s">
                {/* Product Image */}
                <div className="product-img">
                  <img src="img/product-img/product-2.jpg"  alt="produts"  />
                  <div className="product-quicview">
                    <a href="product-details.html" data-toggle="modal" data-target=" quickview"><i className="ti-plus" /></a>
                  </div>
                </div>
                {/* Product Description */}
                <div className="product-description">
                  <h4 className="product-price">$39.90</h4>
                  <p>Jeans midi cocktail dress</p>
                  {/* Add to Cart */}
                  <a href=" " className="add-to-cart-btn">ADD TO CART</a>
                </div>
              </div>
              {/* Single gallery Item */}
              <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.4s">
                {/* Product Image */}
                <div className="product-img">
                  <img src="img/product-img/product-3.jpg"  alt="produts"  />
                  <div className="product-quicview">
                    <a href="product-details.html" data-toggle="modal" data-target=" quickview"><i className="ti-plus" /></a>
                  </div>
                </div>
                {/* Product Description */}
                <div className="product-description">
                  <h4 className="product-price">$39.90</h4>
                  <p>Jeans midi cocktail dress</p>
                  {/* Add to Cart */}
                  <a href=" " className="add-to-cart-btn">ADD TO CART</a>
                </div>
              </div>
              {/* Single gallery Item */}
              <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.5s">
                {/* Product Image */}
                <div className="product-img">
                  <img src="img/product-img/product-4.jpg"  alt="produts"  />
                  <div className="product-quicview">
                    <a href="product-details.html" data-toggle="modal" data-target=" quickview"><i className="ti-plus" /></a>
                  </div>
                </div>
                {/* Product Description */}
                <div className="product-description">
                  <h4 className="product-price">$39.90</h4>
                  <p>Jeans midi cocktail dress</p>
                  {/* Add to Cart */}
                  <a href=" " className="add-to-cart-btn">ADD TO CART</a>
                </div>
              </div>
              {/* Single gallery Item */}
              <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.6s">
                {/* Product Image */}
                <div className="product-img">
                  <img src="img/product-img/product-5.jpg"  alt="produts"  />
                  <div className="product-quicview">
                    <a href="product-details.html" data-toggle="modal" data-target=" quickview"><i className="ti-plus" /></a>
                  </div>
                </div>
                {/* Product Description */}
                <div className="product-description">
                  <h4 className="product-price">$39.90</h4>
                  <p>Jeans midi cocktail dress</p>
                  {/* Add to Cart */}
                  <a href=" " className="add-to-cart-btn">ADD TO CART</a>
                </div>
              </div>
              {/* Single gallery Item */}
              <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.7s">
                {/* Product Image */}
                <div className="product-img">
                  <img src="img/product-img/product-6.jpg"  alt="produts"  />
                  <div className="product-quicview">
                    <a href="product-details.html" data-toggle="modal" data-target=" quickview"><i className="ti-plus" /></a>
                  </div>
                </div>
                {/* Product Description */}
                <div className="product-description">
                  <h4 className="product-price">$39.90</h4>
                  <p>Jeans midi cocktail dress</p>
                  {/* Add to Cart */}
                  <a href=" " className="add-to-cart-btn">ADD TO CART</a>
                </div>
              </div>
              {/* Single gallery Item */}
              <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.8s">
                {/* Product Image */}
                <div className="product-img">
                  <img src="img/product-img/product-7.jpg"  alt="produts"  />
                  <div className="product-quicview">
                    <a href="product-details.html" data-toggle="modal" data-target=" quickview"><i className="ti-plus" /></a>
                  </div>
                </div>
                {/* Product Description */}
                <div className="product-description">
                  <h4 className="product-price">$39.90</h4>
                  <p>Jeans midi cocktail dress</p>
                  {/* Add to Cart */}
                  <a href=" " className="add-to-cart-btn">ADD TO CART</a>
                </div>
              </div>
              {/* Single gallery Item */}
              <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.9s">
                {/* Product Image */}
                <div className="product-img">
                  <img src="img/product-img/product-8.jpg"  alt="produts"  />
                  <div className="product-quicview">
                    <a href="product-details.html" data-toggle="modal" data-target=" quickview"><i className="ti-plus" /></a>
                  </div>
                </div>
                {/* Product Description */}
                <div className="product-description">
                  <h4 className="product-price">$39.90</h4>
                  <p>Jeans midi cocktail dress</p>
                  {/* Add to Cart */}
                  <a href=" " className="add-to-cart-btn">ADD TO CART</a>
                </div>
              </div>
              {/* Single gallery Item */}
              <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="1s">
                {/* Product Image */}
                <div className="product-img">
                  <img src="img/product-img/product-9.jpg"  alt="produts"  />
                  <div className="product-quicview">
                    <a href="product-details.html" data-toggle="modal" data-target=" quickview"><i className="ti-plus" /></a>
                  </div>
                </div>
                {/* Product Description */}
                <div className="product-description">
                  <h4 className="product-price">$39.90</h4>
                  <p>Jeans midi cocktail dress</p>
                  {/* Add to Cart */}
                  <a href=" " className="add-to-cart-btn">ADD TO CART</a>
                </div>
              </div>
            </div>
          </div>
          <div className="shop_pagination_area wow fadeInUp" data-wow-delay="1.1s">
            <nav aria-label="Page navigation">
              <ul className="pagination pagination-sm">
                <li className="page-item active"><a className="page-link" href=" ">01</a></li>
                <li className="page-item"><a className="page-link" href=" ">02</a></li>
                <li className="page-item"><a className="page-link" href=" ">03</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


        <Footer />
      </div>
    );
  }
}

export default Kid
