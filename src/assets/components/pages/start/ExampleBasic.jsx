/* eslint-disable react/jsx-indent */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'
import { Info } from 'icons'

import AsideMenu from '../AsideMenu'
import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Basic extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/basic'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/basic']
    const siteName = meta.common.siteName

    return (
      <>
        <Helmet>
          <title>{siteName} | {title}</title>
          <meta name='description' content={description} />
          <link rel='canonical' href={url} />

          <meta property='og:title' content={`${siteName} | ${title}`} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={siteName} />
          <meta property='og:url' content={url} />
          <meta property='og:type' content='website' />
        </Helmet>

        <article className='section is-medium'>
          <Container>
            <div className='columns'>
              <header className='column is-narrow is-hidden-touch'>
                <AsideMenu />
              </header>
              <section className='column content' role='document'>
                <h1>Example: Basic</h1>
                <p>Let's start off with a straightforward example. The following <a href='https://fnalabs.github.io/hive-io/Actor.html' target='_blank' rel='noopener noreferrer'>Actor</a> and its associated <a href='http://json-schema.org/' target='_blank' rel='noopener noreferrer'>JSON Schema</a> are performing superficial validation against the schema and returning an instance of the Model.</p>
                <dl>
                  <dt><code>ExampleSchema.json</code></dt>
                  <dd>
                    <pre>&#123;<br />
&nbsp;&nbsp;"title": "Model",<br />
&nbsp;&nbsp;"description": "Example Schema for a Model",<br />
&nbsp;&nbsp;"$id": "https://example.com/example/url/for/schema/hosting",<br />
&nbsp;&nbsp;"type": "object",<br />
&nbsp;&nbsp;"properties": &#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;"data": &#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "string"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
&nbsp;&nbsp;&#125;,<br />
&nbsp;&nbsp;"required": ["data"],<br />
&nbsp;&nbsp;"additionalProperties": false<br />
&#125;</pre>{/* eslint-disable-line react/jsx-closing-tag-location */}
                  </dd>

                  <dt><code>ExampleActor.js</code></dt>
                  <dd>
                    <pre>import &#123; Actor, Schema &#125; from 'hive-io'<br />
import ExampleSchema from './ExampleSchema.json'<br /><br />
class ExampleActor extends Actor &#123;<br />
&nbsp;&nbsp;async perform (_model, data) &#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;data.type = 'Model' // set data type<br />
&nbsp;&nbsp;&nbsp;&nbsp;const model = await super.perform(_model, data)<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;return &#123; model &#125;<br />
&nbsp;&nbsp;&#125;<br />
&#125;<br /><br />
export default new Proxy(ExampleActor, &#123;<br />
&nbsp;&nbsp;construct: async function (ExampleActor) &#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;const exampleSchema = await new Schema(ExampleSchema)<br />
&nbsp;&nbsp;&nbsp;&nbsp;return new ExampleActor(exampleSchema)<br />
&nbsp;&nbsp;&#125;<br />
&#125;)</pre>{/* eslint-disable-line react/jsx-closing-tag-location */}
                  </dd>
                </dl>

                <div className='notification'>
                  <span className='icon'><Info className='svg-inline' /></span>
                  <span>Please note the use of <code>Proxy</code> in the <code>ExampleActor</code> definition above. Due to the asynchronous requirement of Schemas, specifically that they can be hosted in a Schema Registry, <code>Proxy</code> is used to give us the ability to define asynchronous constructors to satisfy that requirement.</span>
                </div>

                <p>Now that we've taken a quick look at some straightforward domain logic with JSON Schemas and Actors, let's add to this with a fully functional REST service example.</p>
              </section>
            </div>
          </Container>
        </article>

        <NextPageHero toLeft='/setup' toRight='/rest' />
      </>
    )
  }
}
