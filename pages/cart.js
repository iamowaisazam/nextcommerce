import React,{useContext, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Head from 'next/head'
import Link from 'next/link'
import {add_cart,remove_cart,decreament_cart} from '../store/actions/CartAction'

export default  function Cart(Props) {

   const dispatch = useDispatch();
   const {CartReducer} = useSelector( state => state);

  let total = 0;

  const decreament = (data) => {

    dispatch(decreament_cart({
      id : data.id,
      title : data.title,
      slug : data.slug,
      quantity : 1,
      price : data.price,
      thumbnail: `${data.imgpath}/${data.thumbnail}`,
     }));

  }


  const increament = (data) => {

      dispatch(add_cart({
          id : data.id,
          title : data.title,
          slug : data.slug,
          quantity : 1,
          price : data.price,
          thumbnail: `${data.imgpath}/${data.thumbnail}`,
      }));

  }



  const remove = (data) => {

      dispatch(remove_cart({
        id : data.id,
        title : data.title,
        slug : data.slug,
        quantity : 1,
        price : data.price,
        thumbnail: `${data.imgpath}/${data.thumbnail}`,
      }));

  }

  useEffect( async () => {


  },[]);

  return (
          <>
         
            <style jsx>{`

               .cart-total{
                font-size: 22px!important;
                font-weight: 600!important;
               }

              .caritem-img{
                width:50px;
                height:50px;
              } 

            `}</style>

            <Head>
                <title>Cart</title>
            </Head>

            <main >
                  <nav className="breadcrumb-section section-py bg-light2">
                      <div className="container">
                          <div className="row">
                            <div className="col-12">
                                <h3 className="bread-crumb-title">Your Cart Items</h3>
                                <ol className="breadcrumb bg-transparent justify-content-center m-0 p-0 align-items-center">
                                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                  <li className="breadcrumb-item active" aria-current="page">Cart</li>
                                </ol>
                            </div>
                          </div>
                      </div>
                    </nav>

                    <section className="whish-list-section section-py">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <h3 className="title mb-5 pb-3 text-capitalize">Your cart items</h3>
                            <div className="table-responsive">
                              <table className="table">
                                <thead className="thead-light">
                                  <tr>
                                    <th className="text-center" scope="col">Product Image</th>
                                    <th className="text-center" scope="col">Product Name</th>
                                    <th className="text-center" scope="col">Price</th>
                                    <th className="text-center" scope="col">Qty</th>
                                    <th className="text-center" scope="col">Total</th>
                                    <th className="text-center" scope="col">action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                { CartReducer.items != null ? CartReducer.items.map((item,i,arr) => {
                                      total += item.price * item.quantity ;
                                      return<tr key={i} >
                                                <th className=" text-center" scope="row">
                                                 <Link href={`/products/${item.slug}`}  >
                                                  <a>
                                                  <img  className="caritem-img" src={item.thumbnail} alt="img" />
                                                  </a>
                                                  </Link>
                                                  
                                                </th>
                                                <td className="text-center">
                                                  <span className="whish-title">{item.title}</span>
                                                </td>
                                                <td className="text-center">
                                                  <span className="whish-list-price"> ${item.price} </span>
                                                </td>
                                                <td className="text-center">
                                                  <div className="product-count style">
                                                    <div className="count d-flex justify-content-center">
                                                      <input readOnly type="text" value={item.quantity} defaultValue={item.quantity}  />
                                                      <div className="button-group">

                                                          <button onClick={() => increament(item)} className="count-btn increment"><i className="lnr lnr-chevron-up" /></button>
                                                          
                                                          <button onClick={() => decreament(item)} className="count-btn decrement"><i className="lnr lnr-chevron-down" /></button>

                                                      </div>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="text-center">
                                                  <span className="whish-list-price"> ${item.price * item.quantity } </span>
                                                </td>
                                                <td className="text-center">
                                                    <a onClick={() => remove(item)} >
                                                       <span className="trash"><i className="ion-android-delete" /> </span>
                                                    </a>
                                                </td>
                                          </tr>})

                                      : <tr><td colSpan="100%" className="text-center" >
                                            <span  className="product-price text-dark font-w-6" > Cart is Empty </span>
                                            </td>
                                        </tr>
                                      }
                                  { total == 0 ?
                                    <tr><td colSpan="100%" className="text-center" >
                                    <span className="product-price text-dark font-w-6">Cart is Empty </span></td>
                                     </tr> : '' }
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <div className="check-out-section section-pb">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-7"></div>
                            <div className="col-lg-5 mt-4 mt-lg-0">
                              <div className="your-order-area">
                                <div className="your-order-wrap gray-bg-4">
                                  <div className="your-order-product-info">
                                    <div className="your-order-top">
                                      <ul>
                                        <li className="cart-total" >Cart Total</li>
                                        <li></li>
                                      </ul>
                                    </div>
                                    <div className="your-order-total mb-0">
                                      <ul>
                                        <li className="order-total">Total Amount</li>
                                        <li>${total}</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="Place-order mt-5">
                                  <Link href="/products" >
                                  <a className="btn btn-warning btn-hover-primary text-capitalize me-3" >Return Shop</a>
                                  </Link>
                                  <Link href="/products" >
                                  <a className="btn btn-warning btn-hover-primary text-capitalize my-2 my-sm-0" >checkout</  a>
                                  </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </main>
          </>
        )
}
