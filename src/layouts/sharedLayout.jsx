import React from 'react'
import { MyNav } from '../components/MyNav'
import { Outlet } from 'react-router-dom'
import {Footer} from '../components/Footer'
import '../css/shared.css'
export  function SharedLayout() {
  return (
    <div className='layout'>
    <MyNav />
    <div className='content'>
        <Outlet/>
    </div>
    <Footer/>
    </div>
)
}
