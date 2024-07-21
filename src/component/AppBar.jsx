import React from 'react'
import AppStoreImg from '../assets/website/app_store.png'
import PlayStoreImg from '../assets/website/play_store.png'
import BgPng from '../assets/website/coffee-beans-bg.png'

const backGroundStyle={
    backgroundImage:`url(${BgPng})`,
    // backgroundColor:'#270c03',
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%"
}
function AppBar() {
  return (
  <>
    <div style={backGroundStyle} className='py-14'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
<div 
data-aos="fade-up"
// data-aos-duration="300"
className='space-y-6 max-w-xl mx-auto'>
    {/* text-content */}
    <h1 className='text-2xl text-center sm:text-left sM:text-4xl font-semibold text-white/90 pl-3'>
        Coffee Cafe is available for Android and IOS
    </h1>

    {/* logo */}
    <div className='flex flex-wrap justify-center sm:justify-start items-center'>
        <a href='#'>
            <img src={AppStoreImg} alt='' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
        </a>

        <a href='#'>
            <img src={PlayStoreImg} alt='' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
        </a>

        {/* <a href='#'>
            <img src={AppStoreImg} alt='' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
        </a> */}

    </div>
</div>
            </div>
        </div>
    </div>
  </>
  )
}

export default AppBar