import React from 'react'
import { Link } from 'react-router-dom'
import Nav1 from "../assets/About/Nav1.svg"
import Nav2 from "../assets/About/Nav2.svg"
import Nav3 from "../assets/About/Nav3.svg"
import arrow from "../assets/Legal/arrow.svg"
import searchIcon from "../assets/Legal/searchIcon.svg"
import COOKLogo from "../assets/allAssets/COOK-logo.svg"
import LandingFooter from '../layout/LandingFooter'
import Hamburger from "../assets/About/Hamburger.svg"
import CopyrightTable from '../components/Copyright/CopyrightTable'

const Copyright = () => {
  return (
    <div>
      <nav className='sticky top-0 h-[84px] z-10 w-[100%] px-[64px] xsm:px-[32px] flex items-center bg-primary2 justify-between'>
        <div className='flex items-center gap-[32px]'>
          <h1 className='font-rubik font-bold text-[32px] leading-[37.92px] tracking-[-0.02em] text-primaryLighten2'>COOK</h1>
          <div className='md:hidden sm:hidden xsm:hidden h-[15px] border border-primary rouded-[16px]'></div>
          <div className='md:hidden sm:hidden xsm:hidden flex gap-[24px]'>
            <Link to={'/search-tutors'} className='flex gap-[7px]'>
              <img src={Nav1} />
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Cooking Classes</p>
            </Link>
            <Link to={'/signup'} className='flex gap-[7px]'>
              <img src={Nav2} />
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Become a Chef</p>
            </Link>
            <Link to={'/search-groups'} className='flex gap-[7px]'>
              <img src={Nav3} />
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Group Cooking</p>
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-[22px] xsm:hidden sm:hidden'>
          <div className='flex items-center gap-[4px]'>
            <p className='font-outfit font-normal text-[19px] leading-[19px] text-[white]'>Eng</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#FFDBB8" />
            </svg>
          </div>
          <div className='flex items-center gap-[4px]'>
            <p className='font-outfit font-normal text-[18px] leading-[18px] text-[white]'>USD</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#FFDBB8" />
            </svg>
          </div>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <div>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 16.5V12.5" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 8.5H12.01" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <div>
            <Link to={'/signin'} className='w-[131px] h-[41px] border-[2px] border-primaryLighten2 text-backPri font-outfit font-[500] text-[20px] leading-[25px] flex justify-center items-center gap-[8px] rounded-[4px]'>
              Log In
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.75 2.75H14.75C15.1478 2.75 15.5294 2.90804 15.8107 3.18934C16.092 3.47064 16.25 3.85218 16.25 4.25V14.75C16.25 15.1478 16.092 15.5294 15.8107 15.8107C15.5294 16.092 15.1478 16.25 14.75 16.25H11.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 13.25L11.75 9.5L8 5.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.75 9.5H2.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        <img className='sm:block xsm:block hidden' src={Hamburger} alt="" />
      </nav>
      <div className='flex xsm:flex-col sm:flex-col md:flex-col xsm:gap-[36px] sm:gap-[36px] md:gap-[36px] gap-[54px] pl-[64px] py-[94px] pr-[69px] sm:pt-[89px] md:pt-[89px] sm:px-[48px] md:px-[48px] xsm:pt-[80px] xsm:pr-[32px] xsm:pl-[34px]'>
      <div className='mt-[10px] h-full sticky md:relative sm:relative xsm:relative md:top-[0px] sm:top-[0px] xsm:top-[0px] top-[130px]'>
          <h1 className='mb-[36px] hidden sm:block md:block xsm:block text-[48px] xsm:text-[36px] font-[700] sm:leading-[56.88px] font-rubik'>Terms Of Service</h1>
          <div className='relative mb-[30px] h-[50px] w-[313px] xsm:w-full sm:w-full md:w-full border-[2px] rounded-[4px] border-primaryLighten2 pl-[36px]'>
            <input type="text" className='h-full w-full outline-none font-medium leading-[26.46px] font-outfit placeholder:text-primary2 pl-4 text-[20px]' placeholder="Search" />
            <svg className='absolute top-[50%] left-[13px] transform translate-y-[-50%]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 20.9999L16.65 16.6499" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='flex p-[24px] w-[313px] xsm:w-full sm:w-full md:w-full flex-col border-[2px] rounded-[8px] border-primaryLighten2'>
            <h1 className='mb-[27px] tracking-[-0.02em] font-outfit leading-[28.4px] font-[600] text-[24px] xsm:text-[20px]'>Table of content</h1>
            <div className='flex flex-col gap-[16px]'>
              <CopyrightTable/>
              <CopyrightTable/>
              <CopyrightTable/>
            </div>
          </div>
        </div>
        <div className='flex flex-col xsm:w-full sm:w-full md:w-full'>
          <h1 className='mb-[36px] mt-[-10px] block sm:hidden md:hidden xsm:hidden text-[48px] xsm:text-[36px] font-[700] sm:leading-[56.88px] font-rubik'>Copyright Policy</h1>
          <div className='w-[59px] rounded-full border-[2px] mb-[36px] xsm:hidden sm:hidden md:hidden border-primaryLighten2'></div>
          <div className='flex flex-col gap-[36px]'>
            <div className='flex flex-col gap-[14px]'>
              <h2 className='font-rubik font-[500] text-[28px] leading-[33.1px] xsm:text-[24px] xsm:leading-[28.44px]'>General Terms</h2>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[24.72px]'>Lorem ipsum dolor sit amet consectetur. Sed sed purus turpis donec gravida. Molestie ipsum amet praesent venenatis. Augue proin erat id in amet venenatis in. Quam posuere sapien fermentum ac. Risus erat enim lacinia aenean ornare. Interdum augue eu et scelerisque. Facilisis proin lacus amet nibh tempor. Curabitur purus vitae nisl eget sem. Enim integer libero egestas amet fermentum egestas orci imperdiet in. Amet nunc urna nunc lobortis cras fermentum et at pretium. Facilisi non nunc dui iaculis risus fusce et faucibus at. Ornare aliquam scelerisque dui viverra donec turpis. Egestas sit pretium turpis amet proin.</p>
            </div>
            <div className='flex flex-col gap-[14px]'>
              <h2 className='font-rubik font-[500] text-[28px] leading-[33.1px] xsm:text-[24px] xsm:leading-[28.44px]'>General Terms</h2>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[24.72px]'>Lorem ipsum dolor sit amet consectetur. Sed sed purus turpis donec gravida. Molestie ipsum amet praesent venenatis. Augue proin erat id in amet venenatis in. Quam posuere sapien fermentum ac. Risus erat enim lacinia aenean ornare. Interdum augue eu et scelerisque. Facilisis proin lacus amet nibh tempor. Curabitur purus vitae nisl eget sem. Enim integer libero egestas amet fermentum egestas orci imperdiet in. Amet nunc urna nunc lobortis cras fermentum et at pretium. Facilisi non nunc dui iaculis risus fusce et faucibus at. Ornare aliquam scelerisque dui viverra donec turpis. Egestas sit pretium turpis amet proin.</p>
            </div>
            <div className='flex flex-col gap-[14px]'>
              <h2 className='font-rubik font-[500] text-[28px] leading-[33.1px] xsm:text-[24px] xsm:leading-[28.44px]'>General Terms</h2>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[24.72px]'>Lorem ipsum dolor sit amet consectetur. Sed sed purus turpis donec gravida. Molestie ipsum amet praesent venenatis. Augue proin erat id in amet venenatis in. Quam posuere sapien fermentum ac. Risus erat enim lacinia aenean ornare. Interdum augue eu et scelerisque. Facilisis proin lacus amet nibh tempor. Curabitur purus vitae nisl eget sem. Enim integer libero egestas amet fermentum egestas orci imperdiet in. Amet nunc urna nunc lobortis cras fermentum et at pretium. Facilisi non nunc dui iaculis risus fusce et faucibus at. Ornare aliquam scelerisque dui viverra donec turpis. Egestas sit pretium turpis amet proin.</p>
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  )
}

export default Copyright