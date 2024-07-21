import React from 'react'
import { FaFacebook,FaInstagram,FaLinkedin } from 'react-icons/fa'

import FooterImg from '../assets/website/coffee-footer.jpg'


const FooterLink=[
    {
        title:"Home",
        link:"/#",
    },
    {
        title:"About",
        link:"/#about",
    },
    {
        title:"Contact",
        link:"/#contact",
    },
    {
        title:"Blog",
        link:"/#blog",
    }
]
function Footer() {
    const bgImage={
        backgroundImage:`url(${FooterImg})`,
        // backgroundColor:'#270c03',
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        minHeight:"400px",
        width:"100%"
    }
  return (
    <div style={bgImage} className='text-white'>
      <div className="bg-black/40 min-h-[400px] ">
      <div className="container grid md:grid-cols-3 pb-20 pt-5 ">
{/* comapany details */}
<div>
<a href='#' className='font-semibold tracking-widest text-2xl sm:text-3xl font-cursive'>{""} coffe Cafe</a> 
   <p className='pt-4'>

    {""}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi adipisci maiores nisi a illum modi?
   </p>

   <a href='#' 
   className='inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full'>Visit your youtube channel</a>
</div>

{/* footer links */}
<div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'> 
{/* first col links */}


<div className='py-8 px-4'>
    <h1 className='text-xl font-semibold sm:text-left mb-3'>
        Footer links
    </h1>
    <ul className='space-y-3'>
        {FooterLink.map((data,index)=>(
        <li>
          <a href={data.link}
          className='inline-block hover:scale-105 duration-200'
          >{data.title}</a>  
        </li> 
    ))}</ul>

</div>
{/* second col link */}
<div className='py-8 px-4'>
    <h1 className='text-xl font-semibold sm:text-left mb-3'>
        Quick links
    </h1>
    <ul className='space-y-3'>
        {FooterLink.map((data,index)=>(
        <li>
          <a href={data.link}
          className='inline-block hover:scale-105 duration-200'
          >{data.title}</a>  
        </li> 
    ))}</ul>

</div>

{/* company */}

<div className='py-8 px-4 col-span-2 sm:col-auto'>
    <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
    <div>
        <p className='mb-3'> Palakakd,India</p>
        <p>+91 98765432345</p>
        {/* social link */}
        <div className='space-x-3 mt-6'>
            <a href='#'>
                <FaFacebook className='text-3xl inline-block hover:scale-105
                duration-200
                '/>
            </a>

            <a href='#'>
                <FaInstagram className='text-3xl inline-block hover:scale-105
                duration-200
                '/>
            </a>

            <a href='#'>
                <FaLinkedin className='text-3xl inline-block hover:scale-105
                duration-200
                '/>
            </a>
        </div>
    </div>
</div>

</div>
      </div>
        </div>  
    </div>
  )
}

export default Footer