import React from 'react'
import BlogNav from '../layout/BlogNav'
import HeroImage from '../components/Blog/HeroImage'
import CookingIcon from "../assets/Blog/CookingIcon.svg"
import BlogCard from '../components/Blog/BlogCard'
import DrinksIcon from "../assets/Blog/DrinksIcon.svg"
import BlogSecondImage from "../assets/Blog/BlogSecondImage.png"
import BlogCategoriesCard from '../components/Blog/BlogCategoriesCard'
import Category1 from "../assets/Blog/Category1.svg"
import Category2 from "../assets/Blog/Category2.svg"
import Category3 from "../assets/Blog/Category3.svg"
import Category4 from "../assets/Blog/Category4.svg"
import Category5 from "../assets/Blog/Category5.svg"
import Category6 from "../assets/Blog/Category6.svg"
import LandingFooter from '../layout/LandingFooter'

export default function Blog() {
  return (
    <>
      <BlogNav />
      <div className='px-[64px] w-full pt-[28px]'>
        <div className='flex justify-between'>
          <button className='w-[85px] h-[30px] rounded-[8px] bg-primary2 text-[white] font-outfit font-medium text-[14px] leading-[17.64px]'>Business</button>
          <div className='flex gap-[14px]'>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Home Cooking</button>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Recipes</button>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Chef Spotlight</button>
          </div>
        </div>
      </div>

      <section className='w-full flex flex-col items-center'>
        <HeroImage />
        <div className='w-full relative'>
          <div className='absolute top-[50%] z-10 border w-full border-[rgba(255,219,184,1)]'></div>
          <h1 className='relative z-20 m-auto font-rubik font-bold text-[48px] leading-[56.16px] tracking-[-0.02em] w-[1023px] bg-[white] text-center'>Recipes, Tips, and Stories from COOK</h1>
        </div>
        <div className='flex gap-[14px] mt-[22px]'>
          <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Home Cooking</button>
          <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Recipe Inspiration</button>
          <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Chef Spotlight</button>
          <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Food Culture and Travel</button>
          <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Cooking Tips and Hacks</button>
        </div>
      </section>

      <section className='mt-[172px] w-full px-[64px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[6px]'>
            <img src={CookingIcon} alt="" />
            <p className='font-rubik font-medium text-[32px] leading-[41.92px] tracking-[-0.02em]'>Cooking</p>
          </div>
          <div className='flex items-center gap-[9px]'>
            <p className='font-outfit font-medium text-[18px] leading-[23.58px] tracking-[-0.02em] text-primary2'>View all articles</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-[64px] mt-[49px]'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>

      <section className='mt-[91px] w-full px-[64px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[6px]'>
            <img src={DrinksIcon} alt="" />
            <p className='font-rubik font-medium text-[32px] leading-[41.92px] tracking-[-0.02em]'>Drinks</p>
          </div>
          <div className='flex items-center gap-[9px]'>
            <p className='font-outfit font-medium text-[18px] leading-[23.58px] tracking-[-0.02em] text-primary2'>View all articles</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-[64px] mt-[49px]'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>

      <section className='w-full bg-[rgba(255,253,244,1)] min-h-[442px] mt-[159px] px-[171px] flex items-center gap-[122px]'>
        <div className='w-full'>
          <div>
            <h3 className='font-rubik font-medium text-[48px] leading-[56.16px] tracking-[-0.02em]'>Did you know?</h3>
            <p className='font-outfit font-normal text-[18px] leading-[31.14px] tracking-[-0.02em] mt-[27px]'>With COOK you can discover and connect with professional chefs from around the world. Find your perfect chef or become one, as our platform provides a seamless experience for cooking enthusiasts. Unleash your culinary dreams and join our vibrant community today!</p>
            <button className='bg-primary2 text-[white] mt-[35px] w-[129px] h-[39px] rounded-[4px] font-outfit font-normal text-[18px] leading-[22.68px]'>Find A Tutor</button>
          </div>
        </div>
        <div className='h-fit max-w-[434px] relative'>
          <img className='relative z-20 w-full' src={BlogSecondImage} alt="" />
          <svg className='absolute z-10  bottom-[-63px] right-[-80px]' width="258" height="258" viewBox="0 0 258 258" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="258" height="258" rx="129" fill="#FFDBB8" />
          </svg>
        </div>
      </section>

      <section className='w-full px-[64px] mt-[131px]'>
        <h2 className='font-rubik font-semibold text-[48px] leading-[62.88px] tracking-[-0.02em] text-center mb-[47px]'>Categories</h2>
        <div className='grid grid-cols-3 gap-x-[21px] gap-y-[36px]'>
          <BlogCategoriesCard img={Category1} title={'Dish Discoveries'}/>
          <BlogCategoriesCard img={Category2} title={'Ingredient Insights'}/>
          <BlogCategoriesCard img={Category3} title={'Kitchen Gadgets'}/>
          <BlogCategoriesCard img={Category4} title={'Global Gastronomy'}/>
          <BlogCategoriesCard img={Category5} title={'Health & Nutrition'}/>
          <BlogCategoriesCard img={Category6} title={'Chef Interviews'}/>
        </div>
      </section>

      <section className='mt-[166px] w-full px-[64px] mb-[29px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[6px]'>
            <p className='font-rubik font-medium text-[32px] leading-[41.92px] tracking-[-0.02em]'>Latest Articles</p>
          </div>
          <div className='flex items-center gap-[9px]'>
            <p className='font-outfit font-medium text-[18px] leading-[23.58px] tracking-[-0.02em] text-primary2'>View all articles</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-x-[64px] gap-y-[112px] mt-[49px]'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>

      <LandingFooter/>
    </>
  )
}