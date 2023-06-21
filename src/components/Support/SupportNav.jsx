import React, { useState } from 'react'
import NavIcon from "../../assets/Support/NavIcon.svg"
import NavEnglish from "../../assets/Support/NavEnglish.svg"
import { Link } from 'react-router-dom'
import EnglishIcon from "../../assets/LandingPage/EnglishIcon.svg"
import GermanIcon from "../../assets/LandingPage/GermanIcon.svg"
import ChineseIcon from "../../assets/LandingPage/ChineseIcon.svg"
import ItalianIcon from "../../assets/LandingPage/ItalianIcon.svg"
import HebrewIcon from "../../assets/LandingPage/HebrewIcon.svg"

export default function SupportNav() {

  const [languageModal, setLanguageModal] = useState(false);

  return (
    <nav className='w-full h-[166px] xsm:h-[108px] pl-[11.667vw] pr-[12.153vw] md:pl-[5.749vw] md:pr-[5.749vw] sm:pl-[5.749vw] sm:pr-[5.749vw] xsm:pl-[5.385vw] xsm:pr-[8.205vw] bg-[#D27722] flex items-center'>
      <div className='flex-1 flex items-center justify-between'>
        <Link to={'/support'}>
          <div>
            <h1 className='text-[48px] font-rubik font-bold tracking-[-0.02em] leading-[56.88px] text-[#FFDBB8] xsm:text-[32px] xsm:leading-[37.92px] md:text-[40px] md:leading-[47.4px] sm:text-[40px] sm:leading-[47.4px]'>COOK</h1>
            <div className='flex gap-[11px] mt-[0.5px]'>
              <img src={NavIcon} />
              <p className='font-medium font-rubik text-[24px] xsm:text-[18px] xsm:leading-[21.33px] leading-[28.44px] tracking-[-0.02em] text-[white] md:text-[20px] md:leading-[23.7px] sm:text-[20px] sm:leading-[23.7px]'>Support and Q&A</p>
            </div>
          </div>
        </Link>

        <div className='flex flex-col items-end'>
          <div className='flex gap-[2.014vw]'>
            <Link className='xsm:hidden' to={'/'}>
              <p className='font-outfit font-normal text-[20px] leading-[25.2px] text-[white]'>Go to COOK</p>
            </Link>
            <div onClick={() => setLanguageModal(!languageModal)} className='flex gap-[8px] cursor-pointer'>
              {languageModal && <div style={{boxShadow: '0px 59px 23px rgba(0, 0, 0, 0.01), 0px 33px 20px rgba(0, 0, 0, 0.05), 0px 15px 15px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)'}} onClick={(e) => e.stopPropagation()} className='absolute z-30 top-[75px] rounded-[6px] p-[16px] w-[255px] h-[272px] border border-[rgba(255,219,184,1)] bg-[white]'>
                <h5 className='font-outfit font-bold text-[18px] leading-[22.68px]'>Select a language</h5>
                <div className='mt-[17px] flex flex-col gap-[5px]'>
                  <div className='flex gap-[10px] items-center h-[36px] bg-[rgba(255,219,184,1)] px-[12px] '>
                    <img src={EnglishIcon} alt="" />
                    <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>English</p>
                  </div>
                  <div className='flex gap-[10px] items-center h-[36px] px-[12px]'>
                    <img src={GermanIcon} alt="" />
                    <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>German</p>
                  </div>
                  <div className='flex gap-[10px] items-center h-[36px] px-[12px] border-t border-t-[rgba(255,219,184,1)]'>
                    <img src={ChineseIcon} alt="" />
                    <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>Chinese</p>
                  </div>
                  <div className='flex gap-[10px] items-center h-[36px] px-[12px] border-t border-t-[rgba(255,219,184,1)]'>
                    <img src={ItalianIcon} alt="" />
                    <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>Italian</p>
                  </div>
                  <div className='flex gap-[10px] items-center h-[36px] px-[12px] border-t border-t-[rgba(255,219,184,1)]'>
                    <img src={HebrewIcon} alt="" />
                    <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>Hebrew</p>
                  </div>
                </div>
              </div>}
              <p className='font-outfit font-normal text-[20px] leading-[25.2px] text-[white] xsm:hidden'>English</p>
              <img src={NavEnglish} alt="" />
            </div>
          </div>
          <div className='xsm:hidden w-[37.153vw] h-[49px] border-2  border-[#FFDBB8] rounded-[4px] flex items-center px-[16px] relative mt-[16px]'>
            <svg className='absolute' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.9999 21.5L16.6499 17.15" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input type="text" className='w-full font-medium font-outfit text-[20px] leading-[25.2px] h-full outline-none indent-[37px] bg-[#00000000] text-[#fff] placeholder:text-[#FFDBB8]' placeholder='Search' />
          </div>
        </div>
      </div>
    </nav>
  )
}