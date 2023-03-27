import React from 'react'
import { Brand } from './components/brand/Brand'
import {Article} from "./components/article/Article"
import {CTA} from "./components/cta/CTA"
import {Feature} from "./components/feature/Feature"
import {Navbar} from './components/navbar/Navbar'

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
