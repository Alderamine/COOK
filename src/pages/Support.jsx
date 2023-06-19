import React from 'react'
import SupportNav from '../components/Support/SupportNav'
import CategoryCard from '../components/Support/CategoryCard'
import CategoriesIcon1 from '../assets/Support/CategoriesIcon1.svg';
import CategoriesIcon2 from '../assets/Support/CategoriesIcon2.svg';
import CategoriesIcon3 from '../assets/Support/CategoriesIcon3.svg';
import CategoriesIcon4 from '../assets/Support/CategoriesIcon4.svg';
import SupportFooter from '../components/Support/SupportFooter';

export default function Support() {
  return (
    <main>
      <div className='xsm:px-[0px] xsm:pl-[8.205vw] xsm:pr-[8.205vw]'>
        <div className='xsm:w-full xsm:flex w-[37.153vw] h-[49px] border-2 border-[#FFDBB8] rounded-[4px] hidden items-center px-[16px] relative mt-[31px]'>
          <svg className='absolute' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.9999 21.5L16.6499 17.15" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input type="text" className='w-full font-medium font-outfit text-[20px] leading-[25.2px] h-full outline-none indent-[37px] bg-[#00000000] text-primary2 placeholder:text-primary2' placeholder='Search' />
        </div>
      </div>
      <section className='w-full pt-[75px] xsm:pt-[72px] px-[175px] md:px-[0px] sm:px-[0px] md:pl-[77px] sm:pl-[77px] md:pr-[44px] sm:pr-[44px] xsm:px-[0px] xsm:pl-[8.205vw] xsm:pr-[8.205vw]'>
        <CategoryCard icon={CategoriesIcon1} title={"COOK account"} description={"Find all the information you need to manage your COOK account. From setting up your profile to account security, we've got you covered."} />
        <CategoryCard icon={CategoriesIcon2} title={"Payments"} description={"Understand our payment process, from scheduling a class to refund policies. We're here to ensure a secure and seamless transaction experience."} />
        <CategoryCard icon={CategoriesIcon3} title={"Learning"} description={"Explore our resources to optimize your learning journey on COOK. Discover tips on class selection, progress tracking, and more."} />
        <CategoryCard icon={CategoriesIcon4} title={"For Chefs"} description={"Get the support you need to thrive as a chef on COOK. Learn about class creation, schedule management, and ways to engage with your students."} />
      </section>
    </main>
  )
}
