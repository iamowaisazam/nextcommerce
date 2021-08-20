import React,{useContext,useEffect} from 'react'
import {useSelector} from 'react-redux';
import Link from 'next/link'


const Header = () => {

  const {CartReducer} = useSelector( state => state);

    return (<>

    <style jsx>{`

        .cart-count{
          position: relative;
          right: -4px;
          background: #fe6022;
          padding: 4px 7px;
          border-radius: 100%;
          color: white;
        }
        
        .header-cart {
          // color:white!important;
        }

        .main-menu-item {
          position: relative;
          font-size: 19px;
        }
    
    `}</style>


    <header>
    {/* Topbar */}
        <div className="px-5 header-top bg-primary d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6">
                <p>Email: <a className="header-top-link" aria-disabled={false} >test@gmail.com  </a></p>
                <p>Free Shipping for all Order of $99</p>
              </div>
              <div className="col-12 col-sm-6">
                <div className="header-top-nav">
                  <ul className="d-flex flex-wrap justify-content-center align-items-center justify-content-sm-end">
                      <li className="dropdown top-nav-item">
                        <Link href="/terms-condition" >
                         <a className="top-nav-link" >Terms & Condition </a>
                        </Link>
                      </li>
                      <li className="dropdown top-nav-item">
                        <Link href="privacy-policy" >
                         <a className="top-nav-link" href="#">Privacy Policy </a>
                        </Link>
                      </li>
                      <li className="dropdown top-nav-item">
                         <a className="top-nav-link" href="#" role="button" id="account" data-bs-toggle="dropdown">My Account 
                          <i className="ion-ios-arrow-down" /></a>
                        <ul className="dropdown-menu" aria-labelledby="account">
                          <li> <Link href="/register" ><a className="dropdown-item" >Register</a></Link> </li>
                          <li> <Link href="/login" ><a className="dropdown-item" >Login</a></Link> </li>
                        </ul>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}

        <div id="active-sticky" className="p-5 header-section">
          <div className="container position-relative">
            <div className="row align-items-center">
              <div className="col-6 col-md-3">
                <div className="header-logo">
                   <Link href="/">
                     <a href=""><img src="/images/logo/logo.jpg" alt="Site Logo" /></a></Link>
                </div>
              </div>
              <div className="col-6 col-md-9 ">
                <div className="d-flex align-items-center justify-content-end">
                  <nav className="main-menu  d-lg-inline-block">
                    <ul className="d-flex">
                      <li className="main-menu-item"><Link className="main-menu-link" href="/">Home</Link></li>
                      <li className="main-menu-item"><Link className="main-menu-link" href="/about">About</Link></li>
                      <li className="main-menu-item"><Link className="main-menu-link" href="/products">Products</Link></li>
                      <li className="main-menu-item"><Link className="main-menu-link" href="/categories">Categories</Link></li>
                      <li className="main-menu-item"><Link className="main-menu-link" href="/brands">Brands</Link></li>
                      <li className="main-menu-item"><Link className="main-menu-link" href="/contact">Contact</Link></li>
                      <li className="main-menu-item" >
                        <Link href="/cart">
                          <a className="header-cart" ><i className="fa fa-shopping-cart" aria-hidden="true"> 
                            <span className="cart-count" >{CartReducer.items.length}</span> </i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      </>)
}

export default Header