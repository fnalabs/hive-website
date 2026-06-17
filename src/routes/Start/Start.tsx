import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'
import {
  remoteBlock,
  remoteColumn,
  remoteColumns,
  remoteIcon,
  remoteNotification,
} from '../../remotes'
import meta from '../../metadata.json'

const Block = lazy(remoteBlock)
const Column = lazy(remoteColumn)
const Columns = lazy(remoteColumns)
const Icon = lazy(remoteIcon)
const Notification = lazy(remoteNotification)

const Start: FC = () => (
  <>
    <title>{meta['/hive/start'].title}</title>
    <meta name="description" content={meta['/hive/start'].description} />

    <Block article content>
      <h1>Get Started</h1>
      <p>The next page contains prerequisites and installation instructions to get you started with Hive<sup>io</sup>. The examples provided cover the basics of RESTful and CQRS/ES architectures. Descriptions are also provided on how to extend the concepts to future iterations to express the evolution of a project.</p>

      <Notification color='info' light>
        <Columns gapless>
          <Column narrow>
            <Icon style='solid' name='info' size='medium' />
          </Column>
          <Column>
            <p>The Development process for domain logic only requires a Text Editor or IDE that supports JavaScript and Node.js/Docker. The rest of the instructions outlined here provide infrastructure details for installation and deployment.</p>
          </Column>
        </Columns>
      </Notification>

      <h2 id='prerequisites'>Prerequisites</h2>
      <p>The prerequisites vary depending on the architecture. All implementations require Docker of some form. Whether it is just pure Docker, Docker Swarm, or Kubernetes is up to you. It is also strongly recommended you use a load balancer of some sort since the whole purpose of the framework is horizontal scalability.</p>

      <h3 id='cloud_platforms'>Cloud Platforms</h3>
      <dl>
        <dt><em><strong>Required</strong></em></dt>
        <dd><Link to='https://www.docker.com/' target='_blank' rel='noopener noreferrer'>Docker</Link></dd>

        <dt><em><strong>Recommended</strong></em></dt>
        <dd><Link to='https://kubernetes.io/' target='_blank' rel='noopener noreferrer'>Kubernetes</Link>, <Link to='https://docs.docker.com/engine/swarm/' target='_blank' rel='noopener noreferrer'>Swarm</Link>, or a <Link to='https://en.wikipedia.org/wiki/Category:Cloud_computing_providers' target='_blank' rel='noopener noreferrer'>cloud service provider</Link></dd>
      </dl>

      <h3 id='more'>More</h3>
      <p>Once you decide on your cloud platform, you're ready to start building and deploying your application services and dependencies. Hive<sup>io</sup> will integrate well with many of the <Link to='https://www.cncf.io/projects/' target='_blank' rel='noopener noreferrer'>cloud-native projects</Link> and <Link to='https://hub.docker.com/' target='_blank' rel='noopener noreferrer'>other containerized services</Link>.</p>
    </Block>
  </>
)
export default Start
