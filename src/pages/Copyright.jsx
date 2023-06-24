import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from "../assets/About/Hamburger.svg"
import Nav2 from "../assets/About/Nav2.svg"
import ChineseIcon from "../assets/LandingPage/ChineseIcon.svg"
import EnglishIcon from "../assets/LandingPage/EnglishIcon.svg"
import GermanIcon from "../assets/LandingPage/GermanIcon.svg"
import HebrewIcon from "../assets/LandingPage/HebrewIcon.svg"
import ItalianIcon from "../assets/LandingPage/ItalianIcon.svg"
import CookLogoLight from "../assets/Legal/CookLogoLight.svg"
import CopyrightTable from '../components/Copyright/CopyrightTable'
import LandingFooter from '../layout/LandingFooter'
import Menu from '../layout/Menu'
import LanguageModal from '../layout/LanguageModal'
import CurrencyModal from '../layout/CurrencyModal'
const Copyright = () => {
  const [currencyModal, setCurrencyModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <Menu showMenu={showMenu} closeMenu={() => setShowMenu(false)} />
      <nav className='sticky top-0 h-[84px] z-10 w-[100%] px-[64px] xsm:px-[32px] flex items-center bg-primary2 justify-between'>
        <div className='flex items-center gap-[32px]'>
          {/* <h1 className='font-rubik font-bold text-[32px] leading-[37.92px] tracking-[-0.02em] text-primaryLighten2'>COOK</h1> */}
          <Link to={'/'}>
            <img src={CookLogoLight} alt="" />
          </Link>
          <div className='md:hidden sm:hidden xsm:hidden h-[15px] border border-primary rouded-[16px]'></div>
          <div className='md:hidden sm:hidden xsm:hidden flex gap-[24px]'>
            <Link to={'/search-tutors'} className='flex gap-[7px]'>
              <svg className='min-w-[24px] min-h-[24px]' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5933 14.6145H17.0944Z" fill="#FFDBB8" />
                <path d="M15.5933 14.6145H17.0944" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                <mask id="mask0_1287_44710" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                  <path d="M24 24.3334H0V0.333374H24V24.3334Z" fill="white" />
                </mask>
                <g mask="url(#mask0_1287_44710)">
                  <path d="M12.3577 17.516H6.55014C4.78186 17.516 3.35107 16.0817 3.35107 14.3169V13.8564H15.5567V14.3169C15.5567 16.0817 14.1259 17.516 12.3577 17.516Z" fill="#FFDBB8" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19.9229 15.3384H17.1738V13.89H19.9229C20.3237 13.89 20.6471 14.2134 20.6471 14.6142C20.6471 15.015 20.3237 15.3384 19.9229 15.3384Z" fill="#FFDBB8" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.0655 10.3354C10.2535 11.1475 10.3519 12.5678 10.3519 12.5678C10.3519 12.5678 11.7721 12.6697 12.5842 11.8541C13.3963 11.0421 13.2978 9.62181 13.2978 9.62181C13.2978 9.62181 11.8776 9.52338 11.0655 10.3354Z" fill="#FFDBB8" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.35007 12.2226C5.87036 12.7429 6.93202 12.5249 6.93202 12.5249C6.93202 12.5249 7.14998 11.4632 6.62969 10.9429C6.10589 10.4227 5.04774 10.6406 5.04774 10.6406C5.04774 10.6406 4.82978 11.7023 5.35007 12.2226Z" fill="#FFDBB8" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.35059 8.85942C7.35059 9.45353 7.8322 9.93866 8.42983 9.93866C9.02394 9.93866 9.50907 9.45704 9.50907 8.85942C9.50907 8.26179 9.02394 7.78017 8.42983 7.78017C7.8322 7.78017 7.35059 8.2653 7.35059 8.85942Z" fill="#FFDBB8" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.0435 7.78135C11.0435 8.12938 11.3247 8.4071 11.6692 8.4071C12.0137 8.4071 12.2985 8.12938 12.2985 7.78135C12.2985 7.43332 12.0172 7.1556 11.6727 7.1556C11.3282 7.1556 11.0435 7.43332 11.0435 7.78135Z" fill="#FFDBB8" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.59912 11.6408V12.1716Z" fill="#FFDBB8" />
                  <path d="M8.59912 11.6408V12.1716" stroke="#FFDBB8" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Cooking Classes</p>
            </Link>
            <Link to={'/signup'} className='flex gap-[7px]'>
              <img className='w-[24px]' src={Nav2} />
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Become a Chef</p>
            </Link>
            <Link to={'/search-groups'} className='flex gap-[7px]'>
              <svg className='min-w-[24px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1287_44705)">
                  <path d="M23.0578 17.4609C22.8234 19.2281 21.7969 20.7843 20.1609 21.8343C18.8156 22.6781 17.2594 23.1234 15.6703 23.1093C15.2672 23.1093 14.8641 23.0812 14.4656 23.0296C12.4781 22.7953 10.6406 21.8625 9.27656 20.4046C8.42344 19.4953 7.85625 18.3562 7.64062 17.1281C3.77344 16.6875 0.890625 13.8984 0.890625 10.5421C0.890625 7.92652 2.70937 5.55465 5.46562 4.49058C5.44219 4.46246 5.42344 4.42965 5.41406 4.39683C5.35312 4.22808 5.44219 4.04058 5.61562 3.98433C6.375 3.73121 7.1625 3.56715 7.96406 3.49683C7.99687 3.38902 8.02969 3.28121 8.0625 3.17808C8.0625 3.1734 8.06719 3.16871 8.06719 3.16402C8.18906 2.77027 8.34844 2.39058 8.54062 2.02965C8.7375 1.66871 8.96719 1.32652 9.22969 1.00777C9.34687 0.871833 9.55781 0.857771 9.69375 0.974958L10.5422 1.7109C10.6781 1.82808 10.6922 2.03902 10.575 2.17496C10.2328 2.59215 9.97031 3.07027 9.80156 3.5859C10.65 3.70308 11.6672 3.92808 12.3516 4.34527C12.4922 4.42496 12.5484 4.5984 12.4828 4.7484C14.1516 5.54527 15.4219 6.83902 16.0453 8.37652C16.3359 7.88433 16.6969 7.44371 17.1187 7.05933C17.2547 6.93746 17.4609 6.95152 17.5828 7.08746L18.3281 7.93121C18.45 8.06715 18.4359 8.2734 18.3 8.39527C17.9062 8.76558 17.5828 9.20152 17.3531 9.69371C18.1781 9.91871 19.1578 10.275 19.7859 10.7812C19.8891 10.8656 19.9312 10.9968 19.8937 11.1234C19.8844 11.1468 19.875 11.1703 19.8609 11.1937C22.1344 12.6609 23.3766 15.0515 23.0578 17.4609Z" fill="#D27722" />
                  <path d="M19.8609 11.1891C19.875 11.1656 19.8844 11.1422 19.8937 11.1188C19.9312 10.9922 19.8844 10.8563 19.7859 10.7766C19.1578 10.2703 18.1781 9.91876 17.3531 9.68907C17.5828 9.20157 17.9062 8.76094 18.3 8.39063C18.4359 8.26876 18.45 8.06251 18.3281 7.92657L17.5828 7.08282C17.4609 6.94688 17.2547 6.93282 17.1187 7.05469C16.6969 7.43907 16.3359 7.87969 16.0453 8.37188C15.4219 6.83438 14.1516 5.54063 12.4828 4.74376C12.5484 4.59376 12.4922 4.42501 12.3516 4.34063C11.6625 3.92344 10.6453 3.69844 9.80156 3.58126C9.97031 3.06563 10.2281 2.58751 10.575 2.17032C10.6922 2.03438 10.6781 1.82813 10.5422 1.70626L9.69375 0.97032C9.55781 0.853132 9.35156 0.867195 9.22969 1.00313C8.96719 1.32188 8.73281 1.66407 8.54062 2.02501C8.34375 2.38594 8.18906 2.76563 8.06719 3.15938C8.06719 3.16407 8.0625 3.16876 8.0625 3.17344C8.02969 3.27657 7.99687 3.38438 7.96406 3.49219C7.1625 3.55782 6.375 3.72188 5.61562 3.97969C5.44687 4.04063 5.35781 4.22344 5.41406 4.39219C5.42344 4.42501 5.44219 4.45782 5.46562 4.48594C2.70937 5.55469 0.890625 7.93126 0.890625 10.5422C0.890625 13.8984 3.77344 16.6875 7.64062 17.1281C7.85625 18.3563 8.42812 19.4953 9.27656 20.4047C10.6406 21.8672 12.4828 22.7953 14.4656 23.0297C14.8641 23.0813 15.2672 23.1094 15.6703 23.1094C17.2594 23.1234 18.8156 22.6781 20.1609 21.8344C21.7969 20.7844 22.8234 19.2281 23.0578 17.4609C23.3766 15.0516 22.1344 12.6609 19.8609 11.1891ZM15.7828 10.5844C15.8672 10.3125 15.9656 10.05 16.0687 9.79688C16.1062 9.70782 16.1437 9.61876 16.1812 9.53438C16.1906 9.51563 16.2 9.49688 16.2094 9.47344C16.4812 8.84532 16.8562 8.26876 17.3203 7.76719L17.6297 8.11876C17.1891 8.60157 16.8375 9.15938 16.5844 9.76407C16.5094 9.92813 16.5891 10.125 16.7531 10.1953C16.7719 10.2047 16.7906 10.2094 16.8047 10.2141C17.3766 10.35 17.9344 10.5328 18.4734 10.7625C18.1359 10.7672 17.8031 10.7391 17.4703 10.6781C17.2922 10.6406 17.1187 10.7484 17.0766 10.9266C17.0484 11.0438 17.0906 11.1703 17.1844 11.25C17.4562 11.475 17.7094 11.7188 17.9484 11.9813C17.5312 11.9203 17.1328 11.7703 16.7766 11.5453C16.6359 11.4328 16.4297 11.4563 16.3172 11.6016C16.3031 11.6203 16.2891 11.6391 16.2797 11.6625C16.1016 12.0281 15.8812 12.3703 15.6281 12.6844C15.5484 12.3328 15.4781 11.9813 15.4219 11.6203C15.3937 11.4422 15.225 11.3203 15.0469 11.3484C15.0328 11.3484 15.0187 11.3531 15.0047 11.3578C14.6625 11.4516 14.3109 11.5125 13.9547 11.5359C14.1937 11.3719 14.4141 11.175 14.6016 10.9547C14.7187 10.8141 14.7 10.6078 14.5594 10.4953C14.5359 10.4766 14.5078 10.4578 14.4797 10.4438C14.2641 10.3453 14.0672 10.2234 13.8797 10.0781C14.3437 10.0219 14.8125 9.99376 15.2812 10.0031C15.2344 10.1297 15.1922 10.2563 15.1547 10.3828C15.0984 10.5563 15.1969 10.7391 15.3703 10.7953C15.5437 10.8516 15.7266 10.7578 15.7828 10.5844ZM7.79531 4.16719C7.76719 4.29844 7.73906 4.42969 7.71562 4.56094C7.68281 4.73907 7.80469 4.90782 7.98281 4.94063C8.00156 4.94532 8.02031 4.94532 8.03906 4.94532C8.19844 4.94532 8.33437 4.82813 8.3625 4.67344C8.41406 4.39219 8.475 4.12032 8.54062 3.85782C8.56406 3.76407 8.59219 3.67501 8.61562 3.58594L8.63437 3.52032C8.82187 2.86407 9.12187 2.24532 9.51562 1.68751L9.87187 1.99688C9.49687 2.53594 9.22031 3.13126 9.05156 3.76876C9 3.94219 9.10312 4.12501 9.27656 4.17657C9.29531 4.18126 9.31406 4.18594 9.33281 4.18594C9.91406 4.24688 10.4953 4.35469 11.0578 4.50938C10.725 4.56094 10.3875 4.57501 10.0547 4.55626C9.87187 4.54219 9.71719 4.67344 9.69844 4.85626C9.68906 4.97813 9.74531 5.09532 9.84844 5.16094C10.1437 5.35313 10.4297 5.55938 10.7016 5.78438C10.2797 5.77969 9.8625 5.68594 9.48281 5.50313C9.32812 5.40938 9.12656 5.46094 9.03281 5.62032C9.01875 5.63907 9.00937 5.66251 9.00469 5.68594C8.87344 6.07032 8.7 6.43594 8.48906 6.78282C8.3625 6.44532 8.25 6.10313 8.14687 5.75626C8.10469 5.61563 7.97812 5.52188 7.83281 5.52188C7.78594 5.52188 7.74375 5.53126 7.70156 5.55001C7.37344 5.68594 7.03594 5.78907 6.68437 5.85938C6.9 5.66719 7.0875 5.44219 7.24687 5.19844C7.34062 5.04376 7.29844 4.84219 7.14375 4.74376C7.11562 4.72501 7.0875 4.71563 7.05937 4.70626C6.83437 4.63594 6.62344 4.54219 6.41719 4.42032C6.86719 4.30782 7.32656 4.21876 7.79531 4.16719ZM7.60781 15.4266C7.56094 15.7688 7.54687 16.1156 7.56562 16.4578C4.11094 16.0078 1.54687 13.5188 1.54687 10.5422C1.54687 8.09063 3.35625 5.86876 6.06094 4.97344C6.18281 5.04844 6.30937 5.11407 6.44062 5.17501C6.20156 5.42813 5.92969 5.64844 5.63437 5.83126L5.53125 5.90157C5.38125 6.00469 5.34375 6.21094 5.44687 6.35626C5.48437 6.41251 5.54062 6.45469 5.60625 6.47813C6.23437 6.69844 7.125 6.45001 7.61719 6.27657C7.85156 7.01251 8.07656 7.52813 8.08594 7.55626C8.12812 7.65469 8.21719 7.72501 8.32031 7.74844C8.34375 7.75313 8.3625 7.75313 8.38594 7.75313C8.47031 7.75313 8.55 7.72032 8.61094 7.66407C9.02344 7.27032 9.33281 6.62344 9.49219 6.22501C10.2891 6.50626 11.3719 6.44063 11.4234 6.43594C11.6016 6.42657 11.7422 6.26719 11.7281 6.08907C11.7281 6.07032 11.7234 6.05157 11.7187 6.03751C11.6578 5.77501 11.3484 5.46094 10.9922 5.17501C11.1937 5.15157 11.3953 5.11876 11.5969 5.08126C13.6172 5.84532 15.1078 7.35938 15.6141 9.16407C15.5859 9.22969 15.5531 9.29063 15.525 9.35626C14.7234 9.31876 13.9219 9.37969 13.1344 9.52969C12.9562 9.56719 12.8437 9.74063 12.8812 9.91407C12.8906 9.95157 12.9047 9.98438 12.9234 10.0172C10.0594 10.7203 7.95 12.8344 7.60781 15.4266ZM22.4109 17.3766C22.2047 18.9516 21.2812 20.3391 19.8094 21.2859C18.2437 22.2609 16.3781 22.65 14.5547 22.3828C12.7219 22.1672 11.025 21.3141 9.76406 19.9641C8.5875 18.6703 8.05312 17.0906 8.25937 15.5156C8.57812 13.0875 10.6641 11.1188 13.4625 10.5844C13.575 10.6734 13.6875 10.7578 13.8094 10.8328C13.5375 11.0531 13.2422 11.2359 12.9281 11.3813C12.8859 11.4 12.8484 11.4188 12.8156 11.4375C12.6562 11.5219 12.5906 11.7188 12.675 11.8781C12.7078 11.9391 12.7594 11.9906 12.8203 12.0188C13.4109 12.3188 14.3297 12.1875 14.8359 12.0797C14.9719 12.8391 15.1266 13.3828 15.1359 13.4063C15.1875 13.5797 15.3656 13.6828 15.5437 13.6313C15.5812 13.6219 15.6141 13.6031 15.6469 13.5797C16.1062 13.2469 16.4953 12.6422 16.7062 12.2672C17.4609 12.6516 18.5437 12.7266 18.5953 12.7266C18.6891 12.7359 18.7828 12.6984 18.8531 12.6281C18.9187 12.5578 18.9516 12.4641 18.9469 12.3703C18.9234 12.1031 18.6516 11.7516 18.3375 11.4188C18.5437 11.4234 18.75 11.4188 18.9562 11.4047C21.3609 12.7078 22.7156 15.0375 22.4109 17.3766Z" fill="white" />
                  <path d="M9.54356 17.4422C9.48731 17.2688 9.3045 17.175 9.13106 17.2313C8.95763 17.2875 8.86388 17.4703 8.92013 17.6438C9.05606 18.061 9.24825 18.4641 9.48731 18.8344C9.54825 18.9282 9.65138 18.9891 9.76388 18.9844C9.82481 18.9844 9.88575 18.9657 9.93731 18.9328C10.092 18.8344 10.1342 18.6328 10.0404 18.4782C9.83419 18.1594 9.66544 17.8078 9.54356 17.4422Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1287_44705">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-[white]'>Group Cooking</p>
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-[22px] xsm:hidden sm:hidden'>
          <div onClick={(e) => { setLanguageModal(!languageModal); setCurrencyModal(false); e.stopPropagation(); }} className='flex items-center gap-[4px] relative cursor-pointer'>
            <LanguageModal state={languageModal} closeModal={(e) => { setLanguageModal(false) }} />
            <p className='font-outfit font-normal text-[19px] leading-[19px] text-[white]'>Eng</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#FFDBB8" />
            </svg>
          </div>
          <div onClick={(e) => { setCurrencyModal(!currencyModal); setLanguageModal(false); e.stopPropagation(); }} className='flex items-center gap-[0.278vw] cursor-pointer relative'>
            <CurrencyModal state={currencyModal} closeModal={(e) => { setCurrencyModal(false) }} />
            <p className='font-outfit font-normal text-[18px] leading-[18px] text-[white]'>USD</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#FFDBB8" />
            </svg>
          </div>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <Link to={'/support'}>
            <div className='custom-tooltip' data-tooltip="Support">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16.5V12.5" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 8.5H12.01" stroke="#FFDBB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <div>
            <Link to={'/signin'} className='w-[131px] h-[41px] border-[2px] border-primaryLighten2 text-backPri font-outfit font-[500] text-[20px] leading-[25px] flex justify-center items-center gap-[8px] rounded-[4px]'>
              Log In
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.75 2.75H14.75C15.1478 2.75 15.5294 2.90804 15.8107 3.18934C16.092 3.47064 16.25 3.85218 16.25 4.25V14.75C16.25 15.1478 16.092 15.5294 15.8107 15.8107C15.5294 16.092 15.1478 16.25 14.75 16.25H11.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 13.25L11.75 9.5L8 5.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.75 9.5H2.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        <img className='sm:block xsm:block hidden cursor-pointer' onClick={() => setShowMenu(true)} src={Hamburger} alt="" />
      </nav>
      <div className='flex xsm:flex-col sm:flex-col md:flex-col xsm:gap-[36px] sm:gap-[36px] md:gap-[36px] gap-[54px] pl-[64px] py-[94px] pr-[69px] sm:pt-[89px] md:pt-[89px] sm:px-[48px] md:px-[48px] xsm:pt-[80px] xsm:pr-[32px] xsm:pl-[34px]'>
        <div className='mt-[10px] h-full sticky md:relative sm:relative xsm:relative md:top-[0px] sm:top-[0px] xsm:top-[0px] top-[130px]'>
          <h1 className='mb-[36px] hidden sm:block md:block xsm:block text-[48px] xsm:text-[36px] font-[700] sm:leading-[56.88px] font-rubik'>Terms Of Service</h1>
          <div className='relative mb-[30px] h-[50px] w-[313px] xsm:w-full sm:w-full md:w-full border-[2px] rounded-[4px] border-primaryLighten2 pl-[36px]'>
            <input type="text" className='h-full w-full outline-none font-medium leading-[26.46px] font-outfit placeholder:text-primary2 pl-4 text-[20px]' placeholder="Search" />
            <svg className='absolute top-[50%] left-[13px] transform translate-y-[-50%]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 20.9999L16.65 16.6499" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='flex p-[24px] w-[313px] xsm:w-full sm:w-full md:w-full flex-col border-[2px] rounded-[8px] border-primaryLighten2'>
            <h1 className='mb-[27px] tracking-[-0.02em] font-outfit leading-[28.4px] font-[600] text-[24px] xsm:text-[20px]'>Table of content</h1>
            <div className='flex flex-col gap-[16px]'>
              <CopyrightTable />
              <CopyrightTable />
              <CopyrightTable />
            </div>
          </div>
        </div>
        <div className='flex flex-col xsm:w-full sm:w-full md:w-full'>
          <h1 className='mb-[36px] mt-[-10px] block sm:hidden md:hidden xsm:hidden text-[48px] xsm:text-[36px] font-[700] sm:leading-[56.88px] font-rubik'>Copyright Policy</h1>
          <div className='w-[59px] rounded-full border-[2px] mb-[36px] xsm:hidden sm:hidden md:hidden border-primaryLighten2'></div>
          <div className='flex flex-col gap-[36px]'>
            <div className='flex flex-col gap-[14px]'>
              <h2 className='font-rubik font-[500] text-[28px] leading-[33.1px] xsm:text-[24px] xsm:leading-[28.44px]'>General Terms</h2>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[24.72px]'>Lorem ipsum dolor sit amet consectetur. Sed sed purus turpis donec gravida. Molestie ipsum amet praesent venenatis. Augue proin erat id in amet venenatis in. Quam posuere sapien fermentum ac. Risus erat enim lacinia aenean ornare. Interdum augue eu et scelerisque. Facilisis proin lacus amet nibh tempor. Curabitur purus vitae nisl eget sem. Enim integer libero egestas amet fermentum egestas orci imperdiet in. Amet nunc urna nunc lobortis cras fermentum et at pretium. Facilisi non nunc dui iaculis risus fusce et faucibus at. Ornare aliquam scelerisque dui viverra donec turpis. Egestas sit pretium turpis amet proin.</p>
            </div>
            <div className='flex flex-col gap-[14px]'>
              <h2 className='font-rubik font-[500] text-[28px] leading-[33.1px] xsm:text-[24px] xsm:leading-[28.44px]'>General Terms</h2>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[24.72px]'>Lorem ipsum dolor sit amet consectetur. Sed sed purus turpis donec gravida. Molestie ipsum amet praesent venenatis. Augue proin erat id in amet venenatis in. Quam posuere sapien fermentum ac. Risus erat enim lacinia aenean ornare. Interdum augue eu et scelerisque. Facilisis proin lacus amet nibh tempor. Curabitur purus vitae nisl eget sem. Enim integer libero egestas amet fermentum egestas orci imperdiet in. Amet nunc urna nunc lobortis cras fermentum et at pretium. Facilisi non nunc dui iaculis risus fusce et faucibus at. Ornare aliquam scelerisque dui viverra donec turpis. Egestas sit pretium turpis amet proin.</p>
            </div>
            <div className='flex flex-col gap-[14px]'>
              <h2 className='font-rubik font-[500] text-[28px] leading-[33.1px] xsm:text-[24px] xsm:leading-[28.44px]'>General Terms</h2>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[24.72px]'>Lorem ipsum dolor sit amet consectetur. Sed sed purus turpis donec gravida. Molestie ipsum amet praesent venenatis. Augue proin erat id in amet venenatis in. Quam posuere sapien fermentum ac. Risus erat enim lacinia aenean ornare. Interdum augue eu et scelerisque. Facilisis proin lacus amet nibh tempor. Curabitur purus vitae nisl eget sem. Enim integer libero egestas amet fermentum egestas orci imperdiet in. Amet nunc urna nunc lobortis cras fermentum et at pretium. Facilisi non nunc dui iaculis risus fusce et faucibus at. Ornare aliquam scelerisque dui viverra donec turpis. Egestas sit pretium turpis amet proin.</p>
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  )
}
export default Copyright