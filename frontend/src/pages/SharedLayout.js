import React from 'react'
import Nav from '../components/nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const SharedLayout = () => {
  return (
    <>
    <Nav  />
    <Outlet  />
    <Footer  />
    
    </>
    
  )
}

export default SharedLayout