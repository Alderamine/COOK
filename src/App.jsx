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
import StudentDashboard from './pages/StudentDashboard'
import Signin from './pages/Signin'
import OnlineLesson from './pages/OnlineLesson'
import Blog from './pages/Blog'
import BlogCategory from './components/Blog/BlogCategory'
import BlogArticle from './components/Blog/BlogArticle'
import DashboardLayout from './layout/DashboardLayout'
import Chat from './pages/Chat'
import SingleChatMob from './components/Chat/SingleChatMob'
import GroupPage from './pages/GroupPage'
import OnlineChat from './components/OnlineLesson/OnlineChat'
import Notes from './components/OnlineLesson/Notes'
import Members from './components/OnlineLesson/Members'

function App() {

  return (
    <div className='w-[calc(100vw - 100%)]'>
      <Routes>
        <Route path='/'>
          <Route path='signup' element={<Signup></Signup>}></Route>
          <Route path='signin' element={<Signin></Signin>}></Route>

          <Route path='/' element={<LandingLayoutWrapper></LandingLayoutWrapper>}>
            <Route index element={<LandingPage></LandingPage>}></Route>
            <Route path='search-tutors' element={<TutorList></TutorList>}></Route>
            <Route path='search-groups' element={<GroupList></GroupList>}></Route>
            <Route path='group-page' element={<GroupPage />} />
            <Route path='profile' element={<Profile></Profile>}></Route>
          </Route>

          <Route path='support' element={<SupportWrapper></SupportWrapper>}>
            <Route index element={<Support />} />
            <Route path=':category' element={<SupportArticles />} />
            <Route path='article' element={<SupportArticle />} />
          </Route>

          <Route path='online-lesson'>
            <Route element={<OnlineLesson></OnlineLesson>}>
              <Route index element={<OnlineChat></OnlineChat>}></Route>
              <Route path='notes' element={<Notes></Notes>}></Route>
              <Route path='members' element={<Members></Members>}></Route>
            </Route>
          </Route>

          <Route path='blog'>
            <Route index element={<Blog></Blog>}></Route>
            <Route path=':category' >
              <Route index element={<BlogCategory></BlogCategory>}></Route>
              <Route path='article' element={<BlogArticle></BlogArticle>}></Route>
            </Route>
          </Route>

          <Route path='student-dashboard' element={<DashboardLayout></DashboardLayout>}>
            <Route index element={<StudentDashboard />} />
            <Route path='chat' element={<Chat />} />
          </Route>

          <Route path='singleChat' element={<SingleChatMob />} />
          <Route path='about' element={<About />}></Route>
          <Route path='copyright' element={<Copyright />} />
          <Route path='terms-of-service' element={<TermsOfService />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
