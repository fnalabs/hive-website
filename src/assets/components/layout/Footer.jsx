import React from 'react'
import { Link } from 'react-router-dom'

import { AnalyticsLink, Container, Tile } from 'common'
import { Email, FnALabsInverted, Github, Npm, Twitter } from 'icons'

export const Footer = () => (
  <footer className='footer'>
    <Container>
      <div className='columns'>
        <div className='column is-narrow content'>
          <p>Copyright &copy; <a href='https://fnalabs.com' target='_blank' rel='noopener noreferrer'>FnA Labs</a></p>
          <p className='is-size-7'>Icons from <a href='https://fontawesome.com/' target='_blank' rel='noopener noreferrer'>Font Awesome</a> (<a href='https://fontawesome.com/license' target='_blank' rel='noopener noreferrer'>License</a>)</p>
          <p><a href='https://bulma.io' target='_blank' rel='noopener noreferrer'><img src='https://fnalabs.github.io/fnalabs-assets/assets/made-with-bulma--dark.png' alt='Made with Bulma' width='128' height='24' /></a></p>
        </div>

        <div className='column'>
          <nav className='columns is-mobile'>
            <div className='column is-6 has-text-right content'>
              <p><strong>Pages</strong></p>
              <p><Link to='/'>Home</Link></p>
              <p><Link to='/overview'>Overview</Link></p>
              <p><Link to='/start'>Get Started</Link></p>
              <p><Link to='/documentation'>Documentation</Link></p>
            </div>

            <div className='column is-6 has-text-left content'>
              <p><strong>Policies</strong></p>
              <p><Link to='/cookie'>Cookie</Link></p>
              <p><Link to='/privacy'>Privacy</Link></p>
            </div>
          </nav>
        </div>

        <div className='column is-narrow'>
          <nav className='level is-mobile'>
            <p className='level-item'>
              <AnalyticsLink to='https://github.com/fnalabs/hive-io' target='_blank' rel='noopener noreferrer' aria-label='github'>
                <span className='icon'><Github className='svg-link' /></span>
              </AnalyticsLink>
            </p>

            <p className='level-item'>
              <AnalyticsLink to='https://www.npmjs.com/package/hive-io' target='_blank' rel='noopener noreferrer' aria-label='NPM'>
                <span className='icon'><Npm className='svg-link' /></span>
              </AnalyticsLink>
            </p>

            <p className='level-item'>
              <AnalyticsLink to='https://twitter.com/FnA_Labs' target='_blank' rel='noopener noreferrer' aria-label='twitter'>
                <span className='icon'><Twitter className='svg-link' /></span>
              </AnalyticsLink>
            </p>

            <p className='level-item'>
              <AnalyticsLink to='mailto:contact@fnalabs.com' aria-label='email'>
                <span className='icon'><Email className='svg-link' /></span>
              </AnalyticsLink>
            </p>
          </nav>

          <Tile type='ancestor'>
            <Tile type='parent' vertical>
              <Tile type='child' centered>
                <AnalyticsLink to='https://fnalabs.com' target='_blank' rel='noopener noreferrer' aria-label='FNA labs'>
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
