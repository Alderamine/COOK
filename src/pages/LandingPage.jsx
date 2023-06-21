import React from 'react'

import HeroImg from "../assets/LandingPage/HeroImg.png"
import CardProfile from "../assets/LandingPage/CardProfile.png"
import ExploreAndLearnCard from '../components/LandingPage/ExploreAndLearnCard'

import Stats1 from "../assets/LandingPage/Stats1.svg"
import Stats2 from "../assets/LandingPage/Stats2.svg"
import Stats3 from "../assets/LandingPage/Stats3.svg"
import Stats4 from "../assets/LandingPage/Stats4.svg"
import Stats5 from "../assets/LandingPage/Stats5.svg"
import Stats6 from "../assets/LandingPage/Stats6.svg"
import StatsIcon1 from "../assets/LandingPage/StatsIcon1.svg"
import StatsIcon2 from "../assets/LandingPage/StatsIcon2.svg"
import Benefit1 from "../assets/LandingPage/Benefit1.png"
import Benefit2 from "../assets/LandingPage/Benefit2.png"
import Benefit3 from "../assets/LandingPage/Benefit3.png"
import AdvantagesHero from "../assets/LandingPage/AdvantagesHero.png"
import AdvantagesIcon1 from "../assets/LandingPage/AdvantageIcon1.svg"
import AdvantagesIcon2 from "../assets/LandingPage/AdvantageIcon2.svg"
import AdvantagesIcon3 from "../assets/LandingPage/AdvantageIcon3.svg"
import AdvantagesIcon4 from "../assets/LandingPage/AdvantageIcon4.svg"
import HIW1 from "../assets/LandingPage/HIW1.png"
import HIW2 from "../assets/LandingPage/HIW2.png"
import HIW3 from "../assets/LandingPage/HIW3.png"
import MoneyBackGaurenteeIcon from "../assets/LandingPage/MoneyBackGaurenteeIcon.svg"
import BecomeaChef from "../assets/LandingPage/BecomeaChef.png"
import BecomaChecfTick from "../assets/LandingPage/BecomaChecfTick.svg"
import BecomeaStudent from "../assets/LandingPage/BecomeaStudent.png"
import BecomeaStudentTick from "../assets/LandingPage/BecomeaStudentTick.svg"
import CookBlog1 from "../assets/LandingPage/CookBlog1.png"
import CookBlog2 from "../assets/LandingPage/CookBlog2.png"
import CookBlog3 from "../assets/LandingPage/CookBlog3.png"
import CookBlog4 from "../assets/LandingPage/CookBlog4.png"
import One from "../assets/LandingPage/One.svg"
import Two from "../assets/LandingPage/Two.svg"
import Three from "../assets/LandingPage/Three.svg"
import { Link } from 'react-router-dom'


