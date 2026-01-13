import React, { type FC, lazy } from 'react'

import {
  remoteBlock,
  remoteColumn,
  remoteColumns,
  remoteMenu,
  remoteNotification,
} from '../../remotes'

const Block = lazy(remoteBlock)
const Column = lazy(remoteColumn)
const Columns = lazy(remoteColumns)
const Menu = lazy(remoteMenu)
const Notification = lazy(remoteNotification)

const Documentation: FC = () => (
  <>
    <title>FnA Labs | Hive^io - Documentation</title>
    <meta name="description" content="Documentation for Hive^io: a reactive, cloud-native framework. Reference details of the API for the domain logic library." />

    <Block article>
      <Columns>
        <Column content>
          <h1>Documentation</h1>
          <p>Below you will find a sitemap for API documentation of the Hive<sup>io</sup> library. There are links to each of the Classes and links to their methods. Also, included on the next page is all of the environment variables for each microservice image.</p>

          <h2 id='api'>API</h2>
          <Notification color='warning' light>These pages are currently available online only.</Notification>
        </Column>
      </Columns>

      <Columns>
        <Column />
        <Column narrow>
          <Menu list={[
            {
              list: [
                { href: 'https://fnalabs.github.io/hive-io/', label: 'Home' },
                { href: 'https://fnalabs.github.io/hive-io/Actor.html', label: 'Actor', list: [
                  { href: 'https://fnalabs.github.io/hive-io/Actor.html#assign', label: 'assign' },
                  { href: 'https://fnalabs.github.io/hive-io/Actor.html#perform', label: 'perform' },
                  { href: 'https://fnalabs.github.io/hive-io/Actor.html#replay', label: 'replay' },
                ]},
                { href: 'https://fnalabs.github.io/hive-io/MessageActor.html', label: 'MessageActor', list: [
                  { href: 'https://fnalabs.github.io/hive-io/MessageActor.html#assign', label: 'assign' },
                  { href: 'https://fnalabs.github.io/hive-io/MessageActor.html#perform', label: 'perform' },
                  { href: 'https://fnalabs.github.io/hive-io/MessageActor.html#replay', label: 'replay' },
                ]},
              ],
            },
          ]} />
        </Column>
        <Column />

        <Column narrow>
          <Menu list={[
            {
              list: [
                { href: 'https://fnalabs.github.io/hive-io/Model.html', label: 'Model', list: [
                  { href: 'https://fnalabs.github.io/hive-io/Model.html#errors', label: 'errors' },
                  { href: 'https://fnalabs.github.io/hive-io/Model.html#schema', label: 'schema' },
                  { href: 'https://fnalabs.github.io/hive-io/Model.html#validate', label: 'validate' },
                  { href: 'https://fnalabs.github.io/hive-io/Model.html#version', label: 'version' },
                  { href: 'https://fnalabs.github.io/hive-io/Model.html#toJSON', label: 'toJSON' },
                ]},
                { href: 'https://fnalabs.github.io/hive-io/Schema.html', label: 'Schema', list: [
                  { href: 'https://fnalabs.github.io/hive-io/Schema.html#assign', label: 'assign' },
                  { href: 'https://fnalabs.github.io/hive-io/Schema.html#validate', label: 'validate' },
                ]},
              ],
            },
          ]} />
        </Column>
        <Column />

        <Column narrow>
          <Menu list={[
            {
              list: [
                { href: 'https://fnalabs.github.io/hive-io/System.html', label: 'System', list: [
                  { href: 'https://fnalabs.github.io/hive-io/System.html#emit', label: 'emit' },
                  { href: 'https://fnalabs.github.io/hive-io/System.html#on', label: 'on' },
                ]},
                { href: 'https://fnalabs.github.io/hive-io/Bus.html', label: 'Bus', list: [
                  { href: 'https://fnalabs.github.io/hive-io/Bus.html#emit', label: 'emit' },
                  { href: 'https://fnalabs.github.io/hive-io/Bus.html#on', label: 'on' },
                ]},
              ],
            },
          ]} />
        </Column>
        <Column />
      </Columns>
    </Block>
  </>
)
export default Documentation
