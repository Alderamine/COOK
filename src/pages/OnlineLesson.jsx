import React from 'react'
import VideoImage from '../assets/OnlineLesson/VideoImage.png'
import EditIcon from '../assets/OnlineLesson/EditIcon.svg'
import ChatIcon from '../assets/OnlineLesson/ChatIcon.svg'
import { useState } from 'react';
import { useRef } from 'react';

export default function OnlineLesson() {
  const [width, setWidth] = useState('932px');
  const resizableDivRef = useRef(null);
  const handleDivRef = useRef(null);

  const handleDrag = (event) => {
    const newWidth = event.clientX + 'px';
    console.log(event)
    if (newWidth !== '0px') {
      setWidth(newWidth);
    }
  };

  return (
    <main className='min-h-screen max-h-screen flex'>
      <div ref={resizableDivRef} style={{ width }} className='h-full relative min-w-[508px]'>
        <img className='object-cover w-full h-screen' src={VideoImage} alt="" />

        <div className='absolute top-[38px] w-full px-[44px] flex justify-between items-center'>
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64.4" height="64.4" rx="32.2" fill="#D27722" />
            <path d="M35.75 20.75L40.75 20.75C41.413 20.75 42.0489 21.0134 42.5178 21.4822C42.9866 21.9511 43.25 22.587 43.25 23.25L43.25 40.75C43.25 41.413 42.9866 42.0489 42.5178 42.5178C42.0489 42.9866 41.413 43.25 40.75 43.25L35.75 43.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M27 25.75L20.75 32L27 38.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.75 32L35.75 32" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.400024" width="64.4" height="64.4" rx="32.2" fill="white" />
            <g clip-path="url(#clip0_634_45488)">
              <path d="M45.4 20.625V29.1298C45.4 29.5608 45.2288 29.9741 44.9241 30.2789C44.6193 30.5836 44.206 30.7548 43.775 30.7548C43.344 30.7548 42.9307 30.5836 42.626 30.2789C42.3212 29.9741 42.15 29.5608 42.15 29.1298V24.5481L36.1003 30.5979C35.7951 30.9007 35.3824 31.0703 34.9525 31.0694C34.5226 31.0686 34.1106 30.8975 33.8066 30.5935C33.5026 30.2895 33.3314 29.8775 33.3306 29.4476C33.3298 29.0177 33.4993 28.605 33.8021 28.2998L39.852 22.25H35.2702C34.8392 22.25 34.4259 22.0788 34.1211 21.774C33.8164 21.4693 33.6452 21.056 33.6452 20.625C33.6452 20.194 33.8164 19.7807 34.1211 19.476C34.4259 19.1712 34.8392 19 35.2702 19H43.775C44.206 19 44.6193 19.1712 44.9241 19.476C45.2288 19.7807 45.4 20.194 45.4 20.625ZM19.4 43.375C19.4 43.806 19.5712 44.2193 19.876 44.524C20.1807 44.8288 20.594 45 21.025 45H29.5299C29.9608 45 30.3742 44.8288 30.6789 44.524C30.9837 44.2193 31.1549 43.806 31.1549 43.375C31.1549 42.944 30.9837 42.5307 30.6789 42.226C30.3742 41.9212 29.9608 41.75 29.5299 41.75H24.9482L30.9979 35.7002C31.3027 35.3955 31.4739 34.9822 31.4739 34.5512C31.4739 34.1202 31.3027 33.7069 30.9979 33.4021C30.6932 33.0974 30.2798 32.9262 29.8489 32.9262C29.4179 32.9262 29.0045 33.0974 28.6998 33.4021L22.65 39.4519V34.8702C22.65 34.4392 22.4788 34.0259 22.1741 33.7212C21.8693 33.4164 21.456 33.2452 21.025 33.2452C20.594 33.2452 20.1807 33.4164 19.876 33.7212C19.5712 34.0259 19.4 34.4392 19.4 34.8702V43.375Z" fill="#D27722" />
            </g>
            <defs>
              <clipPath id="clip0_634_45488">
                <rect width="26" height="26" fill="white" transform="translate(19.4 19)" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className='absolute bottom-0 w-full h-[102px] bg-[rgba(37,36,34,0.5)] flex items-center justify-center gap-[25px]'>
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64.4" height="64.4" rx="32.2" fill="white" />
            <g clip-path="url(#clip0_634_45472)">
              <path d="M32.2 16.7998C31.0861 16.7998 30.0178 17.2423 29.2302 18.03C28.4425 18.8176 28 19.8859 28 20.9998V32.1998C28 33.3137 28.4425 34.382 29.2302 35.1697C30.0178 35.9573 31.0861 36.3998 32.2 36.3998C33.3139 36.3998 34.3822 35.9573 35.1698 35.1697C35.9575 34.382 36.4 33.3137 36.4 32.1998V20.9998C36.4 19.8859 35.9575 18.8176 35.1698 18.03C34.3822 17.2423 33.3139 16.7998 32.2 16.7998Z" stroke="#D27722" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M42 29.3999V32.1999C42 34.799 40.9675 37.2917 39.1297 39.1295C37.2918 40.9674 34.7991 41.9999 32.2 41.9999C29.6009 41.9999 27.1082 40.9674 25.2704 39.1295C23.4325 37.2917 22.4 34.799 22.4 32.1999V29.3999" stroke="#D27722" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M32.2 42V47.6" stroke="#D27722" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.6 47.6001H37.8" stroke="#D27722" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_634_45472">
                <rect width="33.6" height="33.6" fill="white" transform="translate(15.4 15.3999)" />
              </clipPath>
            </defs>
          </svg>
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.400024" width="64.4" height="64.4" rx="32.2" fill="white" />
            <g clip-path="url(#clip0_634_45478)">
              <path d="M48 25.1997L38.2 32.1997L48 39.1997V25.1997Z" stroke="#D27722" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M35.4 22.3999H20C18.4536 22.3999 17.2 23.6535 17.2 25.1999V39.1999C17.2 40.7463 18.4536 41.9999 20 41.9999H35.4C36.9463 41.9999 38.2 40.7463 38.2 39.1999V25.1999C38.2 23.6535 36.9463 22.3999 35.4 22.3999Z" stroke="#D27722" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_634_45478">
                <rect width="33.6" height="33.6" fill="white" transform="translate(15.7999 15.3999)" />
              </clipPath>
            </defs>
          </svg>
          <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.800049" width="64.4" height="64.4" rx="32.2" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9518 42.0722H19.1197C17.1183 42.0722 15.4956 40.4497 15.4956 38.4481C15.4956 34.4964 15.4956 26.6957 15.4956 22.7437C15.4956 20.7423 17.1183 19.1196 19.1197 19.1196H45.6962C47.6979 19.1196 49.3203 20.7423 49.3203 22.7437V38.4481C49.3203 40.4497 47.6979 42.0722 45.6962 42.0722H40.864V43.0135C40.864 44.4951 39.6632 45.6962 38.1814 45.6962C35.4013 45.6962 29.4146 45.6962 26.6345 45.6962C25.153 45.6962 23.9518 44.4951 23.9518 43.0135V42.0722ZM26.3678 42.0722V43.0135C26.3678 43.1608 26.4872 43.2803 26.6345 43.2803H38.1814C38.3287 43.2803 38.4481 43.1608 38.4481 43.0135V42.0722H26.3678ZM46.9043 22.7437V38.4481C46.9043 39.1152 46.3633 39.6562 45.6962 39.6562C39.8458 39.6562 24.9704 39.6562 19.1197 39.6562C18.4526 39.6562 17.9118 39.1152 17.9118 38.4481C17.9118 34.4964 17.9118 26.6957 17.9118 22.7437C17.9118 22.0766 18.4526 21.5359 19.1197 21.5359H45.6962C46.3633 21.5359 46.9043 22.0766 46.9043 22.7437ZM31.2 29.2844L29.8454 30.6389C29.374 31.1104 28.6083 31.1104 28.1369 30.6389C27.6655 30.1675 27.6655 29.4018 28.1369 28.9304L31.5537 25.5136C32.0257 25.0419 32.7905 25.0419 33.2622 25.5136L36.679 28.9304C37.1504 29.4018 37.1504 30.1675 36.679 30.6389C36.2076 31.1104 35.4422 31.1104 34.9707 30.6389L33.6159 29.2844V34.824C33.6159 35.4908 33.0746 36.0321 32.4081 36.0321C31.7413 36.0321 31.2 35.4908 31.2 34.824V29.2844Z" fill="#D27722" />
          </svg>
        </div>
      </div>

      <div draggable="true" ref={handleDivRef} onDrag={handleDrag} className='min-h-full bg-primary w-[2px] cursor-e-resize'>
      </div>

      <div className='flex-1 flex flex-col min-h-screen'>
        <div className='h-[114px] w-full flex gap-[16px] items-center justify-end pr-[4.444vw] border-b border-b-[rgba(255,219,184,1)]'>
          <button className='w-[108px] h-[46px] flex gap-[6px] items-center justify-center'>
            <img src={EditIcon} alt="" />
            <p className='font-outfit font-medium text-[20px] leading-[30px]'>Notes</p>
          </button>
          <button className='w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px] bg-primary2'>
            <img src={ChatIcon} alt="" />
            <p className='font-outfit font-medium text-[20px] leading-[30px] text-[white]'>Chat</p>
          </button>
        </div>

        <div className='flex-1 pl-[36px] pr-[64px] w-full overflow-auto'>
          <div className='flex flex-col justify-end h-full w-full m-auto gap-[5.5vh]'>
            <div className='w-full max-w-[535px] ml-[0px] h-fit mx-auto bg-[rgba(255,253,244,1)] rounded-[12px] rounded-tl-none px-[16px] py-[12px]'>
              <p className='text-TextColor font-outfit font-[400] text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet consectetur. Lectus amet duis venenatis bibendum sed. Sed lacus neque orci feugiat turpis cursus.</p>
            </div>
            <div className='w-full max-w-[535px] mr-[0px] h-fit mx-auto self-end bg-primary2 rounded-[12px] rounded-br-none px-[16px] py-[12px]'>
              <p className='text-[white] font-outfit font-[400] text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet consectetur. Lectus amet duis venenatis bibendum sed. Sed lacus neque orci feugiat turpis cursus.</p>
            </div>
          </div>
        </div>

        <div className='pl-[36px] pr-[64px] w-full m-auto flex gap-[17px] items-center mb-[41px] mt-[10.6vh]'>
          <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="49.4383" height="50.6106" rx="24.7192" fill="#D27722" />
            <path d="M34.4383 24.6622L25.2483 33.8522C24.1225 34.9781 22.5955 35.6106 21.0033 35.6106C19.4112 35.6106 17.8842 34.9781 16.7583 33.8522C15.6325 32.7264 15 31.1994 15 29.6072C15 28.015 15.6325 26.4881 16.7583 25.3622L25.9483 16.1722C26.6989 15.4217 27.7169 15 28.7783 15C29.8398 15 30.8578 15.4217 31.6083 16.1722C32.3589 16.9228 32.7806 17.9408 32.7806 19.0022C32.7806 20.0637 32.3589 21.0817 31.6083 21.8322L22.4083 31.0222C22.0331 31.3975 21.5241 31.6083 20.9933 31.6083C20.4626 31.6083 19.9536 31.3975 19.5783 31.0222C19.2031 30.6469 18.9922 30.138 18.9922 29.6072C18.9922 29.0765 19.2031 28.5675 19.5783 28.1922L28.0683 19.7122" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div className='relative w-full flex h-[47px] bg-[white] border border-[rgba(255,219,184,1)] px-[1.111vw]'>
            <input className='flex-1 outline-none' type="text" placeholder='Send a message' />
            <svg className='absolute right-[1.111vw] top-[50%] translate-y-[-50%]' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2.30518L11 13.3052" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 2.30518L15 22.3052L11 13.3052L2 9.30518L22 2.30518Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>

    </main>
  )
}