import React from 'react'
import './App.css';
import NavBar from './navbar.jsx'
import Main1 from './main1'
import Main2 from './main2'
import Main3 from './main3'
import Main4 from './main4'

function Home_page() {
  return (
    <div>
      <NavBar/>
      <Main1/>
      <Main2/>
      <Main3/>
      <Main4/>
    </div>
  )
}

export default Home_page