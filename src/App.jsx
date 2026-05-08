import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from "./views/Home"
import PraktiskWeb from "./views/PraktiskWeb"
import Bootcamp from "./views/Bootcamp"
import DynamiskWeb from "./views/DynamiskWeb"
import FrameworksOne from "./views/FrameworksOne"
import Praktik from "./views/Praktik"
import FrameworksTwo from "./views/FrameworksTwo"
import FrameworksThree from "./views/FrameworksThree"
import Specialefag from "./views/Specialefag"
import Navigation from "./components/Navigation"
import Layout from './Components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
            <Route index element={<Home />} />
            <Route path='praktisk-web' element={<PraktiskWeb />} />
            <Route path='bootcamp' element={<Bootcamp />} />
            <Route path='dynamiske-webloesninger' element={<DynamiskWeb />} />
            <Route path='frameworks-i' element={<FrameworksOne />} />
            <Route path='frameworks-ii' element={<FrameworksTwo />} />
            <Route path='praktik' element={<Praktik />} />
            <Route path='frameworks-iii' element={<FrameworksThree />} />
            <Route path='specialefag' element={<Specialefag />} />
        </Route>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
