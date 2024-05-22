import React from 'react'
import { Outlet } from 'react-router-dom'
import { Slider } from '../components/Slider'
import {About} from '../components/About'
import {SampleOfBooks} from '../components/SampleOfBooks'
import '../css/shared.css'
export  function Home() {
  return (
    <>
        <Slider/>
         <div className='margin'><SampleOfBooks/></div>
         <div className='margin'><About/></div>
          
        
    </>
  )
}
