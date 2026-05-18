import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'

import { remoteBlock, remoteNotification } from '../../remotes'

const Block = lazy(remoteBlock)
const Notification = lazy(remoteNotification)

const Basic: FC = () => (
  <>
    <title>FnA Labs | Hive^io - Example: Basic</title>
    <meta name="description" content="A straightforward example implementation of Actors and Models with Hive^io: a reactive, cloud-native framework." />

    <Block article content>
      <h1>Example: Basic</h1>
      <p>Let's start off with a straightforward example. The following <Link to='https://fnalabs.github.io/hive-io/Actor.html' target='_blank' rel='noopener noreferrer'>Actor</Link> and its associated <Link to='http://json-schema.org/' target='_blank' rel='noopener noreferrer'>JSON Schema</Link> are performing superficial validation against the schema and returning an instance of the Model.</p>
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
&#125;</pre>
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
&#125;)</pre>
        </dd>
      </dl>

      <Notification color='info' light>Please note the use of <code>Proxy</code> in the <code>ExampleActor</code> definition above. Due to the asynchronous requirement of Schemas, specifically that they can be hosted in a Schema Registry, <code>Proxy</code> is used to give us the ability to define asynchronous constructors to satisfy that requirement.</Notification>

      <p>Now that we've taken a quick look at some straightforward domain logic with JSON Schemas and Actors, let's add to this with a fully functional REST service example.</p>
    </Block>
  </>
)
export default Basic
