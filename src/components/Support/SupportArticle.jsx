import React from 'react'
import AutherProfile from "../../assets/Support/AutherProfile.png"
import SupportArticleImage from "../../assets/Support/SupportArticleImage.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function SupportArticle() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);
  return (
    <>
      <nav className="ml-[20.347vw] mr-[20.347vw] md:ml-[6.587vw] md:mr-[5.749vw] sm:ml-[6.587vw] sm:mr-[5.749vw] xsm:ml-[8.205vw] xsm:mr-[8.205vw] rounded-md">
        <ol className="list-reset flex items-center gap-[6px] py-[56px]">
          <li onClick={() => navigate(-2)} className='cursor-pointer inline'>
            <p className="inline font-outfit w-fit font-normal text-[16px] leading-[20.16px] text-primary2 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">All questions</p>
          </li>
          <li className='inline'>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9L5 5L1 1" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </li>
          <li onClick={() => navigate(-1)} className='cursor-pointer inline'>
            <p className="inline font-outfit font-normal text-[16px] leading-[20.16px] text-primary2 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">{location.state.category}</p>
          </li>
          <li className='inline'>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9L5 5L1 1" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </li>
          <li className='inline'>
            <p className="inline font-outfit font-normal text-[16px] leading-[20.16px] text-primary2 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">{location.state.articleTitle}</p>
          </li>
        </ol>
      </nav>
      <main className='ml-[20.347vw] mr-[20.347vw] md:ml-[6.587vw] md:mr-[5.749vw] sm:ml-[6.587vw] sm:mr-[5.749vw] xsm:ml-[8.205vw] xsm:mr-[8.205vw]'>
        <div className="w-full divide-y divide-[rgba(255,219,184,1)]">
          <div>
            <h1 className='font-rubik text-[40px] font-bold leading-[47.4px] tracking-[-0.02em] text-TextColor'>Main Header</h1>
            <div className='flex gap-[13px] items-center mt-[19px] mb-[27px]'>
              <img className='w-[35px] ' src={AutherProfile} alt="" />
              <p className='font-outfit font-semibold text-[18px] leading-[22.68px] text-TextColorSec'>Alex Doe</p>
            </div>
          </div>

          <div className='pt-[71px]'>
            <p className='font-outfit font-normal text-[20px] leading-[30px] text-TextColorSec'>As a member of our online cooking platform, you may have noticed the option for recurring payments. But what are they, and how do they work? Here’s everything you need to know about recurring payments on our platform.</p>

            <div className='flex flex-col gap-[16px] mt-[43px] md:mt-[90px] sm:mt-[90px] xsm:mt-[73px]'>
              <div className='flex gap-[7px] items-center relative left-[-22px] md:left-[0px] sm:left-[0px] xsm:left-[0px]'>
                <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4283 7.48C14.4283 12.1744 8.62446 17 2.70467 17C-3.21512 17 2.42822 11.8212 2.42822 8.5C2.42822 5.17879 -3.21512 0 2.70467 0C8.62446 0 14.4283 2.78558 14.4283 7.48Z" fill="#D27722" />
                </svg>
                <h3 className='font-rubik font-semibold leading-[28.44px] text-[24px] tracking-[-0.02em] text-TextColor'>What are recurring payments?</h3>
              </div>
              <p className='font-outfit font-normal text-[20px] leading-[30px] text-TextColorSec'>Recurring payments are automatic payments that are charged to your payment method at regular intervals, such as weekly, monthly, or annually. These payments are used for services that are ongoing or that require regular payment, such as subscriptions or memberships.</p>

              <div className='w-fit flex flex-col items-end gap-[11px] mt-[58px]'>
                <img className='w-[439px]' src={SupportArticleImage} alt="" />
                <p style={{ fontStyle: 'italic' }} className=' font-kanit font-normal text-[20px] leading-[30px] text-primary'>Image title</p>
              </div>
            </div>

            <div className='flex flex-col gap-[16px] mt-[54px]'>
              <div className='flex gap-[7px] items-center relative left-[-22px] md:left-[0px] sm:left-[0px] xsm:left-[0px]'>
                <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4283 7.48C14.4283 12.1744 8.62446 17 2.70467 17C-3.21512 17 2.42822 11.8212 2.42822 8.5C2.42822 5.17879 -3.21512 0 2.70467 0C8.62446 0 14.4283 2.78558 14.4283 7.48Z" fill="#D27722" />
                </svg>
                <h3 className='font-rubik font-semibold leading-[28.44px] text-[24px] tracking-[-0.02em] text-TextColor'>What are recurring payments?</h3>
              </div>
              <p className='font-outfit font-normal text-[20px] leading-[30px] text-TextColorSec'>Recurring payments are set up through your account settings on our online cooking platform. Once you select the subscription or membership plan that you want, you can choose to make the payment a one-time payment or a recurring payment. If you choose recurring payments, you will be charged automatically at the interval you selected until you cancel the subscription or membership.</p>
            </div>

            <div className='flex flex-col gap-[16px] mt-[58px]'>
              <div className='flex gap-[7px] items-center relative left-[-22px] md:left-[0px] sm:left-[0px] xsm:left-[0px]'>
                <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4283 7.48C14.4283 12.1744 8.62446 17 2.70467 17C-3.21512 17 2.42822 11.8212 2.42822 8.5C2.42822 5.17879 -3.21512 0 2.70467 0C8.62446 0 14.4283 2.78558 14.4283 7.48Z" fill="#D27722" />
                </svg>
                <h3 className='font-rubik font-semibold leading-[28.44px] text-[24px] tracking-[-0.02em] text-TextColor'>Why use recurring payments?</h3>
              </div>
              <p className='font-outfit font-normal text-[20px] leading-[30px] text-TextColorSec'>Recurring payments are set up through your account settings on our online cooking platform. Once you select the subscription or membership plan that you want, you can choose to make the payment a one-time payment or a recurring payment. If you choose recurring payments, you will be charged automatically at the interval you selected until you cancel the subscription or membership.</p>
            </div>

            <div className='flex flex-col gap-[16px] mt-[58px]'>
              <div className='flex gap-[7px] items-center relative left-[-22px] md:left-[0px] sm:left-[0px] xsm:left-[0px]'>
                <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4283 7.48C14.4283 12.1744 8.62446 17 2.70467 17C-3.21512 17 2.42822 11.8212 2.42822 8.5C2.42822 5.17879 -3.21512 0 2.70467 0C8.62446 0 14.4283 2.78558 14.4283 7.48Z" fill="#D27722" />
                </svg>
                <h3 className='font-rubik font-semibold leading-[28.44px] text-[24px] tracking-[-0.02em] text-TextColor'>What are recurring payments?</h3>
              </div>
              <p className='font-outfit font-normal text-[20px] leading-[30px] text-TextColorSec'>Recurring payments are automatic payments that are charged to your payment method at regular intervals, such as weekly, monthly, or annually. These payments are used for services that are ongoing or that require regular payment, such as subscriptions or memberships.</p>
            </div>

            <div className="p-[20px] bg-[rgba(255,241,227,1)] mt-[68px] rounded-[4px]">
              <p className='font-outfit font-normal text-[18px] leading-[27px] text-TextColorSec'>In conclusion, recurring payments on our online cooking platform offer a convenient and hassle-free way to pay for ongoing services or subscriptions. By selecting a recurring payment option, you can ensure that your membership or subscription stays active and you don't have to remember to make a payment each month. If you have any questions or need assistance managing your recurring payments, please reach out to our customer support team.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
