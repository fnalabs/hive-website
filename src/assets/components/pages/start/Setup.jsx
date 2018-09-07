import React, { Fragment } from 'react'

export const Setup = () => (
  <Fragment>
    <div className='notification'>
      <span className='icon'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='svg-inline'><path fill='#209cee' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z' /></svg>
      </span>
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
