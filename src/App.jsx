import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Support from './pages/Support'
import SupportWrapper from "./components/Support/SupportWrapper"
import SupportArticles from './components/Support/SupportArticles'
import SupportArticle from './components/Support/SupportArticle'

function App() {

  return (
    <div className='w-[calc(100vw - 100%)]'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<LandingPage></LandingPage>}></Route>
            <Route path='support' element={<SupportWrapper></SupportWrapper>}>
              <Route index element={<Support />} />
              <Route path=':category' element={<SupportArticles/>}/>
              <Route path='article' element={<SupportArticle/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
