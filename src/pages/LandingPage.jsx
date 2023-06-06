import React from 'react'
import Nav1 from "../assets/LandingPage/Nav1.svg"
import Nav2 from "../assets/LandingPage/Nav2.svg"
import Nav3 from "../assets/LandingPage/Nav3.svg"
import HeroImg from "../assets/LandingPage/HeroImg.png"
import CardProfile from "../assets/LandingPage/CardProfile.png"
import ExploreAndLearnCard from '../components/LandingPage/ExploreAndLearnCard'

import Stats1 from "../assets/LandingPage/Stats1.png"
import Stats2 from "../assets/LandingPage/Stats2.png"
import Stats3 from "../assets/LandingPage/Stats3.png"
import Stats4 from "../assets/LandingPage/Stats4.png"
import Stats5 from "../assets/LandingPage/Stats5.png"
import Stats6 from "../assets/LandingPage/Stats6.png"
import StatsIcon1 from "../assets/LandingPage/StatsIcon1.png"
import StatsIcon2 from "../assets/LandingPage/StatsIcon2.png"
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
import HIWICONLast from "../assets/LandingPage/HIWICONLast.svg"
import BecomeaChef from "../assets/LandingPage/BecomeaChef.png"
import BecomaChecfTick from "../assets/LandingPage/BecomaChecfTick.svg"
import BecomeaStudent from "../assets/LandingPage/BecomeaStudent.png"
import BecomeaStudentTick from "../assets/LandingPage/BecomeaStudentTick.svg"
import CookBlog1 from "../assets/LandingPage/CookBlog1.png"
import CookBlog2 from "../assets/LandingPage/CookBlog2.png"
import CookBlog3 from "../assets/LandingPage/CookBlog3.png"
import CookBlog4 from "../assets/LandingPage/CookBlog4.png"

