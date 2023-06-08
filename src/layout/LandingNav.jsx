import React from 'react'
import Nav1 from "../assets/LandingPage/Nav1.svg"
import Nav2 from "../assets/LandingPage/Nav2.svg"
import Nav3 from "../assets/LandingPage/Nav3.svg"

export default function LandingNav() {
  return (
    <nav className='mb-[104px]'>
      <div className='h-[104px] w-[100%] px-[64px] fixed top-0 bg-[white] z-[1000] flex items-center justify-between border-b border-[rgba(255,219,184,1)]'>
        <div className='flex items-center gap-[32px]'>
          <h1 className='font-rubik font-bold text-[32px] leading-[37.92px] tracking-[-0.02em] text-primary'>COOK</h1>
          <div className='md:hidden h-[15px] border border-primary rouded-[16px]'></div>
          <div className='md:hidden flex gap-[24px]'>
            <div className='flex gap-[7px]'>
              <img src={Nav1} />
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Cooking Classes</p>
            </div>
            <div className='flex gap-[7px]'>
              <img src={Nav2} />
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Cooking Classes</p>
            </div>
            <div className='flex gap-[7px]'>
              <img src={Nav3} />
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Cooking Classes</p>
            </div>

          </div>
        </div>

        <div className='flex items-center gap-[22px]'>
          <div className='flex items-center gap-[4px]'>
            <p className='font-outfit font-normal text-[19px] leading-[19px]'>Eng</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
            </svg>
          </div>
          <div className='flex items-center gap-[4px]'>
            <p className='font-outfit font-normal text-[18px] leading-[18px]'>USD</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
            </svg>
          </div>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <div>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 16.5V12.5" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 8.5H12.01" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <div>
            <button className='w-[131px] h-[41px] bg-primary text-backPri font-outfit font-[500] text-[20px] leading-[25px] flex justify-center items-center gap-[8px] rounded-[4px]'>
              Log In
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.75 2.75H14.75C15.1478 2.75 15.5294 2.90804 15.8107 3.18934C16.092 3.47064 16.25 3.85218 16.25 4.25V14.75C16.25 15.1478 16.092 15.5294 15.8107 15.8107C15.5294 16.092 15.1478 16.25 14.75 16.25H11.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 13.25L11.75 9.5L8 5.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.75 9.5H2.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

  )
}
