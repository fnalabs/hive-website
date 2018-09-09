import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { TopHero } from './TopHero.jsx'
import { MidHero } from './MidHero.jsx'
import NextPageHero from '../NextPageHero.jsx'

import meta from '../../../metadata.json'

export const Home = () => {
  const { description, url } = meta['/']
  const siteName = meta.common.siteName

  return (
    <Fragment>
      <Helmet>
        <title>{siteName}</title>
        <meta name='description' content={description} />

        <meta property='og:title' content={siteName} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content={siteName} />
        <meta property='og:url' content={url} />
        <meta property='og:type' content='website' />
      </Helmet>

      <TopHero />
      <MidHero />

      <NextPageHero link='/overview' />
    </Fragment>
  )
}
