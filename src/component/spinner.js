import React from 'react';
import bycicl from '../assest/bycicl.svg'
const Spinner = () => {
  return (
	<div className='flex flex-col mt-[10%]  justify-center items-center '>
	 <p class="mb-4 text-2xl font-light text-gray-500 dark:text-gray-400">Bikes Index.</p>
    <img src={bycicl} className='w-[20rem]' alt="not found" />
    <div class='flex gap-2 bg-white h-screen dark:invert'>
 	<span class='sr-only'>Loading...</span>
  	<div class='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div class='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div class='h-4 w-4 bg-black rounded-full animate-bounce'></div>
   </div>
	</div>
 
  )
}

export default Spinner
