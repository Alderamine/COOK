import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SupportArticle from './components/Support/SupportArticle'
import SupportArticles from './components/Support/SupportArticles'
import SupportWrapper from "./components/Support/SupportWrapper"
import LandingLayoutWrapper from './layout/LandingLayoutWrapper'
import About from './pages/About'
import Copyright from './pages/Copyright'
import GroupList from './pages/GroupList'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Support from './pages/Support'
import TutorList from './pages/TutorList'
import TermsOfService from './pages/TermsOfService'
import Profile from './pages/Profile'

function App() {

  return (
    <div className='w-[calc(100vw - 100%)]'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='signup' element={<Signup></Signup>}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='/' element={<LandingLayoutWrapper></LandingLayoutWrapper>}>
              <Route index element={<LandingPage></LandingPage>}></Route>
              <Route path='tutor' element={<TutorList></TutorList>}></Route>
              <Route path='group' element={<GroupList></GroupList>}></Route>
              <Route path='profile' element={<Profile></Profile>}></Route>
            </Route>
            <Route path='support' element={<SupportWrapper></SupportWrapper>}>
              <Route index element={<Support />} />
              <Route path=':category' element={<SupportArticles />} />
              <Route path='article' element={<SupportArticle />} />
            </Route>
            <Route path='copyright' element={<Copyright />} />
            <Route path='terms' element={<TermsOfService />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
