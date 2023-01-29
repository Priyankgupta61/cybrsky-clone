import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./about"
import Homepage from "./Home_page.js"

 function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
           <Route index element={<Homepage />} />
           <Route path="about" element={<About/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App