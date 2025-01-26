import React from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'

import Results from './components/Results'
import Contac from './components/Contac'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Singup from './components/singup'
import BookTable from './components/BookTable'
import LandingPage from './screens/LandingPage'





function App() {
  return (
    <div>
     <Navbar/>
   
      
     <Routes>
      <Route path='/'  element={<LandingPage/>}/>  
      <Route path='signup' element={<Singup/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='booktable' element={<BookTable/>}/>
     </Routes>
     
      
      
      
    
    </div>
  )
}

export default App