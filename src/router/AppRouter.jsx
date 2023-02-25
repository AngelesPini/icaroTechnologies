import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/organismos/footer/footer'
import NavBar from '../components/organismos/navBar/navBar'
import NavBarMobile from '../components/organismos/navBarMobile/navBarMobile'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'
import { ServicePage } from '../pages/ServicePage'

export const AppRouter = () => {
  return (
    <div className="App">
    <NavBar/>
    <NavBarMobile/>
        <Routes>
            <Route path='/*' element={<HomePage/>}></Route>
            <Route path='/servicio' element={<ServicePage/>}></Route>
            <Route path='/contacto' element={<ContactPage/>}></Route>
        </Routes>
    <Footer/>
    </div>
  )
}
