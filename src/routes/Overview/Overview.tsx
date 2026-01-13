import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'

import { remoteBlock } from '../../remotes'

const Block = lazy(remoteBlock)

const Overview: FC = () => (
  <>
    <title>FnA Labs | Hive^io - Overview</title>
    <meta name="description" content="Overview of Hive^io: a reactive, cloud-native framework. The following describes project tenets, background, and roadmap." />

    <Block article content>
      <h1>Overview</h1>
      <p>Hive<sup>io</sup> is a <Link to='https://www.reactivemanifesto.org/' target='_blank' rel='noopener noreferrer'>reactive</Link>, <Link to='https://www.cncf.io/blog/2017/05/15/developing-cloud-native-applications/' target='_blank' rel='noopener noreferrer'>cloud-native</Link> framework meant to foster and support lightweight, atomic <Link to='https://en.wikipedia.org/wiki/Microservices' target='_blank' rel='noopener noreferrer'>microservices</Link> from a project's inception onward. It consists of a small library of classes that provide the basic building blocks to interface with a small collection of containers, from straightforward <Link to='https://en.wikipedia.org/wiki/Representational_state_transfer' target='_blank' rel='noopener noreferrer'>RESTful</Link> services to specialized <Link to='https://martinfowler.com/bliki/CQRS.html' target='_blank' rel='noopener noreferrer'>CQRS</Link>/<Link to='https://martinfowler.com/eaaDev/EventSourcing.html' target='_blank' rel='noopener noreferrer'>ES</Link> services. The core tenets of this project are:</p>
      <ul>
        <li>Provide a framework of standard patterns to foster the creation and evolution of a cloud application.</li>
        <li>Provide a universal JavaScript library for standardized data exchanges.</li>
        <li>Define a clear separation between domain logic and infrastructure.</li>
        <li>Minimize opinions in the framework to support a variety of needs.</li>
        <li>Integrate with other cloud-native initiatives.</li>
      </ul>
      <p>Hive<sup>io</sup> provides flexibility and simplicity to promote <strong>rapid development</strong> with a focus on domain logic. Each part has clearly defined responsibilities and interfaces with respect to their counterparts.</p>

      <h2 id='background'>Background</h2>
      <p>This project is the culmination of my past experiences to improve upon existing technologies and techniques for enterprise architecture. The thought first came to me when I was exposed to distributed architecture in a production environment. The timing of this exposure was perfectly aligned with the release of Docker. While migrating my knowledge from VMs to containers, I started to deep dive into other technologies and techniques to bring the idea to life. Over the course of this journey, I've been able to implement a fully functional solution in this space. Once the concept was proven in v1, I immediately started planning for the version you see today. We are proud to present to you Hive<sup>io</sup>.</p>

      <h2 id='roadmap'>Roadmap</h2>
      <p>Below is a high level roadmap for the project that is roughly in priority order (but may be subject to change):</p>
      <ul>
        <li>[2.0.0] Implement Model JSON serialization solution backed by the JSON Schema specification.</li>
        <li>[2.0.0] Implement in JavaScript with Docker, leveraging the containerd runtime.</li>
        <li>[2.1.0] Integrate with OpenTelemetry for observability infrastructure as code.</li>
        <li>Refactor JavaScript containers to leverage a shared library for duplicate code.</li>
        <li>Expand support for recent drafts of the JSON Schema specification.</li>
        <li>Implement in Python for better cross-pollenation with PySpark and other related solutions.</li>
        <li>Create more standardized containers for different architectural needs:
          <ul>
            <li>other data serialization solutions, Protobuf and Thrift</li>
            <li>GraphQL</li>
            <li>more...</li>
          </ul>
        </li>
        <li>Add support for Kafka transactions.</li>
        <li>Add support for Kafka connections with SSL.</li>
      </ul>
    </Block>
  </>
)
export default Overview
