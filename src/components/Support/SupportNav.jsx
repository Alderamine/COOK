import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ChineseIcon from "../../assets/LandingPage/ChineseIcon.svg"
import EnglishIcon from "../../assets/LandingPage/EnglishIcon.svg"
import GermanIcon from "../../assets/LandingPage/GermanIcon.svg"
import HebrewIcon from "../../assets/LandingPage/HebrewIcon.svg"
import ItalianIcon from "../../assets/LandingPage/ItalianIcon.svg"

export default function SupportNav() {

  const [languageModal, setLanguageModal] = useState(false);

  return (
    <nav className='w-full h-[166px] xsm:h-[108px] pl-[11.667vw] pr-[12.153vw] md:pl-[5.749vw] md:pr-[5.749vw] sm:pl-[5.749vw] sm:pr-[5.749vw] xsm:pl-[5.385vw] xsm:pr-[8.205vw] bg-[#D27722] flex items-center'>
      <div className='flex-1 flex items-center justify-between'>
        <Link to={'/support'}>
          <div>
            <h1 className='text-[48px] font-rubik font-bold tracking-[-0.02em] leading-[56.88px] text-[#FFDBB8] xsm:text-[32px] xsm:leading-[37.92px] md:text-[40px] md:leading-[47.4px] sm:text-[40px] sm:leading-[47.4px]'>COOK</h1>
            <div className='flex gap-[11px] mt-[0.5px]'>
              <svg className='max-w-[29px] max-h-[29px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.883 51.9543V16.6028C54.883 11.7565 50.9402 7.81372 46.0939 7.81372H8.78906C3.94277 7.81372 0 11.7565 0 16.6028V51.9543C0 56.8006 3.94277 60.7434 8.78906 60.7434H13.1838L18.1643 67.3838C19.3365 68.9469 21.682 68.9436 22.8518 67.3838L27.8322 60.7434H46.0939C50.9402 60.7434 54.883 56.8006 54.883 51.9543ZM39.5707 46.2881C38.427 47.4321 36.5717 47.4325 35.4275 46.2881L34.3418 45.2024C32.3344 46.4821 29.9547 47.227 27.4027 47.227C20.2629 47.227 14.4541 41.4184 14.4541 34.2786C14.4541 27.1385 20.2629 21.3299 27.4027 21.3299C34.5428 21.3299 40.3514 27.1387 40.3514 34.2786C40.3541 36.6599 39.696 38.9953 38.4504 41.0249L39.5705 42.145C40.7148 43.2891 40.7148 45.144 39.5707 46.2881Z" fill="white" />
                <path d="M27.4027 27.1893C23.4937 27.1893 20.3135 30.3696 20.3135 34.2786C20.3135 39.2809 25.3768 42.7075 30.0086 40.8694L29.017 39.8778C27.8729 38.7339 27.8729 36.8788 29.017 35.7346C30.1609 34.5905 32.016 34.5905 33.1602 35.7346L34.0809 36.6553C35.7244 32.0514 32.2906 27.1893 27.4027 27.1893ZM70.7729 59.9827H74.3746L72.582 55.2325L70.7729 59.9827Z" fill="white" />
                <path d="M91.2111 31.4454H60.7426V51.9544C60.7426 60.0315 54.1713 66.6028 46.0941 66.6028H45.1172V75.586C45.1172 80.4323 49.06 84.3751 53.9062 84.3751H72.1676L77.148 91.0155C78.3205 92.5786 80.6658 92.5751 81.8355 91.0155L86.816 84.3751H91.2111C96.0574 84.3751 100 80.4323 100 75.586V40.2344C100 35.3881 96.0574 31.4454 91.2111 31.4454ZM81.5033 70.5737C79.9951 71.1428 78.3014 70.3868 77.7279 68.8672L76.5863 65.8421H68.5416L67.3863 68.8755C66.8105 70.3876 65.1176 71.1465 63.6059 70.5706C62.0938 69.9948 61.335 68.302 61.9107 66.7901L69.4348 47.0344C69.9117 45.7749 71.1389 44.8667 72.5895 44.8651C73.2611 44.8628 73.9181 45.0612 74.4762 45.4348C75.0344 45.8083 75.4683 46.34 75.7223 46.9618C75.7479 47.0241 75.4131 46.1391 83.2096 66.7981C83.7811 68.3122 83.017 70.0024 81.5033 70.5737Z" fill="white" />
              </svg>

              <p className='font-medium font-rubik text-[24px] xsm:text-[18px] xsm:leading-[21.33px] leading-[28.44px] tracking-[-0.02em] text-[white] md:text-[20px] md:leading-[23.7px] sm:text-[20px] sm:leading-[23.7px]'>Support and Q&A</p>
            </div>
          </div>
        </Link>

        <div className='flex flex-col items-end'>
          <div className='flex gap-[2.014vw] items-center'>
            <Link className='xsm:hidden' to={'/'}>
              <p className='font-outfit font-normal text-[20px] leading-[25.2px] text-[white]'>Go to COOK</p>
            </Link>
            <div onClick={() => setLanguageModal(!languageModal)} className='flex gap-[8px] cursor-pointer'>
              {languageModal && <div style={{ boxShadow: '0px 59px 23px rgba(0, 0, 0, 0.01), 0px 33px 20px rgba(0, 0, 0, 0.05), 0px 15px 15px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }} onClick={(e) => e.stopPropagation()} className='absolute z-30 top-[75px] rounded-[6px] p-[16px] w-[255px] h-[272px] border border-[rgba(255,219,184,1)] bg-[white]'>
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
              <svg className='max-w-[20px] max-h-[20px] self-center' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1283_45264)">
                  <path d="M97.2167 66.4489C99.0171 61.2951 99.9995 55.7604 99.9995 49.9998C99.9995 44.2391 99.0171 38.7044 97.2167 33.5506C97.1737 33.3969 97.1205 33.2462 97.0576 33.0995C90.1128 13.8216 71.6415 0 50.0003 0C28.359 0 9.88721 13.8216 2.94295 33.0995C2.87988 33.2453 2.82732 33.3958 2.78384 33.5506C0.983388 38.7044 0.000976562 44.2391 0.000976562 49.9998C0.000976562 55.7604 0.983388 61.2951 2.78384 66.4489C2.8278 66.6038 2.87988 66.7547 2.94295 66.9C9.88768 86.1784 28.359 99.9995 50.0003 99.9995C71.6415 99.9995 90.1128 86.1779 97.0576 66.9C97.1206 66.7534 97.1738 66.6027 97.2167 66.4489ZM50.0003 92.8326C48.0961 92.8326 45.0261 89.3865 42.4602 81.6878C41.2216 77.9727 40.2301 73.7019 39.5077 69.056H60.4928C59.7704 73.7019 58.7789 77.9722 57.5408 81.6878C54.9744 89.3865 51.9044 92.8326 50.0003 92.8326ZM38.638 61.8886C38.2935 58.0669 38.1115 54.0799 38.1115 49.9998C38.1115 45.9196 38.2935 41.9326 38.638 38.111H61.362C61.7065 41.9326 61.8886 45.9196 61.8886 49.9998C61.8886 54.0799 61.7065 58.0669 61.362 61.8886H38.638ZM7.1679 50.0002C7.1679 45.8766 7.75514 41.8877 8.84793 38.1114H31.4491C31.1142 42.0119 30.9441 46.0094 30.9441 50.0002C30.9441 53.991 31.1137 57.9885 31.4491 61.889H8.84793C7.73091 58.025 7.16531 54.0225 7.1679 50.0002ZM50.0003 7.1674C51.9044 7.1674 54.9749 10.6135 57.5408 18.3122C58.7789 22.0273 59.7709 26.2981 60.4928 30.9436H39.5072C40.2297 26.2977 41.2212 22.0273 42.4597 18.3122C45.0261 10.6135 48.0961 7.1674 50.0003 7.1674ZM68.5509 38.1114H91.1521C92.2449 41.8877 92.8321 45.8766 92.8321 50.0002C92.8321 54.1239 92.2449 58.1128 91.1521 61.889H68.5509C68.8859 57.9885 69.056 53.991 69.056 50.0002C69.056 46.0094 68.8859 42.0119 68.5509 38.1114ZM88.3516 30.944H67.7286C66.4537 22.1535 64.2667 14.2669 61.1986 8.6563C73.0941 11.8812 82.9493 20.1146 88.3516 30.944ZM38.8014 8.65583C35.7333 14.2665 33.5463 22.153 32.2715 30.944H11.6485C17.0513 20.1146 26.906 11.8812 38.8014 8.65583ZM11.6485 69.056H32.2715C33.5463 77.8465 35.7333 85.7331 38.8014 91.3442C26.906 88.1188 17.0513 79.8859 11.6485 69.056ZM61.1986 91.3442C64.2667 85.7335 66.4537 77.847 67.7286 69.056H88.3516C82.9493 79.8859 73.0941 88.1188 61.1986 91.3442Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1283_45264">
                    <rect width="100" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className='xsm:hidden w-[37.153vw] h-[49px] border-2  border-[#FFDBB8] rounded-[4px] flex items-center px-[16px] relative mt-[16px]'>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
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