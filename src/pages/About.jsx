import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Community from "../assets/About/Community.svg"
import CookLunch from '../assets/About/CookLunch.svg'
import EllipseDesktop from "../assets/About/EllipseDesktop.svg"
import EllipseTablet from "../assets/About/EllipseTablet.svg"
import FirstTaste from "../assets/About/FirstTaste.svg"
import Knowledge from "../assets/About/Knowledge.svg"
import Leaf from "../assets/About/Leaf.svg"
import Main from "../assets/About/Main.png"
import Main2 from "../assets/About/Main2.png"
import Nav1 from "../assets/About/Nav1.svg"
import Nav2 from "../assets/About/Nav2.svg"
import Nav3 from "../assets/About/Nav3.svg"
import Openness from "../assets/About/Openness.svg"
import SimmeringIdeas from "../assets/About/SimmeringIdeas.svg"
import Support from "../assets/About/Support.svg"
import Testimonial from "../assets/About/Testimonial.svg"
import TopPattern from "../assets/About/TopPattern.svg"
import User from "../assets/About/User.svg"
import firstSpark from "../assets/About/firstSpark.svg"
import ourTeam from "../assets/About/ourTeam.svg"
import teamUser1 from "../assets/About/teamUser1.jpg"
import teamUser2 from "../assets/About/teamUser2.png"
import Hamburger from "../assets/About/Hamburger.svg"
import AboutLogo from "../assets/About/AboutLogo.svg"
import COOKLogo from "../assets/allAssets/COOK-logo.svg"
import LandingFooter from '../layout/LandingFooter'
import EnglishIcon from "../assets/LandingPage/EnglishIcon.svg"
import GermanIcon from "../assets/LandingPage/GermanIcon.svg"
import ChineseIcon from "../assets/LandingPage/ChineseIcon.svg"
import ItalianIcon from "../assets/LandingPage/ItalianIcon.svg"
import HebrewIcon from "../assets/LandingPage/HebrewIcon.svg"

