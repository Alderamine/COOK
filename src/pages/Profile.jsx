import React from 'react'
import ProfilePicture from "../assets/Profile/ProfilePicture.png"
import PlayIcon from "../assets/Profile/PlayIcon.svg"
import BakerIcon from "../assets/Profile/BakerIcon.svg"
import UserIcon from "../assets/Profile/UserIcon.svg"
import CookIcon from "../assets/Profile/CookIcon.svg"
import StarIcon2 from "../assets/TutorList/StarIcon2.svg"
import ProfileReviewCard from '../components/Profile/ProfileReviewCard'
import ProfileSubject1 from '../assets/Profile/ProfileSubject1.svg'
import ProfileSubject2 from '../assets/Profile/ProfileSubject2.svg'
import ProfileSubject3 from '../assets/Profile/ProfileSubject3.svg'
import ReviewProfilePic from "../assets/Profile/ReviewProfilePic.png"
import ProfileBakerIcon from '../assets/Profile/ProfileBakerIcon.svg'

export default function Profile() {
  return (
    <main className='px-[175px]'>
      <div className='pt-[79px] flex gap-[20px]'>
        <div className='flex gap-[66px] min-w-[754px]'>
          <div className='relative w-fit'>
            <img className='w-[267px] relative' src={ProfilePicture} alt="" />
            <img className='absolute bottom-[13px] right-[15px]' src={PlayIcon} alt="" />
          </div>

          <div>
            <div>
              <h1 className='font-rubik font-semibold text-[42px] leading-[49.77px] tracking-[-0.02em]'>Sarah Doe</h1>
              <p className='font-outfit font-normal text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className='flex flex-col gap-[6px] mt-[30px]'>
              <div className='flex items-center gap-[7px]'>
                <img src={BakerIcon} alt="" />
                <p className='font-outfit font-normal text-[18px] leading-[27px]'>Baker</p>
              </div>
              <div className='flex items-center gap-[7px]'>
                <img src={UserIcon} alt="" />
                <p className='font-outfit font-normal text-[18px] leading-[27px]'>15 active students</p>
              </div>
              <div className='flex items-center gap-[7px]'>
                <img src={CookIcon} alt="" />
                <p className='font-outfit font-normal text-[18px] leading-[27px]'>100 lessons on COOK</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[313px] self-end h-[243px] rounded-[12px] py-[30px] px-[37px] bg-[rgba(255,253,244,1)] border border-[rgba(255,219,184,1)]'>
          <div>
            <div className='flex items-center justify-between gap-[20px]'>
              <div className='flex flex-col justify-center items-center'>
                <p className='font-rubik font-bold text-[32px] leading-[37.92px]'>$1000</p>
                <p className='font-outfit font-[300] text-[18px] leading-[22.68px] text-TextColorSec'>50-minutes</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex items-center gap-[4px]'>
                  <p className='font-rubik font-bold text-[32px] leading-[37.92px]'>5</p>
                  <img className='w-[27px]' src={StarIcon2} alt="" />
                </div>
                <p className='font-outfit font-[300] text-[18px] leading-[22.68px] text-TextColorSec'>100 reviews</p>
              </div>
            </div>

            <button className='w-full h-[39px] border-2 border-primary rounded-[4px] font-outfit font-normal text-[18px] leading-[22.68px] text-primary mt-[27px]'>Send A Message</button>
            <button className='w-full h-[39px] border-2 border-primary rounded-[4px] font-kanit font-normal text-[18px] leading-[26.91px] bg-primary text-[white] mt-[12px]'>Book A Trial Lesson</button>
          </div>
        </div>
      </div>

      <div className='w-[753.998px] border border-[rgba(255,219,184,1)] mt-[50px] min-h-[110px] rounded-[12px] px-[16px] py-[12px]'>
        <div className='flex items-center gap-[16px] '>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h4 className='font-outfit font-semibold text-[22px] leading-[27.72px]'>Verified tutor</h4>
        </div>
        <p className='font-outfit font-normal text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet consectetur. Vel mattis gravida elementum tellus sollicitudin vitae auctor lacus luctus. Neque sed ullamcorper lectus.</p>
      </div>

      <div className='flex items-center gap-[18px] mt-[60px]'>
        <button className='px-[21px] min-h-[43px] bg-primary text-[white] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>About</button>
        <button className='px-[21px] min-h-[43px] border border-[rgba(255,219,184,1)] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>Availability</button>
        <button className='px-[21px] min-h-[43px] border border-[rgba(255,219,184,1)] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>Reviews (100)</button>
        <button className='px-[21px] min-h-[43px] border border-[rgba(255,219,184,1)] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>Resume</button>
        <button className='px-[21px] min-h-[43px] border border-[rgba(255,219,184,1)] rounded-[8px] font-outfit font-normal text-[18px] leading-[27px]'>Subjects</button>
      </div>

      <div className='w-[753.998px] border border-[rgba(255,219,184,1)] mt-[50px] min-h-[110px] rounded-[12px] px-[32px] bg-[rgba(255,253,244,1)] py-[24px]'>
        <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>About</h4>
        <p className='font-outfit font-normal text-[16px] leading-[24.8px] mt-[12px] w-[693px]'>Lorem ipsum dolor sit amet consectetur. Nisi urna arcu tempor in dui. At rhoncus senectus vel ullamcorper eget at id est. Imperdiet penatibus purus augue ut vitae interdum. Sit netus tincidunt massa fames id iaculis molestie at. Egestas duis et id tincidunt eros elit urna. Sed nunc nec fringilla gravida faucibus consequat feugiat fermentum tempus. Eleifend tempus mauris ac metus quis tellus feugiat. At libero pellentesque enim senectus odio suscipit augue eu pulvinar. Nisl integer quis tellus id hendrerit.</p>
      </div>

      <div className='w-[753.998px] mt-[50px]'>
        <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Availability</h4>
        <div className='min-h-[49px] w-full bg-primary2 rounded-[8px] py-[12px] px-[16px] mt-[18px] mb-[32px] flex items-center gap-[16px]'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#FFDBB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.09003 9.50002C9.32513 8.83169 9.78918 8.26813 10.4 7.90915C11.0108 7.55018 11.7289 7.41896 12.4272 7.53873C13.1255 7.65851 13.7588 8.02154 14.2151 8.56355C14.6714 9.10555 14.9211 9.79154 14.92 10.5C14.92 12.5 11.92 13.5 11.92 13.5" stroke="#FFDBB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 17.5H12.01" stroke="#FFDBB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p className='font-outfit font-normal text-[16px] leading-[24.8px] text-[white]'>Lorem ipsum dolor sit amet consectetur. Nisi urna arcu tempor in dui. At rhoncus s</p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[5px]'>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8333 3.83331H4.16667C3.24619 3.83331 2.5 4.57951 2.5 5.49998V17.1666C2.5 18.0871 3.24619 18.8333 4.16667 18.8333H15.8333C16.7538 18.8333 17.5 18.0871 17.5 17.1666V5.49998C17.5 4.57951 16.7538 3.83331 15.8333 3.83331Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.3333 2.16669V5.50002" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.66669 2.16669V5.50002" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.5 8.83331H17.5" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className='font-outfit font-semibold text-[20px] leading-[31px]'>Mon, 24 Apr</p>
          </div>
          <div className='flex items-center gap-[5px]'>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18.8334C14.6024 18.8334 18.3333 15.1024 18.3333 10.5C18.3333 5.89765 14.6024 2.16669 10 2.16669C5.39762 2.16669 1.66666 5.89765 1.66666 10.5C1.66666 15.1024 5.39762 18.8334 10 18.8334Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 5.5V10.5L13.3333 12.1667" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className='font-outfit font-semibold text-[20px] leading-[31px]'>Spain, GMT +2:00</p>
          </div>
        </div>
        <div className='flex justify-between mt-[25px]'>
          <div className='w-[84px] px-[14px] '>
            <div className='border-t-8 border-primary2'>
              <div className='px-2 m-auto mt-[12px] mb-[24px]'>
                <p className='font-outfit font-normal text-[18px] leading-[27.9px] text-center'>SAT 22</p>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
              </div>
            </div>
          </div>
          <div className='w-[84px] px-[14px] '>
            <div className='border-t-8 border-primary2'>
              <div className='px-2 m-auto mt-[12px] mb-[24px]'>
                <p className='font-outfit font-normal text-[18px] leading-[27.9px] text-center'>SUN 23</p>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
              </div>
            </div>
          </div>
          <div className='w-[84px] px-[14px] '>
            <div className='border-t-8 border-primary2'>
              <div className='w-fit m-auto mt-[12px] mb-[24px]'>
                <p className='font-outfit font-normal text-[18px] leading-[27.9px] text-center'>MON 24</p>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
              </div>
            </div>
          </div>
          <div className='w-[84px] px-[14px] '>
            <div className='border-t-8 border-primary2'>
              <div className='px-2 m-auto mt-[12px] mb-[24px]'>
                <p className='font-outfit font-normal text-[18px] leading-[27.9px] text-center'>TUE 25</p>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
              </div>
            </div>
          </div>
          <div className='w-[84px] px-[14px] '>
            <div className='border-t-8 border-primary2'>
              <div className='px-2 m-auto mt-[12px] mb-[24px]'>
                <p className='font-outfit font-normal text-[18px] leading-[27.9px] text-center'>WED 26</p>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
              </div>
            </div>
          </div>
          <div className='w-[84px] px-[14px] '>
            <div className='border-t-8 border-primary2'>
              <div className='px-2 m-auto mt-[12px] mb-[24px]'>
                <p className='font-outfit font-normal text-[18px] leading-[27.9px] text-center'>THU 27</p>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
              </div>
            </div>
          </div>
          <div className='w-[84px] px-[14px] '>
            <div className='border-t-8 border-primary2'>
              <div className='px-2 m-auto mt-[12px] mb-[24px]'>
                <p className='font-outfit font-normal text-[18px] leading-[27.9px] text-center'>FRI 28</p>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>09:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>10:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>11:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>12:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>13:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>14:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>15:00</p>
                <p className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>16:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[753.998px]'>
        <div className='w-full mt-[50px]'>
          <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Reviews</h4>
          <div className='flex gap-[74px] items-center mt-[40px]'>
            <div className='w-[119px]'>
              <div className='flex items-center gap-[3px]'>
                <h2 className='font-rubik font-semibold text-[49px] leading-[58.07px]'>4.5</h2>
                <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6037 0.561416C17.9709 -0.180611 19.0291 -0.180611 19.3963 0.561417L24.2928 10.4574C24.4385 10.7519 24.7196 10.956 25.0448 11.0034L35.9922 12.5997C36.8129 12.7194 37.1396 13.7285 36.5448 14.3064L28.628 21.9989C28.3914 22.2288 28.2834 22.5605 28.3393 22.8856L30.2079 33.7542C30.3483 34.5709 29.4915 35.1942 28.7578 34.8092L18.9646 29.6714C18.6737 29.5188 18.3263 29.5188 18.0354 29.6714L8.24224 34.8092C7.50847 35.1942 6.65172 34.5709 6.79212 33.7542L8.66071 22.8856C8.71659 22.5605 8.60859 22.2288 8.37204 21.9989L0.455202 14.3064C-0.139597 13.7285 0.187125 12.7194 1.00779 12.5997L11.9552 11.0034C12.2804 10.956 12.5615 10.7519 12.7072 10.4574L17.6037 0.561416Z" fill="#D3CD39" />
                </svg>
              </div>
              <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-primary2 text-center mt-[-1px]'>200 reviews</p>
            </div>

            <div className='min-h-[113.5px] border border-[rgba(255,219,184,1)]'></div>

            <div className='flex flex-col gap-[4px]'>
              <div className='flex items-center gap-[10px]'>
                <p className='font-kanit font-normal text-[16px] leading-[23.92px] text-[black]'>5</p>
                <div className='w-[300px] h-[6px] rounded-[26px] bg-[rgba(255,219,184,1)]'>
                  <div className='w-[90%] h-full rounded-[26px] bg-primary2'></div>
                </div>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p className='font-kanit font-normal text-[16px] leading-[23.92px] text-[black]'>4</p>
                <div className='w-[300px] h-[6px] rounded-[26px] bg-[rgba(255,219,184,1)]'>
                  <div className='w-[30%] h-full rounded-[26px] bg-primary2'></div>
                </div>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p className='font-kanit font-normal text-[16px] leading-[23.92px] text-[black]'>3</p>
                <div className='w-[300px] h-[6px] rounded-[26px] bg-[rgba(255,219,184,1)]'>
                  <div className='w-[10%] h-full rounded-[26px] bg-primary2'></div>
                </div>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p className='font-kanit font-normal text-[16px] leading-[23.92px] text-[black]'>2</p>
                <div className='w-[300px] h-[6px] rounded-[26px] bg-[rgba(255,219,184,1)]'>
                  <div className='w-[14%] h-full rounded-[26px] bg-primary2'></div>
                </div>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p className='font-kanit font-normal text-[16px] leading-[23.92px] text-[black]'>1</p>
                <div className='w-[300px] h-[6px] rounded-[26px] bg-[rgba(255,219,184,1)]'>
                  <div className='w-[3%] h-full rounded-[26px] bg-primary2'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full mt-[67.5px] flex flex-col gap-[62px]'>
          <ProfileReviewCard />
          <ProfileReviewCard />
          <ProfileReviewCard />
          <button className='mt-[15px] w-[225px] h-[35px] rounded-[54px] bg-primary2 text-[white] self-center'>Read More</button>
        </div>
      </div>

      <div className='w-[753.998px] border border-[rgba(255,219,184,1)] mt-[50px] min-h-[110px] rounded-[12px] px-[32px] bg-[rgba(255,253,244,1)] py-[24px]'>
        <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] mb-[20px]'>Resume</h4>
        <div className='flex items-center gap-[15px]'>
          <button className='h-[35px] px-[16px] rounded-[4px] bg-primary2 font-kanit font-normal text-[18px] leading-[26.91px] text-[white]'>Education</button>
          <button className='h-[35px] px-[16px] rounded-[4px] bg-[rgba(0,0,0,0)] border border-primary2 font-kanit font-normal text-[18px] leading-[26.91px] text-primary2'>Experience</button>
        </div>
        <p className='font-outfit font-normal text-[16px] leading-[24.8px] mt-[20px] w-[693px]'>Lorem ipsum dolor sit amet consectetur. Nisi urna arcu tempor in dui. At rhoncus senectus vel ullamcorper eget at id est. Imperdiet penatibus purus augue ut vitae interdum. Sit netus tincidunt massa fames id iaculis molestie at. Egestas duis et id tincidunt eros elit urna. Sed nunc nec fringilla gravida faucibus consequat feugiat fermentum tempus. Eleifend tempus mauris ac metus quis tellus feugiat. At libero pellentesque enim senectus odio suscipit augue eu pulvinar. Nisl integer quis tellus id hendrerit.</p>
      </div>

      <div className='w-[753.998px] mt-[124px]'>
        <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] mb-[28px]'>Subjects</h4>
        <div className='flex items-center gap-[26px]'>
          <div className='w-[196px] h-[136px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-center'>
            <img src={ProfileSubject1} alt="" />
            <p className='font-outfit font-medium text-[20px] leading-[31px]'>Subject name 1</p>
          </div>
          <div className='w-[196px] h-[136px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-center'>
            <img src={ProfileSubject2} alt="" />
            <p className='font-outfit font-medium text-[20px] leading-[31px]'>Subject name 1</p>
          </div>
          <div className='w-[196px] h-[136px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-center'>
            <img src={ProfileSubject3} alt="" />
            <p className='font-outfit font-medium text-[20px] leading-[31px]'>Subject name 1</p>
          </div>
        </div>
      </div>

      <div className='w-[753.998px] mt-[124px] flex flex-col'>
        <h4 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em] mb-[47px]'>Other Tutors</h4>
        <div className='flex items-center gap-[12px]'>

          <div className='boxShadow w-[244.33px] p-[16px] min-h-[384px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-start'>
            <img className='w-[100px]' src={ReviewProfilePic} alt="" />
            <div className='flex flex-col items-center mt-[24px]'>
              <h5 className='font-rubik font-semibold text-[26px] leading-[30.81px] tracking-[-0.02em]'>Sarah Doe</h5>
              <div className='flex items-center gap-[7px]'>
                <img src={ProfileBakerIcon} alt="" />
                <p className='font-kanit font-normal text-[18px] leading-[26.91px] text-primary2'>Baker</p>
              </div>
              <p className='font-outfit font-normal text-[16px] leading-[24px] text-center mt-[16px] mb-[10px]'>Lorem ipsum dolor sit amet consectetur. Massa consequat cras tortor cras morbi amet massa amet fermentum. Et</p>
              <p className='font-kanit font-semibold text-[16px] leading-[23.92px] text-primary2'>Learn more</p>
            </div>
          </div>
          <div className='boxShadow w-[244.33px] p-[16px] min-h-[384px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-start'>
            <img className='w-[100px]' src={ReviewProfilePic} alt="" />
            <div className='flex flex-col items-center mt-[24px]'>
              <h5 className='font-rubik font-semibold text-[26px] leading-[30.81px] tracking-[-0.02em]'>Sarah Doe</h5>
              <div className='flex items-center gap-[7px]'>
                <img src={ProfileBakerIcon} alt="" />
                <p className='font-kanit font-normal text-[18px] leading-[26.91px] text-primary2'>Baker</p>
              </div>
              <p className='font-outfit font-normal text-[16px] leading-[24px] text-center mt-[16px] mb-[10px]'>Lorem ipsum dolor sit amet consectetur. Massa consequat cras tortor cras morbi amet massa amet fermentum. Et</p>
              <p className='font-kanit font-semibold text-[16px] leading-[23.92px] text-primary2'>Learn more</p>
            </div>
          </div>
          <div className='boxShadow w-[244.33px] p-[16px] min-h-[384px] border border-[rgba(255,219,184,1)] rounded-[9px] flex flex-col gap-[9px] items-center justify-start'>
            <img className='w-[100px]' src={ReviewProfilePic} alt="" />
            <div className='flex flex-col items-center mt-[24px]'>
              <h5 className='font-rubik font-semibold text-[26px] leading-[30.81px] tracking-[-0.02em]'>Sarah Doe</h5>
              <div className='flex items-center gap-[7px]'>
                <img src={ProfileBakerIcon} alt="" />
                <p className='font-kanit font-normal text-[18px] leading-[26.91px] text-primary2'>Baker</p>
              </div>
              <p className='font-outfit font-normal text-[16px] leading-[24px] text-center mt-[16px] mb-[10px]'>Lorem ipsum dolor sit amet consectetur. Massa consequat cras tortor cras morbi amet massa amet fermentum. Et</p>
              <p className='font-kanit font-semibold text-[16px] leading-[23.92px] text-primary2'>Learn more</p>
            </div>
          </div>

        </div>
        <div className='flex gap-[12px] mt-[38px] self-end'>
          <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.3409 19.8182L13.2955 19.8182" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.8182 26.3409L13.2955 19.8182L19.8182 13.2955" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="41" height="41" rx="20.5" fill="#D27722" />
            <path d="M13.6591 20.1818H26.7045" stroke="#FFDBB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.1818 13.6591L26.7045 20.1818L20.1818 26.7045" stroke="#FFDBB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </main>
  )
}
