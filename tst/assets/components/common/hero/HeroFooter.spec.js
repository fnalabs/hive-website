/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import { HeroFooter } from 'common/hero'

describe('<HeroFooter />', () => {
  it('should render basic', () => {
    const heroFooter = shallow(<HeroFooter />)

    expect(heroFooter.instance()).toBeInstanceOf(HeroFooter)
    expect(heroFooter.is('div')).toBe(true)
    expect(heroFooter.hasClass('hero-foot')).toBe(true)
    expect(heroFooter.hasClass('has-text-centered')).toBe(false)
  })

  it('should render w/ centered content', () => {
    const heroFooter = shallow(<HeroFooter centered><div>test</div></HeroFooter>)

    expect(heroFooter.hasClass('hero-foot')).toBe(true)
    expect(heroFooter.hasClass('has-text-centered')).toBe(true)
    expect(heroFooter.contains(<div>test</div>)).toBe(true)
  })

  it('should render w/ custom css', () => {
    const heroFooter = shallow(<HeroFooter className='test'><div>test</div></HeroFooter>)

    expect(heroFooter.hasClass('hero-foot')).toBe(true)
    expect(heroFooter.hasClass('has-text-centered')).toBe(false)
    expect(heroFooter.hasClass('test')).toBe(true)
    expect(heroFooter.contains(<div>test</div>)).toBe(true)
  })

  it('should render w/ custom css and centered content', () => {
    const heroFooter = shallow(<HeroFooter centered className='test'><div>test</div></HeroFooter>)

    expect(heroFooter.hasClass('hero-foot')).toBe(true)
    expect(heroFooter.hasClass('has-text-centered')).toBe(true)
    expect(heroFooter.hasClass('test')).toBe(true)
    expect(heroFooter.contains(<div>test</div>)).toBe(true)
  })
})