const About = () => {
  const [currencyModal, setCurrencyModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);
  return (
    <div>
      <div className='relative bg-primary2 min-h-[580px]'>
        <nav style={{ background: "linear-gradient(180deg,#8B4C10 0%,#D27722 100%)" }} className='fixed top-0 h-[104px] w-[100%] z-30 px-[64px] xsm:px-[32px]  flex items-center justify-between'>
          <div className='flex items-center gap-[32px]'>
            {/* <h1 className='font-rubik font-bold text-[32px] leading-[37.92px] tracking-[-0.02em] text-primaryLighten2'>COOK</h1> */}
            <Link to={'/'}>
              <img src={AboutLogo} alt="" />
            </Link>
            <div className='md:hidden sm:hidden xsm:hidden h-[15px] border border-primary rouded-[16px]'></div>
            <div className='md:hidden sm:hidden xsm:hidden flex gap-[24px]'>
              <Link to={'/search-tutors'} className='flex gap-[7px]'>
                <img src={Nav1} />
                <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Cooking Classes</p>
              </Link>
              <Link to={'/signup'} className='flex gap-[7px]'>
                <img src={Nav2} />
                <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Become a Chef</p>
              </Link>
              <Link to={'/search-groups'} className='flex gap-[7px]'>
                <img src={Nav3} />
                <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Group Cooking</p>
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-[22px] xsm:hidden sm:hidden'>
            <div onClick={() => setLanguageModal(!languageModal)} className='flex items-center gap-[4px] relative cursor-pointer'>
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
              <p className='font-outfit font-normal text-[19px] leading-[19px] text-[white]'>Eng</p>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#FFDBB8" />
              </svg>
            </div>
            <div onClick={() => setCurrencyModal(!currencyModal)} className='flex items-center gap-[4px] relative cursor-pointer'>
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
              <p className='font-outfit font-normal text-[18px] leading-[18px] text-[white]'>USD</p>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#FFDBB8" />
              </svg>
            </div>
            <div className='h-[15px] border border-primary rouded-[16px]'></div>
            <Link to={'/support'}>
              <div className='custom-tooltip' data-tooltip="Support">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16.5V12.5" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8.5H12.01" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
            <div className='h-[15px] border border-primary rouded-[16px]'></div>
            <Link to={'/signin'} className='w-[131px] h-[41px] border-[2px] border-primaryLighten2 text-backPri font-outfit font-[500] text-[20px] leading-[25px] flex justify-center items-center gap-[8px] rounded-[4px]'>
              Log In
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.75 2.75H14.75C15.1478 2.75 15.5294 2.90804 15.8107 3.18934C16.092 3.47064 16.25 3.85218 16.25 4.25V14.75C16.25 15.1478 16.092 15.5294 15.8107 15.8107C15.5294 16.092 15.1478 16.25 14.75 16.25H11.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 13.25L11.75 9.5L8 5.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.75 9.5H2.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <img className='sm:block xsm:block hidden' src={Hamburger} alt="" />
        </nav>

        <img src={EllipseDesktop} className='absolute z-0 top-0 right-0 sm:hidden xsm:hidden' alt="" />
        <img src={EllipseTablet} className='absolute z-0 right-0 top-[157px] hidden sm:block' alt="" />

        <div className='pt-[104px] mt-[67px] sm:mt-35px xsm:mt-[31px] sm:mt-[35px] md:mt-[35px] flex px-[64px] xsm:px-[32px] xsm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse'>
          <h1 className='font-redHatDisplay text-[white] font-bold text-[124px] md:text-[90px] sm:text-[90px] sm:text-center md:text-center sm:mb-[132px] sm:mt-[51px] sm:leading-[96.57px] md:leading-[96.57px] md:mt-[51px] md:mb-[132px] xsm:text-[64px] leading-[133.05px] xsm:leading-[68.87px] xsm:mt-[77px] xsm:mb-[107px] xsm:text-center'><span className='font-pacifico text-primaryLighten2 font-normal'>Unlock</span> Your Inner Chef</h1>
          <div className='flex flex-1 flex-col items-center'>
            <img src={Main} className='w-[535px] min-w-[535px] max-w-[535px] h-[287px] z-10 xsm:hidden' alt="" />
            <img src={Main2} className='hidden xsm:block z-10 xsm:w-[326px] xsm:max-w-[326px] xsm:min-w-[326px] xsm:h-[244px]' alt="" />
            <Link to={'/signup'}>
            <button className='mt-[39px]  rounded-full border-[3px] border-primaryLighten2 leading-[27px] text-lg w-[155px] h-[47px] font-kanit text-[white]'>Become a Chef</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative bg-about-oval sm:bg-about-ovalTab xsm:bg-about-ovalMob h-[120px] mt-[112px] sm:h-[100px] sm:mt-[80px] xsm:h-[85px] xsm:mt-[64px] bg-no-repeat bg-center flex justify-center items-center ">
        <div className='absolute  w-full z-[-10] left-0 top-[50%] translate-y-[-50%] border border-[rgba(255,219,184,1)]'></div>

        <h1 className='font-rubik text-[50px] font-[600] sm:text-[42px] xsm:text-[36px]'>Our mission</h1>
      </div>
      <p className='font-outfit leading-[38.84px] sm:leading-[32px] xsm:leading-[28.8px] px-[184px] sm:px-[48px] xsm:px-[33px]  text-[24px] sm:text-[20px] xsm:text-[18px] mt-[46.65px] sm:mt-[26.75px] xsm:mt-[19.81px] text-justify xsm:text-center text-TextColorSec'>Welcome to our platform, where we see cooking as a delightful art and a hobby that unites us all. We aim to foster a global culinary community that values knowledge, integrity, and artistry. We're passionate about nurturing your culinary journey, helping you learn from world-class chefs, and inspiring you to create delectable dishes. Together, we'll celebrate the joy of cooking and the universal language of food. Let's ignite your culinary potential and cook up a storm!</p>

      <div className='flex flex-col items-center mt-[188px] sm:mt-[89px] xsm:mt-[100px]'>
        <div className='flex flex-col items-center mb-[100px] sm:mb-[67px] xsm:mb-[52px]'>
          <div className='relative'>
            <h1 className='font-rubik font-[600] text-[50px] sm:text-[42px] xsm:text-[36px]'>Our Story</h1>
            <img src={Leaf} className='absolute right-[-40px] top-0' alt="" />
          </div>
          <p className='font-outfit'>The Ingredients of COOK Platform Success</p>
        </div>
        <div className='w-full px-[175px] sm:px-[49px] xsm:px-[34px]'>
          <div className='flex xsm:flex-col xsm:items-start gap-[22px] h-full pb-[96px] sm:pb-[64px] xsm:pb-[43px]'>
            <div className='relative flex flex-col mt-[-10px]'>
              <img src={firstSpark} className='h-[100px] relative z-20 min-w-[103px] sm:hidden xsm:hidden' alt="" />
              <img src={firstSpark} className='h-[82px] relative z-20 min-w-[79px] hidden sm:block xsm:block' alt="" />
              <div className='absolute h-[calc(100%+10px)] sm:h-full top-[98px] sm:top-[80px] xsm:hidden right-[50%] border-[3px] border-[#FFEFE0] z-10 border-l-2 border-black dark:border-white '></div>
            </div>
            <div className='flex flex-col'>
              <h1 className='font-rubik text-[36px] leading-[35px] font-[600] sm:text-[30px] xsm:text-[30px]'>The First Spark</h1>
              <p className='font-rubik mt-[7px] text-primary2 font-[600]'>2022-2023</p>
              <p className='leading-[28px] mt-[7px] text-TextColorSec text-[18px] font-outfit'>Our journey began with a powerful idea conceived out of love for the culinary arts and a desire to create a space where professional chefs and cooking enthusiasts could connect, learn, and grow together.</p>
            </div>
          </div>
          <div className='flex xsm:flex-col xsm:items-start gap-[22px] h-full pb-[96px] sm:pb-[64px] xsm:pb-[43px]'>
            <div className='relative flex flex-col mt-[-10px]'>
              <img src={SimmeringIdeas} className='h-[100px] relative z-20 min-w-[103px] sm:hidden xsm:hidden' alt="" />
              <img src={SimmeringIdeas} className='h-[82px] relative z-20 min-w-[79px] hidden sm:block xsm:block' alt="" />
              <div className='absolute h-[calc(100%+10px)] sm:h-full top-[98px] bottom-[0px] sm:top-[80px] xsm:hidden right-[50%] border-[3px] border-[#FFEFE0] z-10 border-l-2 border-black dark:border-white '></div>
            </div>
            <div className='flex flex-col'>
              <h1 className='font-rubik text-[36px] leading-[35px] font-[600] sm:text-[30px] xsm:text-[30px]'>Simmering Ideas</h1>
              <p className='font-rubik mt-[7px] text-primary2 font-[600]'>2023</p>
              <p className='leading-[28px] mt-[7px] text-TextColorSec text-[18px] font-outfit'>During the development phase, we carefully molded our concept into a tangible platform. We focused on creating a user-friendly interface that would cater to the specific needs of chefs and learners, ensuring a seamless culinary educational experience.</p>
            </div>
          </div>
          <div className='flex xsm:flex-col xsm:items-start gap-[22px] h-full pb-[96px] sm:pb-[64px] xsm:pb-[43px]'>
            <div className='relative flex flex-col mt-[-10px]'>
              <img src={CookLunch} className='h-[100px] relative z-20 min-w-[103px] sm:hidden xsm:hidden' alt="" />
              <img src={CookLunch} className='h-[82px] relative z-20 min-w-[79px] hidden sm:block xsm:block' alt="" />
              <div className='absolute h-[calc(100%+20px)] sm:h-full top-[98px] bottom-[0px] sm:top-[80px] xsm:hidden right-[50%] border-[3px] border-[#FFEFE0] z-10 border-l-2 border-black dark:border-white '></div>
            </div>
            <div className='flex flex-col'>
              <h1 className='font-rubik text-[36px] leading-[35px] font-[600] sm:text-[30px] xsm:text-[30px]'>COOK Launch</h1>
              <p className='font-rubik mt-[7px] text-primary2 font-[600]'>2023-2024</p>
              <p className='leading-[28px] mt-[7px] text-TextColorSec text-[18px] font-outfit'>The platform was finally ready to be served to the world. Our grand launch began an exciting journey as we aimed to bridge the gap between professional chefs and enthusiastic learners, creating a global culinary community.</p>
            </div>
          </div>
          <div className='flex xsm:flex-col xsm:items-start gap-[22px]'>
            <div className='relative flex flex-col mt-[-5px]'>
              <img src={FirstTaste} className='h-[100px] relative z-20 min-w-[103px] sm:hidden xsm:hidden' alt="" />
              <img src={FirstTaste} className='h-[82px] relative z-20 min-w-[79px] hidden sm:block xsm:block' alt="" />
            </div>
            <div className='flex flex-col'>
              <h1 className='font-rubik text-[36px] leading-[35px] font-[600] sm:text-[30px] xsm:text-[30px]'>First Taste of Success</h1>
              <p className='font-rubik mt-[7px] text-primary2 font-[600]'>2023-2024</p>
              <p className='leading-[28px] mt-[7px] text-TextColorSec text-[18px] font-outfit'>As we started gaining our first wave of attention, we continued to refine our platform, learning from the feedback of our valued users. This recognition only fueled our passion and commitment to creating an unparalleled culinary education experience.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center mt-[203px] sm:mt-[89px] xsm:mt-[80px]'>
        <div className='flex flex-col items-center pb-[160px] sm:pb-[105px] xsm:pb-[105px]'>
          <h1 className='font-rubik font-[600] leading-[59px] sm:leading-[49px] xsm:leading-[42px] text-[50px] sm:text-[42px] xsm:text-[36px]'>Our Values</h1>
          <p className='font-outfit mt-[10px]'>What Makes Our Kitchen Unique</p>
        </div>
        <div className='grid px-[175px] sm:px-[48px] xsm:px-[32px] grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 md:grid-cols-1 gap-x-[20px] gap-y-[81px] sm:gap-y-[93px] xsm:gap-y-[113px]'>
          <div className='relative rounded-[16px] border-[2px] pl-[53px] pr-[72px] xsm:pl-[24px] xsm:pr-[24px] sm:pl-[73px] sm:pr-[99px] border-[#FFDBB8] bg-backSec sm:bg-[white] xsm:bg-[white] md:bg-[white]'>
            <h1 className='mt-[74px] mb-[29px] text-[32px] font-[600] font-rubik xsm:mt-[80px] xsm:text-center'>Knowledge</h1>
            <p className='font-outfit text-TextColorSec text-[18px] mb-[42px] xsm:text-center'>Knowledge is the cornerstone of our platform. We believe in the power of learning and sharing culinary wisdom. Through this knowledge exchange, our chefs and students continue to grow and refine their skills.</p>
            <img src={Knowledge} className='absolute left-[53px] xsm:-translate-x-1/2 xsm:left-1/2 top-[-52px]' alt="" />
          </div>
          <div className='relative rounded-[16px] border-[2px] pl-[53px] pr-[72px] xsm:pl-[24px] xsm:pr-[24px] sm:pl-[73px] sm:pr-[99px] border-[#FFDBB8] bg-[white] sm:bg-backSec xsm:bg-backSec md:bg-backSec'>
            <h1 className='mt-[74px] mb-[29px] text-[32px] font-[600] font-rubik xsm:mt-[80px] xsm:text-center'>Support</h1>
            <p className='font-outfit text-TextColorSec text-[18px] mb-[42px] xsm:text-center'>We are committed to providing an environment of support and encouragement. Whether you’re a professional chef sharing your expertise or a student learning to sauté, we're here to ensure your journey is smooth, enjoyable, and rewarding.</p>
            <img src={Support} className='absolute left-[53px] xsm:-translate-x-1/2 xsm:left-1/2 top-[-52px]' alt="" />
          </div>
          <div className='relative rounded-[16px] border-[2px] pl-[53px] pr-[72px] xsm:pl-[24px] xsm:pr-[24px] sm:pl-[73px] sm:pr-[99px] border-[#FFDBB8]'>
            <h1 className='mt-[74px] mb-[29px] text-[32px] font-[600] font-rubik xsm:mt-[80px] xsm:text-center'>Community</h1>
            <p className='font-outfit text-TextColorSec text-[18px] mb-[42px] xsm:text-center'>Community is at the heart of our platform. We are a global kitchen, bringing together chefs and food lovers from all walks of life. We value the connections formed and the shared passion that fuels our vibrant culinary network.</p>
            <img src={Community} className='absolute left-[53px] xsm:-translate-x-1/2 xsm:left-1/2 top-[-52px]' alt="" />
          </div>
          <div className='relative rounded-[16px] border-[2px] pl-[53px] pr-[72px] xsm:pl-[24px] xsm:pr-[24px] sm:pl-[73px] sm:pr-[99px] border-[#FFDBB8] bg-backSec'>
            <img src={Openness} className='absolute left-[53px] xsm:-translate-x-1/2 xsm:left-1/2  top-[-52px]' alt="" />
            <h1 className='mt-[74px] mb-[29px] text-[32px] font-[600] font-rubik xsm:mt-[80px] xsm:text-center'>Openness</h1>
            <p className='font-outfit text-TextColorSec text-[18px] mb-[42px] xsm:text-center'>Openness fosters innovation and creativity. We encourage open dialogue, feedback, and exchange of ideas. This openness helps us improve and inspires our members to explore new culinary possibilities.</p>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center mt-[274px] sm:mt-[71px] xsm:mt-[255px]'>
        <div className='w-full flex flex-col justify-center items-center mb-[121px] '>
          <div className='w-full flex justify-center relative'>
            <div className='absolute w-full z-10 left-0 top-[50%] translate-y-[-50%] border border-[rgba(255,219,184,1)]'></div>
            <h1 className='bg-[white] w-[241px] relative z-20 text-center font-rubik font-[600] leading-[59px] sm:leading-[49px] xsm:leading-[42px] text-[50px] sm:text-[42px] xsm:text-[36px] tracking-[-0.02em]'>Our Team</h1>
          </div>
          <p className='font-outfit mt-[10px]'>Meet with our platform innovators</p>
          <div className='mx-[12.152777777777779vw] md:mx-0 mt-[149px] xsm:mt-[95px] items-center flex gap-[40px] xsm:gap-[51px] mb-[120px] xsm:mb-[73px] sm:flex-col xsm:flex-col md:flex-col'>
            <div className='relative flex flex-col items-center px-[44px] md:px-0 sm:mx-0 xsm:w-[326px] xsm:px-0 sm:w-[410px] md:w-[410px]'>
              <img src={teamUser1} alt="" className='w-[232px] min-w-[220px] h-[206px] xsm:w-[192px] xsm:min-w-[192px] xsm:h-[170px]' />
              <h1 className='text-[30px] mt-[16px] mb-[5px] font-[600] font-rubik leading-[35.55px] text-center'>Carlos Mendoza</h1>
              <p className='text-primary2 text-rubik text-[18px] xsm:text-[20px] xsm:leading-[23px] font-[600] leading-[21.33px] mb-[16px] text-center'>Co-founder and CEO</p>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[25.6px] text-center '>Carlos leads our strategic vision, fostering a platform that nurtures culinary education and community.</p>
              <img src={ourTeam} alt="" className='absolute top-[-70px] left-[-80px] md:left-[-110px] sm:left-[-60px] xsm:left-auto xsm:right-3 xsm:rotate-[60deg] xsm:top-[-80px] xsm:w-[111px] xsm:h-[105px]' />
            </div>
            <div className='flex flex-col items-center px-[44px] md:px-0 sm:mx-0 xsm:w-[326px] xsm:px-0 sm:w-[410px] md:w-[410px]'>
              <img src={teamUser2} alt="" className='w-[232px] min-w-[220px] h-[206px] xsm:w-[192px] xsm:min-w-[192px] xsm:h-[170px]' />
              <h1 className='text-[30px] mt-[16px] mb-[5px] font-[600] font-rubik leading-[35.55px] text-center'>James Sullivan</h1>
              <p className='text-primary2 text-rubik text-[18px] xsm:text-[20px] xsm:leading-[23px] font-[600] leading-[21.33px] mb-[16px] text-center'>Co-CEO</p>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[25.6px] text-center '>James works on forging partnerships, expanding our network of professional chefs and culinary institutes.</p>
            </div>
            <div className='flex flex-col items-center px-[44px] md:px-0 sm:mx-0 xsm:w-[326px] xsm:px-0 sm:w-[410px] md:w-[410px]'>
              <img src={teamUser2} alt="" className='w-[232px] min-w-[220px] h-[206px] xsm:w-[192px] xsm:min-w-[192px] xsm:h-[170px]' />
              <h1 className='text-[30px] mt-[16px] mb-[5px] font-[600] font-rubik leading-[35.55px] text-center'>Emma Richards</h1>
              <p className='text-primary2 text-rubik text-[18px] xsm:text-[20px] xsm:leading-[23px] font-[600] leading-[21.33px] mb-[16px] text-center'>Head of Community Engagement</p>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[25.6px] text-center '>Emma ensures a vibrant and supportive community, fostering strong relationships among chefs and learners.</p>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial */}
      <div className='h-[497px] flex flex-col pt-[46px] xsm:pt-[44px] sm:pt-[45px] pb-[108px] xsm:pb-[74px] justify-center items-center bg-primary2'>
        <img src={Testimonial} className='mb-10' alt="" />
        <p className='text-[24px] text-[white] text-center px-[25.902777777777782vw] sm:px-[68px] xsm:px-[32px] xsm:text-[20px] font-outfit mb-[38px] '>COOK has revolutionized my culinary journey. The expert tutors, various classes, and supportive community make it the ultimate hub for food lovers like me.</p>
        <div className='flex gap-[21px]'>
          <img src={User} alt="" />
          <div className="flex flex-col ">
            <h1 className='text-[20px] font-outfit font-[500] text-[white]'>Liam Thompson</h1>
            <p className='font-outfit text-[20px] font-[500] text-primaryLighten2 leading-[20px] mt-[8px]'>Cooking Enthusiast</p>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center mt-[107px] sm:mt-[71px] xsm:mt-[83px]'>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='w-full flex justify-center relative'>
            <h1 className='bg-[white] w-[449px] relative z-20 text-center font-rubik font-[600] tracking-[-0.02em] leading-[59px] sm:leading-[49px] xsm:leading-[42px] text-[50px] sm:text-[42px] xsm:text-[36px]'>Our achievements</h1>
          </div>
          <p className='font-outfit mt-[10px] leading-[26.8px] text-[16px] text-TextColorSec'>The milestones we’re proud of</p>
        </div>
      </div>
      <section className='h-fit relative'>
        <div className='w-[75.347vw] m-auto mt-[100px] xsm:mt-[64px] xsm:mb-[148px] mb-[182px] bg-primaryLighten border border-[rgba(255,219,184,1)] min-h-[148px] rounded-[16px] py-[12px] px-[1.597vw] grid grid-cols-4 sm:grid-cols-2 xsm:grid-cols-1 items-center justify-around gap-y-[20px] gap-[26px] relative'>
          <div className=' flex flex-col h-[121px] justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary2'>100+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec text-center'>Talented Chefs</p>
          </div>
          <div className='flex flex-col h-[121px] justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary2'>1000+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec text-center'>Students</p>
          </div>
          <div className='flex flex-col h-[121px] justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary2 flex gap-[10px] items-center'>4.8
              <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1L19.1715 9.22818L28.5 10.5557L21.75 16.9569L23.343 26L15 21.7282L6.657 26L8.25 16.9569L1.5 10.5557L10.8285 9.22818L15 1Z" fill="#D27722" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec text-center'>Rating</p>
          </div>
          <div className='flex flex-col h-[121px] justify-center items-center'>
            <h4 className='font-rubik font-bold text-[40px] leading-[47.4px] tracking-[-0.02em] text-primary2'>20+</h4>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec text-center'>Cooking Categories</p>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  )
}

export default About