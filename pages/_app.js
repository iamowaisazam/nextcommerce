import "../styles/globals.css";
import Layout from "../components/Layout";
import store from '../store/index';
import {Provider } from 'react-redux';

import NProgress from 'nprogress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router  from "next/router";

NProgress.configure({ 
  minimum: 0.5 ,
  showSpinner: false

});


Router.onRouteChangeStart = url => {
  NProgress.start();
  console.log(url);
}

Router.onRouteChangeComplete = url => {
  NProgress.done();
}

Router.onRouteChangeError = url => {
  NProgress.done();
}

function MyApp({ Component, pageProps }) {

  return (
          <Provider store={store} >
                <Layout>
                    <div className="">
                      <Component {...pageProps} />
                    </div>
                    <ToastContainer autoClose={2000}/>
                </Layout>
          </Provider>
        );
}

export default MyApp;