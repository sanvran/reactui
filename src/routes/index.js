import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from '../component/Navbar'
import NoMatch from '../component/NoMatch';
import Login from '../pages/Login'

const Router = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Navbar/>} />
           <Route path="/auth/login" element={<Login />} />
           <Route path="*" element={<NoMatch />} />
        </Routes>
     </>
  )
}

export default Router