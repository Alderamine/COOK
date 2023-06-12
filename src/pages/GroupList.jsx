import React, { useState } from 'react'
import GroupCard1 from "../assets/GroupList/GroupCard1.png"
import GroupHeroPattern from "../assets/GroupList/GroupHeroPattern.png"
import AutherProfile from "../assets/Support/AutherProfile.png"
import JoinClassGroup from '../assets/allAssets/join-cook-groups.jpg'
import GroupCard from '../components/GroupList/GroupCard'
import Pagination from '../components/utils/Pagination'

export default function GroupList() {

  return (
    <main>
      <div className='w-full min-h-[411px] flex items-center bg-[rgba(255,253,244,1)]'>
        <div className='pl-[67px] pr-[118px] flex items-center gap-[137px]'>
          <div className='flex flex-col gap-[20px]'>
            <h1 className='font-bold font-rubik text-[54px] leading-[63.99px] tracking-[-0.02em]'>Cook Together with <span className='font-pacifico font-normal leading-[94.82px] text-primary'>Group</span></h1>
            <p className='font-outfit font-normal text-[16px] leading-[24px] text-TextColorSec w-[37.014vw]'>Embrace the fun of learning with COOK's group lessons. Dive into lively discussions, collaborate on recipes, and connect with a diverse community of food lovers. Transform your kitchen into a vibrant, interactive culinary classroom!</p>
            <div className='flex items-center gap-[17px]'>
              <button className='px-[16px] h-[39px] rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] text-[white] bg-primary'>Explore groups</button>
              <button className='px-[16px] h-[39px] rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] text-primary bg-[white] border-2 border-primary'>Find A Tutor</button>
            </div>
          </div>
          <div>
            <div className='w-fit relative'>
              <img className='w-[306px] absolute z-10 right-[-35px] bottom-[-40px]' src={GroupHeroPattern} alt="" />
              <img className='w-[470px] rounded-[9px] relative z-20' src={JoinClassGroup} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='pl-[65px] pr-[63px]'>

        <div className='flex gap-[21px] mt-[81px] mb-[79px]'>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Category</p>
            <select name="" className='min-h-[49px] w-[239px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">Baking</option>
            </select>
          </div>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Price</p>
            <select name="" className='min-h-[49px] w-[239px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">Mon, 27 Apr </option>
            </select>
          </div>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Time</p>
            <select name="" className='min-h-[49px] w-[239px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">9:00pm - 10:00pm</option>
            </select>
          </div>
          <div className='flex flex-col gap-[4ox]'>
            <p className='font-outfit font-semibold text-[16px] leading-[24px] text-primary'>Date</p>
            <select name="" className='min-h-[49px] w-[239px] flex border-2 border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[25.2px] text-TextColor flex-1 rounded-[12px] px-[16px]' id="">
              <option selected value="Baking">Mon, 27 Apr </option>
            </select>
          </div>
        </div>

        <div>
          <div>
            <h3 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Popular classes</h3>
            <div className='flex items-center gap-[20px] mt-[26px]'>
              <GroupCard background={"rgba(255,253,244,1)"} />
              <GroupCard background={"rgba(255,253,244,1)"} />
              <GroupCard background={"rgba(255,253,244,1)"} />
              <GroupCard background={"rgba(255,253,244,1)"} />
            </div>
          </div>
          <div>
            <h3 className='font-rubik font-semibold text-[24px] leading-[28.44px] tracking-[-0.02em]'>Popular classes</h3>
            <div className='grid grid-cols-4 items-center gap-[20px] gap-y-[55px] mt-[26px]'>
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />

              <div className='col-span-4 my-[55px] min-h-[245px] bg-primary2 rounded-[16px] min-w-[90.694vw] pl-[46px] pr-[58px] flex items-center'>
                <div className='flex items-center gap-[75px]'>
                  <h3 className='w-[42.083vw] font-rubik font-semibold text-[51px] leading-[60.08px] tracking-[-0.02em] text-[white]'>Improve your skills with <span className='text-[rgba(255,219,184,1)] font-pacifico font-normal'>one-on-one coaching</span></h3>
                  <p className='w-[37.014vw] font-outfit font-normal text-[18px] leading-[27px] text-[white]'>Looking for personalized guidance? Explore our dedicated tutors who are ready to share their culinary wisdom. Tailor your learning journey to your pace and preferences with one-on-one coaching.</p>
                </div>
              </div>

              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </div>

            <Pagination currentPage={1} totalPages={6}/>
          </div>
        </div>



      </div>
    </main>
  )
}
