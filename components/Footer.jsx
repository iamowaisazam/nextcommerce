import React from 'react'
import {toast} from 'react-toastify';
import Link from 'next/link';

const Footer = () => {

  const submit = (e) => {
      
    e.preventDefault();
    e.target.email.value = "";
    toast.success("Successfully Subscribed");
 }

    return (
        <>
        <section className="bg-primary section-py">
        <div className="container">
          <div className="row align-items-center mb-n7">
            <div className="col-xl-3 col-lg-5 col-md-6 mb-7 order-first">
              <div className="text-center text-md-start">
                <h3 className="news-title">Sign Up For Newsletters</h3>
                <p className="text">Be the First to Know. Sign up for newsletter today</p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 mb-7 order-last order-lg-0">
              <form  className="newform" onSubmit={submit} >
                <div className="input-group">
                  <input id="mc-email" type="email" name="email" className="form-control border-0" required placeholder="Enter your email address" />
                  <div className="input-group-text">
                    <button className="btn-search btn btn-hover-dark" type="submit">subscribe</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-6 mb-7">
              <ul className="social d-flex flex-wrap align-items-center justify-content-center justify-content-md-end">
                <li className="social-link-item"><a className="social-link" href="#"><span className="ion-social-facebook" /></a></li>
                <li className="social-link-item"><a className="social-link" href="#"><span className="ion-social-googleplus" /></a></li>
                <li className="social-link-item"><a className="social-link" href="#"><span className="ion-social-pinterest-outline" /></a></li>
                <li className="social-link-item"><a className="social-link" href="#"><span className="ion-social-twitter" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer-section">
            <div className="footer-top position-relative">
            <div className="container">
                <div className="row g-0">
                <div className="col-12">
                    <div className="border-bottom section-py">
                    <div className="row mb-n7">
                        <div className="col-lg-4 col-sm-6 mb-7">
                        <div className="footer-widget">
                        <Link href="/" ><a className="footer-logo mb-8" ><img src="/images/logo/logo.jpg" /></a></Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                          <ul className="adress">
                          <li><span className="text-dark fw-500">Address:</span> 4710-4890 Breckinridge St,Fayetteville</li>
                          <li><span className="text-dark fw-500">Email:</span> <a aria-disabled={true} >support@test.com</a></li>
                          </ul>
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-7">
                        <div className="footer-widget">
                            <h4 className="title">Top Rated Products</h4>
                            <ul className="footer-menu">
                              <li><Link href="/products/milk" ><a className="footer-link" >Product 1</a></Link> </li>
                              <li><Link href="/products/product-2" ><a className="footer-link" >Product 2</a></Link></li>
                              <li><Link href="/products/product-3" ><a className="footer-link" >Product 3</a></Link></li>
                              <li><Link href="/products/product-4" ><a className="footer-link" >Product 4</a></Link></li>
                              <li><Link href="/products/product-5" ><a className="footer-link" >Product 5</a></Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-7">
                          <div className="footer-widget">
                              <h4 className="title">Our company</h4>
                              <ul className="footer-menu">
                              <li><Link href="/products" ><a className="footer-link" >Products</a></Link></li>
                              <li><Link href="/contact" ><a className="footer-link" >Contact</a></Link></li>
                              <li><Link href="/cart" ><a className="footer-link" >Cart</a></Link></li>
                              <li><Link href="/privacy-policy" ><a className="footer-link" >Privacy Policy</a></Link></li>
                              <li><Link href="/terms-condition" ><a className="footer-link" >Terms and Conditon</a></Link></li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-7">
                          <div className="footer-widget">
                              <h4 className="title">Your account</h4>
                              <ul className="footer-menu">
                              <li><a className="footer-link" href="#">Personal info</a></li>
                              <li><a className="footer-link" href="#">Orders</a></li>
                              <li><a className="footer-link" href="#">Credit slips</a></li>
                              <li><a className="footer-link" href="#">Addresses</a></li>
                              <li><a className="footer-link" href="#">My wishlists</a></li>
                              </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* coppy right satrt */}
            <div className="copy-right-section">
              <div className="container">
                  <div className="row">
                    <div className="col-md-6 order-last order-md-first">
                        <div className="copyright-info text-center text-md-start">
                        <p> Copyright © <a aria-disabled={true}> OwaisAzamTechnical</a>, All Rights Reserved
                        </p>
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-md-end mb-3 mb-md-0">
                        <img src="/images/payment.png" alt="images" />
                    </div>
                  </div>
              </div>
            </div>
            {/* coppy right end */}
        </footer>
        </>
    )
}

export default Footer