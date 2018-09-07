import React, { Fragment } from 'react'

export const Infrastructure = () => (
  <Fragment>
    <h3>Infrastructure</h3>
    <p>Here are the execution environments for the business logic described previously. Hive<sup>io</sup> is designed to manage infrastructure as code through the base <a href='https://www.docker.com/' target='_blank'>Docker</a> images defined. These images are meant to be extended to include your business logic and additional code dependencies. Depending on the type of container, there are a few opinions made here too.</p>

    <h5>Specialized Containers</h5>
    <p>Base images for specific service types have been defined to provide the basic boilerplate service definition for your application. It also ensures a common interface is maintained between the service and actor. For CQRS/ES architectures, some opinions on storage solutions have been made.</p>
    <dl>
      <dt><em><strong>RESTful</strong></em></dt>
      <dd>The least opinionated of them all. This wraps your actor(s) to provide a straightforward, RESTful interface and standardizes the network payload before calling your actor to perform.</dd>

      <dt><em><strong>Producer</strong></em></dt>
      <dd>This supports the creation of unordered messages in a CQRS/ES implementation. Validation here is only <a href='http://danielwhittaker.me/2016/04/20/how-to-validate-commands-in-a-cqrs-application/' target='_blank'>superficial</a> and defaults to using queues to batch messages for increased performance.</dd>

      <dt><em><strong>Consumer</strong></em></dt>
      <dd>Message consumption is defined in this image for a CQRS/ES implementation. It is highly recommended that these services be isolated to only message consumption but can support queries against the data as well.</dd>

      <dt><em><strong>Stream Processor</strong></em></dt>
      <dd>This supports a variety of needs in a CQRS/ES implementation. <a href='http://danielwhittaker.me/2016/04/20/how-to-validate-commands-in-a-cqrs-application/' target='_blank'>Domain validation</a> can be achieved through the use of the transaction cache dependency (<a href='https://redis.io/' target='_blank'>Redis</a>). CQRS/ES Process Managers and Sagas can be implemented here too.</dd>
    </dl>

    <h5>Unified Transaction Log</h5>
    <p>The <a href='https://www.confluent.io/blog/event-sourcing-cqrs-stream-processing-apache-kafka-whats-connection/' target='_blank'>unified transaction log</a> is the centralized storage solution that is the foundation of the CQRS/ES pattern. Think of it as the backbone in your central nervous system. All of your body parts and organs that connect to this backbone are made up of the different microservice types described above. The transaction log's job is to handle multiple inputs/outputs to each of these microservice types while providing the persistence layer. Events are stored here once they have been validated by their producers and are read from here by their consumers.</p>
    <p>Here is where our last opinions are made with Kafka and Redis as the unified transaction log and cache respectively. The Stream Processor has implemented a solution leveraging the <a href='https://en.wikipedia.org/wiki/X/Open_XA' target='_blank'>eXtended Architecture (XA)</a> distributed transaction model via <a href='https://en.wikipedia.org/wiki/Snapshot_isolation' target='_blank'>snapshot isolation</a> and <a href='https://en.wikipedia.org/wiki/Two-phase_commit_protocol' target='_blank'>two-phase commit</a> techniques to provide domain validation and event order guarantees. The Redis implementation leverages the <a href='https://redis.io/topics/distlock' target='_blank'>Redlock algorithm</a> as the <a href='https://en.wikipedia.org/wiki/Distributed_lock_manager' target='_blank'>distributed lock</a>ing mechanism to support these techniques.</p>
  </Fragment>
)
