import Head from 'next/head'
import Link from 'next/link'


export default function About() {
  return (<>

      <Head>
        <title>About Us</title>
      </Head>
      <main >
         <div>
            <nav className="breadcrumb-section section-py bg-light2">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <h3 className="bread-crumb-title">ABOUT US</h3>
                    <ol className="breadcrumb bg-transparent justify-content-center m-0 p-0 align-items-center">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">ABOUT US</li>
                    </ol>
                </div>
                </div>
            </div>
            </nav>
         
            <section className="about-section section-py">
                <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-11 mx-auto">
                    <div className="about-content text-center">
                        <div className="about-left-image mb-7">
                           <img src="images/blog-details/large-1.jpg" alt="img" className="img-responsive" />
                        </div>
                        <div>
                        <h2 className="title mb-7">
                            We are a digital agency focused on delivering content and utility
                            user-experiences.
                        </h2>
                        <p className="mb-7">
                            Adipiscing lacus ut elementum, nec duis, tempor litora turpis
                            dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc
                            eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac
                            pede dis, praesent nibh ac dui mauris sit. Pellentesque mi,
                            facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac
                            fringilla torquent lorem consectetuer, sociosqu phasellus risus
                            urna aliquam, ornare.
                        </p>
                           <img src="images/blog-details/signature.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="static-media-section bg-primary section-py">
                <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 py-3">
                    <div className="d-flex static-media flex-column flex-sm-row">
                        <img className="align-self-center mb-2 mb-sm-0 me-auto me-sm-3" src="images/icon/2.png" alt="icon" />
                        <div className="media-body">
                        <h4 className="title text-capitalize text-white">Free Shipping</h4>
                        <p className="text text-white">On all orders over $75.00</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                    <div className="d-flex static-media flex-column flex-sm-row">
                        <img className="align-self-center mb-2 mb-sm-0 me-auto me-sm-3" src="images/icon/3.png" alt="icon" />
                        <div className="media-body">
                        <h4 className="title text-capitalize text-white">Free Returns</h4>
                        <p className="text text-white">Returns are free within 9 days</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                    <div className="d-flex static-media flex-column flex-sm-row">
                        <img className="align-self-center mb-2 mb-sm-0 me-auto me-sm-3" src="images/icon/5.png" alt="icon" />
                        <div className="media-body">
                        <h4 className="title text-capitalize text-white">Support 24/7</h4>
                        <p className="text text-white">Contact us 24 hours a day</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 py-3">
                    <div className="d-flex static-media flex-column flex-sm-row">
                        <img className="align-self-center mb-2 mb-sm-0 me-auto me-sm-3" src="images/icon/4.png" alt="icon" />
                        <div className="media-body">
                        <h4 className="title text-capitalize text-white">
                            100% Payment Secure
                        </h4>
                        <p className="text text-white">Your payment are safe with us.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="service-section section-py">
                <div className="container">
                <div className="row mb-n7">
                    <div className="col-sm-6 col-lg-4 mb-7">
                    <div className="single-blog">
                        <div className="single-thumb mb-4 zoom-in d-block overflow-hidden">
                        <img src="images/blog/1.jpg" alt="single-thumb-naile" />
                        </div>
                        <div className="single-service">
                        <h3 className="title text-capitalize mb-4">What do we do?</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-7">
                    <div className="single-blog">
                        <div className="single-thumb mb-4 zoom-in d-block overflow-hidden">
                        <img src="images/blog/2.jpg" alt="single-thumb-naile" />
                        </div>
                        <div className="single-service">
                        <h3 className="title text-capitalize mb-4">Our Mission</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-7">
                    <div className="single-blog">
                        <div className="single-thumb mb-4 zoom-in d-block overflow-hidden">
                        <img src="images/blog/3.jpg" alt="single-thumb-naile" />
                        </div>
                        <div className="single-service">
                        <h3 className="title text-capitalize mb-4">About Us</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            

          </div>
      </main>
    </>
  )
}
