import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GroupHeroPattern from "../assets/GroupList/GroupHeroPattern.png"
import FilterIcon from "../assets/TutorList/FilterIcon.svg"
import UpsideDown from "../assets/TutorList/UpsideDown.svg"
import JoinClassGroup from '../assets/allAssets/join-cook-groups.jpg'
import Availability from '../components/DropDowns/Availability'
import IWantToLearn from '../components/DropDowns/IWantToLearn'
import PricePerLesson from '../components/DropDowns/PricePerLesson'
import SortBy from '../components/DropDowns/SortBy'
import GroupCard from '../components/GroupList/GroupCard'
import Pagination from '../components/utils/Pagination'
export default function GroupList() {
  const [iWantToLearn, setIWantToLearn] = useState(false);
  const [pricePerLesson, setPricePerLesson] = useState(false);
  const [availability, setAvailability] = useState(false);
  const [sort, setSort] = useState(false);
  const handleScroll = (event, id) => {
    event.preventDefault();
    const targetElementId = id;
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop + -125,
        behavior: 'smooth',
      });
    }
  };
  return (
    <main>
      <div className='w-full min-h-[411px] flex items-center md:justify-center sm:justify-center bg-[rgba(255,253,244,1)] xsm:mt-[104px]'>
        <div className='pl-[67px] pr-[118px] xsm:pl-[8.205vw] xsm:pr-[8.205vw] flex items-center justify-between w-full'>
          <div className='flex flex-col gap-[20px] md:items-center sm:items-center xsm:items-center md:flex-1 sm:flex-1'>
            <h1 className='font-bold font-rubik text-[54px] leading-[63.99px] tracking-[-0.02em] md:text-center sm:text-center xsm:text-center md:text-[36px] md:leading-[42.66px] xsm:text-[42px] xsm:leading-[50.11px]'>Cook Together with <span className='font-pacifico font-normal leading-[63.99px] text-primary2 md:leading-[63.22px] sm:leading-[63.22px]'>Group</span></h1>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec w-[37.014vw] md:w-[63.832vw] sm:w-[63.832vw] xsm:w-[83.59vw] md:text-center sm:text-center xsm:text-center'>Embrace the fun of learning with COOK's group lessons. Dive into lively discussions, collaborate on recipes, and connect with a diverse community of food lovers. Transform your kitchen into a vibrant, interactive culinary classroom!</p>
            <div className='flex items-center gap-[17px]'>
              <a onClick={(e) => handleScroll(e, "explore")} href="#explore">
                <button className='px-[16px] h-[39px] rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] text-[white] bg-primary'>Explore groups</button>
              </a>
              <Link to={'/search-tutors'}>
                <button className='px-[16px] h-[39px] rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] text-primary2 bg-[rgba(0,0,0,0)] border-2 border-primary'>Find A Tutor</button>
              </Link>
            </div>
          </div>
          <div className='md:hidden sm:hidden xsm:hidden'>
            <div className='w-fit relative'>
              <img className='w-[306px] absolute z-10 right-[-35px] bottom-[-40px]' src={GroupHeroPattern} alt="" />
              <img className='w-[470px] rounded-[9px] relative z-20' src={JoinClassGroup} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='pl-[65px] pr-[63px] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[8.205vw] '>
        <button className='w-full rounded-[12px] justify-center py-[14px] mt-[21px] mb-[41px] xsm:flex hidden gap-[12px] items-center border-2 border-[rgba(255,219,184,1)]'>
          <img src={FilterIcon} alt="" />
          <p className='font-outfit font-medium text-[22px] leading-[33px]'>Filters</p>
        </button>
        {/* <div className='flex gap-[21px] mt-[81px] mb-[79px] flex-wrap xsm:hidden'>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Category</p>
            <select name="" className='min-h-[49px] w-[239px] md:w-[231px] sm:w-[231px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">Baking</option>
            </select>
          </div>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Price</p>
            <select name="" className='min-h-[49px] w-[239px] md:w-[231px] sm:w-[231px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">Mon, 27 Apr </option>
            </select>
          </div>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Time</p>
            <select name="" className='min-h-[49px] w-[239px] md:w-[231px] sm:w-[231px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">9:00pm - 10:00pm</option>
            </select>
          </div>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Date</p>
            <select name="" className='min-h-[49px] w-[239px] md:w-[231px] sm:w-[231px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">Mon, 27 Apr </option>
            </select>
          </div>
        </div> */}
        <div className='mt-[52px] flex justify-between items-center xsm:hidden'>
          <div className='flex gap-[21px]'>
            <div className='relative w-[15.694vw] md:w-[27.784vw] sm:w-[27.784vw]'>
              <div style={iWantToLearn ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" } : {}} onClick={() => setIWantToLearn(!iWantToLearn)} className='cursor-pointer h-[67px]  rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
                {/* <p className='absolute font-outfit font-medium text-[18px] leading-[23px] left-[-2px] bg-[white] text-primary2 top-[-14px] '>I want to Learn</p> */}
                <p name="" className='h-full flex items-center font-outfit font-normal md:text-[18px] md:leading-[27px] text-[18px] leading-[22.68px] text-TextColor flex-1 rounded-[12px] px-[20px]' id="">I want to Learn</p>
                <svg className='self-center mr-[20px]' width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.18205 6.40236C5.79792 6.76062 5.20208 6.76062 4.81795 6.40236L0.861155 2.71208C0.197273 2.09292 0.635403 0.980775 1.5432 0.980775L9.4568 0.980776C10.3646 0.980776 10.8027 2.09292 10.1388 2.71208L6.18205 6.40236Z" fill="#D27722" />
                </svg>
              </div>
              {iWantToLearn &&
                <IWantToLearn />
              }
            </div>
            <div className='relative w-[15.694vw] md:w-[27.784vw] sm:w-[27.784vw]'>
              <div style={pricePerLesson ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" } : {}} onClick={() => setPricePerLesson(!pricePerLesson)} className='cursor-pointer h-[67px] w-full md:w-[27.784vw] sm:w-[27.784vw]  rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
                {/* <p className='absolute font-outfit  font-medium text-[18px] leading-[23px] left-[-2px] bg-[white] text-primary2 top-[-14px] '>Price per lesson</p> */}
                <p name="" className='h-full flex items-center font-outfit font-normal md:text-[18px] md:leading-[27px] text-[18px] leading-[22.68px] text-TextColor flex-1 rounded-[12px] px-[20px]' id="">Price per lesson</p>
                <svg className='self-center mr-[20px]' width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.18205 6.40236C5.79792 6.76062 5.20208 6.76062 4.81795 6.40236L0.861155 2.71208C0.197273 2.09292 0.635403 0.980775 1.5432 0.980775L9.4568 0.980776C10.3646 0.980776 10.8027 2.09292 10.1388 2.71208L6.18205 6.40236Z" fill="#D27722" />
                </svg>
              </div>
              {pricePerLesson &&
                <PricePerLesson />
              }
            </div>
            <div className='relative w-[19.792vw] md:w-[27.784vw] sm:w-[27.784vw]'>
              <div style={availability ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" } : {}} onClick={() => setAvailability(!availability)} className='cursor-pointer h-[67px] w-full rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
                {/* <p className='absolute font-outfit font-medium text-[18px] leading-[23px] left-[-2px] bg-[white] text-primary2 top-[-14px] '>Availability</p> */}
                <p name="" className='h-full flex items-center font-outfit font-normal md:text-[18px] md:leading-[27px] text-[18px] leading-[22.68px] text-TextColor flex-1 rounded-[12px] px-[20px]' id="">Availability</p>
                <svg className='self-center mr-[20px]' width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.18205 6.40236C5.79792 6.76062 5.20208 6.76062 4.81795 6.40236L0.861155 2.71208C0.197273 2.09292 0.635403 0.980775 1.5432 0.980775L9.4568 0.980776C10.3646 0.980776 10.8027 2.09292 10.1388 2.71208L6.18205 6.40236Z" fill="#D27722" />
                </svg>
              </div>
              {availability &&
                <Availability />
              }
            </div>
          </div>

          <div className='flex gap-[20px] items-center md:hidden sm:hidden'>
            <div className='overflow-hidden relative p-[16px] w-[226px] h-[55px] border-2 border-[rgba(255,219,184,1)] rounded-[8px]'>
              <svg className='min-w-[26px] absolute top-[50%] translate-y-[-50%]' width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9167 21.0833C16.7031 21.0833 20.5833 17.2031 20.5833 12.4167C20.5833 7.6302 16.7031 3.75 11.9167 3.75C7.1302 3.75 3.25 7.6302 3.25 12.4167C3.25 17.2031 7.1302 21.0833 11.9167 21.0833Z" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.75 23.25L18.0375 18.5375" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input type="text" name="" id="" placeholder='Search' className='indent-[35px] placeholder:text-TextColor outline-none font-outfit text-[20px] leading-[22.68px] ' />
            </div>
            <div className='relative'>
              <div onClick={() => setSort(!sort)} className='relative w-[64px] h-[61px] rounded-full border-2 border-[rgba(255,219,184,1)] flex justify-center items-center'>
                <img className='w-[20px]' src={UpsideDown} alt="" />
              </div>
              {sort && <div className='absolute top-[110%] right-0 w-[19.792vw] md:w-[27.784vw] sm:w-[27.784vw]'>
                <div style={sort ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" } : {}} className='cursor-pointer h-[67px] w-full rounded-[12px] flex relative border-2 border-[rgba(255,219,184,1)]'>
                  <p name="" className='h-full flex items-center font-outfit font-normal md:text-[18px] md:leading-[27px] text-[18px] leading-[22.68px] text-TextColor flex-1 rounded-[12px] px-[20px]' id="">Sort By</p>
                </div>
                <SortBy />
              </div>}
            </div>
          </div>
        </div>
        <div className='w-full mt-[52px]'>
          <div>
            <h3 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Popular classes</h3>
            <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 items-center gap-x-[20px] gap-y-[42px] mt-[26px]'>
              <GroupCard background={"rgba(255,253,244,1)"} />
              <GroupCard background={"rgba(255,253,244,1)"} />
              <GroupCard background={"rgba(255,253,244,1)"} />
              <GroupCard background={"rgba(255,253,244,1)"} />
            </div>
          </div>
          <div className='w-full mt-[87px]' id='explore'>
            <h3 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>All group classes</h3>
            <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 items-center gap-x-[20px] xsm:gap-y-[42px] gap-y-[55px] mt-[26px]'>
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <div className='xsm:w-[96.71vw] w-full xsm:ml-[-8.205vw] col-span-4 md:col-span-2 sm:col-span-2 xsm:col-span-1'>
                <div className='w-full my-[55px] min-h-[245px] md:justify-center sm:justify-center xsm:rounded-[0px] xsm:justify-center bg-primary2 md:py-[62px] md:px-[72px] sm:py-[62px] sm:px-[72px] xsm:py-[54px] xsm:px-[8.205vw] rounded-[16px] md:min-w-full sm:min-w-full xsm:min-w-full pl-[3.194vw] pr-[4.028vw] flex items-center'>
                  <div className='flex md:flex-col sm:flex-col xsm:flex-col items-center gap-x-[5.208vw] gap-y-[24px] w-full'>
                    <h3 className='w-[42.083vw] md:w-[56vw] xsm:w-full sm:w-[56vw] md:text-center sm:text-center xsm:text-center font-rubik font-semibold text-[51px] leading-[60.08px] tracking-[-0.02em] md:tracking-[0px] sm:tracking-[0px] text-[white] md:text-[36px] md:leading-[42.41px] sm:text-[36px] sm:leading-[42.41px] '>Improve your skills with <span className='text-[rgba(255,219,184,1)] font-pacifico font-normal'>one-on-one coaching</span></h3>
                    <p className='w-[37.014vw] md:w-[63.832vw] xsm:w-full sm:w-[63.832vw] md:text-center sm:text-center xsm:text-center font-outfit font-normal text-[18px] leading-[27px] text-[white]'>Looking for personalized guidance? Explore our dedicated tutors who are ready to share their culinary wisdom. Tailor your learning journey to your pace and preferences with one-on-one coaching.</p>
                    <button className='hidden md:flex sm:flex xsm:flex text-[rgba(255,219,184,1)] border-2 border-[rgba(255,219,184,1)] rounded-[4px] px-[16px] py-[8px] font-outfit font-medium text-[18px] leading-[22.68px]'>Find A Tutor</button>
                  </div>
                </div>
              </div>

              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </div>
            <Pagination currentPage={1} totalPages={6} />
          </div>
        </div>

      </div>
    </main>
  )
}
