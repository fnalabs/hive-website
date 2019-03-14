/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { HeroFooter } from 'common/hero'

describe('<HeroFooter />', () => {
  test('should render basic', () => {
    const heroBody = shallow(<HeroFooter />)

    expect(heroBody.instance()).toBeInstanceOf(HeroFooter)
    expect(heroBody.is('div')).toBe(true)
    expect(heroBody.hasClass('hero-footer')).toBe(true)
    expect(heroBody.hasClass('has-text-centered')).toBe(false)
  })

  test('should render w/ centered content', () => {
    const heroBody = shallow(<HeroFooter centered><div>test</div></HeroFooter>)

    expect(heroBody.hasClass('hero-footer')).toBe(true)
    expect(heroBody.hasClass('has-text-centered')).toBe(true)
    expect(heroBody.contains(<div>test</div>)).toBe(true)
  })
})
