import React, { Fragment } from 'react'

import { Info } from 'icons'

export const Setup = () => (
  <Fragment>
    <div className='notification'>
      <span className='icon'><Info className='svg-inline' /></span>
      <span>The Development process for business logic only requires a Text Editor or IDE that supports JavaScript and Node.js/Docker. The rest of the instructions outlined here provide infrastructure details for installation and deployment.</span>
    </div>

    <h3>Prerequisites</h3>
    <p>The prerequisites vary depending on the architecture. All implementations require Docker of some form. Whether it is just pure Docker, Docker Swarm, or Kubernetes is up to you. It is also strongly recommended you use a load balancer of some sort since the whole purpose of the framework is horizontal scalability.</p>

    <h5>Cloud Platforms</h5>
    <dl>
      <dt><em><strong>Required</strong></em></dt>
      <dd><a href='https://www.docker.com/' target='_blank'>Docker</a></dd>

      <dt><em><strong>Recommended</strong></em></dt>
      <dd><a href='https://docs.docker.com/engine/swarm/' target='_blank'>Swarm</a>, <a href='https://kubernetes.io/' target='_blank'>Kubernetes</a>, or a <a href='https://en.wikipedia.org/wiki/Category:Cloud_computing_providers' target='_blank'>cloud service provider</a></dd>
    </dl>

    <h5>More</h5>
    <p>Once you decide on your cloud platform, you're ready to start building and deploying your application services and dependencies. Hive<sup>io</sup> will integrate well with many of the <a href='https://www.cncf.io/projects/' target='_blank'>cloud-native projects</a> and <a href='https://hub.docker.com/' target='_blank'>other containerized services</a>.</p>

    <h3>Installing</h3>
    <p>Hive<sup>io</sup> has minimal requirements for installation, allowing you to choose the solutions that suits your needs regarding storage, security, monitoring, and more. Once you have your cloud platform decided, you can start to code your business logic that will eventually be deployed with one of the container types below.</p>
    <dl>
      <dt><a href='https://hub.docker.com/r/fnalabs/hive-rest-js/' target='_blank'><em><strong>RESTful</strong></em></a></dt>
      <dd><pre>$ docker pull fnalabs/hive-rest-js:&lt;[release]|latest&gt;</pre></dd>

      <dt><a href='https://hub.docker.com/r/fnalabs/hive-producer-js/' target='_blank'><em><strong>CQRS/ES Producer</strong></em></a></dt>
      <dd><pre>$ docker pull fnalabs/hive-producer-js:&lt;[release]|latest&gt;</pre></dd>

      <dt><a href='https://hub.docker.com/r/fnalabs/hive-consumer-js/' target='_blank'><em><strong>CQRS/ES Consumer</strong></em></a></dt>
      <dd><pre>$ docker pull fnalabs/hive-consumer-js:&lt;[release]|latest&gt;</pre></dd>

      <dt><a href='https://hub.docker.com/r/fnalabs/hive-stream-processor-js/' target='_blank'><em><strong>CQRS/ES Stream Processor</strong></em></a></dt>
      <dd><pre>$ docker pull fnalabs/hive-stream-processor-js:&lt;[release]|latest&gt;</pre></dd>
    </dl>
    <p>So far, the list above defines some common types of microservices you may need. Future versions of the framework will add more types to the above and add support for multiple languages.</p>
  </Fragment>
)
