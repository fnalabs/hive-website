import React from 'react'

import { Info } from 'icons'

export const ExampleCQRS = () => (
  <>
    <h4>CQRS/ES Example</h4>
    <p>This example evolves the previous REST example into a highly distributed architecture in order to handle different magnitudes of network traffic.</p>

    <h5><a href='https://www.npmjs.com/package/hive-io-domain-example' target='_blank' rel='noopener noreferrer'>Business Logic</a> (<a href='https://github.com/fnalabs/hive-js-domain-example' target='_blank' rel='noopener noreferrer'>Source Code</a>)</h5>
    <div className='notification'>
      <span className='icon'><Info className='svg-inline' /></span>
      <span>You should consider using a private NPM registry or implementing more creative solutions such as extending base Docker images with <code>ADD</code>|<code>COPY</code> statements for source code and <code>npm link</code> for your business logic.</span>
    </div>

    <h5>Infrastructure</h5>
    <dl>
      <dt><code>Producer.dockerfile</code></dt>
      <dd>
        <pre>FROM fnalabs/hive-producer-js:latest<br />RUN npm install hive-io-domain-example</pre>
      </dd>

      <dt><code>Stream-Processor.dockerfile</code></dt>
      <dd>
        <pre>FROM fnalabs/hive-stream-processor-js:latest<br />RUN npm install hive-io-domain-example</pre>
      </dd>

      <dt><code>Consumer.dockerfile</code></dt>
      <dd>
        <pre>FROM fnalabs/hive-consumer-js:latest<br />RUN npm install hive-io-domain-example</pre>
      </dd>

      <dt><code>Rest.dockerfile</code></dt>
      <dd>
        <pre>FROM fnalabs/hive-rest-js:latest<br />RUN npm install hive-io-domain-example</pre>
      </dd>

      <dt><code>docker-compose.yml</code></dt>
      <dd>
        <pre>version: '3.5'<br />
services:<br />
&nbsp;&nbsp;# proxy for layer 7 routing<br />
&nbsp;&nbsp;hive-io-proxy:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: fnalabs/hive-io-proxy:latest<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-producer-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-rest-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-stream-processor-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 80:80<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br />
&nbsp;&nbsp;fluentd:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: fluent/fluentd:v1.2.1<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# producers<br />
&nbsp;&nbsp;hive-producer-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Producer.dockerfile<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-producer-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_URL: 'kafka:9092'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_ID: 'producer-client'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_HOST: fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_PORT: 24224<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_TIMEOUT: 3.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_RECONNECT: 600000<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- kafka<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br /><br />
&nbsp;&nbsp;# stream processors<br />
&nbsp;&nbsp;hive-stream-processor-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Stream-Processor.dockerfile<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-stream-processor-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CACHE_URL: 'redis://redis:6379'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_URL: 'kafka:9092'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_ID: stream-processor-client<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_HOST: fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_PORT: 24224<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_TIMEOUT: 3.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_RECONNECT: 600000<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- redis<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- kafka<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;redis:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: redis:4.0.9-alpine<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# log stream containers<br />
&nbsp;&nbsp;kafka:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: confluentinc/cp-kafka:4.1.1-2<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- zookeeper<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br />
&nbsp;&nbsp;zookeeper:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: confluentinc/cp-zookeeper:4.1.1-2<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ZOOKEEPER_CLIENT_PORT: 2181<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# consumers<br />
&nbsp;&nbsp;hive-consumer-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Consumer.dockerfile<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-consumer-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO_URL: 'mongodb://mongo:27017/post'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_URL: 'kafka:9092'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_ID: consumer-client<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_OFFSET: earliest<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_HOST: fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_PORT: 24224<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_TIMEOUT: 3.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_RECONNECT: 600000<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- kafka<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;mongo:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: mongo:3.6.5<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# rest services<br />
&nbsp;&nbsp;hive-rest-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Rest.dockerfile<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-rest-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR: PostQueryActor<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_LIB: hive-io-domain-example<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO_URL: 'mongodb://mongo:27017/post'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_HOST: fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_PORT: 24224<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_TIMEOUT: 3.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_RECONNECT: 600000<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br /><br />
# networking specifics<br />
networks:<br />
&nbsp;&nbsp;hive-io:<br />
&nbsp;&nbsp;&nbsp;&nbsp;driver: bridge
        </pre>
      </dd>
    </dl>
  </>
)
