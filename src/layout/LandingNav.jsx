import React, { useState } from 'react'
import Nav1 from "../assets/LandingPage/Nav1.svg"
import Nav2 from "../assets/LandingPage/Nav2.svg"
import Nav3 from "../assets/LandingPage/Nav3.svg"
import Hamburger from "../assets/LandingPage/Hamburger.svg"
import COOKLogo from "../assets/allAssets/COOK-logo.svg"
import { Link } from 'react-router-dom'
import EnglishIcon from "../assets/LandingPage/EnglishIcon.svg"
import GermanIcon from "../assets/LandingPage/GermanIcon.svg"
import ChineseIcon from "../assets/LandingPage/ChineseIcon.svg"
import ItalianIcon from "../assets/LandingPage/ItalianIcon.svg"
import HebrewIcon from "../assets/LandingPage/HebrewIcon.svg"

export default function LandingNav() {

  const [currencyModal, setCurrencyModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);


  return (
    <nav className='mb-[104px] xsm:mb-[32px]'>
      <div className='h-[104px] w-[100%] px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[32px] fixed top-0 bg-[white] z-[1000] flex items-center justify-between border-b border-[rgba(255,219,184,1)]'>
        <div className='flex items-center gap-[2.222vw] xsm:justify-between xsm:flex-1'>
          <Link to={'/'}>
            <svg width="88" height="38" viewBox="0 0 88 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.424 30.32C8.37333 30.32 5.984 29.584 4.256 28.112C2.54933 26.6187 1.64267 24.464 1.536 21.648C1.51467 21.072 1.504 20.1333 1.504 18.832C1.504 17.5093 1.51467 16.5493 1.536 15.952C1.64267 13.1787 2.57067 11.0453 4.32 9.552C6.06933 8.03733 8.43733 7.28 11.424 7.28C13.3013 7.28 14.9867 7.6 16.48 8.24C17.9733 8.85867 19.1467 9.75467 20 10.928C20.8747 12.08 21.3227 13.4347 21.344 14.992V15.056C21.344 15.2267 21.2693 15.376 21.12 15.504C20.992 15.6107 20.8427 15.664 20.672 15.664H16.352C16.0747 15.664 15.8613 15.6107 15.712 15.504C15.5627 15.376 15.4347 15.152 15.328 14.832C15.0293 13.744 14.56 12.9867 13.92 12.56C13.28 12.112 12.4373 11.888 11.392 11.888C8.87467 11.888 7.57333 13.296 7.488 16.112C7.46667 16.688 7.456 17.5733 7.456 18.768C7.456 19.9627 7.46667 20.8693 7.488 21.488C7.57333 24.304 8.87467 25.712 11.392 25.712C12.4373 25.712 13.2907 25.488 13.952 25.04C14.6133 24.5707 15.072 23.8133 15.328 22.768C15.4133 22.448 15.5307 22.2347 15.68 22.128C15.8293 22 16.0533 21.936 16.352 21.936H20.672C20.864 21.936 21.024 22 21.152 22.128C21.3013 22.256 21.3653 22.416 21.344 22.608C21.3227 24.1653 20.8747 25.5307 20 26.704C19.1467 27.856 17.9733 28.752 16.48 29.392C14.9867 30.0107 13.3013 30.32 11.424 30.32ZM33.2208 30.32C30.2128 30.32 27.8448 29.584 26.1168 28.112C24.3888 26.64 23.4714 24.4747 23.3648 21.616C23.3434 20.9973 23.3328 20.08 23.3328 18.864C23.3328 17.6267 23.3434 16.6987 23.3648 16.08C23.4714 13.264 24.3994 11.0987 26.1488 9.584C27.9194 8.048 30.2768 7.28 33.2208 7.28C36.1648 7.28 38.5221 8.048 40.2928 9.584C42.0634 11.0987 42.9914 13.264 43.0768 16.08C43.1194 17.3173 43.1408 18.2453 43.1408 18.864C43.1408 19.4613 43.1194 20.3787 43.0768 21.616C42.9701 24.4747 42.0528 26.64 40.3248 28.112C38.5968 29.584 36.2288 30.32 33.2208 30.32ZM33.2208 25.712C34.3941 25.712 35.3221 25.36 36.0048 24.656C36.7088 23.952 37.0821 22.8747 37.1248 21.424C37.1674 20.1867 37.1888 19.312 37.1888 18.8C37.1888 18.2453 37.1674 17.3707 37.1248 16.176C37.0821 14.7253 36.7088 13.648 36.0048 12.944C35.3008 12.24 34.3728 11.888 33.2208 11.888C32.0688 11.888 31.1408 12.24 30.4368 12.944C29.7541 13.648 29.3808 14.7253 29.3168 16.176C29.2954 16.7733 29.2848 17.648 29.2848 18.8C29.2848 19.9307 29.2954 20.8053 29.3168 21.424C29.3808 22.8747 29.7541 23.952 30.4368 24.656C31.1194 25.36 32.0474 25.712 33.2208 25.712ZM55.362 30.32C52.354 30.32 49.986 29.584 48.258 28.112C46.53 26.64 45.6127 24.4747 45.506 21.616C45.4847 20.9973 45.474 20.08 45.474 18.864C45.474 17.6267 45.4847 16.6987 45.506 16.08C45.6127 13.264 46.5407 11.0987 48.29 9.584C50.0607 8.048 52.418 7.28 55.362 7.28C58.306 7.28 60.6633 8.048 62.434 9.584C64.2047 11.0987 65.1327 13.264 65.218 16.08C65.2607 17.3173 65.282 18.2453 65.282 18.864C65.282 19.4613 65.2607 20.3787 65.218 21.616C65.1113 24.4747 64.194 26.64 62.466 28.112C60.738 29.584 58.37 30.32 55.362 30.32ZM55.362 25.712C56.5353 25.712 57.4633 25.36 58.146 24.656C58.85 23.952 59.2233 22.8747 59.266 21.424C59.3087 20.1867 59.33 19.312 59.33 18.8C59.33 18.2453 59.3087 17.3707 59.266 16.176C59.2233 14.7253 58.85 13.648 58.146 12.944C57.442 12.24 56.514 11.888 55.362 11.888C54.21 11.888 53.282 12.24 52.578 12.944C51.8953 13.648 51.522 14.7253 51.458 16.176C51.4367 16.7733 51.426 17.648 51.426 18.8C51.426 19.9307 51.4367 20.8053 51.458 21.424C51.522 22.8747 51.8953 23.952 52.578 24.656C53.2607 25.36 54.1887 25.712 55.362 25.712ZM69.1513 30C68.9379 30 68.7459 29.9253 68.5753 29.776C68.4259 29.6053 68.3513 29.4133 68.3513 29.2V8.4C68.3513 8.16533 68.4259 7.97333 68.5753 7.824C68.7459 7.67467 68.9379 7.6 69.1513 7.6H73.1833C73.4179 7.6 73.6099 7.67467 73.7593 7.824C73.9086 7.97333 73.9833 8.16533 73.9833 8.4V15.504L79.9033 8.208C80.1593 7.80267 80.5753 7.6 81.1513 7.6H85.7593C85.9513 7.6 86.1113 7.67467 86.2393 7.824C86.3673 7.952 86.4313 8.10133 86.4313 8.272C86.4313 8.42133 86.3993 8.54933 86.3353 8.656L78.6553 18.32L86.9113 28.944C86.9966 29.0293 87.0393 29.1573 87.0393 29.328C87.0393 29.4987 86.9753 29.6587 86.8473 29.808C86.7193 29.936 86.5593 30 86.3673 30H81.5993C81.0873 30 80.6606 29.7867 80.3193 29.36L73.9833 21.456V29.2C73.9833 29.4347 73.9086 29.6267 73.7593 29.776C73.6099 29.9253 73.4179 30 73.1833 30H69.1513Z" fill="#D27722" />
            </svg>
          </Link>
          <img className='hidden xsm:flex' src={Hamburger} alt="" />

          <div className='md:hidden sm:hidden h-[15px] border border-primary rouded-[16px] xsm:hidden'></div>
          <div className='md:hidden sm:hidden flex gap-[1.667vw] xsm:hidden'>
            <Link to={'/search-tutors'}>
              <div className='flex gap-[0.486vw]'>
                <img className='w-[24px]' src={Nav1} />
                <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Cooking Classes</p>
              </div>
            </Link>

            <Link to={'signup'}>
              <div className='flex gap-[0.486vw]'>
                <img className='w-[24px]' src={Nav2} />
                <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Become a Chef</p>
              </div>
            </Link>

            <Link to={'/search-groups'}>
              <div className='flex gap-[0.486vw]'>
                <img className='w-[24px]' src={Nav3} />
                <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Group Cooking</p>
              </div>
            </Link>
          </div>
        </div>

        <div className='flex items-center gap-[1.528vw] xsm:hidden'>
          <div onClick={() => setLanguageModal(!languageModal)} className='flex items-center gap-[0.278vw] cursor-pointer group relative'>
            {languageModal && <div style={{boxShadow: '0px 59px 23px rgba(0, 0, 0, 0.01), 0px 33px 20px rgba(0, 0, 0, 0.05), 0px 15px 15px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)'}} onClick={(e) => e.stopPropagation()} className='absolute top-[25px] rounded-[6px] p-[16px] w-[255px] h-[272px] border border-[rgba(255,219,184,1)] bg-[white]'>
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
            <p className='font-outfit font-normal text-[19px] leading-[19px]'>Eng</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
            </svg>
          </div>
          <div onClick={() => setCurrencyModal(!currencyModal)} className='flex items-center gap-[0.278vw] cursor-pointer relative'>
            {currencyModal && <div style={{boxShadow: '0px 59px 23px rgba(0, 0, 0, 0.01), 0px 33px 20px rgba(0, 0, 0, 0.05), 0px 15px 15px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)'}} onClick={(e) => e.stopPropagation()} className='absolute top-[25px] rounded-[6px] p-[16px] w-[255px] h-[272px] border border-[rgba(255,219,184,1)] bg-[white]'>
              <h5 className='font-outfit font-bold text-[18px] leading-[22.68px]'>Select a currency</h5>
              <div className='mt-[17px] flex flex-col gap-[5px]'>
                <div className='flex gap-[10px] items-center h-[36px] bg-[rgba(255,219,184,1)] px-[12px] '>
                  <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>USD</p>
                </div>
                <div className='flex gap-[10px] items-center h-[36px] px-[12px]'>
                  <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>EUR</p>
                </div>
                <div className='flex gap-[10px] items-center h-[36px] px-[12px] border-t border-t-[rgba(255,219,184,1)]'>
                  <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>UAH</p>
                </div>
                <div className='flex gap-[10px] items-center h-[36px] px-[12px] border-t border-t-[rgba(255,219,184,1)]'>
                  <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>GBP</p>
                </div>
                <div className='flex gap-[10px] items-center h-[36px] px-[12px] border-t border-t-[rgba(255,219,184,1)]'>
                  <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>VHF</p>
                </div>
              </div>
            </div>}
            <p className='font-outfit font-normal text-[18px] leading-[18px]'>USD</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
            </svg>
          </div>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <Link to={'support'}>
            <div className='custom-tooltip' data-tooltip="Support">
              <svg className='fill-[white] stroke-primary2 hover:fill-primary2 hover:stroke-[white] transition-all duration-200' width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16.5V12.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 8.5H12.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <div>
            <Link to={'signin'}>
              <button className='w-[131px] group hover:bg-[white] hover:border-2 hover:border-primary2 hover:text-primary2 transition-all duration-200 h-[41px] bg-primary2 text-backPri font-outfit font-[500] text-[20px] leading-[25px] flex justify-center items-center gap-[0.556vw] rounded-[4px]'>
                Log In
                <svg className='stroke-[white] group-hover:stroke-primary2 transition-all duration-200' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.75 2.75H14.75C15.1478 2.75 15.5294 2.90804 15.8107 3.18934C16.092 3.47064 16.25 3.85218 16.25 4.25V14.75C16.25 15.1478 16.092 15.5294 15.8107 15.8107C15.5294 16.092 15.1478 16.25 14.75 16.25H11.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 13.25L11.75 9.5L8 5.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.75 9.5H2.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
