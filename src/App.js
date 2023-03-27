import React from 'react'

import {CTA, Feature, Navbar, Article, Brand} from "./components"

import { Footer, Blog, Features, Header } from './containers'

export const App = () => {
  return (
    <div>
      <Footer/>
      <CTA/>
      <Feature/>
      <Navbar/>
      <Article/>
      <Brand/>
    </div>
    
  )
}
