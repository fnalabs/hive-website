import React from 'react'
import { Link } from 'react-router-dom'

import { AnalyticsLink, Container, Tile } from 'common'
import { Email, FnALabsInverted, Github, NPM, Twitter } from 'icons'

export const Footer = () => (
  <footer className='footer is-dark'>
    <Container>
      <div className='columns'>
        <div className='column is-narrow content'>
          <p>Copyright &copy; 2018 <a href='https://fnalabs.com'>FnA Labs</a></p>
          <p className='is-size-7'>Icons from <a href='https://fontawesome.com/'>Font Awesome</a> (<a href='https://fontawesome.com/license'>License</a>)</p>
          <p><a href='https://bulma.io'>
            <img src='https://fnalabs.github.io/fnalabs-assets/assets/made-with-bulma--dark.png' alt='Made with Bulma' width='128' height='24' />
          </a></p>
        </div>

        <div className='column'>
          <div className='columns is-mobile'>
            <nav className='column is-6 has-text-right content'>
              <p><strong>Sitemap</strong></p>
              <p><Link to='/'>Home</Link></p>
              <p><Link to='/overview/'>Overview</Link></p>
              <p><Link to='/start/'>Get Started</Link></p>
              <p><AnalyticsLink to='https://fnalabs.github.io/hive-js/'>API</AnalyticsLink>
              </p>
            </nav>

            <nav className='column is-6 has-text-left content'>
              <p><strong>Policies</strong></p>
              <p><Link to='/cookie/'>Cookie</Link></p>
              <p><Link to='/privacy/'>Privacy</Link></p>
            </nav>
          </div>
        </div>

        <div className='column is-narrow'>
          <nav className='level is-mobile'>
            <p className='level-item'>
              <AnalyticsLink to='https://github.com/fnalabs?q=hive' target='_blank'>
                <span className='icon'><Github className='svg-link' /></span>
              </AnalyticsLink>
            </p>

            <p className='level-item'>
              <AnalyticsLink to='https://www.npmjs.com/package/hive-io' target='_blank'>
                <span className='icon'><NPM className='svg-link' /></span>
              </AnalyticsLink>
            </p>

            <p className='level-item'>
              <AnalyticsLink to='https://twitter.com/FnA_Labs' target='_blank'>
                <span className='icon'><Twitter className='svg-link' /></span>
              </AnalyticsLink>
            </p>

            <p className='level-item'>
              <AnalyticsLink to='mailto:contact@fnalabs.com'>
                <span className='icon'><Email className='svg-link' /></span>
              </AnalyticsLink>
            </p>
          </nav>

          <Tile type='ancestor'>
            <Tile type='parent' vertical>
              <Tile type='child' centered>
                <AnalyticsLink to='https://fnalabs.com' target='_blank'>
                  <FnALabsInverted />
                </AnalyticsLink>
              </Tile>
              <Tile type='child' centered content>
                <p>Fn Awesome!</p>
              </Tile>
            </Tile>
          </Tile>
        </div>
      </div>
    </Container>
  </footer>
)
