import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { Container } from '../../common'

import { Intro } from './Intro.jsx'
import { Business } from './Business.jsx'
import { Model } from './Model.jsx'
import { Infrastructure } from './Infrastructure.jsx'
import NextPageHero from '../NextPageHero.jsx'

import meta from '../../../metadata.json'

export const Overview = () => {
  const { title, description, url } = meta['/overview']
  const siteName = meta.common.siteName

  return (
    <Fragment>
      <Helmet>
        <title>{title} | {siteName}</title>
        <meta name='description' content={description} />

        <meta property='og:title' content={`${title} | ${siteName}`} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content={siteName} />
        <meta property='og:url' content={url} />
        <meta property='og:type' content='website' />
      </Helmet>

      <article className='section has-nav-spacing'>
        <Container content>
          <Intro />
          <Business />
          <Model />
          <Infrastructure />
        </Container>
      </article>

      <NextPageHero link='/start' />
    </Fragment>
  )
}
