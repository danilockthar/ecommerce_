import Head from 'next/head'
import {Container} from 'semantic-ui-react'
import Header from './Header'

export default ({children, title = ''}) => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <title>{title}</title>
        </Head>
        <Header />
        {children} 
    </div>
)