import React from 'react'
import SupportNav from '../layout/SupportNav'
import CategoryCard from '../layout/CategoryCard'
import CategoriesIcon1 from '../assets/Support/CategoriesIcon1.svg';
import CategoriesIcon2 from '../assets/Support/CategoriesIcon2.svg';
import CategoriesIcon3 from '../assets/Support/CategoriesIcon3.svg';
import CategoriesIcon4 from '../assets/Support/CategoriesIcon4.svg';
import SupportFooter from '../layout/SupportFooter';

export default function Support() {
  return (
    <>
      <SupportNav />
      <main>
        <section className='w-full pt-[115px]'>
          <CategoryCard icon={CategoriesIcon1} title={"COOK account"} description={"Find all the information you need to manage your COOK account. From setting up your profile to account security, we've got you covered."} />
          <CategoryCard icon={CategoriesIcon2} title={"Payments"} description={"Understand our payment process, from scheduling a class to refund policies. We're here to ensure a secure and seamless transaction experience."} />
          <CategoryCard icon={CategoriesIcon3} title={"Learning"} description={"Explore our resources to optimize your learning journey on COOK. Discover tips on class selection, progress tracking, and more."} />
          <CategoryCard icon={CategoriesIcon4} title={"For Chefs"} description={"Get the support you need to thrive as a chef on COOK. Learn about class creation, schedule management, and ways to engage with your students."} />
        </section>
      </main>
      <SupportFooter />
    </>
  )
}
