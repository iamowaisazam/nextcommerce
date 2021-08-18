import React, { useEffect, useContext } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {add_cart} from '../store/actions/CartAction'

export default function Home({products}) {
  
  const dispatch = useDispatch();
         
   const router = useRouter();
   if(router.isFallback){
       return <div>Loading</div>
   }


   const cartAdd = (data) => {

    dispatch(add_cart({
          id : data.id,
          title : data.title,
          slug : data.slug,
          quantity : 1,
          price : data.price,
          thumbnail: `${data.thumbnail}`,
      }));
      
   }

  return (
    <>

      <style jsx>{`
            .my-con{

              background:red;
            }

            .banner-padding{
              padding:100px 0px;
            }

            .price{
              position:static;
            }

            .banner-padding a{
              border-color: #2b46a8;
              background-color: #2b46a8;
              color: #fff;
            }

            .product-title {
              text-align: center;
              margin: 10px 0px;
              text-transform: capitalize;
              font-size: 24px;
              font-weight: 400;
              line-height: 1.428;
              color: #32383e;
              margin-bottom: 15px;
          }
      
      `}</style>

        <Head>
            <title>Home</title>
        </Head>

        <main style={{'maxWidth': 1400,'margin':'auto'}}>

        <section className="hero-section position-relative">
          <div className="p-0 container">
                    <div className="banner-padding   slide-bg6">
                        <div className="hero-slide-content">
                          <h2 style={{'width': '500px'}} className="title delay1 animated">Non-Stick Ceramic Cookware</h2>
                          <p className="my-2 text animated">Category</p>
                          <p className="my-2 price animated">Only $479.95</p>
                          <Link href="/products" >
                          <a className="btn btn-primary btn-hover-warning  text-uppercase" href="" >shopping Now
                          </a>
                          </Link>
                        </div>
                    </div>
            </div>
         </section>

          <section className="demo-con section-py ">
              <div className="mycontainer container">
                <div className="title-section">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <h3 className="title">Flash Sale</h3>
                        </div>
                    </div>
                </div>
                <div className="row grid-view g-0 shop-grid-5">
                    { 
                      products.data.slice(0, 5).map((item,key) => {
                        return <div className="col-xl-2 col-lg-3 col-sm-6 col-md-4" key={key} >
                                    <div className="product-card">
                                        <Link className="thumb"  href={`/products/${item.slug}`} >
                                          <a href= ""><img src={`${item.thumbnail}`}  /> </a>
                                        </Link>
                                        <div className="product-content text-center ">
                                            <h3 className="mb-1 product-title"><Link href={`/products/${item.slug}`} >{item.title}</Link></h3>
                                            <span className="d-block price regular-price">${item.price.toFixed(2)}</span>
                                            <button  onClick={() => cartAdd(item)} className="product-btn btn btn-warning btn-hover-primary" >Add to cart </button>
                                        </div>
                                    </div>
                                </div>
                          })
                    }
                </div>
            </div>
          </section>  

          <div className="banner-section section-pt">
            <div className="container">
              <div className="row mb-n7">
                <div className="col-md-4 mb-7">
                  <Link className="zoom-in text-center" href="/products">
                    <a><img src="images/banner/6.jpg" alt="img" /></a>
                  </Link>
                </div>
                <div className="col-md-4 mb-7">
                  <Link className="zoom-in text-center" href="/products">
                    <a><img src="images/banner/7.jpg" alt="img" /></a>
                  </Link>
                </div>
                <div className="col-md-4 mb-7">
                  <Link className="zoom-in text-center" href="/products">
                    <a> <img src="images/banner/8.jpg" alt="img" /> </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="demo-con section-py ">
              <div className="mycontainer container">
                <div className="title-section">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <h3 className="title">Popular Products</h3>
                        </div>
                    </div>
                </div>
                <div className="row grid-view g-0 shop-grid-5">
                    { 
                           products.data.map((item,key) => {
                          return <div className="col-xl-2 col-lg-3 col-sm-6 col-md-4" key={key} >
                                      <div className="product-card">
                                          <Link className="thumb"  href={`/products/${item.slug}`} >
                                             <a ><img src={`${item.thumbnail}`}  /> </a>
                                          </Link>
                                          <div className="product-content text-center ">
                                              <h3 className="mb-1 product-title">
                                                <Link href={`/products/${item.slug}`} >{item.title}</Link>
                                              </h3>
                                              <span className="d-block price regular-price">${item.price.toFixed(2)}</span>
                                              <button onClick={() => cartAdd(item)}  className="product-btn btn btn-warning btn-hover-primary" >Add to cart </button>
                                          </div>
                                      </div>
                                  </div>
                            })
                    }
                  </div>
              </div>
          </section>  
        </main>
    </>
  )

}


// export async function getStaticProps(){
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/items/all`);
//   const products = await res.json();
//   return {
//       props:{
//           products,
//       }
//   }
// }

export async function getServerSideProps(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/items/all`);  
  const products = await res.json();  
  return {
      props:{
          products,
      }
  }
}