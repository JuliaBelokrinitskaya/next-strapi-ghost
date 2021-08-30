import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

type DocumentProps = DocumentInitialProps & {
  pageProps?: any;
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    let pageProps = null;

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) =>
          function withProps(props) {
            pageProps = props.pageProps;
            return <App {...props} />;
          },
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, pageProps };
  }

  render() {
    const { pageProps = {} } = this.props as DocumentProps;
    const lang =
      pageProps && pageProps.page
        ? `${pageProps.page.lang}-${pageProps.page.branch}`
        : 'en-SG';

    return (
      <Html lang={lang}>
        <Head />
        <body className="page">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
