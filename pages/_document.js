import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
        return (
              <Html>
                <Head>
                    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
                    <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
                    <link rel="stylesheet" href="/css/vendor/ionicons.css" />
                    <link rel="stylesheet" href="/css/vendor/linearicons-free.css" />
                    <link rel="stylesheet" href="/css/vendor/font-awesome.css" />
                    <link rel="stylesheet" href="/css/plugins/animate.min.css" />
                    <link rel="stylesheet" href="/css/plugins/swiper-bundle.min.css" />
                    
                    <link rel="stylesheet" href="/css/style.css" />
                    <link rel="stylesheet" href="/css/plugins/nprogress.css" />
                </Head>
                <body>
                  <Main />
                  <NextScript />
                    <script src="/js/vendor/vendor.min.js"></script>
                    <script src="/js/plugins/plugins.min.js"></script>
                    <script src="/js/ajax-contact.js"></script>
                    <script src="/js/main.min.js"></script>
               
                </body>
              </Html>
              );
         }
}

export default MyDocument;