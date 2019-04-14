/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import NextPageHero from 'pages/NextPageHero'

describe('<NextPageHero />', () => {
  test('should render the next site page hero link', () => {
    const nextPageHero = shallow(<NextPageHero to='/' />)

    expect(nextPageHero.instance()).toBeInstanceOf(NextPageHero)
    expect(nextPageHero.is('Hero')).toBe(true)
    expect(nextPageHero.hasClass('is-hive')).toBe(true)
  })
})
