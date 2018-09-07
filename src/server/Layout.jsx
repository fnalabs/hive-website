import React from 'react'

import { Nav, Footer } from '../assets/components/layout'
import { Routes } from '../assets/components/Routes.jsx'

import styles from '../assets/styles/main.scss'

export const Layout = () => (
  <html>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <style dangerouslySetInnerHTML={{ __html: styles._getCss() }} />

      <link rel='apple-touch-icon-precomposed' sizes='152x152' href='https://fnalabs.github.io/fnalabs-assets/assets/hive/favicon.152x152.png' />
      <link rel='apple-touch-icon-precomposed' sizes='144x144' href='https://fnalabs.github.io/fnalabs-assets/assets/hive/favicon.144x144.png' />
      <link rel='apple-touch-icon-precomposed' sizes='120x120' href='https://fnalabs.github.io/fnalabs-assets/assets/hive/favicon.120x120.png' />
      <link rel='apple-touch-icon-precomposed' sizes='114x114' href='https://fnalabs.github.io/fnalabs-assets/assets/hive/favicon.114x114.png' />
      <link rel='apple-touch-icon-precomposed' sizes='72x72' href='https://fnalabs.github.io/fnalabs-assets/assets/hive/favicon.72x72.png' />
      <link rel='apple-touch-icon-precomposed' sizes='57x57' href='https://fnalabs.github.io/fnalabs-assets/assets/hive/favicon.57x57.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='https://fnalabs.github.io/fnalabs-assets/assets/hive/favicon.32x32.png' />
    </head>

    <body>

      <div id='main'>
        <Nav />
        <Routes />
        <Footer />
      </div>

      <script src='./main.js' />
    </body>
  </html>
)
