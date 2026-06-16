import React, { type FC, lazy } from 'react'
import {
  remoteBlock,
  remoteColumn,
  remoteColumns,
  remoteIcon,
  remoteMenu,
  remoteNotification,
} from '../../remotes'
import meta from '../../metadata.json'

const Block = lazy(remoteBlock)
const Column = lazy(remoteColumn)
const Columns = lazy(remoteColumns)
const Icon = lazy(remoteIcon)
const Menu = lazy(remoteMenu)
const Notification = lazy(remoteNotification)

const Documentation: FC = () => (
  <>
    <title>{meta['/hive/documentation'].title}</title>
    <meta name="description" content={meta['/hive/documentation'].description} />

    <Block article>
      <Block content>
        <h1>Documentation</h1>
        <p>Below you will find a sitemap for API documentation of the Hive<sup>io</sup> library. There are links to each of the Classes and links to their methods. Also, included on the next page is all of the environment variables for each microservice image.</p>

        <h2 id='api'>API</h2>
        <Notification color='warning' light>
          <Columns gapless mobile>
            <Column narrow>
              <Icon style='solid' name='exclamation' size='medium' />
            </Column>
            <Column>
              <p>These pages are currently available online only.</p>
            </Column>
          </Columns>
        </Notification>
      </Block>

      <Columns>
        <Column hiddenTouch />
        <Column narrow>
          <Menu list={[
            {
              list: [
                { href: 'https://fnalabs.github.io/hive-io/Actor.html', label: 'Actor', external: true, list: [
                  { href: 'https://fnalabs.github.io/hive-io/Actor.html#assign', label: 'assign', external: true },
                  { href: 'https://fnalabs.github.io/hive-io/Actor.html#perform', label: 'perform', external: true },
                  { href: 'https://fnalabs.github.io/hive-io/Actor.html#replay', label: 'replay', external: true },
                ]},
                { href: 'https://fnalabs.github.io/hive-io/MessageActor.html', label: 'MessageActor', external: true, list: [
                  { href: 'https://fnalabs.github.io/hive-io/MessageActor.html#assign', label: 'assign', external: true },
                  { href: 'https://fnalabs.github.io/hive-io/MessageActor.html#perform', label: 'perform', external: true },
                  { href: 'https://fnalabs.github.io/hive-io/MessageActor.html#replay', label: 'replay', external: true },
                ]},
                { href: 'https://fnalabs.github.io/hive-io/System.html', label: 'System', external: true, list: [
                  { href: 'https://fnalabs.github.io/hive-io/System.html#emit', label: 'emit', external: true },
                  { href: 'https://fnalabs.github.io/hive-io/System.html#on', label: 'on', external: true },
                ]},
                { href: 'https://fnalabs.github.io/hive-io/Bus.html', label: 'Bus', external: true, list: [
                  { href: 'https://fnalabs.github.io/hive-io/Bus.html#emit', label: 'emit', external: true },
                  { href: 'https://fnalabs.github.io/hive-io/Bus.html#on', label: 'on', external: true },
                ]},
              ],
            },
          ]} />
        </Column>
        <Column hiddenTouch />

        <Column narrow>
          <Menu list={[
            {
              list: [
                { href: 'https://fnalabs.github.io/hive-io/Model.html', label: 'Model', external: true, list: [
                  { href: 'https://fnalabs.github.io/hive-io/Model.html#errors', label: 'errors', external: true },
                  { href: 'https://fnalabs.github.io/hive-io/Model.html#schema', label: 'schema', external: true },
                  { href: 'https://fnalabs.github.io/hive-io/Model.html#validate', label: 'validate', external: true },
                  { href: 'https://fnalabs.github.io/hive-io/Model.html#version', label: 'version', external: true },
                  { href: 'https://fnalabs.github.io/hive-io/Model.html#toJSON', label: 'toJSON', external: true },
                ]},
                { href: 'https://fnalabs.github.io/hive-io/Schema.html', label: 'Schema', external: true, list: [
                  { href: 'https://fnalabs.github.io/hive-io/Schema.html#assign', label: 'assign', external: true },
                  { href: 'https://fnalabs.github.io/hive-io/Schema.html#validate', label: 'validate', external: true },
                ]},
              ],
            },
          ]} />
        </Column>
        <Column hiddenTouch />
      </Columns>
    </Block>
  </>
)
export default Documentation
