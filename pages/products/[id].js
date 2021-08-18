import React,{useContext,useRef} from "react";
import Link from 'next/link';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useSelector,useDispatch} from 'react-redux';
import {add_cart} from '../../store/actions/CartAction'

export default function Product({product}) {

    const dispatch = useDispatch();
    const quantity = useRef();

    console.log(product);
    const router = useRouter();
    if(router.isFallback){
        return <div>Loading</div>
    }

    const data = product.data;

    <style jsx >{`
    
            .product-count.style input {
                color: #1d1d1d;
                background-color: #fff;
                height: 40px;
                padding: 10px 6px 10px 10px;
                width: 70px;
                border: 1px solid #ebebeb;
                display: block;
                text-align: center;
            }
    
    `}
    </style>
    

    const cartAdd = () => {

      dispatch(add_cart({
        id : data.id,
        title : data.title,
        slug : data.slug,
        quantity : quantity.current.value,
        price : data.price,
        thumbnail: `${data.thumbnail}`,
        }));

        quantity.current.value = 1;

    }


    return (
        <>
        <Head>
         <title>{data.title}</title>
        </Head>
           <main>
                <nav className="breadcrumb-section section-py bg-light2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="bread-crumb-title">Products</h3>
                                <ol className="breadcrumb bg-transparent justify-content-center m-0 p-0 align-items-center">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{data.title}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="py-5 single-product-wrap">
                     <div className="container wrapper">
                         <div className="row mb-n10">       
                            <div className="col-lg-5 mb-10 text-center ">
                                <img src={data.thumbnail}  />
                            </div>
                            <div className="col-lg-7 mb-10">
                                <div className="content">
                                    <h3 className="py-2 title">{data.title}</h3>
                                      <p className="reference">Category:

                                        {  data.category != null ? data.category.map((category,key) => {

                                            return <span> <Link  href={`/categories/${category.slug}`} >{category.title}</Link>, </span> 
                                        })

                                      : ''}
                                    </p>

                                    <p className="reference">Tags:

                                        {  data.tags != null ? data.tags.map((tags,key) => {

                                            return <span> <Link  href={`/tags/${tags.slug}`} >{tags.title}</Link>,</span> 
                                        })

                                      : ''}
                                    </p>

                                    <p className="reference">Brands:

                                        {  data.brands != null ? data.brands.map((brands,key) => {

                                            return <span> <Link  href={`/brands/${brands.slug}`} >{brands.title}</Link>,</span> 
                                        })

                                      : ''}
                                    </p>

                                    <div className="mb-4">
                                        <span className="price-lg regular-price d-inline-block mx-1">
                                            ${data.price.toFixed(2)}
                                        </span>
                                    </div>
                                    <p className="border-bottom pb-4">{data.excerpt}</p>
                                    <h4 className="modal-quantity">Quantity</h4>
                                    <div className="product-count style d-flex my-4">
                                    <div className="count d-flex">
                                        <input ref={quantity} type="number" min={1} max={100} step={1} defaultValue={1} />
                                    </div>
                                    <div>
                                        <button onClick={cartAdd} className="btn btn-warning btn-hover-primary text-uppercase"> Add To Cart </button>
                                    </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-py">
                    <div className="container wrapper">
                    <div className="row">
                        <div className="col-12">
                        <ul className="nav nav-tabs single-product-tab justify-content-center" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                            <a className="nav-link" data-bs-toggle="tab" href="#description" role="tab">Description</a>
                            </li>
                            <li className="nav-item" role="presentation">
                            <a className="nav-link active" data-bs-toggle="tab" href="#productdetails" role="tab">Features</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="tab-content" id="myTabContent">

                        <div className="tab-pane fade show active" id="description" role="tabpanel">
                        <div className="row">
                            <div className="col-12">
                            <div className="single-product-desc">
                                <p>   { data.des.replace(/(<([^>]+)>)/gi, "")  }</p>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="tab-pane fade " id="productdetails" role="tabpanel">
                        <div className="row">
                            <div className="col-12">
                            <div className="single-product-desc">
                                <div className="product-anotherinfo-wrapper">
                                    { 
                                    data.attributes != null ?
                                        <ul>
                                            {
                                            Object.values(data.attributes).map((item,key) => {     
                                                return <li key={key} ><span>{item['key'].toUpperCase()}</span> {item['value']}</li>
                                            })
                                            }
                                        </ul> : ''
                                    }
                                </div>
                            </div>
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


// export async function getStaticProps(){
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/items/all`);
//     const products = await res.json();
//     return {
//         props:{
//             products,
//         }
//     }
// }


export async function getServerSideProps({query}) {
   
    const {id} = query;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/items/get/${id}`);  
    const product = await res.json();
    return {
        props:{
            product,
        },
    }
  }