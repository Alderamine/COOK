import React from 'react'
import SupportArticlesRow from './SupportArticlesRow'
import { suportArticlesData } from '../utils/consts'
import { useLocation, useNavigate } from 'react-router-dom'

export default function SupportArticles() {
  const navigate = useNavigate();
  const location=useLocation();

  console.log(location.state?.title);

  return (
    <>
      <nav class="ml-[175px] mr-[155px] rounded-md">
        <ol class="list-reset flex py-[56px]">
          <li onClick={()=> navigate(-1)} className='cursor-pointer'>
            <p class="font-outfit font-normal text-[16px] leading-[20.16px] text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">All questions</p>
          </li>
          <li>
            <span class="font-outfit font-normal text-[16px] leading-[20.16px] mx-2 text-neutral-500 dark:text-neutral-400 text-primary">{`>`}</span>
          </li>
          <li>
            <p class="font-outfit font-normal text-[16px] leading-[20.16px] text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">{location.state?.category}</p>
          </li>
        </ol>
      </nav>
      <main className='ml-[175px] mr-[155px] border border-[rgba(255,219,184,1)] rounded-[16px] p-[32px] divide-y divide-[rgba(255,219,184,1)]'>
        {suportArticlesData.map((articleTitle, index) => {
          return (
            <SupportArticlesRow category={location.state.category} articleTitle={articleTitle}/>
          )
        })
        }
      </main>
    </>
  )
}
