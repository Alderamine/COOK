import React from 'react'
import SupportNav from './SupportNav'
import SupportFooter from './SupportFooter'
import { Outlet } from 'react-router-dom'

export default function SupportWrapper() {
  return (
    <>
      <SupportNav />
      <Outlet />
      <SupportFooter />
    </>
  )
}
