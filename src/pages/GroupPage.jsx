import React from 'react'
import user from './../assets/StudentDashboard/user.svg'
import ratingStar from './../assets/GroupList/ratingStar.svg'
import mainImage from './../assets/GroupList/mainImage.png'

const GroupPage = () => {
  return (
    <div>
      <div className='flex gap-[71px] sm:flex-col sm:gap-[42px] xsm:flex-col xsm:gap-[59px] ml-[64px] mr-[71px] sm:ml-[50px] sm:mr-[48px] xsm:mr-[32px] xsm:ml-[32px]'>
        <div className='flex flex-col mt-[80px] sm:mt-[55px] xsm:mt-[37px] gap-[16px] xsm:flex-col-reverse xsm:gap-[27px]'>
          <div className='flex flex-col gap-[11px]'>
            <h1 className='text-[40px] font-[600] font-rubik leading-[47.4px] tracking-[-0.02em] xsm:text-[32px] xsm:leading-[37.92px]'>Lorem ipsum dolor sit amet </h1>
            <div className='flex items-center'>
              <img src={user} className='h-[27px] w-[27px]' alt="" />
              <h1 className='ml-[7px] text-[18px] font-[500] font-outfit leading-[27px]'>Jack Doe</h1>
              <div className='flex gap-[8px] ml-[30px] items-center'>
                <p className='flex gap-[3px] items-center font-outfit font-[700] leading-[27px] text-[18px]'><img src={ratingStar} alt="" />5</p>
                <p className='text-[16px] leading-[24px] text-TextColorSec font-outfit'>(15 reviews)</p>
              </div>
            </div>
          </div>
          <div>
            <img src={mainImage} className='w-[52.638888888888886vw] sm:w-full xsm:w-full' alt="" />
          </div>
        </div>
        <div className='mt-[80px] xsm:mt-0 sm:mt-0 border rounded-[12px] border-primaryLighten2 flex-1 bg-primaryLighten px-[37px] py-[30px] sm:py-[30px] xsm:px-[16px] xsm:py-[24px]'>
          <h1 className='text-[32px] font-[600] font-outfit xsm:text-[24px] leading-[40p.32x] xsm:leading-[30.24px] mb-[32px] xsm:mb-[50px]'>$1000 <span className='text-[18px] font-[300] leading-[27px] text-TextColorSec'>/ class</span></h1>
          <p className='leading-[17.64px] font-outfit text-[14px] text-primary font-[600] uppercase'>Upcoming group lessons</p>
          <div className='mt-[10px] xsm:mt-[8px]  flex flex-col divide-y-2 divide-primaryLighten2'>
            <div className='pb-[28px]'>
              <div className='flex justify-between'>
                <h1 className='text-[24px] xsm:text-[20px] font-[600] leading-[30.24px] font-outfit xsm:leading-[25px]'>Thu, 27 Apr</h1>
                <p className='leading-[22px] xsm:text-[18px] font-[600] font-outfit'>14:30 - 15:30</p>
              </div>
              <div className='flex mt-[14px] justify-between'>
                <img src={user} className='h-[35px] w-[35px]' alt="" />
                <button className='w-[73px] h-[39px] rounded-[4px] bg-primary text-[white]'>Book</button>
              </div>
            </div>
            <div className='py-[28px]'>
              <div className='flex justify-between'>
                <h1 className='text-[24px] xsm:text-[20px] font-[600] leading-[30.24px] font-outfit xsm:leading-[25px]'>Thu, 27 Apr</h1>
                <p className='leading-[22px] xsm:text-[18px] font-[600] font-outfit'>14:30 - 15:30</p>
              </div>
              <div className='flex mt-[14px] justify-between'>
                <img src={user} className='h-[35px] w-[35px]' alt="" />
                <button className='w-[73px] h-[39px] rounded-[4px] bg-primary text-[white]'>Book</button>
              </div>
            </div>
            <div className='pt-[28px]'>
              <div className='flex justify-between'>
                <h1 className='text-[24px] xsm:text-[20px] font-[600] leading-[30.24px] font-outfit xsm:leading-[25px]'>Thu, 27 Apr</h1>
                <p className='leading-[22px] xsm:text-[18px] font-[600] font-outfit'>14:30 - 15:30</p>
              </div>
              <div className='flex mt-[14px] justify-between'>
                <img src={user} className='h-[35px] w-[35px]' alt="" />
                <button className='w-[73px] h-[39px] rounded-[4px] bg-primary text-[white]'>Book</button>
              </div>
            </div>
          </div>
          <button className='w-full border-[2px] h-[39px] font-outfit border-primary rounded-[4px] mt-[32px] xsm:mt-[50px] text-[18px] font-[500] leading-[22.68px] text-primary'>Send A Message</button>
        </div>

      </div>
    </div>
  )
}

export default GroupPage