import React, { Fragment } from 'react'

export const ExampleREST = () => (
  <Fragment>
    <h4>REST example</h4>
    <p>Let's start with a REST service. The code below describes a minimal implementation of the business logic and infrastructure as code to implement a REST service.</p>

    <h5><a href='https://www.npmjs.com/package/hive-io-rest-example' target='_blank'>Business Logic</a> (<a href='https://github.com/fnalabs/hive-js-rest-example' target='_blank'>Source Code</a>)</h5>
    <div className='notification'>
      <span className='icon'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='svg-inline'><path fill='#209cee' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z' /></svg>
      </span>
      <span>You should consider using a private NPM registry or implementing more creative solutions such as extending base Docker images with <code>ADD</code>|<code>COPY</code> statements for source code and <code>npm link</code> for your business logic.</span>
    </div>

    <h5>Infrastructure</h5>
    <dl>
      <dt><code>Dockerfile</code></dt>
      <dd>
        <pre>FROM fnalabs/hive-rest-js:latest<br />
RUN npm install hive-io-rest-example</pre>
      </dd>

      <dt><code>docker-compose.yml</code></dt>
      <dd>
        <pre>version: '3.5'<br />
services:<br />
&nbsp;&nbsp;hive-rest-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-rest-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO_URL: 'mongodb://mongo:27017/post'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_HOST: fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_PORT: 24224<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_TIMEOUT: 3.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_RECONNECT: 600000<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 80:3000<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;fluentd:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: fluent/fluentd:v1.2.1<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br />
&nbsp;&nbsp;mongo:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: mongo:3.6.5<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br />
# networking specifics<br />
networks:<br />
&nbsp;&nbsp;hive-io:<br />
&nbsp;&nbsp;&nbsp;&nbsp;driver: bridge</pre>
      </dd>
    </dl>
  </Fragment>
)
