import React from 'react'
import { Brand } from './components/brand/Brand'
import {Article} from "./components/article/Article"
import {CTA} from "./components/cta/CTA"
import {Feature} from "./components/feature/Feature"
import {Navbar} from './components/navbar/Navbar'

export const App = () => {
  return (
    <div>
      <CTA/>
      <Feature/>
      <Navbar/>
      <Article/>
      <Brand/>
    </div>
    
  )
}
