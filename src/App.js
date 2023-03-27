import React from 'react'

import {CTA, Feature, Navbar, Article, Brand} from "./components"
import { Footer, Blog, Features, Header, Possibility } from './containers'
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}
export default App;