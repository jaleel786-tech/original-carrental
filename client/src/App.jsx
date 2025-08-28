import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from "./components/navbar";

import Home from './pages/home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import Mybooking from './pages/Mybooking'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import Addcar from './pages/owner/Addcar'
import Managecars from './pages/owner/Managecars'
import Managebooking from './pages/owner/Managebooking'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {
  const {showLogin} =useAppContext()
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
    <Toaster/>
      {showLogin && <Login/>}

      {!isOwnerPath && <Navbar/>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<Mybooking />} />
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<Addcar />} />
          <Route path="manage-cars" element={<Managecars />} />
          <Route path="manage-bookings" element={<Managebooking />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  )
}

export default App

