import React from 'react'
import BlogNav from '../../layout/BlogNav'
import { useNavigate, useParams } from 'react-router-dom';

export default function BlogArticle() {
  const navigate = useNavigate();
  const params = useParams()

  return (
    <>
      <BlogNav />
      <div className='px-[64px] w-full pt-[28px]'>
        <div className='flex justify-between'>
          <nav class="">
            <ol class="list-reset flex">
              <li onClick={() => navigate(-2)} className='cursor-pointer'>
                <p class="font-outfit font-normal text-[16px] leading-[20.16px] text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Articles</p>
              </li>
              <li>
                <span class="font-outfit font-normal text-[16px] leading-[20.16px] mx-2 text-neutral-500 dark:text-neutral-400 text-primary">{`>`}</span>
              </li>
              <li onClick={() => navigate(-1)} className='cursor-pointer'>
                <p class="font-outfit font-normal text-[16px] leading-[20.16px] text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">{params?.category}</p>
              </li>
              <li>
                <span class="font-outfit font-normal text-[16px] leading-[20.16px] mx-2 text-neutral-500 dark:text-neutral-400 text-primary">{`>`}</span>
              </li>
              <li className='cursor-pointer'>
                <p class="font-outfit font-normal text-[16px] leading-[20.16px] text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">{params?.category}</p>
              </li>
            </ol>
          </nav>
          <div className='flex gap-[14px]'>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Home Cooking</button>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Recipes</button>
            <button className='px-[16px] h-[30px] rounded-[8px] border border-[rgba(255,219,184,1)] bg-[rgba(255,253,244,1)] text-primary2 font-outfit font-medium text-[14px] leading-[17.64px]'>Chef Spotlight</button>
          </div>
        </div>
      </div>

      <div>
        <h1 className='font-rubik font-bold text-[48px] leading-[56.16px] tracking-[-0.02em]'>Lorem Ipsum</h1>
      </div>
    </>
  )
}
