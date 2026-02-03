import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Hire from './components/Hire';
import Header from './components/Header';
import "./App.css"

function App() {

  return (
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/services' element= {<Services/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/portfolio' element= {<Portfolio/>}/>
      <Route path='/contact' element= {<Contact/>}/>
      <Route path='/hire' element= {<Hire/>}/>
     </Routes>
     </BrowserRouter>
  )
}

export default App;
