// import { useState } from 'react'
// import React from "react"
import './index.css'
import { Routes, Route } from "react-router-dom"
import First from "./pages/firstPage"
import Second from "./pages/secPage"
import Third from "./pages/thirdPage"
import Fourth from "./pages/fourthPage"
import Options from "./options"
import Buttons from './buttons'
import Last from './pages/lastPage'

function App() {

  return (

    <div className='h-screen relative container font-ubuntu mx-auto flex flex-col border md:flex-row md:justify-center justify-between shadow-xl shadow-black md:py-3 bg-white'>
      <Options/>
      <div className='flex w-full flex-col justify-between md:px-8 md:pt-8'>

        <div className='flex flex-col p-6 md:p-0 justify-between absolute md:static top-[15%]  left-1/2 md:translate-x-0 -translate-x-1/2 w-[85%] md:w-full bg-white md:bg-transparent rounded-lg '>
          <Routes>
                <Route exact path='/' element={<First/>}/>
                <Route exact path='/secondStep' element={<Second/>}/>
                <Route exact path='/thirdStep' element={<Third/>}/>
                <Route exact path='/fourthStep' element={<Fourth/>}/>
                <Route exact path='/lastStep' element={<Last/>}/>
          </Routes>
        </div>

          <Buttons/>
      </div>
    </div>
        
   
  )
}

export default App
