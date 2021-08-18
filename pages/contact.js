import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {toast} from 'react-toastify';


export default function Contact() {

  const submit = (e) => {
      
       e.preventDefault();
       document.querySelector(".myform").reset();
       toast.success("Form Submitted Successfully");
  }


  return (

    <>
      <Head>
        <title>Contact</title>
      </Head>

      <main className={styles.main}>
            <div>
              <nav className="breadcrumb-section section-py bg-light2">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="bread-crumb-title">contact</h3>
                      <ol className="breadcrumb bg-transparent justify-content-center m-0 p-0 align-items-center">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">contact</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="map section-pt">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5480490037507!2d90.42897841550803!3d23.76349088458297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78ab2187d4d%3A0x4d5f8a6c610c144b!2sHasTech%20Digital%20Item%20%26%20Service%20Provider!5e0!3m2!1sen!2sua!4v1595747193974!5m2!1sen!2sua" />
              </div>
        
              <section className="contact-section section-py">
                <div className="container">
                  <div className="row mb-n7">
                    <div className="col-lg-6 mb-7">
                      <div className="contact-title-section">
                        <h3 className="title">Get in touch</h3>
                        <p>Top rated construction packages we pleasure rationally encounter <br className="d-none d-xl-block" /> consequences interesting who loves or pursue or desires
                        </p>
                      </div>
                      <form onSubmit={submit} className="myform row"  >
                        <div className="col-12 col-sm-6 mb-7">
                          <input required type="text" className="form-control" name="name" placeholder="Your Name*" />
                        </div>
                        <div className="col-12 col-sm-6 mb-7">
                          <input required type="text" className="form-control" name="email" placeholder="Your Email*" />
                        </div>
                        <div className="col-12 mb-9">
                          <textarea required className="form-control massage-control" name="massage"  cols={30} rows={10} placeholder="Message" defaultValue={""} />
                        </div>
                        <div className="col-12">
                          <button id="contactSubmit" type="submit" className="btn btn-warning btn-hover-primary">
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6 mb-7">
                      <div className="contact-address text-center">
                        <div className="address-list mb-4 mb-xl-10 pb-2">
                          <h4 className="title">Office Addres</h4>
                          <p>
                            245 Southern Street, Apartment no. 174 Central Twon, New
                            Yourk, USa
                          </p>
                        </div>
                        <div className="address-list mb-4 mb-xl-10 pb-2">
                          <h4 className="title">Phone Number</h4>
                          <ul>
                            <li>
                              <a className="phone-number" href="tel:+12345678987">+12345 678 987</a>
                            </li>
                            <li>
                              <a className="phone-number" href="tel:+98745612321">+98745 612 321</a>
                            </li>
                          </ul>
                        </div>
                        <div className="address-list">
                          <h4 className="title">Web Address</h4>
                          <ul>
                            <li>
                              <a className="mailto" href="mailto:info@example.com">info@example.com</a>
                            </li>
                            <li>
                              <a className="mailto" href="mailto:www.example.com">www.example.com</a>
                            </li>
                          </ul>
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
