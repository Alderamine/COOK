import React from 'react'
import search from "../assets/StudentDashboard/search.svg"
import user from "../assets/StudentDashboard/user.svg"
import setting from "../assets/StudentDashboard/setting.svg"
import message from "../assets/StudentDashboard/message.svg"
import arrow from "../assets/StudentDashboard/arrow.svg"
import finishedLesson from "../assets/StudentDashboard/finishedLesson.svg"
import upcomingLesson from "../assets/StudentDashboard/upcomingLesson.svg"
import Nav2 from "../assets/About/Nav2.svg"
import Nav3 from "../assets/About/Nav3.svg"
import { Link } from 'react-router-dom'

const StudentDashboard = () => {
  return (
    <div>
      <nav>
        <div className='h-[104px] w-[100%] px-[64px] sm:px-[48px] xsm:px-[32px] bg-[white] z-[1000] flex items-center justify-between'>
          <div className='flex items-center gap-[32px]'>
            <Link to={'/'}>
              <svg width="88" height="38" viewBox="0 0 88 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.424 30.32C8.37333 30.32 5.984 29.584 4.256 28.112C2.54933 26.6187 1.64267 24.464 1.536 21.648C1.51467 21.072 1.504 20.1333 1.504 18.832C1.504 17.5093 1.51467 16.5493 1.536 15.952C1.64267 13.1787 2.57067 11.0453 4.32 9.552C6.06933 8.03733 8.43733 7.28 11.424 7.28C13.3013 7.28 14.9867 7.6 16.48 8.24C17.9733 8.85867 19.1467 9.75467 20 10.928C20.8747 12.08 21.3227 13.4347 21.344 14.992V15.056C21.344 15.2267 21.2693 15.376 21.12 15.504C20.992 15.6107 20.8427 15.664 20.672 15.664H16.352C16.0747 15.664 15.8613 15.6107 15.712 15.504C15.5627 15.376 15.4347 15.152 15.328 14.832C15.0293 13.744 14.56 12.9867 13.92 12.56C13.28 12.112 12.4373 11.888 11.392 11.888C8.87467 11.888 7.57333 13.296 7.488 16.112C7.46667 16.688 7.456 17.5733 7.456 18.768C7.456 19.9627 7.46667 20.8693 7.488 21.488C7.57333 24.304 8.87467 25.712 11.392 25.712C12.4373 25.712 13.2907 25.488 13.952 25.04C14.6133 24.5707 15.072 23.8133 15.328 22.768C15.4133 22.448 15.5307 22.2347 15.68 22.128C15.8293 22 16.0533 21.936 16.352 21.936H20.672C20.864 21.936 21.024 22 21.152 22.128C21.3013 22.256 21.3653 22.416 21.344 22.608C21.3227 24.1653 20.8747 25.5307 20 26.704C19.1467 27.856 17.9733 28.752 16.48 29.392C14.9867 30.0107 13.3013 30.32 11.424 30.32ZM33.2208 30.32C30.2128 30.32 27.8448 29.584 26.1168 28.112C24.3888 26.64 23.4714 24.4747 23.3648 21.616C23.3434 20.9973 23.3328 20.08 23.3328 18.864C23.3328 17.6267 23.3434 16.6987 23.3648 16.08C23.4714 13.264 24.3994 11.0987 26.1488 9.584C27.9194 8.048 30.2768 7.28 33.2208 7.28C36.1648 7.28 38.5221 8.048 40.2928 9.584C42.0634 11.0987 42.9914 13.264 43.0768 16.08C43.1194 17.3173 43.1408 18.2453 43.1408 18.864C43.1408 19.4613 43.1194 20.3787 43.0768 21.616C42.9701 24.4747 42.0528 26.64 40.3248 28.112C38.5968 29.584 36.2288 30.32 33.2208 30.32ZM33.2208 25.712C34.3941 25.712 35.3221 25.36 36.0048 24.656C36.7088 23.952 37.0821 22.8747 37.1248 21.424C37.1674 20.1867 37.1888 19.312 37.1888 18.8C37.1888 18.2453 37.1674 17.3707 37.1248 16.176C37.0821 14.7253 36.7088 13.648 36.0048 12.944C35.3008 12.24 34.3728 11.888 33.2208 11.888C32.0688 11.888 31.1408 12.24 30.4368 12.944C29.7541 13.648 29.3808 14.7253 29.3168 16.176C29.2954 16.7733 29.2848 17.648 29.2848 18.8C29.2848 19.9307 29.2954 20.8053 29.3168 21.424C29.3808 22.8747 29.7541 23.952 30.4368 24.656C31.1194 25.36 32.0474 25.712 33.2208 25.712ZM55.362 30.32C52.354 30.32 49.986 29.584 48.258 28.112C46.53 26.64 45.6127 24.4747 45.506 21.616C45.4847 20.9973 45.474 20.08 45.474 18.864C45.474 17.6267 45.4847 16.6987 45.506 16.08C45.6127 13.264 46.5407 11.0987 48.29 9.584C50.0607 8.048 52.418 7.28 55.362 7.28C58.306 7.28 60.6633 8.048 62.434 9.584C64.2047 11.0987 65.1327 13.264 65.218 16.08C65.2607 17.3173 65.282 18.2453 65.282 18.864C65.282 19.4613 65.2607 20.3787 65.218 21.616C65.1113 24.4747 64.194 26.64 62.466 28.112C60.738 29.584 58.37 30.32 55.362 30.32ZM55.362 25.712C56.5353 25.712 57.4633 25.36 58.146 24.656C58.85 23.952 59.2233 22.8747 59.266 21.424C59.3087 20.1867 59.33 19.312 59.33 18.8C59.33 18.2453 59.3087 17.3707 59.266 16.176C59.2233 14.7253 58.85 13.648 58.146 12.944C57.442 12.24 56.514 11.888 55.362 11.888C54.21 11.888 53.282 12.24 52.578 12.944C51.8953 13.648 51.522 14.7253 51.458 16.176C51.4367 16.7733 51.426 17.648 51.426 18.8C51.426 19.9307 51.4367 20.8053 51.458 21.424C51.522 22.8747 51.8953 23.952 52.578 24.656C53.2607 25.36 54.1887 25.712 55.362 25.712ZM69.1513 30C68.9379 30 68.7459 29.9253 68.5753 29.776C68.4259 29.6053 68.3513 29.4133 68.3513 29.2V8.4C68.3513 8.16533 68.4259 7.97333 68.5753 7.824C68.7459 7.67467 68.9379 7.6 69.1513 7.6H73.1833C73.4179 7.6 73.6099 7.67467 73.7593 7.824C73.9086 7.97333 73.9833 8.16533 73.9833 8.4V15.504L79.9033 8.208C80.1593 7.80267 80.5753 7.6 81.1513 7.6H85.7593C85.9513 7.6 86.1113 7.67467 86.2393 7.824C86.3673 7.952 86.4313 8.10133 86.4313 8.272C86.4313 8.42133 86.3993 8.54933 86.3353 8.656L78.6553 18.32L86.9113 28.944C86.9966 29.0293 87.0393 29.1573 87.0393 29.328C87.0393 29.4987 86.9753 29.6587 86.8473 29.808C86.7193 29.936 86.5593 30 86.3673 30H81.5993C81.0873 30 80.6606 29.7867 80.3193 29.36L73.9833 21.456V29.2C73.9833 29.4347 73.9086 29.6267 73.7593 29.776C73.6099 29.9253 73.4179 30 73.1833 30H69.1513Z" fill="#D27722" />
              </svg>
            </Link>
            <div className='sm:hidden xsm:hidden h-[15px] border border-primaryLighten2 rouded-[16px]'></div>
            <div className='sm:hidden xsm:hidden flex gap-[24px]'>
              <Link to={'tutor'}>
                <div className='flex gap-[7px]'>
                  <img src={search} />
                  <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Find Tutors</p>
                </div>
              </Link>
            </div>
          </div>

          <div className='flex items-center gap-[22px] xsm:hidden'>
            <div className='flex items-center gap-[4px] cursor-pointer'>
              <p className='font-outfit font-normal text-[19px] leading-[19px]'>Eng</p>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
              </svg>
            </div>
            <div className='flex items-center gap-[4px] cursor-pointer'>
              <p className='font-outfit font-normal text-[18px] leading-[18px]'>USD</p>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
              </svg>
            </div>
            <div className='h-[15px] border border-primaryLighten2 rouded-[16px]'></div>
            <div className='flex gap-[12px] items-center'>
              <Link to={'support'}>
                <div className='custom-tooltip' data-tooltip="Support">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16.5V12.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8.5H12.01" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
              <Link to={'messages'}>
                <div className='custom-tooltip' data-tooltip="Messages">
                  <img src={message} alt="" />
                </div>
              </Link>
              <Link to={'setting'}>
                <div className='custom-tooltip' data-tooltip="Setting">
                  <img src={setting} alt="" />
                </div>
              </Link>
            </div>
            <div className='h-[15px] border border-primaryLighten2 rouded-[16px]'></div>
            <div>
              <img src={user} alt="" className='h-[48px] w-[48px]' />
            </div>
          </div>
          <div className='hidden xsm:block'>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
              <rect width="41" height="41" rx="12" fill="#D27722" />
              <rect x="10" y="10" width="21" height="21" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink: href="#image0_27_9682" transform="scale(0.00195312)" />
                </pattern>
                <image id="image0_27_9682" width="512" height="512" xlink: href="data:image/png;base64,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" />
              </defs>
            </svg>
          </div>
        </div>
      </nav>
      <div className='flex justify-between bg-primary2 pr-[61px] pl-[64px] py-[10px] xsm:pl-[32px] sm:pl-[48px]'>
        <div className='flex items-center gap-[29px]'>
          <p className='font-outfit font-[600] text-[16px] leading-[18.31px] text-[white]'>Lessons</p>
          <p className='font-outfit font-[600] text-[16px] leading-[18.31px] text-primaryLighten2'>Messages</p>
        </div>
        <div className='xsm:hidden flex items-center gap-[8px]'>
          <p className='font-outfit font-[600] text-[16px] leading-[18.31px] text-[white]'>Join your group lesson</p>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className='flex flex-col mt-[95px] sm:mt-[76px] xsm:mt-[59px] px-[19.86111111111111vw] sm:px-[48px] xsm:px-[32px] mb-[172px] sm:mb-[201px] xsm:mb-[68px]'>
        <div className='flex flex-col gap-[29px] xsm:gap-[30px]'>
          <h1 className='font-[600] font-rubik text-[40px] tracking-[-0.02em] leading-[45.32px] xsm:leading-[36.26px] xsm:text-[32px]'>Lessons</h1>
          <div className='flex gap-[24px] xsm:gap-[16px] xsm:flex-col'>
            <div className='p-[16px] bg-primaryLighten flex gap-[24px]'>
              <img src={finishedLesson} alt="" />
              <div className='flex flex-col justify-between'>
                <h2 className='text-[24px] font-outfit font-[600] xsm:text-[20px] text-[black]'>12 Finished Lessons</h2>
                <p className='font-outfit text-[16px] text-TextColorSec'>Celebrate your progress with completed lessons</p>
              </div>
            </div>
            <div className='p-[16px] bg-primaryLighten flex gap-[24px]'>
              <img src={upcomingLesson} alt="" />
              <div className='flex flex-col justify-between'>
                <h2 className='text-[24px] font-outfit font-[600] xsm:text-[20px] text-[black]'>2 Upcoming Lessons</h2>
                <p className='font-outfit text-[16px] text-TextColorSec'>Stay excited for what's ahead with upcoming lessons</p>
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
      <div className='mx-[19.86111111111111vw] xsm:mx-0 sm:m-0 h-[2px] bg-primaryLighten2'></div>
      <footer className='flex justify-center items-center flex-col gap-[8px] pt-[52px] pb-[78px] sm:pb-[78px] xsm:pb-[51px]'>
        <h1 className='text-[32px] font-rubik font-[700] text-primary2 leading-[37.92px] tracking-[-0.02em]'>COOK</h1>
        <div className='flex gap-[10px] items-center'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7977 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.5 6.5H17.51" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 2.99998C22.0424 3.67546 20.9821 4.19209 19.86 4.52999C19.2577 3.8375 18.4573 3.34668 17.567 3.12391C16.6767 2.90115 15.7395 2.95718 14.8821 3.28444C14.0247 3.6117 13.2884 4.19439 12.773 4.9537C12.2575 5.71302 11.9877 6.61232 12 7.52998V8.52998C10.2426 8.57555 8.50127 8.1858 6.93101 7.39543C5.36074 6.60506 4.01032 5.43862 3 3.99998C3 3.99998 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.49998C20.9991 7.22144 20.9723 6.94358 20.92 6.66999C21.9406 5.66348 22.6608 4.3927 23 2.99998Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 9H2V21H6V9Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </footer>
    </div>
  )
}

export default StudentDashboard