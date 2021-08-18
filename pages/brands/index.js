import React,{useEffect,useContext} from "react"
import Link from 'next/link'
import Head from 'next/head'
import {useRouter} from 'next/router'


export default function Index({apiData}) {

    const products = apiData.data;
    const router = useRouter();

    if(router.isFallback){
        return <div>Loading</div>
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
         <title>Brands</title>
      </Head>
      <main>

        <nav className="breadcrumb-section section-py bg-light2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="bread-crumb-title">Brands </h3>
                <ol className="breadcrumb bg-transparent justify-content-center m-0 p-0 align-items-center">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">brands</li>
                </ol>
              </div>
            </div>
          </div>
        </nav>

        <section className="section-py ">
          <div className="mycontainer container">
            <div className="row grid-view g-0 shop-grid-5">
              { 
                products.map((item,key) => {
                  return <div className="col-xl-2 col-lg-3 col-sm-6 col-md-4" key={key} >
                    <div className="product-card">
                        <Link className="thumb"  href={`/brands/${item.slug}`} >
                          <a ><img src={`${item.thumbnail}`}  /> </a>
                        </Link>
                        <div className="product-content text-center ">
                            <h3 className="mb-1 product-title">
                                <Link href={`/brands/${item.slug}`} >{item.title}</Link>
                            </h3>
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
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/all`);
//       const apiData = await res.json();
//       return {
//           props:{
//               apiData,
//           }
//       }
// }


 export async function getServerSideProps(){

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/brands/all`);
  const apiData = await res.json();

       return {
           props:{
            apiData,
           }
       }
 }
