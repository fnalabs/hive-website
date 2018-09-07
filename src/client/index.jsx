import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import ScrollToTop from './ScrollToTop.jsx'

import { Nav, Footer } from '../assets/components/layout'
import { Routes } from '../assets/components/Routes.jsx'

hydrate(
  <BrowserRouter>
    <ScrollToTop>
      <Nav />
      <Routes />
      <Footer />
    </ScrollToTop>
  </BrowserRouter>
  , document.getElementById('main')
)
