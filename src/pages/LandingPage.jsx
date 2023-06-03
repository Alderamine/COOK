import React from 'react'
import Nav1 from "../assets/LandingPage/Nav1.svg"
import Nav2 from "../assets/LandingPage/Nav2.svg"
import Nav3 from "../assets/LandingPage/Nav3.svg"
import HeroImg from "../assets/LandingPage/HeroImg.png"
import CardProfile from "../assets/LandingPage/CardProfile.png"

export default function LandingPage() {
  return (
    <>
      <nav className='h-[104px] w-[100%] px-[64px] flex items-center justify-between border-b border-primary'>
        <div className='flex items-center gap-[32px]'>
          <h1 className='font-rubik font-bold text-[32px] leading-[37.92px] tracking-[-2%] text-primary'>COOK</h1>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <div className='flex gap-[24px]'>
            <div className='flex gap-[7px]'>
              <img src={Nav1} />
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Cooking Classes</p>
            </div>
            <div className='flex gap-[7px]'>
              <img src={Nav2} />
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Cooking Classes</p>
            </div>
            <div className='flex gap-[7px]'>
              <img src={Nav3} />
              <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Cooking Classes</p>
            </div>

          </div>
        </div>

        <div className='flex items-center gap-[22px]'>
          <div className='flex items-center gap-[4px]'>
            <p className='font-outfit font-normal text-[19px] leading-[19px]'>Eng</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
            </svg>
          </div>
          <div className='flex items-center gap-[4px]'>
            <p className='font-outfit font-normal text-[18px] leading-[18px]'>USD</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
            </svg>
          </div>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <div>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 16.5V12.5" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 8.5H12.01" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className='h-[15px] border border-primary rouded-[16px]'></div>
          <div>
            <button className='w-[131px] h-[41px] bg-primary text-backPri font-outfit font-[500] text-[20px] leading-[25px] flex justify-center items-center gap-[8px] rounded-[4px]'>
              Log In
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.75 2.75H14.75C15.1478 2.75 15.5294 2.90804 15.8107 3.18934C16.092 3.47064 16.25 3.85218 16.25 4.25V14.75C16.25 15.1478 16.092 15.5294 15.8107 15.8107C15.5294 16.092 15.1478 16.25 14.75 16.25H11.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 13.25L11.75 9.5L8 5.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.75 9.5H2.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className='w-full px-[64px] flex gap-[92px]'>
          <div className=''>
            <h1 className='font-rubik font-bold text-[61px] leading-[69.11px] w-[702px] tracking-[-4%] text-TextColor mt-[85px]'>Master the Art of Cooking with <span className='text-primary font-normal relative top-[10px] font-pacifico'>Experts</span> Worldwide </h1>
            <p className='w-[533px] font-outfit font-normal text-[16px] leading-[25.6px] mt-[24px]'>Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community. With COOK, learning, and teaching becomes a shared passion.</p>
            <div className='flex items-center gap-[11px] mt-[26px]'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4" />
                <path d="M10 8L16 12L10 16V8Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColor '>Learn more in the COOK video</p>
            </div>

            <div className='flex gap-x-[20px] mt-[26px]'>
              <button className='w-[153px] h-[39px] rounded-[8px] bg-primary text-backPri font-outfit font-medium text-lg leading-[22.68px]'>Find Your Tutor</button>
              <button className='w-[150px] h-[39px] rounded-[8px] bg-backPri text-primary border-2 border-primary font-outfit font-medium text-lg leading-[22.68px]'>Join Our Chefs</button>
            </div>
          </div>
          <div className='mt-[71px] relative w-fit h-fit'>
            <img src={HeroImg} />
            <div className='absolute right-[-1.84vw] bottom-[-34px]'>
              <svg width="129" height="102" viewBox="0 0 129 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.03785 98.975C-1.97119 79.2795 7.95157 59.8664 25.6775 50.7693L122.674 0.990134C125.335 -0.375947 128.5 1.55692 128.5 4.54884V50C128.5 78.7188 105.219 102 76.5 102H4.56009C2.80003 102 1.30366 100.715 1.03785 98.975Z" fill="#D27722" />
              </svg>
            </div>

            <div className='absolute left-0 bottom-0 bg-primaryLighten rounded-[16px] p-[24px] w-[284px] h-[200px] '>
              <div className='flex items-center gap-[25px]'>
                <img src={CardProfile} />
                <div>
                  <h2>David Mitchell</h2>
                  <div className='flex items-center gap-[7px]'>
                    <h3>4.8️</h3>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1.5L10.163 5.77865L15 6.46898L11.5 9.79758L12.326 14.5L8 12.2787L3.674 14.5L4.5 9.79758L1 6.46898L5.837 5.77865L8 1.5Z" fill="#D27722" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
