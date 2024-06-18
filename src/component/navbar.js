import React from 'react'
import logo from '../assest/logo.svg'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-between   bg-[#111] text-[0.87rem]  text-[#fff] h-[4rem] p-1   '> 
      <div className='ml-2 pl-8'>
        <img className='w-16 h-14' src={logo} alt='not found' />
    </div>
    <div className='p-2 flex flex-row items-center justify-between   text-white '>
     <ul className='flex flex-row gap-4 font-[13px] text-[#a4a4a4] pr-8'>
     <li className='hover:border-b-1 '>  <a href='#'>SEARCH BIKES</a></li>
     <li className=''><a href='#'>BLOG</a></li>
     <li className=''><a href='#'>DONATE</a></li>
     <li className=''><a href='#'>STOLEN BIKE</a></li>
     <li className=''><a href='#'>HELP</a></li>
     <li className=''><a href='#'>LOG IN</a></li>
     <li className=''><a href='#'>SIGH UP</a></li>
    </ul>
    </div> 
  
   </div>

  )
}

export default Navbar
