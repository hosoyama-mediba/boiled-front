import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()

        let name = 'init'

        return { ...page, styleTags, name }
    }

    render() {
        return (
            <html lang="ja">
                <Head>
                    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0" />
                    <title>My page</title>
                    <style>{`
                        html, body, h1 { margin: 0; padding: 0; }
                    `}</style>
                    {this.props.styleTags}
                </Head>
                <body>
                    {this.props.name}
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
