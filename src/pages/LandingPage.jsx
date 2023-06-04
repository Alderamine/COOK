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

export default function LandingPage() {
  return (
    <>
      <nav className='h-[104px] w-[100%] px-[64px] flex items-center justify-between border-b border-primary'>
        <div className='flex items-center gap-[32px]'>
          <h1 className='font-rubik font-bold text-[32px] leading-[37.92px] tracking-[-2%] text-primary'>COOK</h1>
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
        <section className='w-full px-[64px] flex gap-[92px]'>
          <div className=''>
            <h1 className='font-rubik font-bold text-[61px] leading-[69.11px] w-[702px] tracking-[-4%] text-TextColor mt-[85px]'>Master the Art of Cooking with <span className='text-primary font-normal relative top-[10px] font-pacifico'>Experts</span> Worldwide </h1>
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
                <img src={CardProfile} />
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
              <p className='font-outfit font-[400] text-[14px] leading-[22.4px]'>I've discovered a whole new world of flavors. Learning to cook has never been this fun and engaging!</p>
            </div>
          </div>
        </section>

        <section className='w-[1085px] mt-[159px] mb-[182px] bg-primaryLighten h-[148px] m-auto rounded-[16px] py-[12px] px-[23px] flex items-center justify-around gap-[29px]'>
          <div className='flex flex-col  justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-2%] text-primary'>100+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>Talented Chefs</p>
          </div>
          <div className='flex flex-col  justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-2%] text-primary'>1000+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>Students</p>
          </div>
          <div className='flex flex-col  justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-2%] text-primary flex gap-[10px] items-center'>4.8
              <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1L19.1715 9.22818L28.5 10.5557L21.75 16.9569L23.343 26L15 21.7282L6.657 26L8.25 16.9569L1.5 10.5557L10.8285 9.22818L15 1Z" fill="#D27722" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec'>Rating</p>
          </div>
          <div className='flex flex-col  justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-2%] text-primary'>20+</h4>
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
                <h3 className='font-rubik font-medium text-[50px] leading-[56.65px] tracking-[-2%] mb-[7px]'>Explore & Learn</h3>
                <p className='font-outfit font-normal text-[16px] leading-[26.8px]'>Dive into a range of cooking styles and techniques tailored to your interests</p>
              </div>
            </div>

            <div className='flex items-center gap-[10px]'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.25 19.25L15.2625 15.2625" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>Search tutors by category </p>
            </div>
          </div>

          <div className='grid grid-cols-3 gap-[24px] mt-[68px]'>
            <div className='flex items-center gap-[24px] group h-[121px] p-[34px] rounded-[16px] border border-[rgba(255,219,184,1)] hover:bg-primary transition-colors delay-100 duration-100'>
              <img className='img-primary' src={Stats1} />
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-2%] text-TextColor group-hover:text-[white] delay-100 duration-100'>Bakery</h3>
                  <div>
                    <img src={StatsIcon1} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor group-hover:text-[white] delay-100 duration-100'>Master baking: from rustic bread to delicate pastries</p>
              </div>
            </div>

            <div className='flex items-center gap-[24px] group h-[121px] p-[34px] rounded-[16px] border border-[rgba(255,219,184,1)] hover:bg-primary transition-colors delay-100 duration-100'>
              <img src={Stats3} />
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-2%] text-TextColor group-hover:text-[white] delay-100 duration-100'>Vegan Cooking</h3>
                  <div>
                    <img src={StatsIcon2} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor group-hover:text-[white] delay-100 duration-100'>Create delicious, nutritious meals with plant-based ingredients</p>
              </div>
            </div>

            <div className='flex items-center gap-[24px] group h-[121px] p-[34px] rounded-[16px] border border-[rgba(255,219,184,1)] hover:bg-primary transition-colors delay-100 duration-100'>
              <img src={Stats5} />
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-2%] text-TextColor group-hover:text-[white] delay-100 duration-100'>Seafood Mastery</h3>
                  <div>
                    <img src={StatsIcon2} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor group-hover:text-[white] delay-100 duration-100'>Dive into seafood: from grilling fish to creating sushi</p>
              </div>
            </div>

            <div className='flex items-center gap-[24px] group h-[121px] p-[34px] rounded-[16px] border border-[rgba(255,219,184,1)] hover:bg-primary transition-colors delay-100 duration-100'>
              <img src={Stats2} />
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-2%] text-TextColor group-hover:text-[white] delay-100 duration-100'>BBQ & Grilling</h3>
                  <div>
                    <img src={StatsIcon2} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor group-hover:text-[white] delay-100 duration-100'>Fire up your skills with mouth-watering BBQ dishes</p>
              </div>
            </div>

            <div className='flex items-center gap-[24px] group h-[121px] p-[34px] rounded-[16px] border border-[rgba(255,219,184,1)] hover:bg-primary transition-colors delay-100 duration-100'>
              <img src={Stats4} />
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-2%] text-TextColor group-hover:text-[white] delay-100 duration-100'>Wine Pairing</h3>
                  <div>
                    <img src={StatsIcon2} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor group-hover:text-[white] delay-100 duration-100'>Enhance culinary experiences by mastering wine pairing</p>
              </div>
            </div>

            <div className='flex items-center gap-[24px] group h-[121px] p-[34px] rounded-[16px] border border-[rgba(255,219,184,1)] hover:bg-primary transition-colors delay-100 duration-100'>
              <img src={Stats6} />
              <div>
                <div className='flex items-center justify-between'>
                  <h3 className='font-rubik font-bold text-[24px] leading-[27.19px] tracking-[-2%] text-TextColor group-hover:text-[white] delay-100 duration-100'>Cake Decorating</h3>
                  <div>
                    <img src={StatsIcon2} />
                  </div>
                </div>
                <p className='font-kanit font-normal text-[14px] leading-[21px] text-TextColor group-hover:text-[white] delay-100 duration-100'>Unleash creativity with cake decorating techniques</p>
              </div>
            </div>


          </div>

          <div className='flex items-center justify-end gap-[15px] mt-[32px]'>
            <p>Show more</p>
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
              <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-2%] '>Expert Chefs</h3>
              <p className='font-outfit font-normal leading-[28.8px] text-center'>Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class.</p>
            </div>
            <div className='h-[42px] w-0 border-2 border-[rgba(255,219,184,1)]'></div>
            <div className='flex flex-col items-center gap-[27px] w-[360px]'>
              <img src={Benefit2} />
              <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-2%] '>Save Time and Money</h3>
              <p className='font-outfit font-normal leading-[28.8px] text-center'>Embrace the convenience of learning from home. Save time on travel, reduce dining-out expenses, and master your kitchen with our online cooking classes.</p>
            </div>
            <div className='h-[42px] w-0 border-2 border-[rgba(255,219,184,1)]'></div>
            <div className='flex flex-col items-center gap-[27px] w-[360px]'>
              <img src={Benefit3} />
              <h3 className='font-rubik font-semibold text-[32px] leading-[37.92px] tracking-[-2%] '>Accessible Cooking</h3>
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
            <h3 className='font-rubik font-semibold text-[31px] leading-[36.74px] tracking-[-2%]'>Other Advantages</h3>
            <div className='mt-[29px] flex flex-col gap-[25px]'>
              <div className='flex gap-[16px] items-start rounded-[16px] w-full border border-[rgba(255,219,184,1)] p-[16px]'>
                <img className='w-[32px]' src={AdvantagesIcon1} alt="" />
                <div>
                  <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-2%] text-TextColor'>Diverse Range of Classes</h4>
                  <p className='font-outfit font-normal text-[16px] leading-[25.6px] text-TextColor mt-[10px]'>Explore the culinary world with our vast array of online cooking classes. Whether you're a beginner or a seasoned cook, we have a class that suits your skill level and interests.</p>
                </div>
              </div>

              <div className='flex gap-[16px] items-start rounded-[16px] w-full border border-[rgba(255,219,184,1)] p-[16px]'>
                <img className='w-[32px]' src={AdvantagesIcon2} alt="" />
                <div>
                  <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-2%] text-TextColor'>Opportunity to Teach</h4>
                  <p className='font-outfit font-normal text-[16px] leading-[25.6px] text-TextColor mt-[10px]'>Share your culinary wisdom. If you're an experienced cook, our platform allows you to teach your classes, reach a global audience, and earn income.</p>
                </div>
              </div>

              <div className='flex gap-[16px] items-start rounded-[16px] w-full border border-[rgba(255,219,184,1)] p-[16px]'>
                <img className='w-[32px]' src={AdvantagesIcon3} alt="" />
                <div>
                  <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-2%] text-TextColor'>Interactive Lessons</h4>
                  <p className='font-outfit font-normal text-[16px] leading-[25.6px] text-TextColor mt-[10px]'>Engage in real-time with expert chefs. Our interactive online cooking classes allow you to ask questions, receive instant feedback, and learn hands-on from the pros.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='w-full px-[64px]'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-[20px]'>
              <svg className='relative top-[15px]' width="75" height="31" viewBox="0 0 75 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 24C7 24 20.6553 7 37.5 7C54.3447 7 68 24 68 24" stroke="#D27722" stroke-width="14" stroke-linecap="round" />
              </svg>
              <div>
                <h3 className='font-rubik font-medium text-[50px] leading-[56.65px] tracking-[-2%] mb-[7px]'>How It Works</h3>
                <p className='font-outfit font-normal text-[16px] leading-[26.8px]'>Getting Started with the COOK Platform</p>
              </div>
            </div>

            <div className='flex items-center gap-[10px]'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.25 19.25L15.2625 15.2625" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>Search tutors by category</p>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}
