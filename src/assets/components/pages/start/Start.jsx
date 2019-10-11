import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import { Container } from 'common'

import { Setup } from './Setup'
import { ExampleREST } from './ExampleREST'
import { ExampleCQRS } from './ExampleCQRS'
import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Start extends Component {
  componentDidMount () {
    if (Cookies.get('CookieConsent')) {
      const title = `${meta['/start'].title} | ${meta.common.siteName}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/start']
    const siteName = meta.common.siteName

    return (
      <>
        <Helmet>
          <title>{title} | {siteName}</title>
          <meta name='description' content={description} />
          <link rel='canonical' href={url} />

          <meta property='og:title' content={`${title} | ${siteName}`} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={siteName} />
          <meta property='og:url' content={url} />
          <meta property='og:type' content='website' />
        </Helmet>

        <article className='section has-nav-spacing'>
          <Container content>
            <h1>Get Started</h1>
            <p>This page contains prerequisites, installation instructions, a few examples and links to more examples to get you started with Hive<sup>io</sup>. The examples provided cover the basics of RESTful and CQRS/ES architectures. Descriptions are also provided on how to extend the concepts to future iterations to express the evolution of a project.</p>
            <Setup />

            <h3>Examples</h3>
            <p>A few examples are provided below to help you get started. Additionally, there are links to some sample projects to provide an in-depth look at implementation details.</p>
            <ExampleREST />
            <ExampleCQRS />
          </Container>
        </article>

        <NextPageHero to='https://fnalabs.github.io/hive-js/' />
      </>
    )
  }
}
