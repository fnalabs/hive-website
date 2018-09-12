import React from 'react'
import { Link } from 'react-router-dom'

import { AnalyticsLink, Container, Tile } from '../common'

const svgGithub = (
  <span className='icon'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512' className='svg-link'><path fill='#f5f5f5' d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' /></svg></span>
)

const svgNPM = (
  <span className='icon'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' className='svg-link'><path fill='#f5f5f5' d='M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z' /></svg></span>
)

const svgTwitter = (
  <span className='icon'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='svg-link'><path fill='#f5f5f5' d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' /></svg></span>
)

const svgEmail = (
  <span className='icon'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='svg-link'><path fill='#f5f5f5' d='M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z' /></svg></span>
)

const svgFnALabs = (
  <svg xmlns='http://www.w3.org/2000/svg' width='144' viewBox='0 0 283.747 180'><path fill='#fff' stroke='#fff' strokeWidth='5' d='M 37.143495,2.499996 H 158.81128 L 152.1301,36.609173 H 75.58958 L 69.26004,69.19457 h 72.08641 l -6.7984,34.10918 H 62.57886 L 48.16158,177.5 H 3.0343185 Z' /><path fill='#fff' stroke='#fff' strokeWidth='5' d='M 232.8253,145.61788 H 162.96596 L 145.61834,177.5 H 99.31894 L 198.24727,2.499996 h 51.57402 L 280.76569,177.5 h -42.9002 z m -52.86336,-31.7649 h 47.00268 L 216.41539,46.455121 Z' /><path fill='#2e8b57' d='M 201.26761,104 A 50.387058,50 0 0 1 150.88055,154 50.387058,50 0 0 1 100.4935,104 50.387058,50 0 0 1 150.88055,53.999997 50.387058,50 0 0 1 201.26761,104 Z' /><path fill='#00008b' stroke='#00008b' strokeWidth='5' d='m 131.63097,76.79366 h 15.67708 l 12.46875,37.69792 7.32813,-37.69792 h 13.27083 l -10.60937,54.43229 H 154.0893 l -12.46875,-37.69791 -7.29166,37.69791 H 121.0216 Z' /></svg>
)

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
          <div className='columns'>
            <nav className='column is-6 has-text-right content'>
              <p><strong>Sitemap</strong></p>
              <p><Link to='/'>Home</Link></p>
              <p><Link to='/overview'>Overview</Link></p>
              <p><Link to='/start'>Get Started</Link></p>
              <p><AnalyticsLink to='https://fnalabs.github.io/hive-js/'>API</AnalyticsLink>
              </p>
            </nav>

            <nav className='column is-6 content'>
              <p><strong>Policies</strong></p>
              <p><Link to='/cookie'>Cookie</Link></p>
              <p><Link to='/privacy'>Privacy</Link></p>
            </nav>
          </div>
        </div>

        <div className='column is-narrow'>
          <nav className='level is-mobile'>
            <p className='level-item'>
              <AnalyticsLink to='https://github.com/fnalabs?q=hive' target='_blank'>{svgGithub}</AnalyticsLink>
            </p>

            <p className='level-item'>
              <AnalyticsLink to='https://www.npmjs.com/package/hive-io' target='_blank'>{svgNPM}</AnalyticsLink>
            </p>

            <p className='level-item'>
              <AnalyticsLink to='https://twitter.com/FnA_Labs' target='_blank'>{svgTwitter}</AnalyticsLink>
            </p>

            <p className='level-item'>
              <AnalyticsLink to='mailto:contact@fnalabs.com'>{svgEmail}</AnalyticsLink>
            </p>
          </nav>

          <Tile type='ancestor'>
            <Tile type='parent' vertical>
              <Tile type='child' centered>
                <AnalyticsLink to='https://fnalabs.com' target='_blank'>{svgFnALabs}</AnalyticsLink>
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
