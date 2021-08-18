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
         <title>Categories</title>
      </Head>
      <main>

        <nav className="breadcrumb-section section-py bg-light2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="bread-crumb-title">Categories </h3>
                <ol className="breadcrumb bg-transparent justify-content-center m-0 p-0 align-items-center">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Categories</li>
                </ol>
              </div>
            </div>
          </div>
        </nav>

        <section className="section-py ">
          <div className="mycontainer container">

              { 
                products.map((category,parentkey) => {
                    if(category.parent == 0){

                      return <div className="container-fluid" key={parentkey}  > 
                             <div className="container-fluid mb-3 " >
                               <h1> <Link href={`/categories/${category.slug}`} >{category.title}</Link> </h1>
                              </div>

                             <div className="row grid-view g-0 shop-grid-5">
                                { 
                                  products.map((childCategory,childkey) => {

                                      if(childCategory.parent == category.id ){

                                          return <div className=" col-sm-6 col-md-3" key={childkey} >
                                            
                                            <div className="product-card">
                                                <Link className="thumb"  href={`/categories/${childCategory.slug}`} >
                                                  <a ><img src={`${childCategory.thumbnail}`}  /> </a>
                                                </Link>
                                                <div className="product-content text-center ">
                                                    <h3 className="mb-1 product-title">
                                                        <Link href={`/categories/${childCategory.slug}`} >{childCategory.title}</Link>
                                                    </h3>
                                                </div>
                                            </div>
                                          </div>
                                        }
                                  })
                                }
                              </div>
                                
                            </div>
                       }
                })
              }
            
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

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/all`);
  const apiData = await res.json();

       return {
           props:{
            apiData,
           }
       }
 }
