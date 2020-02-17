import { ServerStyleSheets } from '@material-ui/styles'
import theme from 'consts/theme'
import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import flush from 'styled-jsx/server'

/** overrides Next.js's default server-side rendered document markup */
class MyDocument extends Document {
  static async getInitialProps (ctx) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <>
          {sheets.getStyleElement()}
          {flush() || null}
        </>
      )
    }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
          {/* Import CSS for nprogress */}
          <link
            rel='stylesheet'
            type='text/css'
            href='/static/nprogress.css'
          />{' '}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
