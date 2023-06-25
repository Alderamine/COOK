import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChineseIcon from "../assets/LandingPage/ChineseIcon.svg";
import EnglishIcon from "../assets/LandingPage/EnglishIcon.svg";
import GermanIcon from "../assets/LandingPage/GermanIcon.svg";
import HebrewIcon from "../assets/LandingPage/HebrewIcon.svg";
import ItalianIcon from "../assets/LandingPage/ItalianIcon.svg";

export default function Menu({ showMenu, closeMenu }) {
  const navigate = useNavigate();
  const [currencyModal, setCurrencyModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      closeMenu();
    }

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [])

  return (
    <div style={showMenu ? { right: 0 } : { right: '-80vw' }} className='transition-all duration-500 fixed z-[2000] right-0 bg-primary2 h-screen w-[79.487vw] top-0 pl-[7.949vw] pr-[6.923vw]'>
      <div className='flex items-center justify-between min-h-[102px]'>
        <svg onClick={closeMenu} className='cursor-pointer' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 4L21.5 20.5" stroke="#FFDBB8" strokeWidth="3" strokeLinecap="round" />
          <path d="M21.5 4L5 20.5" stroke="#FFDBB8" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg width="33" height="33" className='cursor-pointer' viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.625 4.125H26.125C26.8543 4.125 27.5538 4.41473 28.0695 4.93046C28.5853 5.44618 28.875 6.14565 28.875 6.875V26.125C28.875 26.8543 28.5853 27.5538 28.0695 28.0695C27.5538 28.5853 26.8543 28.875 26.125 28.875H20.625" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.75 23.375L20.625 16.5L13.75 9.625" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.625 16.5H4.125" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <nav className='flex flex-col gap-[32px] mt-[30px]'>
        <p onClick={() => { closeMenu(); navigate("/search-tutors") }} className='font-outfit font-normal cursor-pointer text-[24px] leading-[24px] text-[white]'>Cooking Classes</p>
        <p onClick={() => { closeMenu(); navigate("/signup") }} className='font-outfit font-normal cursor-pointer text-[24px] leading-[24px] text-[white]'>Become a Chef</p>
        <p onClick={() => { closeMenu(); navigate("/search-groups") }} className='font-outfit font-normal cursor-pointer text-[24px] leading-[24px] text-[white]'>Group Cooking</p>
        <p onClick={() => { closeMenu(); navigate("/support") }} className='font-outfit font-normal cursor-pointer text-[24px] leading-[24px] text-[white]'>Support</p>
        <p onClick={() => setLanguageModal(!languageModal)} className='relative font-outfit font-normal cursor-pointer text-[24px] leading-[24px] text-[white] flex gap-[22px] items-center'>
          English
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.55091 7.40362C6.25397 7.72507 5.74603 7.72507 5.44909 7.40362L0.234731 1.75891C-0.209007 1.27855 0.131698 0.5 0.785647 0.5L11.2144 0.500001C11.8683 0.500001 12.209 1.27855 11.7653 1.75891L6.55091 7.40362Z" fill="#FFDBB8" />
          </svg>
          {languageModal && <div style={{ boxShadow: '0px 59px 23px rgba(0, 0, 0, 0.01), 0px 33px 20px rgba(0, 0, 0, 0.05), 0px 15px 15px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }} onClick={(e) => e.stopPropagation()} className='absolute top-[25px] rounded-[6px] p-[16px] w-[255px] h-[272px] border border-[rgba(255,219,184,1)] bg-[white]'>
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
        </p>
        <p onClick={() => setCurrencyModal(!currencyModal)} className='relative font-outfit font-normal cursor-pointer text-[24px] leading-[24px] text-[white] flex gap-[22px] items-center'>
          Currency
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.55091 7.40362C6.25397 7.72507 5.74603 7.72507 5.44909 7.40362L0.234731 1.75891C-0.209007 1.27855 0.131698 0.5 0.785647 0.5L11.2144 0.500001C11.8683 0.500001 12.209 1.27855 11.7653 1.75891L6.55091 7.40362Z" fill="#FFDBB8" />
          </svg>
          {currencyModal && <div style={{ boxShadow: '0px 59px 23px rgba(0, 0, 0, 0.01), 0px 33px 20px rgba(0, 0, 0, 0.05), 0px 15px 15px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }} onClick={(e) => e.stopPropagation()} className='absolute top-[25px] rounded-[6px] p-[16px] w-[255px] h-[272px] border border-[rgba(255,219,184,1)] bg-[white]'>
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
        </p>
      </nav >
    </div >
  )
}