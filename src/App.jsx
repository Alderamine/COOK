import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Support from './pages/Support'

function App() {

  return (
    <div className='w-[calc(100vw - 100%)]'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<LandingPage></LandingPage>}></Route>
            <Route path='support' element={<Support></Support>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
