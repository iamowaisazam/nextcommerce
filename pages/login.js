import Head from 'next/head'
import Link from 'next/link'


export default function Login() {
  return (<>

      <Head>
        <title>Login</title>
      </Head>
      <main >
         <div>
            <nav className="breadcrumb-section section-py bg-light2">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <h3 className="bread-crumb-title">Login</h3>
                        <ol className="breadcrumb bg-transparent justify-content-center m-0 p-0 align-items-center">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Login</li>
                        </ol>
                    </div>
                    </div>
                </div>
            </nav>
            <div className="login-register-area section-py">
                <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 mx-auto">
                    <div className="login-register-wrapper">
                        <div className="login-form-container">
                            <div className="login-register-form">
                                <form action="#" method="post">
                                    <input type="text" name="user-name" placeholder="Email" />
                                    <input type="text" name="user-password" placeholder="Password" />
                                    <div className="button-box">
                                        <div className="login-toggle-btn">
                                           <Link href="/forget-password">Forgot Password?</Link>
                                        </div>
                                        <a href="#" className="btn btn-warning btn-hover-primary">
                                        <span>Submit</span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div className="text-center" >
                                    <Link href="/register" > If You Dont Have Account</Link>
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
