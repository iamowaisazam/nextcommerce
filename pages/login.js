import axios from 'axios';
import Head from 'next/head'
import Link from 'next/link'


export default function Login(props) {


    const  handle = async (e) => {
       
      e.preventDefault();
      
      let auth = {
          email:e.target.email.value,
          password:e.target.password.value,
      };

      axios({ 
          method: 'post',
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
          data: auth,
          responseType: 'json'
       }).then(function (response) {
           console.log(response.data);
      })
      .catch(function (error) {
        let errormessage = error.response.data.message; 
        if(errormessage != undefined){
            alert(errormessage)
         }
        
      });
      
 
}
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
                                <form onSubmit={handle} >
                                    <input required type="email" name="email" placeholder="Email" />
                                    <input required type="password" name="password" placeholder="Password" />
                                    <div className="button-box">
                                        <div className="login-toggle-btn">
                                           <Link href="/forget-password">Forgot Password?</Link>
                                        </div>
                                        <button type="submit" className="btn btn-warning btn-hover-primary">
                                          <span>Submit</span>
                                        </button>
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
