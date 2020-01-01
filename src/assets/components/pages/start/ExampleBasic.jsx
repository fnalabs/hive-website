import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'

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

  renderBreadcrumbs () {
    return (
      <>
        <li><Link to='/start'>Get Started</Link></li>
        <li><Link to='/setup'>Setup</Link></li>
        <li className='is-active'><Link to='/basic' aria-current='page'>Basic</Link></li>
        <li><Link to='/rest'>REST</Link></li>
        <li><Link to='/cqrs-es'>CQRS/ES</Link></li>
      </>
    )
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

        <article className='section is-fullheight is-medium'>
          <Container content>
            <h1>Example: Basic</h1>
            <p>Let's start off with a straight forward example. The following <a href='https://fnalabs.github.io/hive-js/Actor.html' target='_blank' rel='noopener noreferrer'>Actor</a> and its associated <a href='http://json-schema.org/' target='_blank' rel='noopener noreferrer'>JSON Schema</a> are performing superficial validation against the schema and returning an instance of the Model.</p>
            <dl>
              <dt><code>ExampleSchema.json</code></dt>
              <dd>
                <pre>&lbrace;<br />
&nbsp;&nbsp;"title": "Model",<br />
&nbsp;&nbsp;"description": "Example Schema for a Model",<br />
&nbsp;&nbsp;"$id": "https://example.com/example/url/for/schema/hosting",<br />
&nbsp;&nbsp;"type": "object",<br />
&nbsp;&nbsp;"properties": &lbrace;<br />
&nbsp;&nbsp;&nbsp;&nbsp;"data": &lbrace;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "string"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;<br />
&nbsp;&nbsp;&rbrace;,<br />
&nbsp;&nbsp;"required": ["data"],<br />
&nbsp;&nbsp;"additionalProperties": false<br />
&rbrace;</pre>{/* eslint-disable-line react/jsx-closing-tag-location */}
              </dd>

              <dt><code>ExampleActor.js</code></dt>
              <dd>
                <pre>import &lbrace; Actor, Schema &rbrace; from 'hive-io'<br />
import ExampleSchema from './ExampleSchema.json'<br /><br />
class ExampleActor extends Actor &lbrace;<br />
&nbsp;&nbsp;async perform (_model, data) &lbrace;<br />
&nbsp;&nbsp;&nbsp;&nbsp;data.type = 'Model' // set data type<br />
&nbsp;&nbsp;&nbsp;&nbsp;const model = await super.perform(_model, data) // assuming `_model` is undefined, create a new model with data<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;return &lbrace; model &rbrace;<br />
&nbsp;&nbsp;&rbrace;<br />
&rbrace;<br /><br />
export default new Proxy(ExampleActor, &lbrace; // we use Proxy here since<br />
&nbsp;&nbsp;construct: async function (ExampleActor) &lbrace; // JSON Schemas can be fetched<br />
&nbsp;&nbsp;&nbsp;&nbsp;const exampleSchema = await new Schema(ExampleSchema) // from a network location<br />
&nbsp;&nbsp;&nbsp;&nbsp;return new ExampleActor(exampleSchema) // once constructed, this Actor will take any data in the shape of the JSON Schema above<br />
&nbsp;&nbsp;&rbrace;
&rbrace;)</pre>{/* eslint-disable-line react/jsx-closing-tag-location */}
              </dd>
            </dl>
            <p>Now that we've taken a quick look at some straight forward domain logic with JSON Schemas and Actors, let's add to this with a fully functional REST service example.</p>
          </Container>
        </article>

        <NextPageHero breadcrumbs={this.renderBreadcrumbs} toLeft='/setup' toRight='/rest' />
      </>
    )
  }
}
