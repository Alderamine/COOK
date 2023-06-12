import React from 'react'
import { Link } from 'react-router-dom'
import Community from "../assets/About/Community.svg"
import CookLunch from '../assets/About/CookLunch.svg'
import EllipseDesktop from "../assets/About/EllipseDesktop.svg"
import EllipseTablet from "../assets/About/EllipseTablet.svg"
import FirstTaste from "../assets/About/FirstTaste.svg"
import Testimonial from "../assets/About/Testimonial.svg"
import Knowledge from "../assets/About/Knowledge.svg"
import Leaf from "../assets/About/Leaf.svg"
import Main from "../assets/About/Main.png"
import Nav1 from "../assets/About/Nav1.svg"
import Nav2 from "../assets/About/Nav2.svg"
import Nav3 from "../assets/About/Nav3.svg"
import User from "../assets/About/User.svg"
import Openness from "../assets/About/Openness.svg"
import SimmeringIdeas from "../assets/About/SimmeringIdeas.svg"
import Support from "../assets/About/Support.svg"
import firstSpark from "../assets/About/firstSpark.svg"
import COOKLogo from "../assets/allAssets/COOK-logo.svg"

const About = () => {
  return (
    <div>
      <div className='relative bg-primary2 min-h-[580px]'>
        <nav style={{ background: "linear-gradient(180deg,#8B4C10 0%,#D27722 100%)" }} className='h-[104px] w-[100%] px-[64px] flex items-center justify-between'>
          <div className='flex items-center gap-[32px]'>
            <h1 className='font-rubik font-bold text-[32px] leading-[37.92px] tracking-[-0.02em] text-primaryLighten2'>COOK</h1>
            <div className='md:hidden h-[15px] border border-primary rouded-[16px]'></div>
            <div className='md:hidden flex gap-[24px]'>
              <div className='flex gap-[7px]'>
                <img src={Nav1} />
                <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Cooking Classes</p>
              </div>
              <div className='flex gap-[7px]'>
                <img src={Nav2} />
                <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Cooking Classes</p>
              </div>
              <div className='flex gap-[7px]'>
                <img src={Nav3} />
                <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Cooking Classes</p>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-[22px]'>
            <div className='flex items-center gap-[4px]'>
              <p className='font-outfit font-normal text-[19px] leading-[19px] text-[white]'>Eng</p>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#FFDBB8" />
              </svg>
            </div>
            <div className='flex items-center gap-[4px]'>
              <p className='font-outfit font-normal text-[18px] leading-[18px] text-[white]'>USD</p>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#FFDBB8" />
              </svg>
            </div>
            <div className='h-[15px] border border-primary rouded-[16px]'></div>
            <div>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16.5V12.5" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 8.5H12.01" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className='h-[15px] border border-primary rouded-[16px]'></div>
            <div>
              <button className='w-[131px] h-[41px] border-[2px] border-primaryLighten2 text-backPri font-outfit font-[500] text-[20px] leading-[25px] flex justify-center items-center gap-[8px] rounded-[4px]'>
                Log In
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.75 2.75H14.75C15.1478 2.75 15.5294 2.90804 15.8107 3.18934C16.092 3.47064 16.25 3.85218 16.25 4.25V14.75C16.25 15.1478 16.092 15.5294 15.8107 15.8107C15.5294 16.092 15.1478 16.25 14.75 16.25H11.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 13.25L11.75 9.5L8 5.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.75 9.5H2.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <img src={EllipseDesktop} className='absolute top-0 right-0 sm:hidden xsm:hidden' alt="" />
        <img src={EllipseTablet} className='absolute right-0 top-[157px] hidden sm:block' alt="" />

        <div className='mt-[67px] sm:mt-35px xsm:mt-[31px] flex px-[64px] xsm:flex-col-reverse'>
          <h1 className='font-redHatDisplay text-[white] font-bold text-[124px] w-[70%] leading-[133.05px]'><span className='font-pacifico text-primaryLighten2 font-normal'>Unlock</span> Your Inner Chef</h1>
          <div className='flex flex-col items-center'>
            <img src={Main} className='w-[535px] min-w-[535px] max-w-[535px ] h-[287px] z-10' alt="" />
            <button className='mt-[39px] rounded-full border-[3px] border-primaryLighten2 leading-[27px] text-lg w-[155px] h-[47px] font-kanit text-[white]'>Become a Chef</button>
          </div>
        </div>
      </div>
      {/* mission section */}
      <div className="line-before line-after bg-about-oval sm:bg-about-ovalTab xsm:bg-about-ovalMob h-[120px] mt-[112px] sm:h-[100px] sm:mt-[80px] xsm:h-[85px] xsm:mt-[64px] bg-no-repeat bg-center flex justify-center items-center ">
        <h1 className='font-rubik text-[50px] font-[600] sm:text-[42px] xsm:text-[36px]'>Our mission</h1>
      </div>
      <p className='font-outfit leading-[38.84px] sm:leading-[32px] xsm:leading-[28.8px] px-[184px] sm:px-[48px] xsm:px-[33px]  text-[24px] sm:text-[20px] xsm:text-[18px] mt-[46.65px] sm:mt-[26.75px] xsm:mt-[19.81px] text-justify xsm:text-center text-TextColorSec'>Welcome to our platform, where we see cooking as a delightful art and a hobby that unites us all. We aim to foster a global culinary community that values knowledge, integrity, and artistry. We're passionate about nurturing your culinary journey, helping you learn from world-class chefs, and inspiring you to create delectable dishes. Together, we'll celebrate the joy of cooking and the universal language of food. Let's ignite your culinary potential and cook up a storm!</p>
      {/* story section */}
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
              <img src={firstSpark} className='h-[100px] min-w-[103px] sm:hidden xsm:hidden' alt="" />
              <img src={firstSpark} className='h-[82px] min-w-[79px] hidden sm:block xsm:block' alt="" />
              <div className='absolute h-[calc(100%+10px)] sm:h-full top-[98px] sm:top-[80px] xsm:hidden right-[50%] border-[3px] border-[#98dba7af] border-l-2 border-black dark:border-white '></div>
            </div>
            <div className='flex flex-col'>
              <h1 className='font-rubik text-[36px] leading-[35px] font-[600] sm:text-[30px] xsm:text-[30px]'>The First Spark</h1>
              <p className='font-rubik mt-[7px] text-primary2 font-[600]'>2022-2023</p>
              <p className='leading-[28px] mt-[7px] text-TextColorSec text-[18px] font-outfit'>Our journey began with a powerful idea conceived out of love for the culinary arts and a desire to create a space where professional chefs and cooking enthusiasts could connect, learn, and grow together.</p>
            </div>
          </div>
          <div className='flex xsm:flex-col xsm:items-start gap-[22px] h-full pb-[96px] sm:pb-[64px] xsm:pb-[43px]'>
            <div className='relative flex flex-col mt-[-10px]'>
              <img src={SimmeringIdeas} className='h-[100px] min-w-[103px] sm:hidden xsm:hidden' alt="" />
              <img src={SimmeringIdeas} className='h-[82px] min-w-[79px] hidden sm:block xsm:block' alt="" />
              <div className='absolute h-[calc(100%+10px)] sm:h-full top-[98px] bottom-[0px] sm:top-[80px] xsm:hidden right-[50%] border-[3px] border-[#98dba7af] border-l-2 border-black dark:border-white '></div>
            </div>
            <div className='flex flex-col'>
              <h1 className='font-rubik text-[36px] leading-[35px] font-[600] sm:text-[30px] xsm:text-[30px]'>Simmering Ideas</h1>
              <p className='font-rubik mt-[7px] text-primary2 font-[600]'>2023</p>
              <p className='leading-[28px] mt-[7px] text-TextColorSec text-[18px] font-outfit'>During the development phase, we carefully molded our concept into a tangible platform. We focused on creating a user-friendly interface that would cater to the specific needs of chefs and learners, ensuring a seamless culinary educational experience.</p>
            </div>
          </div>
          <div className='flex xsm:flex-col xsm:items-start gap-[22px] h-full pb-[96px] sm:pb-[64px] xsm:pb-[43px]'>
            <div className='relative flex flex-col mt-[-10px]'>
              <img src={CookLunch} className='h-[100px] min-w-[103px] sm:hidden xsm:hidden' alt="" />
              <img src={CookLunch} className='h-[82px] min-w-[79px] hidden sm:block xsm:block' alt="" />
              <div className='absolute h-[calc(100%+20px)] sm:h-full top-[98px] bottom-[0px] sm:top-[80px] xsm:hidden right-[50%] border-[3px] border-[#98dba7af] border-l-2 border-black dark:border-white '></div>
            </div>
            <div className='flex flex-col'>
              <h1 className='font-rubik text-[36px] leading-[35px] font-[600] sm:text-[30px] xsm:text-[30px]'>COOK Launch</h1>
              <p className='font-rubik mt-[7px] text-primary2 font-[600]'>2023-2024</p>
              <p className='leading-[28px] mt-[7px] text-TextColorSec text-[18px] font-outfit'>The platform was finally ready to be served to the world. Our grand launch began an exciting journey as we aimed to bridge the gap between professional chefs and enthusiastic learners, creating a global culinary community.</p>
            </div>
          </div>
          <div className='flex xsm:flex-col xsm:items-start gap-[22px]'>
            <div className='relative flex flex-col mt-[-5px]'>
              <img src={FirstTaste} className='h-[100px] min-w-[103px] sm:hidden xsm:hidden' alt="" />
              <img src={FirstTaste} className='h-[82px] min-w-[79px] hidden sm:block xsm:block' alt="" />
              {/* <div className='absolute h-[calc(100%+10px)] sm:h-full top-[98px] bottom-[0px] sm:top-[80px] xsm:hidden right-[50%] border-[3px] border-[#98dba7af] border-l-2 border-black dark:border-white '></div> */}
            </div>
            <div className='flex flex-col'>
              <h1 className='font-rubik text-[36px] leading-[35px] font-[600] sm:text-[30px] xsm:text-[30px]'>First Taste of Success</h1>
              <p className='font-rubik mt-[7px] text-primary2 font-[600]'>2023-2024</p>
              <p className='leading-[28px] mt-[7px] text-TextColorSec text-[18px] font-outfit'>As we started gaining our first wave of attention, we continued to refine our platform, learning from the feedback of our valued users. This recognition only fueled our passion and commitment to creating an unparalleled culinary education experience.</p>
            </div>
          </div>
        </div>
      </div>
      {/* our values */}
      <div className='flex flex-col items-center mt-[203px] sm:mt-[89px] xsm:mt-[80px]'>
        <div className='flex flex-col items-center pb-[160px] sm:pb-[105px] xsm:pb-[105px]'>
          <h1 className='font-rubik font-[600] leading-[59px] sm:leading-[49px] xsm:leading-[42px] text-[50px] sm:text-[42px] xsm:text-[36px]'>Our Values</h1>
          <p className='font-outfit mt-[10px]'>What Makes Our Kitchen Unique</p>
        </div>
        <div className='grid px-[175px] sm:px-[48px] xsm:px-[32px] grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 md:grid-cols-1 gap-x-[20px] gap-y-[81px] sm:gap-y-[93px] xsm:gap-y-[113px]'>
          <div className='relative rounded-[16px] border-[2px] pl-[53px] pr-[72px] sm:pl-[73px] sm:pr-[99px] border-[#FFDBB8] bg-backSec sm:bg-[white] xsm:bg-[white] md:bg-[white]'>
            <h1 className='mt-[74px] mb-[29px] text-[32px] font-[600] font-rubik xsm:mt-[80px] xsm:text-center'>Knowledge</h1>
            <p className='font-outfit text-TextColorSec text-[18px] mb-[42px] xsm:text-center'>Knowledge is the cornerstone of our platform. We believe in the power of learning and sharing culinary wisdom. Through this knowledge exchange, our chefs and students continue to grow and refine their skills.</p>
            <img src={Knowledge} className='absolute min-w-[123px] h-[111px] left-[53px] xsm:-translate-x-1/2 xsm:left-1/2 top-[-65px]' alt="" />
          </div>
          <div className='relative rounded-[16px] border-[2px] pl-[53px] pr-[72px] sm:pl-[73px] sm:pr-[99px] border-[#FFDBB8] bg-[white] sm:bg-backSec xsm:bg-backSec md:bg-backSec'>
            <h1 className='mt-[74px] mb-[29px] text-[32px] font-[600] font-rubik xsm:mt-[80px] xsm:text-center'>Support</h1>
            <p className='font-outfit text-TextColorSec text-[18px] mb-[42px] xsm:text-center'>We are committed to providing an environment of support and encouragement. Whether you’re a professional chef sharing your expertise or a student learning to sauté, we're here to ensure your journey is smooth, enjoyable, and rewarding.</p>
            <img src={Support} className='absolute min-w-[123px] h-[111px]  left-[53px] xsm:-translate-x-1/2 xsm:left-1/2 top-[-65px]' alt="" />
          </div>
          <div className='relative rounded-[16px] border-[2px] pl-[53px] pr-[72px] sm:pl-[73px] sm:pr-[99px] border-[#FFDBB8]'>
            <h1 className='mt-[74px] mb-[29px] text-[32px] font-[600] font-rubik xsm:mt-[80px] xsm:text-center'>Community</h1>
            <p className='font-outfit text-TextColorSec text-[18px] mb-[42px] xsm:text-center'>Community is at the heart of our platform. We are a global kitchen, bringing together chefs and food lovers from all walks of life. We value the connections formed and the shared passion that fuels our vibrant culinary network.</p>
            <img src={Community} className='absolute min-w-[123px] h-[111px]  left-[53px] xsm:-translate-x-1/2 xsm:left-1/2 top-[-65px]' alt="" />
          </div>
          <div className='relative rounded-[16px] border-[2px] pl-[53px] pr-[72px] sm:pl-[73px] sm:pr-[99px] border-[#FFDBB8] bg-backSec'>
            <h1 className='mt-[74px] mb-[29px] text-[32px] font-[600] font-rubik xsm:mt-[80px] xsm:text-center'>Openness</h1>
            <p className='font-outfit text-TextColorSec text-[18px] mb-[42px] xsm:text-center'>Openness fosters innovation and creativity. We encourage open dialogue, feedback, and exchange of ideas. This openness helps us improve and inspires our members to explore new culinary possibilities.</p>
            <img src={Openness} className='absolute min-w-[123px] h-[111px] left-[53px] xsm:-translate-x-1/2 xsm:left-1/2  top-[-65px]' alt="" />
          </div>
        </div>
      </div>
      {/* our team */}
      <div className='flex flex-col items-center mt-[274px] sm:mt-[71px] xsm:mt-[255px]'>
        <div className='flex flex-col items-center mb-[121px] '>
          <h1 className='font-rubik font-[600] leading-[59px] sm:leading-[49px] xsm:leading-[42px] text-[50px] sm:text-[42px] xsm:text-[36px]'>Our Team</h1>
          <p className='font-outfit mt-[10px]'>Meet with our platform innovators</p>
        </div>
      </div>
      {/* testimonial */}
      <div className='h-[497px] flex flex-col pt-[46px] xsm:pt-[44px] sm:pt-[45px] pb-[108px] xsm:pb-[74px] justify-center items-center bg-primary2'>
        <img src={Testimonial} className='mb-10' alt="" />
        <p className='text-[24px] text-[white] text-center px-[373px] sm:px-[68px] xsm:px-[32px] xsm:text-[20px] font-outfit mb-[38px] '>COOK has revolutionized my culinary journey. The expert tutors, various classes, and supportive community make it the ultimate hub for food lovers like me.</p>
        <div className='flex gap-[21px]'>
          <img src={User} alt="" />
          <div className="flex flex-col ">
            <h1 className='text-[20px] font-outfit font-[500] text-[white]'>Liam Thompson</h1>
            <p className='text-[20px] font-[500] text-primaryLighten2'>Cooking Enthusiast</p>
          </div>
        </div>
      </div>
      {/* our achievements */}
      <div>
        <div className='flex flex-col items-center mb-[100px] xsm:mb-[56px] sm:mb-[53px] mt-[107px] sm:mt-[93px] xsm:mt-[73px]'>
          <h1 className='font-rubik font-[600] leading-[59px] sm:leading-[49px] xsm:leading-[42px] text-[50px] sm:text-[42px] xsm:text-[36px]'>Our achievements</h1>
          <p className='font-outfit mt-[10px]'>The milestones we’re proud of</p>
        </div>
        <div className='grid grid-cols-4 xsm:grid-cols-1 mx-[178px] sm:mx-[49px] xsm:mx-[35px] gap-y-[29px] bg-[#FFFDF4] rounded-[16px] border border-primaryLighten2 pt-[32px] pb-[32px]'>
          <div className='flex flex-col items-center'>
            <h1 className='font-rubik leading-[47px] text-primary2 font-[700] mb-[10px] text-[40px]'>100+</h1>
            <p className='font-outfit'>Talented Chefs</p>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='font-rubik leading-[47px] text-primary2 font-[700] mb-[10px] text-[40px]'>1000+</h1>
            <p className='font-outfit'>Students</p>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='font-rubik leading-[47px] text-primary2 font-[700] mb-[10px] text-[40px]'>4.8 ★</h1>
            <p className='font-outfit'>Rating</p>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='font-rubik leading-[47px] text-primary2 font-[700] mb-[10px] text-[40px]'>20+</h1>
            <p className='font-outfit'>Cooking Categories</p>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer >
        <div className='w-[1311.998px] m-auto min-h-[419px] bg-primary rounded-tl-[25px] rounded-tr-[25px] mt-[135px] divide-y-2 divide-[rgba(255,219,184,1)]'>
          <div className='flex gap-[198px] pt-[54px] pb-[43px] ml-[91.5px] mr-[102.5px]'>
            <div className='flex justify-center items-center'>
              {/* <div className='text-[rgba(255,219,184,1)] font-bold font-rubik text-[56px] leading-[66.36px] tracking-[-0.02em]'>Cook</div> */}
              <Link to={'/'}>
                <img src={COOKLogo} alt="" />
              </Link>
            </div>

            <div className='flex-1 flex justify-between'>
              <div>
                <p className='font-outfit font-normal text-[18px] leading-[27pxpx] text-[white]'>ABOUT US</p>
                <div className='flex flex-col gap-[8px] mt-[16px]'>
                  <p className='font-outfit font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Who we are</p>
                  <p className='font-outfit font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>How it works</p>
                  <p className='font-outfit font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>COOK reviews</p>
                </div>
              </div>
              <div>
                <p className='font-outfit font-normal text-[18px] leading-[27pxpx] text-[white]'>FOR STUDENTS</p>
                <div className='flex flex-col gap-[8px] mt-[16px]'>
                  <p className='font-outfit font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>COOK blog</p>
                  <p className='font-outfit font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Find a tutor</p>
                </div>
              </div>
              <div>
                <p className='font-outfit font-normal text-[18px] leading-[27pxpx] text-[white]'>FOR TUTORS</p>
                <div className='flex flex-col gap-[8px] mt-[16px]'>
                  <p className='font-outfit font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Become an online chef</p>
                  <p className='font-outfit font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Teach cooking online</p>
                </div>
              </div>
              <div>
                <p className='font-outfit font-normal text-[18px] leading-[27pxpx] text-[white]'>SUPPORT</p>
                <div className='flex flex-col gap-[8px] mt-[16px]'>
                  <Link to={'/support'}>
                    <p className='font-outfit font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Need a help?</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='ml-[31px] mr-[45.5px]'>
            <div className='flex gap-[154px] pt-[54px] pb-[43px] ml-[49.5px]'>
              <div className='flex '>
                <div className='text-[rgba(255,219,184,1)] font-normal font-outfit text-[20px] leading-[30px] tracking-[-0.02em]'>
                  <p className='text-[20px] leading-[30px] font-outfit font-normal'>USA</p>
                  <p className='text-[20px] leading-[30px] font-outfit font-normal'>Your address goes here</p>
                  <p className='text-[20px] leading-[30px] font-outfit font-normal'>+000000000000</p>
                </div>
              </div>
              <div className='flex-1 flex justify-between'>
                <div className='flex gap-[77.994px]'>
                  <div>
                    <p className='font-outfit font-normal text-[18px] leading-[27px] text-[white]'>COOK’s SOCIALS</p>
                    <div className='flex gap-[10px] mt-[8px]'>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 2H7.5C4.73858 2 2.5 4.23858 2.5 7V17C2.5 19.7614 4.73858 22 7.5 22H17.5C20.2614 22 22.5 19.7614 22.5 17V7C22.5 4.23858 20.2614 2 17.5 2Z" stroke="#C7FFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.5 11.3701C16.6234 12.2023 16.4813 13.0523 16.0938 13.7991C15.7063 14.5459 15.0932 15.1515 14.3416 15.5297C13.5901 15.908 12.7385 16.0397 11.9078 15.906C11.0771 15.7723 10.3098 15.3801 9.71485 14.7852C9.11993 14.1903 8.72774 13.4229 8.59408 12.5923C8.46042 11.7616 8.59208 10.91 8.97034 10.1584C9.3486 9.40691 9.9542 8.7938 10.701 8.4063C11.4478 8.0188 12.2978 7.87665 13.13 8.00006C13.9789 8.12594 14.7649 8.52152 15.3717 9.12836C15.9785 9.73521 16.3741 10.5211 16.5 11.3701Z" stroke="#C7FFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 6.5H18.01" stroke="#C7FFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_675_12381)">
                          <path d="M23.5 3.00005C22.5424 3.67552 21.4821 4.19216 20.36 4.53005C19.7577 3.83756 18.9573 3.34674 18.067 3.12397C17.1767 2.90121 16.2395 2.95724 15.3821 3.2845C14.5247 3.61176 13.7884 4.19445 13.273 4.95376C12.7575 5.71308 12.4877 6.61238 12.5 7.53005V8.53005C10.7426 8.57561 9.00127 8.18586 7.43101 7.39549C5.86074 6.60513 4.51032 5.43868 3.5 4.00005C3.5 4.00005 -0.5 13 8.5 17C6.44053 18.398 3.98716 19.099 1.5 19C10.5 24 21.5 19 21.5 7.50005C21.4991 7.2215 21.4723 6.94364 21.42 6.67005C22.4406 5.66354 23.1608 4.39276 23.5 3.00005Z" stroke="#C7FFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_675_12381">
                            <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5 2H15.5C14.1739 2 12.9021 2.52678 11.9645 3.46447C11.0268 4.40215 10.5 5.67392 10.5 7V10H7.5V14H10.5V22H14.5V14H17.5L18.5 10H14.5V7C14.5 6.73478 14.6054 6.48043 14.7929 6.29289C14.9804 6.10536 15.2348 6 15.5 6H18.5V2Z" stroke="#C7FFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 8C18.0913 8 19.6174 8.63214 20.7426 9.75736C21.8679 10.8826 22.5 12.4087 22.5 14V21H18.5V14C18.5 13.4696 18.2893 12.9609 17.9142 12.5858C17.5391 12.2107 17.0304 12 16.5 12C15.9696 12 15.4609 12.2107 15.0858 12.5858C14.7107 12.9609 14.5 13.4696 14.5 14V21H10.5V14C10.5 12.4087 11.1321 10.8826 12.2574 9.75736C13.3826 8.63214 14.9087 8 16.5 8Z" stroke="#C7FFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.5 9H2.5V21H6.5V9Z" stroke="#C7FFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.5 6C5.60457 6 6.5 5.10457 6.5 4C6.5 2.89543 5.60457 2 4.5 2C3.39543 2 2.5 2.89543 2.5 4C2.5 5.10457 3.39543 6 4.5 6Z" stroke="#C7FFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <p className='font-outfit font-normal text-[18px] leading-[27px] text-[white]'>LEGAL</p>
                    <div className='flex flex-col gap-[8px] mt-[8px]'>
                      <p className='font-outfit font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Terms Of Serivce</p>
                      <p className='font-outfit font-normal text-[20px] leading-[30px] text-[rgba(255,219,184,1)]'>Privacy Policy</p>
                    </div>
                  </div>
                </div>
                <p className='self-end text-[white] text-[20px] leading-[30px] font-outfit'>2023 Copyright</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About