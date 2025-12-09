import React, { type FC, lazy } from 'react'
import AppGraphic from '../../components/AppGraphic'
import {
  remoteBlock,
  remoteBox,
  remoteCell,
  remoteColumn,
  remoteColumns,
  remoteContainer,
  remoteGrid,
  remoteHero,
  remoteIcon,
  remoteImage,
  remoteIconHiveIO,
  remoteLevel,
  remoteSection,
} from '../../remotes'

const Block = lazy(remoteBlock)
const Box = lazy(remoteBox)
const Cell = lazy(remoteCell)
const Column = lazy(remoteColumn)
const Columns = lazy(remoteColumns)
const Container = lazy(remoteContainer)
const Grid = lazy(remoteGrid)
const Hero = lazy(remoteHero)
const Icon = lazy(remoteIcon)
const Image = lazy(remoteImage)
const IconHiveIO = lazy(remoteIconHiveIO)
const Level = lazy(remoteLevel)
const Section = lazy(remoteSection)

const Home: FC = () => (
  <>
    <Hero color='dark' size='medium' bold>
      <Container>
        <Columns vcentered>
          <Column numericSize={6} content textPosition='centered'>
            <h1 className='title'>
              <Icon size='medium' wrapper>
                <IconHiveIO />
              </Icon>
              Hive<sup>io</sup>
            </h1>
            <p className='subtitle'>A reactive, cloud-native framework for building microservices</p>
          </Column>
          <Column numericSize={6}>
            <AppGraphic />
          </Column>
        </Columns>
      </Container>
    </Hero>

    <Section>
      <Container>
        <Grid fixed columnCount={['3-cols-desktop', '2-cols-tablet', '1-cols-mobile']} colGapSize={8} rowGapSize={8}>
          <Cell>
            <Box fullheight>
              <Block article content>
                <Image fixedSize='96x96' centered hcentered>
                  <i className='fa-solid fa-bolt fa-5x has-text-primary' />
                </Image>
                <h3 className='has-text-centered'>Responsive</h3>
                <p>Hive<sup>io</sup> is able to give lightning fast response times by implementing and supporting microservices with Node.js and Fastify.</p>
              </Block>
            </Box>
          </Cell>

          <Cell>
            <Box fullheight>
              <Block article content>
                <Image fixedSize='96x96' centered hcentered>
                  <i className='fa-solid fa-lines-leaning fa-5x has-text-primary' />
                </Image>
                <h3 className='has-text-centered'>Resilient</h3>
                <p>Each microservice contains and isolates aggregates in your domain model to ensure that you are still capable of serving traffic, even during a catastrophic event or unexpected high volume.</p>
              </Block>
            </Box>
          </Cell>

          <Cell>
            <Box fullheight>
              <Block article content>
                <Image fixedSize='96x96' centered hcentered>
                  <i className='fa-solid fa-maximize fa-5x has-text-primary' />
                </Image>
                <h3 className='has-text-centered'>Elastic</h3>
                <p>Hive<sup>io</sup> enables auto scaling solutions to save you not only money but increased uptime when production workloads get unpredictable.</p>
              </Block>
            </Box>
          </Cell>

          <Cell>
            <Box fullheight>
              <Block article content>
                <Image fixedSize='96x96' centered hcentered>
                  <i className='fa-solid fa-message fa-5x has-text-primary' />
                </Image>
                <h3 className='has-text-centered'>Message Driven</h3>
                <p>Hive<sup>io</sup> provides an asynchronous, message passing framework that ensures loose coupling, isolation, and location transparency with Node.js and Kafka.</p>
              </Block>
            </Box>
          </Cell>

          <Cell>
            <Box fullheight>
              <Block article content>
                <Image fixedSize='96x96' centered hcentered>
                  <i className='fa-solid fa-gears fa-5x has-text-primary' />
                </Image>
                <h3 className='has-text-centered'>Flexible &amp; Robust</h3>
                <p>Hive<sup>io</sup> uses the JSON Schema and Flux Standard Action specifications to automatically serialize and validate your data Models for network transport. We call it Model JSON Serialization.</p>
              </Block>
            </Box>
          </Cell>

          <Cell>
            <Box fullheight>
              <Block article content>
                <Image fixedSize='96x96' centered hcentered>
                  <i className='fa-solid fa-cloud fa-5x has-text-primary' />
                </Image>
                <h3 className='has-text-centered'>Cloud Native</h3>
                <p>Hive<sup>io</sup> is implemented with standardized container-d images to wrap your domain logic with a lightweight, RESTful interface. This allows you to skip the boilerplate setup/maintenance and dive straight into adding immediate value to your application.</p>
              </Block>
            </Box>
          </Cell>
        </Grid>
      </Container>
    </Section>

    <Section>
      <Level items={[
        {content: (<Image fixedSize='96x96' centered hcentered>
          <IconHiveIO />
        </Image>)},
      ]} />
    </Section>
  </>
)
export default Home
