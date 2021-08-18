import React,{useEffect,useContext} from "react"
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {useSelector,useDispatch} from 'react-redux';
import {add_cart} from '../../store/actions/CartAction'


export default function Slug({apiData}) {

  const brand = apiData.data;
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

                  .price {
                    position: static;
                  }

                  .product-btn{
                    display: block;
                    opacity: 1;
                    visibility: inherit;
                    margin: auto;
                  }
                  
      `}</style>

      <Head>
         <title>{brand.title}</title>
      </Head>
      <main>

        <nav className="breadcrumb-section section-py bg-light2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="bread-crumb-title">{brand.title}</h3>
                <ol className="breadcrumb bg-transparent justify-content-center m-0 p-0 align-items-center">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Brands</li>
                </ol>
              </div>
            </div>
          </div>
        </nav>

        <section className="section-py ">
          <div className="mycontainer container">
            <div className="row grid-view g-0 shop-grid-5">
              { brand.items != null ?
                
                brand.items.map((item,key) => {
                  return <div className="col-xl-2 col-lg-3 col-sm-6 col-md-4" key={key} >
                    <div className="product-card">
                        <Link className="thumb"  href={`/products/${item.slug}`} >
                          <a href= ""><img src={`${item.thumbnail}`}  /> </a>
                        </Link>
                        <div className="product-content text-center ">
                            <h3 className="mb-1 product-title"><Link href={`/products/${item.slug}`} >{item.title}</Link></h3>
                            <span className="d-block price regular-price">${item.price.toFixed(2)}</span>
                            <button onClick={() => cartAdd(item)} 
                                className="product-btn btn btn-warning btn-hover-primary" >Add to cart </button>
                        </div>
                    </div>
                  </div>
                  })

                  : ''
              }
            </div>
          </div>
        </section>
      </main>   
      </>
  )
}

// export async function getStaticProps(){
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/items/all`);
//       const products = await res.json();
//       return {
//           props:{
//               products,
//           }
//       }
// }

export async function getServerSideProps({query}) {
   
    const {slug} = query;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/items/brand/${slug}`);  
    const apiData = await res.json();
    
    return {
        props:{
          apiData,
        },
    }
  }