export default function LandingPage() {
  return (
    <main>
      <section className='w-full px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[8.205vw] flex xsm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse md:items-center sm:items-center xsm:items-center justify-between gap-[92px] md:gap-0 sm:gap-0 xsm:gap-0'>
        <div className='md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center xsm:flex xsm:flex-col xsm:items-center'>
          <h1 className='font-rubik font-bold text-[61px] leading-[69.11px] w-[48.75vw] tracking-[-0.04em] md:tracking-[0px] sm:tracking-[0px] text-TextColor mt-[85px] md:mt-[142px] sm:mt-[142px] xsm:mt-[192px] md:text-[50px] sm:text-[50px] xsm:text-[32px] md:leading-[56.65px] sm:leading-[56.65px] xsm:leading-[36.26px] md:w-[702px] sm:w-[84.072vw] md:text-center sm:text-center xsm:text-center xsm:min-w-[88.205vw]'>Master the Art of Cooking with <span className='text-primary2 font-normal font-pacifico'>Experts</span> Worldwide </h1>
          <p className='w-[37.014vw] font-outfit font-normal text-[16px] leading-[25.6px] mt-[24px] md:text-center sm:text-center xsm:text-center md:w-[63.832vw] sm:w-[63.832vw] md:text-[16px] md:leading-[25.6px] sm:text-[16px] sm:leading-[25.6px] xsm:min-w-[83.59vw]'>Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community. With COOK, learning, and teaching becomes a shared passion.</p>
          <div className='flex gap-x-[20px] mt-[26px] xsm:flex-col xsm:w-full gap-y-[20px]'>
            <Link to={'/search-tutors'}>
              <button className='w-[153px] xsm:w-[83.59vw] xsm:m-auto h-[39px] rounded-[8px] bg-primary2 text-backPri font-outfit font-medium text-lg leading-[22.68px]'>Find Your Tutor</button>
            </Link>
            <Link to={'/signup'}>
              <button className='w-[150px] xsm:w-[83.59vw] xsm:m-auto h-[39px] rounded-[8px] bg-backPri text-primary2 border-2 border-primary font-outfit font-medium text-lg leading-[22.68px]'>Join Our Chefs</button>
            </Link>
          </div>
        </div>

        <div className='mt-[71px] relative w-fit h-fit'>
          <div className='xsm:overflow-hidden xsm:w-[96.7vw] flex justify-center'>
            <img className='w-[518px] md:w-[585.994px] sm:w-[585.994px] xsm:min-w-[110vw] xsm:m-auto' src={HeroImg} />
          </div>
          <div className='absolute right-[-1.84vw] bottom-[-34px] xsm:hidden'>
            <svg width="129" height="102" viewBox="0 0 129 102" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.03785 98.975C-1.97119 79.2795 7.95157 59.8664 25.6775 50.7693L122.674 0.990134C125.335 -0.375947 128.5 1.55692 128.5 4.54884V50C128.5 78.7188 105.219 102 76.5 102H4.56009C2.80003 102 1.30366 100.715 1.03785 98.975Z" fill="#D27722" />
            </svg>
          </div>

          <div className='absolute xsm:left-[50%] bg-[rgba(255,253,244,1)] xsm:bottom-[-133px] xsm:translate-x-[-50%] left-[-5.139vw] bottom-[-58px] bg-primary2Lighten border border-[rgba(255,219,184,1)] rounded-[16px] p-[24px] w-[284px] h-[200px] '>
            <div className='flex items-center gap-[25px]'>
              <img className='w-[65px]' src={CardProfile} />
              <div>
                <h2 className='font-rubik text-[18px] font-medium leading-[21.33px]'>David Mitchell</h2>
                <div className='flex items-center gap-[7px]'>
                  <h3 className='font-outfit text-[16px] font-semibold leading-[20.16px]'>4.8️</h3>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1.5L10.163 5.77865L15 6.46898L11.5 9.79758L12.326 14.5L8 12.2787L3.674 14.5L4.5 9.79758L1 6.46898L5.837 5.77865L8 1.5Z" fill="#D27722" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <p className='font-outfit font-[400] text-[14px] leading-[22.4px] mt-[21px]'>I've discovered a whole new world of flavors. Learning to cook has never been this fun and engaging!</p>
          </div>
        </div>
      </section>

      <section className='h-fit relative xsm:px-[8.205vw]'>
        <div className='absolute xsm:hidden w-full left-0 top-[50%] translate-y-[-50%] border border-[rgba(255,219,184,1)]'></div>
        <div className='w-[75.347vw] bg-[rgba(255,253,244,1)] xsm:w-full m-auto mt-[159px] xsm:mt-[78px] mb-[182px] xsm:mb-[112px] bg-primary2Lighten border border-[rgba(255,219,184,1)] min-h-[148px] rounded-[16px] py-[12px] px-[1.597vw] grid grid-cols-4 sm:grid-cols-2 xsm:grid-cols-1 items-center justify-around gap-y-[20px] gap-[29px] relative'>
          <div className=' flex flex-col h-[121px] justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary2 md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px]'>100+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec text-center'>Talented Chefs</p>
          </div>
          <div className='flex flex-col h-[121px] justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary2 md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px]'>1000+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec text-center'>Students</p>
          </div>
          <div className='flex flex-col h-[121px] justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary2 flex gap-[10px] items-center md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px]'>4.8
              <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1L19.1715 9.22818L28.5 10.5557L21.75 16.9569L23.343 26L15 21.7282L6.657 26L8.25 16.9569L1.5 10.5557L10.8285 9.22818L15 1Z" fill="#D27722" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec text-center'>Rating</p>
          </div>
          <div className='flex flex-col h-[121px] justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary2 md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px]'>20+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec text-center'>Cooking Categories</p>
          </div>
        </div>
      </section>


      <section className='w-full px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[8.205vw]'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-[20px]'>
            <svg className='relative top-[10px] xsm:top-[4px] w-[46px] h-[35px] md:w-[36px] md:h-[26px] sm:w-[36px] sm:h-[26px] xsm:w-[36px] xsm:h-[26px]' viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5555 4.35812C27.8213 0.191495 43.1371 0.505382 43.1371 0.505382C43.1371 0.505382 49.5786 19.5106 43.1371 28.5753C33.6644 41.9059 0 28.5753 0 28.5753C0 28.5753 8.50505 9.92845 19.5555 4.35812Z" fill="#D27722" />
            </svg>
            <div>
              <h3 className='font-rubik font-semibold text-[50px] leading-[56.65px] tracking-[-0.02em] mb-[7px] md:text-[36px] sm:text-[36px] xsm:text-[30px] md:leading-[40.79px] sm:leading-[40.79px] xsm:leading-[33.99px]'>Explore & Learn</h3>
              <p className='font-outfit font-normal text-[16px] leading-[26.8px] xsm:hidden md:text-[16px] sm:text-[16px] md:leading-[24.32px] sm:leading-[24.32px]'>Dive into a range of cooking styles and techniques tailored to your interests</p>
            </div>
          </div>

          <div className='flex items-center gap-[10px] md:hidden sm:hidden xsm:hidden'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.25 19.25L15.2625 15.2625" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link to={'/search-tutors'}>
              <p className='font-outfit font-medium leading-[20px] text-[16px] text-TextColor'>Search tutors by category </p>
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[1.667vw] mt-[68px] xsm:mt-[47px] gap-y-[24px]'>
          <Link to={'/search-tutors'}>
            <div className='flex items-center gap-[24px] group h-[121px] py-[24px] px-[34px] xsm:px-[16px] rounded-[16px] border border-[rgba(255,219,184,1)] bg-primary2 transition-colors delay-100 duration-100'>
              <img className='img-primary' src={Stats1} />
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-[white] delay-100 duration-100 md:text-[20px] md:leading-[22.66px] sm:text-[20px] sm:leading-[22.66px] xsm:text-[20px] xsm:leading-[22.66px]'>Bakery</h3>
                  <div>
                    <img src={StatsIcon1} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-[white] delay-100 duration-100 mt-[4px]'>Master baking: from rustic bread to delicate pastries</p>
              </div>
            </div>
          </Link>
          <Link to={'/search-tutors'}>
            <div className='flex items-center gap-[24px] group h-[121px] py-[24px] px-[34px] xsm:px-[16px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <img src={Stats3} />
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100 md:text-[20px] md:leading-[22.66px] sm:text-[20px] sm:leading-[22.66px] xsm:text-[20px] xsm:leading-[22.66px]'>Vegan Cooking</h3>
                  <div>
                    {/* <img src={StatsIcon2} /> */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33328 17.5L17.3333 7.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.33328 7.5H17.3333V17.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100 mt-[4px]'>Create delicious, nutritious meals with plant-based ingredients</p>
              </div>
            </div>
          </Link>
          <Link to={'/search-tutors'}>
            <div className='flex items-center gap-[24px] group h-[121px] py-[24px] px-[34px] xsm:px-[16px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <img src={Stats5} />
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100 md:text-[20px] md:leading-[22.66px] sm:text-[20px] sm:leading-[22.66px] xsm:text-[20px] xsm:leading-[22.66px]'>Seafood Mastery</h3>
                  <div>
                    {/* <img src={StatsIcon2} /> */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33328 17.5L17.3333 7.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.33328 7.5H17.3333V17.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100 mt-[4px]'>Dive into seafood: from grilling fish to creating sushi</p>
              </div>
            </div>
          </Link>
          <Link to={'/search-tutors'}>
            <div className='flex items-center gap-[24px] group h-[121px] py-[24px] px-[34px] xsm:px-[16px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <img src={Stats2} />
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100 md:text-[20px] md:leading-[22.66px] sm:text-[20px] sm:leading-[22.66px] xsm:text-[20px] xsm:leading-[22.66px]'>BBQ & Grilling</h3>
                  <div>
                    {/* <img src={StatsIcon2} /> */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33328 17.5L17.3333 7.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.33328 7.5H17.3333V17.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100 mt-[4px]'>Fire up your skills with mouth-watering BBQ dishes</p>
              </div>
            </div>
          </Link>
          <Link to={'/search-tutors'}>
            <div className='flex items-center gap-[24px] group h-[121px] py-[24px] px-[34px] xsm:px-[16px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <img src={Stats4} />
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100 md:text-[20px] md:leading-[22.66px] sm:text-[20px] sm:leading-[22.66px] xsm:text-[20px] xsm:leading-[22.66px]'>Wine Pairing</h3>
                  <div>
                    {/* <img src={StatsIcon2} /> */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33328 17.5L17.3333 7.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.33328 7.5H17.3333V17.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100 mt-[4px]'>Enhance culinary experiences by mastering wine pairing</p>
              </div>
            </div>
          </Link>
          <Link to={'/search-tutors'}>
            <div className='flex items-center gap-[24px] group h-[121px] py-[24px] px-[34px] xsm:px-[16px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <img src={Stats6} />
              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100 md:text-[20px] md:leading-[22.66px] sm:text-[20px] sm:leading-[22.66px] xsm:text-[20px] xsm:leading-[22.66px]'>Cake Decorating</h3>
                  <div>
                    {/* <img src={StatsIcon2} /> */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33328 17.5L17.3333 7.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.33328 7.5H17.3333V17.5" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100 mt-[4px]'>Unleash creativity with cake decorating techniques</p>
              </div>
            </div>
          </Link>


        </div>

        <div className='flex items-center justify-end gap-[15px] mt-[32px]'>
          {/* <Link to={'/search-tutors'}>
            <p className='font-outfit font-medium leading-[20px] text-[16px] text-TextColor'>Show more</p>
          </Link>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_60_812)">
              <path d="M10 18.3334C14.6024 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6024 1.66675 10 1.66675C5.39763 1.66675 1.66667 5.39771 1.66667 10.0001C1.66667 14.6025 5.39763 18.3334 10 18.3334Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.66667 10L10 13.3333L13.3333 10" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 6.66675V13.3334" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_60_812">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg> */}
        </div>

      </section>

      <section className='mt-[152px] xsm:mt-[112px] w-full px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[8.205vw] flex flex-col items-center'>
        <h2 className='font-rubik font-semibold text-[50px] leading-[59.25px] relative md:text-[42px] md:leading-[49.77px] sm:text-[42px] sm:leading-[49.77px] xsm:text-[30px] xsm:leading-[35.55px]'>Our Unique Benefits
          <svg className='absolute right-[-30px] top-[-15px]' width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8703 22.3536L25.9942 15.7492" stroke="#FFDBB8" strokeWidth="4" strokeLinecap="round" />
            <path d="M2.64703 15.7603L9.11337 1.99994" stroke="#FFDBB8" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </h2>
        <p className='font-outfit font-normal leading-[26.8px] text-[16px] mt-[15px] md:mt-[6px] sm:mt-[6px] xsm:mt-[6px] xsm:hidden'>Experience the perks of learning and teaching cooking on our platform</p>

        <div className='flex gap-x-[58px] gap-y-[33px] md:flex-col sm:flex-col xsm:flex-col items-center mt-[79px] xsm:mt-[53px]'>
          <div className='flex flex-col items-center gap-[27px] w-[25vw] md:w-[70.06vw] sm:w-[70.06vw] xsm:w-[83.59vw]'>
            <img className='w-[100px]' src={Benefit1} />
            <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-0.02em] md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px] xsm:text-[28px] xsm:leading-[33.18px]'>Expert Chefs</h3>
            <p className='font-outfit font-normal leading-[28.8px] text-center text-[18px] text-TextColorSec'>Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class.</p>
          </div>

          <div className='h-[42px] w-0 border-2 border-[rgba(255,219,184,1)] md:hidden sm:hidden xsm:hidden'></div>

          <div className='flex flex-col items-center gap-[27px] w-[25vw] md:w-[70.06vw] sm:w-[70.06vw] xsm:w-[83.59vw]'>
            <img className='w-[100px]' src={Benefit2} />
            <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-0.02em] md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px] xsm:text-[28px] xsm:leading-[33.18px]'>Save Time and Money</h3>
            <p className='font-outfit font-normal leading-[28.8px] text-center text-[18px] text-TextColorSec'>Embrace the convenience of learning from home. Save time on travel, reduce dining-out expenses, and master your kitchen with our online cooking classes.</p>
          </div>

          <div className='h-[42px] w-0 border-2 border-[rgba(255,219,184,1)] md:hidden sm:hidden xsm:hidden'></div>

          <div className='flex flex-col items-center gap-[27px] w-[25vw] md:w-[70.06vw] sm:w-[70.06vw] xsm:w-[83.59vw]'>
            <img className='w-[100px]' src={Benefit3} />
            <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-0.02em] md:text-[32px] md:leading-[37.92px] sm:text-[32px] sm:leading-[37.92px] xsm:text-[28px] xsm:leading-[33.18px]'>Accessible Cooking</h3>
            <p className='font-outfit font-normal leading-[28.8px] text-center text-[18px] text-TextColorSec'>Start your culinary journey with ease. Our user-friendly platform makes navigation simple, letting you focus on learning and enjoying your online cooking classes.</p>
          </div>
        </div>
      </section>

      <section className='mt-[260px] md:mt-[163px] sm:mt-[163px] xsm:mt-[151px] px-[64px] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[8.205vw] flex md:flex-col sm:flex-col xsm:flex-col items-center gap-x-[121px] gap-y-[162px] w-full'>
        <div className='relative w-fit h-fit'>
          <div className='xsm:w-[96.7vw] xsm:overflow-hidden flex justify-center'>
            <img className='min-w-[535px] md:w-[583px] sm:w-[583px] xsm:min-w-[110vw]' src={AdvantagesHero} />
          </div>
          <div className='absolute rounded-[16px] bg-primary2 h-[180px] w-[284px] bottom-[-27.023px] xsm:bottom-[-101px] left-[-5.694vw] xsm:left-[50%] xsm:translate-x-[-50%] p-[24px] flex flex-col items-end'>
            <h4 className='flex gap-[4px] items-center font-rubik font-medium text-right text-[white] text-[24px] leading-[28.44px]'>Level up <img src={AdvantagesIcon4} alt="" /></h4>
            <p className='font-outfit font-normal text-[14px] leading-[22.4px] text-right text-[white] mt-[16px]'>Take your culinary skills to new heights. Our platform provides you with the expert guidance you need to refine your skills and cook like a pro                          </p>
          </div>
        </div>
        <div>
          <h3 className='font-rubik font-semibold text-[31px] leading-[36.74px] tracking-[-0.02em] md:text-[36px] md:leading-[42.66px] sm:text-[36px] sm:leading-[42.66px] xsm:text-[30px] xsm:leading-[35.55px]'>Other Advantages</h3>
          <div className='mt-[29px] flex flex-col gap-[25px]'>
            <div style={{ boxShadow: "15px 15px 13px rgba(0, 0, 0, 0.02), 7px 7px 9px rgba(0, 0, 0, 0.03), 2px 2px 5px rgba(0, 0, 0, 0.03), 0px 0px 0px rgba(0, 0, 0, 0.03)" }} className='flex gap-[16px] items-start rounded-[16px] w-full border border-[rgba(255,219,184,1)] p-[16px] xsm:flex-col gap-y-[16px]'>
              <img className='w-[32px] xsm:w-[48px]' src={AdvantagesIcon1} alt="" />
              <div>
                <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] text-TextColor xsm:text-[20px] xsm:leading-[23.7px]'>Diverse Range of Classes</h4>
                <p className='font-outfit font-normal text-[16px] leading-[25.6px] text-TextColor mt-[10px]'>Explore the culinary world with our vast array of online cooking classes. Whether you're a beginner or a seasoned cook, we have a class that suits your skill level and interests.</p>
              </div>
            </div>

            <div style={{ boxShadow: "15px 15px 13px rgba(0, 0, 0, 0.02), 7px 7px 9px rgba(0, 0, 0, 0.03), 2px 2px 5px rgba(0, 0, 0, 0.03), 0px 0px 0px rgba(0, 0, 0, 0.03)" }} className='flex gap-[16px] items-start rounded-[16px] w-full border border-[rgba(255,219,184,1)] p-[16px] xsm:flex-col'>
              <img className='w-[32px] xsm:w-[48px]' src={AdvantagesIcon2} alt="" />
              <div>
                <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] text-TextColor xsm:text-[20px] xsm:leading-[23.7px]'>Opportunity to Teach</h4>
                <p className='font-outfit font-normal text-[16px] leading-[25.6px] text-TextColor mt-[10px]'>Share your culinary wisdom. If you're an experienced cook, our platform allows you to teach your classes, reach a global audience, and earn income.</p>
              </div>
            </div>

            <div style={{ boxShadow: "15px 15px 13px rgba(0, 0, 0, 0.02), 7px 7px 9px rgba(0, 0, 0, 0.03), 2px 2px 5px rgba(0, 0, 0, 0.03), 0px 0px 0px rgba(0, 0, 0, 0.03)" }} className='flex gap-[16px] items-start rounded-[16px] w-full border border-[rgba(255,219,184,1)] p-[16px] xsm:flex-col'>
              <img className='w-[32px] xsm:w-[48px]' src={AdvantagesIcon3} alt="" />
              <div>
                <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] text-TextColor xsm:text-[20px] xsm:leading-[23.7px]'>Interactive Lessons</h4>
                <p className='font-outfit font-normal text-[16px] leading-[25.6px] text-TextColor mt-[10px]'>Engage in real-time with expert chefs. Our interactive online cooking classes allow you to ask questions, receive instant feedback, and learn hands-on from the pros.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[8.205vw] mt-[199px]'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-[20px]'>
            <svg className='relative top-[15px] xsm:hidden' width="75" height="31" viewBox="0 0 75 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 24C7 24 20.6553 7 37.5 7C54.3447 7 68 24 68 24" stroke="#D27722" strokeWidth="14" strokeLinecap="round" />
            </svg>
            <svg className='hidden xsm:flex mt-[5px]' width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 17C5 17 11.4919 5 19.5 5C27.5081 5 34 17 34 17" stroke="#D27722" strokeWidth="9" strokeLinecap="round" />
            </svg>

            <div>
              <h3 className='font-rubik font-medium text-[50px] leading-[56.65px] tracking-[-0.02em] mb-[7px] md:text-[36px] md:leading-[40.79px] sm:text-[36px] sm:leading-[40.79px] xsm:text-[30px] xsm:leading-[33.99px] '>How It Works</h3>
              <p className='font-outfit font-normal text-[16px] leading-[26.8px] xsm:hidden'>Getting Started with the COOK Platform</p>
            </div>
          </div>
          <div className='flex items-center gap-[10px] xsm:hidden'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.25 19.25L15.2625 15.2625" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link to={'/search-tutors'}>
              <p className='font-outfit font-medium leading-[26.91px] text-[18px] text-TextColor'>Search tutors by category</p>
            </Link>
          </div>
        </div>

        <div className='flex justify-between gap-[131px] xsm:gap-[42px] mt-[109px] xsm:mt-[94px] md:flex-col md:items-center sm:flex-col sm:items-center xsm:flex-col xsm:items-center'>
          <div className='relative'>
            <img className='absolute left-[-24px] select-none xsm:hidden' src={One} alt='' />
            <img className='w-[39.375vw] md:w-[551px] sm:w-[551px] xsm:min-w-[83.59vw]' src={HIW1} alt="" />
          </div>
          <div className='flex flex-col justify-center gap-[29px] w-[41.007vw] md:w-full sm:w-full xsm:w-full'>
            <h3 className='font-rubik font-semibold text-[36px] leading-[42.66px] xsm:text-[28px] xsm:leading-[33.18px]'>Explore Our Culinary Experts</h3>
            <p className='font-outfit font-normal text-[18px] leading-[28.8px]'>Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.</p>
            <Link className='xsm:self-center' to={'/search-tutors'}>
              <button className='h-[41px] w-[157px] text-[white] bg-primary2 font-outfit rounded-[4px] font-medium text-[20px] leading-[25.2px]'>Browse Tutors</button>
            </Link>
          </div>
        </div>

        <div className='flex justify-between gap-[131px] xsm:gap-[42px] mt-[109px] xsm:mt-[94px] md:flex-col-reverse md:items-center sm:flex-col sm:items-center xsm:flex-col-reverse xsm:items-center'>
          <div className='flex flex-col justify-center gap-[29px] w-[41.007vw] md:w-full sm:w-full xsm:w-full'>
            <h3 className='font-rubik font-semibold text-[36px] leading-[42.66px] xsm:text-[28px] xsm:leading-[33.18px]'>Select Your Perfect Match</h3>
            <p className='font-outfit font-normal text-[18px] leading-[28.8px]'>Once you've explored our range of tutors, choose the one that resonates most with you. Their profiles provide detailed information, such as their areas of expertise, availability, and reviews. Scheduling a lesson has never been easier.</p>
          </div>
          <div className='h-fit relative'>
            <img className='absolute top-[-52px] left-[-37px] select-none xsm:hidden' src={Two} alt='' />
            <img className='w-[39.375vw] md:w-[551px] sm:w-[551px]  xsm:min-w-[83.59vw]' src={HIW2} alt="" />
          </div>
        </div>

        <div className='flex justify-between gap-[131px] xsm:gap-[42px] mt-[109px] xsm:mt-[94px] xsm:mt-[94px md:flex-col md:items-center sm:flex-col sm:items-center xsm:flex-col xsm:items-center'>
          <div className='h-fit relative'>
            <img className='absolute top-[-35px] left-[-24px] select-none xsm:hidden' src={Three} alt='' />
            <img className='w-[39.375vw] md:w-[551px] sm:w-[551px]  xsm:min-w-[83.59vw]' src={HIW3} alt="" />
          </div>
          <div className='flex flex-col justify-center gap-[29px] w-[41.007vw] md:w-full sm:w-full xsm:w-full'>
            <h3 className='font-rubik font-semibold text-[36px] leading-[42.66px] xsm:text-[28px] xsm:leading-[33.18px]'>Enjoy Your Interactive Lesson</h3>
            <p className='font-outfit font-normal text-[18px] leading-[28.8px]'>Step into your online kitchen and start cooking! Our lessons are designed to be fun and interactive, enabling you to learn directly from the experts. After the class, you can review your experience and track your progress.</p>
            <Link className='xsm:self-center' to={'signup'}>
              <button className='h-[41px] w-[157px] text-[white] bg-primary2 font-outfit rounded-[4px] font-medium text-[20px] leading-[25.2px]'>Sign up for free</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className='xsm:hidden absolute w-full left-0 top-[50%] translate-y-[-50%] border border-[rgba(255,219,184,1)]'></div>
        <div className='w-[523px] bg-[rgba(255,253,244,1)] xsm:w-[83.59vw] min-h-[298px] xsm:pb-[52px] mt-[125px] xsm:mt-[148px] flex flex-col items-center  px-[25px] rounded-[16px] bg-primary2Lighten border border-[rgba(255,219,184,1)] m-auto relative'>
          <img className='relative top-[-70px]' src={MoneyBackGaurenteeIcon} alt="" />
          <div className='mt-[-39px]'>
            <h3 className='font-rubik font-bold text-center text-[32px] tracking-[-0.02em] leading-[37.92px]'>Money-back guarantee</h3>
            <p className='font-outfit font-normal text-center text-[18px] leading-[28.8px] mt-[20px]'>We believe you'll enjoy your first cooking lesson. However, we've got your back if anything goes differently than expected. Our money-back guarantee ensures you can take the first step with complete confidence.</p>
          </div>
        </div>
      </section>

      <section className='w-full px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[8.205vw]'>
        <div className='flex justify-between items-center md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse gap-[9.097vw] mt-[123px]'>
          <div className='flex flex-col justify-center gap-[15px] w-[590.5px] md:w-[88.383vw] sm:w-[88.383vw] xsm:w-full'>
            <h3 className='font-rubik font-semibold text-[50px] leading-[56.65px] tracking-[-0.02em] xsm:text-[30px] xsm:leading-[33.99px]'>Become A Chef</h3>
            <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-TextColorSec mt-[1px]'>Share your culinary secrets, inspire cooking enthusiasts worldwide, and grow your career like never before. Our platform offers a unique way to connect, teach, and earn.</p>
            <div className='flex flex-col gap-[8px] my-[16px]'>
              <div className='flex items-start gap-[8px]'>
                <img src={BecomaChecfTick} alt='' />
                <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-TextColorSec'><span className='font-bold'>Build Your Brand.</span> Showcase your culinary skills and build your brand within our community.</p>
              </div>
              <div className='flex items-start gap-[8px]'>
                <img src={BecomaChecfTick} alt='' />
                <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-TextColorSec'><span className='font-bold'>Expand Your Reach.</span> Connect with cooking enthusiasts across the globe and expand your audience beyond geographical limits.</p>
              </div>
              <div className='flex items-start gap-[8px]'>
                <img src={BecomaChecfTick} alt='' />
                <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-TextColorSec'><span className='font-bold'>Grow Your Business Faster.</span> Utilize our platform's features and resources to accelerate your growth and increase your income.</p>
              </div>
            </div>
            <Link to={'signup'}>
              <button className='h-[39px] w-[150px] xsm:w-full text-[white] bg-primary2 font-outfit rounded-[4px] font-medium text-[20px] leading-[25.2px]'>Become a chef</button>
            </Link>
            <div className='flex items-center gap-[8px]'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_81_758)">
                  <path d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 6.66663V9.99996" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 13.3334H10.0083" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_81_758">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Link to={'support'}>
                <p className='font-outfit font-medium leading-[22px] text-[14px]'>Learn how our platform works</p>
              </Link>
            </div>
          </div>
          <div className='h-fit'>
            <div className='xsm:overflow-hidden xsm:w-[96.7vw] flex justify-center'>
              <img className='w-[38.264vw] md:w-[583px] sm:w-[583px] xsm:min-w-[110vw] xsm:m-auto' src={BecomeaChef} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='w-full md:px-0 sm:px-0 xsm:px-0 px-[4.444vw] min-h-[647px] mt-[142px]'>
        <div className='bg-primary2 rounded-[26px] xsm:rounded-[0px] flex md:items-center sm:items-center md:px-[42px] sm:px-[36px] px-0 gap-[5.036vw] xsm:gap-0 xsm:flex-col'>
          <div className='xsm:overflow-hidden xsm:w-[96.7vw] flex justify-center'>
            <img className='lg:min-w-[39.167vw] xl:min-w-[39.167vw] 2xl:min-w-[39.167vw] md:min-w-[278.999px] sm:min-w-[230.999px] xsm:min-w-[105vw] xsm:m-auto md:rounded-[24px] sm:rounded-[24px] md:h-[506px] sm:h-[506px]' src={BecomeaStudent} alt="" />
          </div>
          <div className='pt-[90px] w-full xsm:pt-[42px] xsm:pb-[34px] xsm:px-[2.222vw] md:pr-0 sm:pr-0 pr-[5.556vw] pb-[74px] flex flex-col gap-[31px]'>
            <h3 className='font-rubik font-semibold tracking-[-0.02em] text-[50px] md:text-[42px] md:leading-[47.59px] sm:text-[42px] sm:leading-[47.59px] xsm:text-[30px] xsm:leading-[33.99px] leading-[56.65px] text-[white]'>Become A Student</h3>
            <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-[white]'>Kick-start your culinary adventure with COOK. We provide a space for cooking enthusiasts of all levels to learn, explore, and master culinary arts from professional chefs worldwide. So dive in and transform your kitchen into a playground of flavors.</p>
            <div className='flex flex-col gap-[8px]'>
              <div className='flex items-start gap-[8px]'>
                <img src={BecomeaStudentTick} alt='' />
                <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-[white] md:text-[16px] md:leading-[24.08px] sm:text-[16px] sm:leading-[24.08px]'><span className='font-bold'>Diverse Classes:</span> Showcase your culinary skills and build your brand within our community.</p>
              </div>
              <div className='flex items-start gap-[8px]'>
                <img src={BecomeaStudentTick} alt='' />
                <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-[white] md:text-[16px] md:leading-[24.08px] sm:text-[16px] sm:leading-[24.08px]'><span className='font-bold'>World-Class Chefs:</span> Learn directly from professional chefs sharing their unique culinary secrets.</p>
              </div>
              <div className='flex items-start gap-[8px]'>
                <img src={BecomeaStudentTick} alt='' />
                <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-[white] md:text-[16px] md:leading-[24.08px] sm:text-[16px] sm:leading-[24.08px]'><span className='font-bold'>Interactive Learning:</span> Ask questions and receive real-time feedback in our interactive classes.</p>
              </div>
            </div>
            <Link className='xsm:w-full' to={'signup'}>
              <button className='h-[39px] w-[90px] xsm:w-full text-[rgba(255,219,184,1)] border-2 border-[rgba(255,219,184,1)] text-[white] bg-primary2 font-outfit rounded-[4px] font-medium text-[20px] leading-[23px]'>Sign up</button>
            </Link>
          </div>
        </div>
      </section>

      <section className='w-full px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[8.205vw] mt-[142px] xsm:mt-[104px] flex md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse gap-[5.069vw]'>
        <div className=''>
          <div className='flex items-center gap-[0.903vw]'>
            <svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3043 3.0638C21.7732 -0.244989 33.7595 0.0042736 33.7595 0.0042736C33.7595 0.0042736 38.8006 15.0966 33.7595 22.2951C26.3461 32.8811 0 22.2951 0 22.2951C0 22.2951 6.65613 7.4873 15.3043 3.0638Z" fill="#D27722" />
            </svg>
            <h3 className='font-semibold font-rubik text-[40px] leading-[45.32px]  xsm:text-[30px] xsm:leadnig-[33.99px] tracking-[-0.02em]'>Popular online classes</h3>
          </div>

          <div className='ml-[49px] md:ml-0 sm:ml-0 xsm:ml-0 mt-[47px]'>
            <h4 className='font-[600] font-outfit text-[24px] leading-[30.24px] md:leading-[36px] sm:leading-[36px]'>Find a tutor by category</h4>
            <div className='w-[34.444vw] md:w-full sm:w-full xsm:w-full flex flex-wrap gap-[16px] mt-[26px]'>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Bakery</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Japanese Sushi Making</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Thai</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Seafood</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Italian Cuisine</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Vegan</p>
              </Link>
              <p className='px-[24px] h-[30px] rounded-[58px] text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>BBQ & Grilling</p>
            </div>
          </div>

          <div className='ml-[49px] md:ml-0 sm:ml-0 xsm:ml-0 mt-[75px]'>
            <h4 className='font-[600] font-outfit text-[24px] leading-[30.24px]  md:leading-[36px] sm:leading-[36px]'>Find a tutor by country</h4>
            <div className='w-[22.847vw] md:w-full sm:w-full xsm:w-full flex flex-wrap gap-[16px] mt-[26px]'>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>USA</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Spain</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>France</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Mexico</p>
              </Link>
              <Link to={'/search-tutors'}>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary2 bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Germany</p>
              </Link>
            </div>
          </div>
        </div>

        <div className='h-[159.01px] border border-[rgba(255,219,184,1)] self-center md:hidden sm:hidden xsm:hidden'></div>

        <div className='flex flex-col  w-full md:w-full sm:w-full xsm:w-full'>
          <div className='flex items-center gap-[13px]'>
            <svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3043 3.0638C21.7732 -0.244989 33.7595 0.0042736 33.7595 0.0042736C33.7595 0.0042736 38.8006 15.0966 33.7595 22.2951C26.3461 32.8811 0 22.2951 0 22.2951C0 22.2951 6.65613 7.4873 15.3043 3.0638Z" fill="#D27722" />
            </svg>
            <h3 className='font-semibold font-rubik text-[40px] leading-[45.32px] xsm:text-[36px] xsm:leadnig-[40.79px] tracking-[-0.02em]'>COOK Blog</h3>
          </div>

          <div className='grid grid-cols-2 xsm:grid-cols-1 mt-[53px] gap-[23px]'>
            <Link to={"/blog"}>
              <div className=' gap-[23px] min-h-[340px] rounded-[16px] border-[rgba(255,219,184,1)] border overflow-hidden'>
                <div>
                  <img className='' src={CookBlog1} alt="" />
                  <div className='px-[25px] py-[20px] flex flex-col gap-[9px]'>
                    <div className='flex items-center gap-[6px]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 10H21" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className='font-outfit font-normal text-[18px] leading-[22.68px]'>24 Apr, 2023</p>
                    </div>
                    <h4 className="font-rubik font-[600] text-[20px] leading-[26.76px]">Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/blog"}>
              <div className=' gap-[23px] min-h-[340px] rounded-[16px] border-[rgba(255,219,184,1)] border overflow-hidden'>
                <div>
                  <img src={CookBlog2} alt="" />
                  <div className='px-[25px] py-[20px] flex flex-col gap-[9px]'>
                    <div className='flex items-center gap-[6px]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 10H21" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className='font-outfit font-normal text-[18px] leading-[22.68px]'>24 Apr, 2023</p>
                    </div>
                    <h4 className="font-rubik font-[600] text-[20px] leading-[26.76px]">Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/blog"}>
              <div className=' gap-[23px] min-h-[340px] rounded-[16px] border-[rgba(255,219,184,1)] border overflow-hidden'>
                <div>
                  <img src={CookBlog3} alt="" />
                  <div className='px-[25px] py-[20px] flex flex-col gap-[9px]'>
                    <div className='flex items-center gap-[6px]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 10H21" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className='font-outfit font-normal text-[18px] leading-[22.68px]'>24 Apr, 2023</p>
                    </div>
                    <h4 className="font-rubik font-[600] text-[20px] leading-[26.76px]">Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/blog"}>
              <div className=' gap-[23px] min-h-[340px] rounded-[16px] border-[rgba(255,219,184,1)] border overflow-hidden'>
                <div>
                  <img src={CookBlog4} alt="" />
                  <div className='px-[25px] py-[20px] flex flex-col gap-[9px]'>
                    <div className='flex items-center gap-[6px]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 2V6" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 10H21" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className='font-outfit font-normal text-[18px] leading-[22.68px]'>24 Apr, 2023</p>
                    </div>
                    <h4 className="font-rubik font-[600] text-[20px] leading-[26.76px]">Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 