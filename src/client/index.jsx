import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Transition from './Transition.jsx'

import { Nav, Footer } from '../assets/components/layout'
import { Routes } from '../assets/components/Routes.jsx'

hydrate(
  <BrowserRouter>
    <Transition>
      <Nav />
      <Routes />
      <Footer />
    </Transition>
  </BrowserRouter>
  , document.getElementById('main')
)
