import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'

import { remoteBlock, remoteNotification } from '../../remotes'

const Block = lazy(remoteBlock)
const Notification = lazy(remoteNotification)

const Rest: FC = () => (
  <>
    <title>FnA Labs | Hive^io - Example: REST</title>
    <meta name="description" content="A REST example implementation with Hive^io: a reactive, cloud-native framework." />

    <Block article content>
      <h1>Example: REST</h1>
      <p>Let's expand on the Basic example with a REST service. The code below describes a minimal implementation of the domain logic and infrastructure as code to implement a REST service.</p>

      <h2 id='source_code'><Link to='https://www.npmjs.com/package/hive-io-rest-example' target='_blank' rel='noopener noreferrer'>Domain Logic</Link> (<Link to='https://github.com/fnalabs/hive-io/tree/master/packages/hive-js-rest-example' target='_blank' rel='noopener noreferrer'>Source Code</Link>)</h2>

      <Notification color='info' light>You should consider using a private NPM registry or implementing more creative solutions such as extending base Docker images with <code>ADD</code>|<code>COPY</code> statements for source code or <code>npm link</code> for your domain logic.</Notification>

      <h2 id='infrastructure'><Link to='https://github.com/fnalabs/hive-io/tree/master/dev/docker/rest/production' target='_blank' rel='noopener noreferrer'>Infrastructure</Link></h2>
      <dl>
        <dt><code>Dockerfile</code></dt>
        <dd>
          <pre>FROM fnalabs/hive-base-js:latest<br />RUN npm install hive-io-rest-example</pre>
        </dd>

        <dt><code>docker-compose.yml</code></dt>
        <dd>
          <pre>version: '3.5'<br />
services:<br />
&nbsp;&nbsp;hive-base-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-base-js:production<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: hive-base-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR: ContentActor<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_LIB: hive-io-rest-example<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_URLS: "/contents,/contents/:id"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP_VERSION: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECURE: "false"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY: "true"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY_URL_METRICS: "http://collector:55681/v1/metrics"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY_URL_TRACES: "http://collector:55681/v1/trace"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO_URL: 'mongodb://mongo:27017/content'<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- collector<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 80:3000<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;mongo:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: mongo:4.4.2<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# telemetry<br />
&nbsp;&nbsp;# NOTE: you will need to provide a configuration for the collector<br />
&nbsp;&nbsp;#       see https://github.com/fnalabs/hive-io/blob/master/dev/collector/collector-config.yml<br />
&nbsp;&nbsp;collector:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: otel/opentelemetry-collector:0.16.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: collector<br />
&nbsp;&nbsp;&nbsp;&nbsp;command: ["--config=/conf/collector-config.yml", "--log-level=ERROR"]<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- zipkin<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br />
&nbsp;&nbsp;zipkin:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: openzipkin/zipkin:2.23.1<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: zipkin<br />
&nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 9411:9411<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
# networking<br />
networks:<br />
&nbsp;&nbsp;hive-io:<br />
&nbsp;&nbsp;&nbsp;&nbsp;driver: bridge</pre>
        </dd>
      </dl>
    </Block>
  </>
)
export default Rest
