import React from 'react'
import finishedLesson from "../assets/StudentDashboard/finishedLesson.svg"
import upcomingLesson from "../assets/StudentDashboard/upcomingLesson.svg"
import user from "../assets/StudentDashboard/user.svg"

const StudentDashboard = () => {
  return (
    <>
      <div className='flex flex-col mt-[95px] sm:mt-[76px] md:mt-[76px] xsm:mt-[59px] px-[19.86111111111111vw] sm:px-[48px] md:px-[48px] xsm:px-[32px] mb-[172px] sm:mb-[201px] md:mb-[201px] xsm:mb-[68px]'>
        <div className='flex flex-col gap-[29px] xsm:gap-[30px]'>
          <h1 className='font-[600] font-rubik text-[40px] tracking-[-0.02em] leading-[45.32px] xsm:leading-[36.26px] xsm:text-[32px]'>Lessons</h1>
          <div className='flex gap-[24px] xsm:gap-[16px] xsm:flex-col sm:flex-col md:flex-col'>
            <div className='p-[16px] pr-0 bg-primaryLighten flex gap-[24px]'>
              <img src={finishedLesson} alt="" />
              <div className='flex flex-col '>
                <h2 className='text-[24px] font-outfit font-[600] xsm:text-[20px] text-[black]'>12 Finished Lessons</h2>
                <p className='font-outfit mt-[4px] xsm:mt-[8px] text-[16px] text-TextColorSec'>Celebrate your progress with completed lessons</p>
              </div>
            </div>
            <div className='p-[16px] pr-0 bg-primaryLighten flex gap-[24px]'>
              <img src={upcomingLesson} alt="" />
              <div className='flex flex-col '>
                <h2 className='text-[24px] font-outfit font-[600] xsm:text-[20px] text-[black]'>2 Upcoming Lessons</h2>
                <p className='font-outfit mt-[4px] xsm:mt-[8px] text-[16px] text-TextColorSec'>Stay excited for what's ahead with upcoming lessons</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-[100px] xsm:mt-[103px] gap-[112px] xsm:gap-[68px]'>
          <div className='flex flex-col gap-[37px] xsm:gap-[29px]'>
            <h2 className='font-rubik font-semibold text-[28px] leading-[31.72px] tracking-[-0.02em] xsm:text-[24px] xsm:leading-[27.19px]'>Upcoming Classes</h2>
            <div className='flex flex-col gap-[12px] xsm:gap-[14px]'>
              {[1, 2, 3].map((val, index) => {
                return (
                  <div className='flex justify-between p-[16px] border border-primaryLighten2 rounded-lg'>
                    <div className='flex gap-[16px] items-center xsm:flex-col xsm:items-start'>
                      <img src={user} alt="" />
                      <div className='flex flex-col gap-[5px]'>
                        <h2 className='text-[16px] font-outfit leading-[18.13px] text-primary2'>Lesson with Jack</h2>
                        <p className='text-[22px] xsm:text-[16px] xsm:leading-[18.13px] leading-[24.93px] font-[600] font-outfit'>Monday, 26 June, 19:00-22:00</p>
                      </div>
                    </div>
                    <p className='text-[24px] font-outfit font-[700] text-primary2 leading-[27.19px]'>$10</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='flex flex-col gap-[37px] xsm:gap-[29px]'>
            <h2 className='font-rubik font-semibold text-[28px] leading-[31.72px] tracking-[-0.02em] xsm:text-[24px] xsm:leading-[27.19px]'>Past Classes</h2>
            <div className='flex flex-col gap-[12px] xsm:gap-[14px]'>
              {[1, 2, 3].map((val, index) => {
                return (
                  <div className='flex justify-between p-[16px] border border-primaryLighten2 rounded-lg'>
                    <div className='flex gap-[16px] items-center xsm:flex-col xsm:items-start'>
                      <img src={user} alt="" />
                      <div className='flex flex-col gap-[5px]'>
                        <h2 className='text-[16px] font-outfit leading-[18.13px] text-[#349910]'>Lesson with Jack  •  Confirmed</h2>
                        <p className='text-[22px] xsm:text-[16px] xsm:leading-[18.13px] leading-[24.93px] font-[600] font-outfit'>Monday, 26 June, 19:00-22:00</p>
                      </div>
                    </div>
                    <p className='text-[24px] font-outfit font-[700] text-primary2 leading-[27.19px]'>$10</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='mx-[19.86111111111111vw] xsm:mx-0 sm:m-0 md:m-0 h-[2px] bg-primaryLighten2'></div>
      <footer className='flex justify-center items-center flex-col gap-[8px] pt-[52px] pb-[78px] sm:pb-[78px] md:pb-[78px] xsm:pb-[51px]'>
        <h1 className='text-[32px] font-rubik font-[700] text-primary2 leading-[37.92px] tracking-[-0.02em]'>COOK</h1>
        <div className='flex gap-[10px] items-center'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7977 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.5 6.5H17.51" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 2.99998C22.0424 3.67546 20.9821 4.19209 19.86 4.52999C19.2577 3.8375 18.4573 3.34668 17.567 3.12391C16.6767 2.90115 15.7395 2.95718 14.8821 3.28444C14.0247 3.6117 13.2884 4.19439 12.773 4.9537C12.2575 5.71302 11.9877 6.61232 12 7.52998V8.52998C10.2426 8.57555 8.50127 8.1858 6.93101 7.39543C5.36074 6.60506 4.01032 5.43862 3 3.99998C3 3.99998 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.49998C20.9991 7.22144 20.9723 6.94358 20.92 6.66999C21.9406 5.66348 22.6608 4.3927 23 2.99998Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 9H2V21H6V9Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </footer>
    </>
  )
}

export default StudentDashboard