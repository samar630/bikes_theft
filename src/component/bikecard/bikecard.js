import React from 'react'
import large_imgs from '../../assest/large_img.svg'
const Bikecard = ({large_img, description, title, stolen_location, year, date_stolen }) => {
  return (
    <div className='flex flex-col justify-center items-center mt-[2%] gap-0'>
          <div  className="w-[60rem] h-[14rem] flex flex-row" >
          <div className='' >
          {large_img === null ? 
          <img className=' bg-gray-200 w-[14rem]  h-[14rem]   rounded-md p-2' src={large_imgs} alt='not found' /> : 
           <img className='rounded-md  w-[14rem] h-[14rem]  cover-contain   ' src={large_img} alt='image of bike' />} 
          </div>  
         <div className={large_img !== null ? 'w-[46rem] flex flex-row gap-4 p-4 bg-gray-200 ' : 'flex flex-row gap-4 p-4'} >
        <div className=''>
            <div className="flex flex-row gap-2"> <span>Title:</span>  <p className='font-bold text-md'>{title}</p></div>
            <div><span>Date Stolen:</span> <span className='text-red-500'>{date_stolen}</span></div>
            {/* <div>Description: {description}</div> */}
         </div>
         <div>
           <span className='flex gap-2'><span className='font-bold text-md'>Location:</span>{stolen_location}</span>
           <span className='flex gap-2'><span className='font-bold text-md'>date of report :</span>{year}</span>
         </div>
         </div>
         </div>
    </div>
  )
}

export default Bikecard
