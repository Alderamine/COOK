import React from 'react'
import LandingNav from './LandingNav'
import { Outlet } from 'react-router-dom'
import LandingFooter from './LandingFooter'

export default function LandingLayoutWrapper() {
  return (
    <>
      <LandingNav />
      <Outlet />
      <LandingFooter />
    </>
  )
}
