import React, { useEffect, useRef, useState } from 'react'
import StarIcon from "../assets/TutorList/StarIcon.svg"
import UpsideDownIcon from "../assets/TutorList/UpsideDownIcon.svg"
import FilterIcon from "../assets/TutorList/FilterIcon.svg"
import FilterButtonIcon from "../assets/TutorList/FilterButtonIcon.svg"
import TutorCard from '../components/TutorList/TutorCard'
import GroupCard from '../components/GroupList/GroupCard'
import GroupCardScroll from '../components/GroupList/GroupCardScroll'
import ScrollArrow from '../assets/GroupList/ScrollArrow.svg'
import { Link } from 'react-router-dom'
import Pagination from '../components/utils/Pagination'
import IWantToLearn from '../components/DropDowns/IWantToLearn'
import PricePerLesson from '../components/DropDowns/PricePerLesson'
import Availability from '../components/DropDowns/Availability'

export default function TutorList() {
  const [iWantToLearn, setIWantToLearn] = useState(false);
  const [pricePerLesson, setPricePerLesson] = useState(false);
  const [availability, setAvailability] = useState(false);
  // const [iWantToLearn,setIWantToLearn]=useState(false);

  const scrollRef = useRef(null);
  const divRef = useRef(null);

  const [width, setWidth] = useState()

  useEffect(() => {
    const windowWidthHandler = () => {
      if (divRef.current) {
        const width = divRef.current.offsetWidth;
        setWidth(+width + 20)
      }
    }

    window.addEventListener('resize', windowWidthHandler);

    // Cleanup by removing the event listener
    return () => {
      window.removeEventListener('resize', windowWidthHandler);
    };
  }, [])

  console.log(width)

  const handleScroll = () => {
    const currentScrollLeft = scrollRef.current.scrollLeft;
    const targetScrollLeft = currentScrollLeft + width;

    scrollRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
  }

  const handleScrollLeft = () => {
    const currentScrollLeft = scrollRef.current.scrollLeft;
    const targetScrollLeft = currentScrollLeft - width;

    scrollRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <main className='w-full pt-[43px] xsm:pt-[72px] '>
      <div className='mx-[64px] md:mx-[5.749vw] sm:mx-[5.749vw] xsm:mx-[0px] xsm:w-full bg-primary2 rounded-[16px] flex justify-between items-center py-[43px] px-[52px] xsm:px-[5.128vw] xsm:rounded-[0px]'>
        <div className='xsm:flex xsm:items-center xsm:flex-1 sm:flex sm:items-center sm:flex-1 md:flex md:items-center md:flex-1 xsm:flex-col sm:flex-col md:flex-col'>
          <h1 className='font-rubik font-bold text-[42px] leading-[50px] trakcing-[-0.02em] text-[white] xsm:text-center sm:text-center md:text-center xsm:text-[36px] xsm:font-semibold xsm:leading-[43.13px]'>Find Your Perfect Chef</h1>
          <p className="font-outfit font-normal text-[24px] leading-[30.24px] text-[rgba(255,219,184,1)] xsm:text-center sm:text-center md:text-center xsm:text-[22px] xsm:leading-[27.72px]">Discover, Learn, Cook with Masters</p>
        </div>
        <div className='flex flex-col items-end md:hidden sm:hidden xsm:hidden'>
          <div className='flex items-center gap-[8px]'>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1005_50990)">
                <path d="M15.9583 6.325C15.9071 6.16645 15.8104 6.02646 15.6802 5.92248C15.5501 5.81851 15.3922 5.75515 15.2262 5.7403L10.6082 5.32094L8.78209 1.04677C8.6474 0.733546 8.34077 0.530853 8.00007 0.530853C7.65937 0.530853 7.35271 0.733577 7.21808 1.04755L5.39197 5.32097L0.7732 5.7403C0.607451 5.75548 0.449802 5.81898 0.3198 5.92291C0.189799 6.02685 0.0931609 6.16666 0.0418688 6.325C-0.0634776 6.64901 0.0338061 7.00436 0.290531 7.22837L3.78125 10.2897L2.75191 14.8239C2.67659 15.1573 2.80597 15.5019 3.0826 15.7018C3.23126 15.8093 3.40524 15.864 3.58065 15.864C3.7319 15.864 3.8819 15.8232 4.01659 15.7426L8.00007 13.3618L11.9821 15.7426C12.2735 15.9179 12.6408 15.9019 12.9168 15.7018C13.0519 15.604 13.1553 15.4687 13.2141 15.3126C13.2729 15.1565 13.2845 14.9865 13.2475 14.8239L12.2182 10.2897L15.7089 7.22899C15.8345 7.11932 15.925 6.97517 15.9694 6.81446C16.0137 6.65374 16.0099 6.48354 15.9583 6.325Z" fill="#FFDBB8" />
              </g>
              <defs>
                <clipPath id="clip0_1005_50990">
                  <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
            <h3 className='font-rubik font-semibold text-[22px] leading-[26.07px] tracking-[-0.02em] text-[white]'>Popular categories</h3>
          </div>
          <p className="font-outfit font-normal text-[18px] leading-[22.68px] mt-[8px] text-[rgba(255,219,184,1)]">Italian Cuisine • Vegan Cooking • Pastry & Baking </p>
        </div>
      </div>

      <div className='px-[64px] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[32px]'>
        <div className='mt-[99px] flex justify-between items-center xsm:hidden'>
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
            <div className='h-[61px] w-[131px] rounded-[12px] flex justify-center items-center gap-[12px] relative border-2 border-[rgba(255,219,184,1)] bg-primary2'>
              <img className='w-[20px]' src={UpsideDownIcon} alt="" />
              <p className='font-outfit font-normal text-[18px] leading-[24px] text-[white] '>Popular</p>
            </div>
            <div className='w-[64px] h-[61px] rounded-full bg-primary2 flex justify-center items-center'>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9167 20.5833C16.7031 20.5833 20.5833 16.7031 20.5833 11.9167C20.5833 7.1302 16.7031 3.25 11.9167 3.25C7.1302 3.25 3.25 7.1302 3.25 11.9167C3.25 16.7031 7.1302 20.5833 11.9167 20.5833Z" stroke="#FFDBB8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.75 22.75L18.0375 18.0375" stroke="#FFDBB8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className='mt-[42px] '>
          {/* Mobile search and filter */}
          <div className='mt-[1px] hidden xsm:grid'>
            <div className='xsm:w-full xsm:flex w-[37.153vw] h-[49px] border-2 border-primary2 rounded-[4px] hidden items-center px-[16px] relative mt-[31px]'>
              <svg className='absolute' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.9999 21.5L16.6499 17.15" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input type="text" className='w-full font-medium font-outfit text-[20px] leading-[25.2px] h-full outline-none indent-[37px] bg-[#00000000] text-primary2 placeholder:text-primary2' placeholder='Search' />
            </div>

            <div className='flex items-center justify-between mt-[14px] mb-[58px]'>
              <div className='flex gap-[12px] items-center'>
                <img src={FilterIcon} alt="" />
                <p className='font-outfit font-medium text-[22px] leading-[33px]'>Filters</p>
              </div>
              <img src={FilterButtonIcon} alt="" />
            </div>
          </div>


          <div className='flex justify-between items-center mb-[92px] xsm:hidden'>
            <h3 className='font-outfit font-medium text-[22px] leading-[27.72px] text-TextColor'>100 tutors found</h3>
            <div className='hidden md:flex sm:flex gap-[20px] items-center'>
              <div className='h-[61px] w-[131px] rounded-[12px] flex justify-center items-center gap-[12px] relative border-2 border-primary2 bg-primary2'>
                <img className='w-[20px]' src={UpsideDownIcon} alt="" />
                <p className='font-outfit font-normal text-[22px] leading-[33px] text-[white] '>Popular</p>
              </div>
              <div className='w-[64px] h-[61px] rounded-full bg-primary2 flex justify-center items-center'>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9167 20.5833C16.7031 20.5833 20.5833 16.7031 20.5833 11.9167C20.5833 7.1302 16.7031 3.25 11.9167 3.25C7.1302 3.25 3.25 7.1302 3.25 11.9167C3.25 16.7031 7.1302 20.5833 11.9167 20.5833Z" stroke="#FFDBB8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22.75 22.75L18.0375 18.0375" stroke="#FFDBB8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="ml-[11.528vw] mr-[11.597vw] md:mx-[0px] sm:mx-[0px] xsm:mx-[0px] w-fit m-auto flex flex-col">
            <div className='flex flex-col gap-[35px]'>
              <TutorCard />
              <TutorCard />
              <TutorCard />
            </div>

            <div className='mt-[122px]'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <svg width="28" height="33" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="11.5" cy="10.5" rx="11.5" ry="10.5" fill="#FFDBB8" />
                  </svg>
                  <p className='font-rubik font-semibold text-[24px] leading-[18.96px] relative left-[-13px]'>Group Lesson</p>
                </div>
                <Link to={'/group'}>
                  <p className='font-rubik font-semibold text-[16px] leading-[18.96px] relative left-[-13px]'>View all</p>
                </Link>
              </div>
              <div className='w-fit relative'>
                <img onClick={handleScroll} className='cursor-pointer opacity-80 hover:opacity-100 transition-all duration-150 absolute right-[-5%] xsm:right-[-0%] xsm:left-[100%] top-[50%] translate-x-[-50%]' src={ScrollArrow} alt="" />
                <img onClick={handleScrollLeft} className='cursor-pointer opacity-80 hover:opacity-100 transition-all duration-150 absolute left-[-0%] rotate-180 top-[50%] translate-x-[-50%]' src={ScrollArrow} alt="" />
                <div ref={scrollRef} className='mt-[21px] flex gap-[20px] w-full max-w-[67.986vw] md:max-w-[88.383vw] xsm:max-w-[83.077vw] overflow-scroll hideScrollbar'>
                  <GroupCardScroll divRef={divRef} />
                  <GroupCardScroll />
                  <GroupCardScroll />
                  <GroupCardScroll />
                  <GroupCardScroll />
                  <GroupCardScroll />
                  <GroupCardScroll />
                  <GroupCardScroll />
                </div>
              </div>

            </div>

            <div className='flex flex-col gap-[35px] mt-[153px]'>
              <TutorCard />
              <TutorCard />
              <TutorCard />
            </div>

          </div>
          <Pagination currentPage={1} totalPages={6} />
        </div>
      </div>
    </main>
  )
}