export default function LandingPage() {
  return (
    <>
      <nav className='h-[104px] w-[100%] px-[64px] flex items-center justify-between border-b border-[rgba(255,219,184,1)]'>
        <div className='flex items-center gap-[32px]'>
          <h1 className='font-rubik font-bold text-[32px] leading-[37.92px] tracking-[-0.02em] text-primary'>COOK</h1>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <div className='flex gap-[24px]'>
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
      </nav>

      <main>
        <section className='w-full px-[64px] flex justify-between gap-[92px]'>
          <div className=''>
            <h1 className='font-rubik font-bold text-[61px] leading-[69.11px] w-[702px] tracking-[-0.04em] text-TextColor mt-[85px]'>Master the Art of Cooking with <span className='text-primary font-normal font-pacifico '>Experts</span> Worldwide </h1>
            <p className='w-[533px] font-outfit font-normal text-[16px] leading-[25.6px] mt-[24px]'>Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community. With COOK, learning, and teaching becomes a shared passion.</p>
            <div className='flex items-center gap-[11px] mt-[26px]'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4" />
                <path d="M10 8L16 12L10 16V8Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColor '>Learn more in the COOK video</p>
            </div>

            <div className='flex gap-x-[20px] mt-[26px]'>
              <button className='w-[153px] h-[39px] rounded-[8px] bg-primary text-backPri font-outfit font-medium text-lg leading-[22.68px]'>Find Your Tutor</button>
              <button className='w-[150px] h-[39px] rounded-[8px] bg-backPri text-primary border-2 border-primary font-outfit font-medium text-lg leading-[22.68px]'>Join Our Chefs</button>
            </div>
          </div>
          <div className='mt-[71px] relative w-fit h-fit'>
            <img src={HeroImg} />
            <div className='absolute right-[-1.84vw] bottom-[-34px]'>
              <svg width="129" height="102" viewBox="0 0 129 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.03785 98.975C-1.97119 79.2795 7.95157 59.8664 25.6775 50.7693L122.674 0.990134C125.335 -0.375947 128.5 1.55692 128.5 4.54884V50C128.5 78.7188 105.219 102 76.5 102H4.56009C2.80003 102 1.30366 100.715 1.03785 98.975Z" fill="#D27722" />
              </svg>
            </div>

            <div className='absolute left-[-5.139vw] bottom-[-58px] bg-primaryLighten border border-[rgba(255,219,184,1)] rounded-[16px] p-[24px] w-[284px] h-[200px] '>
              <div className='flex items-center gap-[25px]'>
                <img className='w-[65px]' src={CardProfile} />
                <div>
                  <h2 className='font-rubik text-[18px] font-medium leading-[21.33px]'>David Mitchell</h2>
                  <div className='flex items-center gap-[7px]'>
                    <h3 className='font-outfit text-[16px] font-semibold leading-[20.16px]'>4.8️</h3>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1.5L10.163 5.77865L15 6.46898L11.5 9.79758L12.326 14.5L8 12.2787L3.674 14.5L4.5 9.79758L1 6.46898L5.837 5.77865L8 1.5Z" fill="#D27722" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className='font-outfit font-[400] text-[14px] leading-[22.4px] mt-[21px]'>I've discovered a whole new world of flavors. Learning to cook has never been this fun and engaging!</p>
            </div>
          </div>
        </section>

        <section className='w-[75.347vw] mt-[159px] mb-[182px] bg-primaryLighten h-[148px] m-auto rounded-[16px] py-[12px] px-[23px] flex items-center justify-around gap-[29px]'>
          <div className='flex flex-col  justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary'>100+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>Talented Chefs</p>
          </div>
          <div className='flex flex-col  justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary'>1000+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>Students</p>
          </div>
          <div className='flex flex-col  justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary flex gap-[10px] items-center'>4.8
              <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1L19.1715 9.22818L28.5 10.5557L21.75 16.9569L23.343 26L15 21.7282L6.657 26L8.25 16.9569L1.5 10.5557L10.8285 9.22818L15 1Z" fill="#D27722" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>Rating</p>
          </div>
          <div className='flex flex-col  justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary'>20+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>Cooking Categories</p>
          </div>
        </section>

        <section className='w-full px-[64px]'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-[20px]'>
              <svg className='relative top-[10px]' width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5555 4.35812C27.8213 0.191495 43.1371 0.505382 43.1371 0.505382C43.1371 0.505382 49.5786 19.5106 43.1371 28.5753C33.6644 41.9059 0 28.5753 0 28.5753C0 28.5753 8.50505 9.92845 19.5555 4.35812Z" fill="#D27722" />
              </svg>
              <div>
                <h3 className='font-rubik font-medium text-[50px] leading-[56.65px] tracking-[-0.02em] mb-[7px]'>Explore & Learn</h3>
                <p className='font-outfit font-normal text-[16px] leading-[26.8px]'>Dive into a range of cooking styles and techniques tailored to your interests</p>
              </div>
            </div>

            <div className='flex items-center gap-[10px]'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.25 19.25L15.2625 15.2625" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className='font-outfit font-medium leading-[20px] text-[16px] text-TextColor'>Search tutors by category </p>
            </div>
          </div>

          <div className='grid grid-cols-3 gap-[24px] mt-[68px]'>
            <div className='flex items-center gap-[24px] group h-[121px] p-[34px] rounded-[16px] border border-[rgba(255,219,184,1)] bg-primary transition-colors delay-100 duration-100'>
              <img className='img-primary' src={Stats1} />
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-[white] delay-100 duration-100'>Bakery</h3>
                  <div>
                    <img src={StatsIcon1} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-[white] delay-100 duration-100'>Master baking: from rustic bread to delicate pastries</p>
              </div>
            </div>

            <div className='flex items-center gap-[24px] group h-[121px] p-[34px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <img src={Stats3} />
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100'>Vegan Cooking</h3>
                  <div>
                    <img src={StatsIcon2} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100'>Create delicious, nutritious meals with plant-based ingredients</p>
              </div>
            </div>

            <div className='flex items-center gap-[24px] group h-[121px] p-[34px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <img src={Stats5} />
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100'>Seafood Mastery</h3>
                  <div>
                    <img src={StatsIcon2} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100'>Dive into seafood: from grilling fish to creating sushi</p>
              </div>
            </div>

            <div className='flex items-center gap-[24px] group h-[121px] p-[34px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <img src={Stats2} />
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100'>BBQ & Grilling</h3>
                  <div>
                    <img src={StatsIcon2} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100'>Fire up your skills with mouth-watering BBQ dishes</p>
              </div>
            </div>

            <div className='flex items-center gap-[24px] group h-[121px] p-[34px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <img src={Stats4} />
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100'>Wine Pairing</h3>
                  <div>
                    <img src={StatsIcon2} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100'>Enhance culinary experiences by mastering wine pairing</p>
              </div>
            </div>

            <div className='flex items-center gap-[24px] group h-[121px] p-[34px] rounded-[16px] border border-[rgba(255,219,184,1)]  transition-colors delay-100 duration-100'>
              <img src={Stats6} />
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-0.02em] text-TextColor delay-100 duration-100'>Cake Decorating</h3>
                  <div>
                    <img src={StatsIcon2} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor delay-100 duration-100'>Unleash creativity with cake decorating techniques</p>
              </div>
            </div>


          </div>

          <div className='flex items-center justify-end gap-[15px] mt-[32px]'>
            <p className='font-outfit font-medium leading-[20px] text-[16px] text-TextColor'>Show more</p>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_60_812)">
                <path d="M10 18.3334C14.6024 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6024 1.66675 10 1.66675C5.39763 1.66675 1.66667 5.39771 1.66667 10.0001C1.66667 14.6025 5.39763 18.3334 10 18.3334Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.66667 10L10 13.3333L13.3333 10" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 6.66675V13.3334" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_60_812">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

        </section>

        <section className='mt-[152px] w-full px-[64px] flex flex-col items-center'>
          <h2 className='font-rubik font-semibold text-[50px] leading-[59.25px] relative'>Our Unique Benefits
            <svg className='absolute right-[-30px] top-[-15px]' width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8703 22.3536L25.9942 15.7492" stroke="#FFDBB8" stroke-width="4" stroke-linecap="round" />
              <path d="M2.64703 15.7603L9.11337 1.99994" stroke="#FFDBB8" stroke-width="4" stroke-linecap="round" />
            </svg>
          </h2>
          <p className='font-outfit font-normal leading-[26.8px] text-[16px] mt-[15px]'>Experience the perks of learning and teaching cooking on our platform</p>
          <div className='flex gap-[58px] items-center mt-[79px]'>
            <div className='flex flex-col items-center gap-[27px] w-[360px]'>
              <img src={Benefit1} />
              <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-0.02em] '>Expert Chefs</h3>
              <p className='font-outfit font-normal leading-[28.8px] text-center'>Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class.</p>
            </div>
            <div className='h-[42px] w-0 border-2 border-[rgba(255,219,184,1)]'></div>
            <div className='flex flex-col items-center gap-[27px] w-[360px]'>
              <img src={Benefit2} />
              <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-0.02em] '>Save Time and Money</h3>
              <p className='font-outfit font-normal leading-[28.8px] text-center'>Embrace the convenience of learning from home. Save time on travel, reduce dining-out expenses, and master your kitchen with our online cooking classes.</p>
            </div>
            <div className='h-[42px] w-0 border-2 border-[rgba(255,219,184,1)]'></div>
            <div className='flex flex-col items-center gap-[27px] w-[360px]'>
              <img src={Benefit3} />
              <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-0.02em] '>Accessible Cooking</h3>
              <p className='font-outfit font-normal leading-[28.8px] text-center'>Start your culinary journey with ease. Our user-friendly platform makes navigation simple, letting you focus on learning and enjoying your online cooking classes.</p>
            </div>
          </div>
        </section>

        <section className='mt-[260px] px-[64px] flex items-center gap-[121px] w-full'>
          <div className='relative w-fit h-fit'>
            <img className='min-w-[535px]' src={AdvantagesHero} />
            <div className='absolute rounded-[16px] bg-primary h-[180px] w-[284px] bottom-[-2.639vw] left-[-5.694vw] p-[24px] flex flex-col items-end'>
              <h4 className='flex gap-[4px] items-center font-rubik font-medium text-right text-[white] text-[24px] leading-[28.44px]'>Level up <img src={AdvantagesIcon4} alt="" /></h4>
              <p className='font-outfit font-normal text-[14px] leading-[22.4px] text-right text-[white] mt-[16px]'>Take your culinary skills to new heights. Our platform provides you with the expert guidance you need to refine your skills and cook like a pro                          </p>
            </div>
          </div>
          <div>
            <h3 className='font-rubik font-semibold text-[31px] leading-[36.74px] tracking-[-0.02em]'>Other Advantages</h3>
            <div className='mt-[29px] flex flex-col gap-[25px]'>
              <div className='flex gap-[16px] items-start rounded-[16px] w-full border border-[rgba(255,219,184,1)] p-[16px]'>
                <img className='w-[32px]' src={AdvantagesIcon1} alt="" />
                <div>
                  <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] text-TextColor'>Diverse Range of Classes</h4>
                  <p className='font-outfit font-normal text-[16px] leading-[25.6px] text-TextColor mt-[10px]'>Explore the culinary world with our vast array of online cooking classes. Whether you're a beginner or a seasoned cook, we have a class that suits your skill level and interests.</p>
                </div>
              </div>

              <div className='flex gap-[16px] items-start rounded-[16px] w-full border border-[rgba(255,219,184,1)] p-[16px]'>
                <img className='w-[32px]' src={AdvantagesIcon2} alt="" />
                <div>
                  <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] text-TextColor'>Opportunity to Teach</h4>
                  <p className='font-outfit font-normal text-[16px] leading-[25.6px] text-TextColor mt-[10px]'>Share your culinary wisdom. If you're an experienced cook, our platform allows you to teach your classes, reach a global audience, and earn income.</p>
                </div>
              </div>

              <div className='flex gap-[16px] items-start rounded-[16px] w-full border border-[rgba(255,219,184,1)] p-[16px]'>
                <img className='w-[32px]' src={AdvantagesIcon3} alt="" />
                <div>
                  <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] text-TextColor'>Interactive Lessons</h4>
                  <p className='font-outfit font-normal text-[16px] leading-[25.6px] text-TextColor mt-[10px]'>Engage in real-time with expert chefs. Our interactive online cooking classes allow you to ask questions, receive instant feedback, and learn hands-on from the pros.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full px-[64px] mt-[199px]'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-[20px]'>
              <svg className='relative top-[15px]' width="75" height="31" viewBox="0 0 75 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 24C7 24 20.6553 7 37.5 7C54.3447 7 68 24 68 24" stroke="#D27722" stroke-width="14" stroke-linecap="round" />
              </svg>
              <div>
                <h3 className='font-rubik font-medium text-[50px] leading-[56.65px] tracking-[-0.02em] mb-[7px]'>How It Works</h3>
                <p className='font-outfit font-normal text-[16px] leading-[26.8px]'>Getting Started with the COOK Platform</p>
              </div>
            </div>
            <div className='flex items-center gap-[10px]'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.25 19.25L15.2625 15.2625" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className='font-outfit font-medium leading-[20px] text-[16px] text-TextColor'>Search tutors by category</p>
            </div>
          </div>

          <div className='flex justify-between gap-[131px] mt-[109px]'>
            <div>
              <img className='min-w-[567px]' src={HIW1} alt="" />
            </div>
            <div className='flex flex-col justify-center gap-[29px] w-[590.5px]'>
              <h3 className='font-rubik font-semibold text-[36px] leading-[42.66px]'>Explore Our Culinary Experts</h3>
              <p className='font-outfit font-normal text-[18px] leading-[28.8px]'>Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.</p>
              <button className='h-[41px] w-[157px] text-[white] bg-primary font-outfit rounded-[4px] font-medium text-[20px] leading-[25.2px]'>Browse Tutors</button>
            </div>
          </div>

          <div className='flex justify-between gap-[131px] mt-[109px]'>
            <div className='flex flex-col justify-center gap-[29px] w-[590.5px]'>
              <h3 className='font-rubik font-semibold text-[36px] leading-[42.66px]'>Select Your Perfect Match</h3>
              <p className='font-outfit font-normal text-[18px] leading-[28.8px]'>Once you've explored our range of tutors, choose the one that resonates most with you. Their profiles provide detailed information, such as their areas of expertise, availability, and reviews. Scheduling a lesson has never been easier.</p>
            </div>
            <div className='h-fit'>
              <img className='min-w-[567px]' src={HIW2} alt="" />
            </div>
          </div>

          <div className='flex justify-between gap-[131px] mt-[109px]'>
            <div className='h-fit'>
              <img className='min-w-[567px]' src={HIW3} alt="" />
            </div>
            <div className='flex flex-col justify-center gap-[29px] w-[590.5px]'>
              <h3 className='font-rubik font-semibold text-[36px] leading-[42.66px]'>Enjoy Your Interactive Lesson</h3>
              <p className='font-outfit font-normal text-[18px] leading-[28.8px]'>Step into your online kitchen and start cooking! Our lessons are designed to be fun and interactive, enabling you to learn directly from the experts. After the class, you can review your experience and track your progress.</p>
              <button className='h-[41px] w-[157px] text-[white] bg-primary font-outfit rounded-[4px] font-medium text-[20px] leading-[25.2px]'>Sign up for free</button>
            </div>
          </div>

          <div className='w-[523px] h-[298px] mt-[125px] flex flex-col items-center  px-[25px] rounded-[16px] bg-primaryLighten border border-[rgba(255,219,184,1)] m-auto'>
            <img className='relative top-[-70px]' src={HIWICONLast} alt="" />
            <div className='mt-[-39px]'>
              <h3 className='font-rubik font-bold text-center text-[32px] tracking-[-0.02em] leading-[37.92px]'>Money-back guarantee</h3>
              <p className='font-outfit font-normal text-center text-[18px] leading-[28.8px] mt-[20px]'>We believe you'll enjoy your first cooking lesson. However, we've got your back if anything goes differently than expected. Our money-back guarantee ensures you can take the first step with complete confidence.</p>
            </div>
          </div>
        </section>

        <section className='w-full px-[64px]'>
          <div className='flex justify-between gap-[9.097vw] mt-[123px]'>
            <div className='flex flex-col justify-center gap-[15px] w-[590.5px]'>
              <h3 className='font-rubik font-semibold text-[50px] leading-[56.65px]'>Become A Chef</h3>
              <p className='font-outfit font-normal text-[18px] leading-[28.8px] '>Share your culinary secrets, inspire cooking enthusiasts worldwide, and grow your career like never before. Our platform offers a unique way to connect, teach, and earn.</p>
              <div className='flex flex-col gap-[8px]'>
                <div className='flex items-start gap-[8px]'>
                  <img src={BecomaChecfTick} alt='' />
                  <p className='font-outfit font-normal text-[18px] leading-[28.8px]'><span className='font-bold'>Build Your Brand.</span> Showcase your culinary skills and build your brand within our community.</p>
                </div>
                <div className='flex items-start gap-[8px]'>
                  <img src={BecomaChecfTick} alt='' />
                  <p className='font-outfit font-normal text-[18px] leading-[28.8px]'><span className='font-bold'>Expand Your Reach.</span> Connect with cooking enthusiasts across the globe and expand your audience beyond geographical limits.</p>
                </div>
                <div className='flex items-start gap-[8px]'>
                  <img src={BecomaChecfTick} alt='' />
                  <p className='font-outfit font-normal text-[18px] leading-[28.8px]'><span className='font-bold'>Grow Your Business Faster.</span> Utilize our platform's features and resources to accelerate your growth and increase your income.</p>
                </div>
              </div>
              <button className='h-[39px] w-[150px] text-[white] bg-primary font-outfit rounded-[4px] font-medium text-[20px] leading-[25.2px]'>Become a chef</button>
              <div className='flex items-center gap-[8px]'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_81_758)">
                    <path d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 6.66663V9.99996" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 13.3334H10.0083" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_81_758">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className='font-outfit font-medium leading-[22px] text-[14px]'>Learn how our platform works</p>
              </div>
            </div>
            <div className='h-fit'>
              <img className='min-w-[551px]' src={BecomeaChef} alt="" />
            </div>
          </div>
        </section>

        <section className='w-full px-[64px]  h-[647px] mt-[142px]'>
          <div className='bg-primary rounded-[26px] flex'>
            <img src={BecomeaStudent} alt="" />
            <div className='pl-[104px] pt-[90px] pr-[80px] pb-[74px] flex flex-col gap-[31px]'>
              <h3 className='font-rubik font-semibold text-[50px] leading-[56.65px] text-[white]'>Become A Student</h3>
              <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-[white]'>Kick-start your culinary adventure with COOK. We provide a space for cooking enthusiasts of all levels to learn, explore, and master culinary arts from professional chefs worldwide. So dive in and transform your kitchen into a playground of flavors.</p>
              <div className='flex flex-col gap-[8px]'>
                <div className='flex items-start gap-[8px]'>
                  <img src={BecomeaStudentTick} alt='' />
                  <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-[white]'><span className='font-bold'>Diverse Classes:</span> Showcase your culinary skills and build your brand within our community.</p>
                </div>
                <div className='flex items-start gap-[8px]'>
                  <img src={BecomeaStudentTick} alt='' />
                  <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-[white]'><span className='font-bold'>Expand Your Reach.</span> Connect with cooking enthusiasts across the globe and expand your audience beyond geographical limits.</p>
                </div>
                <div className='flex items-start gap-[8px]'>
                  <img src={BecomeaStudentTick} alt='' />
                  <p className='font-outfit font-normal text-[18px] leading-[28.8px] text-[white]'><span className='font-bold'>Grow Your Business Faster.</span> Utilize our platform's features and resources to accelerate your growth and increase your income.</p>
                </div>
              </div>
              <button className='h-[39px] w-[90px] text-[rgba(255,219,184,1)] border-2 border-[rgba(255,219,184,1)] text-[white] bg-primary font-outfit rounded-[4px] font-medium text-[20px] leading-[23px]'>Sign up</button>
            </div>
          </div>
        </section>

        <section className='w-full px-[64px] mt-[142px] flex justify-between gap-[73]'>
          <div className=''>
            <div className='flex items-center gap-[13px]'>
              <svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3043 3.0638C21.7732 -0.244989 33.7595 0.0042736 33.7595 0.0042736C33.7595 0.0042736 38.8006 15.0966 33.7595 22.2951C26.3461 32.8811 0 22.2951 0 22.2951C0 22.2951 6.65613 7.4873 15.3043 3.0638Z" fill="#D27722" />
              </svg>
              <h3 className='font-bold font-rubik text-[40px] leading-[45.32px]'>Popular online classes</h3>
            </div>

            <div className='ml-[49px] mt-[47px]'>
              <h4 className='font-[600] font-outfit text-[24px] leading-[30.24px]'>Find a tutor by category</h4>
              <div className='w-[491px] flex flex-wrap gap-[15px] mt-[26px]'>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Bakery</p>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Japanese Sushi Making</p>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Thai</p>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Seafood</p>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Italian Cuisine</p>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Vegan</p>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>BBQ & Grilling</p>
              </div>
            </div>
            <div className='ml-[49px] mt-[75px]'>
              <h4 className='font-[600] font-outfit text-[24px] leading-[30.24px]'>Find a tutor by country</h4>
              <div className='w-[329px] flex flex-wrap gap-[16px] mt-[26px]'>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>USA</p>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Spain</p>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>France</p>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Mexico</p>
                <p className='px-[24px] h-[30px] rounded-[58px] text-primary bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)] font-[400] font-kanit text-[20px] leading-[29.9px]'>Germany</p>
              </div>
            </div>
          </div>
          <div className='h-[159.01px] border border-[rgba(255,219,184,1)] self-center'></div>

          <div className='flex flex-col min-w-[631px]'>
            <div className='flex items-center gap-[13px]'>
              <svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3043 3.0638C21.7732 -0.244989 33.7595 0.0042736 33.7595 0.0042736C33.7595 0.0042736 38.8006 15.0966 33.7595 22.2951C26.3461 32.8811 0 22.2951 0 22.2951C0 22.2951 6.65613 7.4873 15.3043 3.0638Z" fill="#D27722" />
              </svg>
              <h3 className='font-bold font-rubik text-[40px] leading-[45.32px]'>COOK Blogs</h3>
            </div>

            <div className='grid grid-cols-2 mt-[53px] gap-[23px]'>
              <div className=' gap-[23px] w-[304px] min-h-[340px] rounded-[16px] border-[rgba(255,219,184,1)] border overflow-hidden'>
                <div>
                  <img src={CookBlog1} alt="" />
                  <div className='px-[25px] py-[20px] flex flex-col gap-[9px]'>
                    <div className='flex items-center gap-[6px]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 2V6" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 2V6" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 10H21" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className='font-outfit font-normal text-[18px] leading-[22.68px]'>24 Apr, 2023</p>
                    </div>
                    <h4 className="font-rubik font-[600] text-[20px] leading-[26.76px]">Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
              </div>
              <div className=' gap-[23px] w-[304px] min-h-[340px] rounded-[16px] border-[rgba(255,219,184,1)] border overflow-hidden'>
                <div>
                  <img src={CookBlog1} alt="" />
                  <div className='px-[25px] py-[20px] flex flex-col gap-[9px]'>
                    <div className='flex items-center gap-[6px]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 2V6" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 2V6" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 10H21" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className='font-outfit font-normal text-[18px] leading-[22.68px]'>24 Apr, 2023</p>
                    </div>
                    <h4 className="font-rubik font-[600] text-[20px] leading-[26.76px]">Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
              </div>
              <div className=' gap-[23px] w-[304px] min-h-[340px] rounded-[16px] border-[rgba(255,219,184,1)] border overflow-hidden'>
                <div>
                  <img src={CookBlog1} alt="" />
                  <div className='px-[25px] py-[20px] flex flex-col gap-[9px]'>
                    <div className='flex items-center gap-[6px]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 2V6" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 2V6" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 10H21" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className='font-outfit font-normal text-[18px] leading-[22.68px]'>24 Apr, 2023</p>
                    </div>
                    <h4 className="font-rubik font-[600] text-[20px] leading-[26.76px]">Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
              </div>
              <div className=' gap-[23px] w-[304px] min-h-[340px] rounded-[16px] border-[rgba(255,219,184,1)] border overflow-hidden'>
                <div>
                  <img src={CookBlog1} alt="" />
                  <div className='px-[25px] py-[20px] flex flex-col gap-[9px]'>
                    <div className='flex items-center gap-[6px]'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 2V6" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 2V6" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 10H21" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className='font-outfit font-normal text-[18px] leading-[22.68px]'>24 Apr, 2023</p>
                    </div>
                    <h4 className="font-rubik font-[600] text-[20px] leading-[26.76px]">Mastering the Art of Homemade Pizza</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer >
          <div className='w-[91.111vw] m-auto min-h-[419px] bg-primary rounded-tl-[25px] rounded-tr-[25px] mt-[135px] divide-y-2 divide-[rgba(255,219,184,1)] px-[2.431vw]'>
            <div className='flex gap-[198px] px-[65px] pt-[54px] pb-[43px]'>
              <div className='flex justify-center items-center'>
                <div className='text-[rgba(255,219,184,1)] font-bold font-rubik text-[56px] leading-[66.36px] tracking-[-0.02em]'>Cook</div>
              </div>

              <div className='flex-1 flex justify-between'>
                <div>
                  <p className='font-outfit font-bold text-[18px] leading-[27pxpx] text-[white]'>About US</p>
                  <div className='flex flex-col gap-[8px] mt-[16px]'>
                    <p className='font-outfit font-bold text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Who we are</p>
                    <p className='font-outfit font-bold text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>How it works</p>
                    <p className='font-outfit font-bold text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>COOK reviews</p>
                  </div>
                </div>
                <div>
                  <p className='font-outfit font-bold text-[18px] leading-[27pxpx] text-[white]'>For Students</p>
                  <div className='flex flex-col gap-[8px] mt-[16px]'>
                    <p className='font-outfit font-bold text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>COOK blog</p>
                    <p className='font-outfit font-bold text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Find a tutor</p>
                  </div>
                </div>
                <div>
                  <p className='font-outfit font-bold text-[18px] leading-[27pxpx] text-[white]'>For Tutors</p>
                  <div className='flex flex-col gap-[8px] mt-[16px]'>
                    <p className='font-outfit font-bold text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Become an online chef</p>
                    <p className='font-outfit font-bold text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Teach cooking online</p>
                  </div>
                </div>
                <div>
                  <p className='font-outfit font-bold text-[18px] leading-[27pxpx] text-[white]'>For Tutors</p>
                  <div className='flex flex-col gap-[8px] mt-[16px]'>
                    <p className='font-outfit font-bold text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Need a help?</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='flex gap-[134px] px-[65px] pt-[54px] pb-[43px]'>
                <div className='flex '>
                  <div className='text-[rgba(255,219,184,1)] font-normal font-outfit text-[20px] leading-[30px] tracking-[-0.02em]'>
                    <p>USA</p>
                    <p>Your address goes here</p>
                    <p>+000000000000</p>
                  </div>
                </div>
                <div className='flex gap-[77.994px]'>
                  <div>
                    <p className='font-outfit font-bold text-[18px] leading-[27px] text-[white]'>COOK’s Socials</p>
                    <div className='flex gap-[10px] mt-[8px]'>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 2H7.5C4.73858 2 2.5 4.23858 2.5 7V17C2.5 19.7614 4.73858 22 7.5 22H17.5C20.2614 22 22.5 19.7614 22.5 17V7C22.5 4.23858 20.2614 2 17.5 2Z" stroke="#C7FFC2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.5 11.3701C16.6234 12.2023 16.4813 13.0523 16.0938 13.7991C15.7063 14.5459 15.0932 15.1515 14.3416 15.5297C13.5901 15.908 12.7385 16.0397 11.9078 15.906C11.0771 15.7723 10.3098 15.3801 9.71485 14.7852C9.11993 14.1903 8.72774 13.4229 8.59408 12.5923C8.46042 11.7616 8.59208 10.91 8.97034 10.1584C9.3486 9.40691 9.9542 8.7938 10.701 8.4063C11.4478 8.0188 12.2978 7.87665 13.13 8.00006C13.9789 8.12594 14.7649 8.52152 15.3717 9.12836C15.9785 9.73521 16.3741 10.5211 16.5 11.3701Z" stroke="#C7FFC2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 6.5H18.01" stroke="#C7FFC2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_675_12381)">
                          <path d="M23.5 3.00005C22.5424 3.67552 21.4821 4.19216 20.36 4.53005C19.7577 3.83756 18.9573 3.34674 18.067 3.12397C17.1767 2.90121 16.2395 2.95724 15.3821 3.2845C14.5247 3.61176 13.7884 4.19445 13.273 4.95376C12.7575 5.71308 12.4877 6.61238 12.5 7.53005V8.53005C10.7426 8.57561 9.00127 8.18586 7.43101 7.39549C5.86074 6.60513 4.51032 5.43868 3.5 4.00005C3.5 4.00005 -0.5 13 8.5 17C6.44053 18.398 3.98716 19.099 1.5 19C10.5 24 21.5 19 21.5 7.50005C21.4991 7.2215 21.4723 6.94364 21.42 6.67005C22.4406 5.66354 23.1608 4.39276 23.5 3.00005Z" stroke="#C7FFC2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_675_12381">
                            <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5 2H15.5C14.1739 2 12.9021 2.52678 11.9645 3.46447C11.0268 4.40215 10.5 5.67392 10.5 7V10H7.5V14H10.5V22H14.5V14H17.5L18.5 10H14.5V7C14.5 6.73478 14.6054 6.48043 14.7929 6.29289C14.9804 6.10536 15.2348 6 15.5 6H18.5V2Z" stroke="#C7FFC2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 8C18.0913 8 19.6174 8.63214 20.7426 9.75736C21.8679 10.8826 22.5 12.4087 22.5 14V21H18.5V14C18.5 13.4696 18.2893 12.9609 17.9142 12.5858C17.5391 12.2107 17.0304 12 16.5 12C15.9696 12 15.4609 12.2107 15.0858 12.5858C14.7107 12.9609 14.5 13.4696 14.5 14V21H10.5V14C10.5 12.4087 11.1321 10.8826 12.2574 9.75736C13.3826 8.63214 14.9087 8 16.5 8Z" stroke="#C7FFC2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.5 9H2.5V21H6.5V9Z" stroke="#C7FFC2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.5 6C5.60457 6 6.5 5.10457 6.5 4C6.5 2.89543 5.60457 2 4.5 2C3.39543 2 2.5 2.89543 2.5 4C2.5 5.10457 3.39543 6 4.5 6Z" stroke="#C7FFC2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <p className='font-outfit font-bold text-[18px] leading-[27px] text-[white]'>Legal</p>
                    <div className='flex flex-col gap-[8px] mt-[8px]'>
                      <p className='font-outfit font-bold text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Terms Of Serivce</p>
                      <p className='font-outfit font-bold text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Privacy Policy</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </footer>

      </main>
    </>
  )
}
