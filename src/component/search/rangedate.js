import React, { useEffect, useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import { CgCalendarDates } from "react-icons/cg";
const Rangedate = ({selectionRange, handelSelect }) => {
  const [open, SetOpen] = useState(false)
 
 const handleChange =()=>{
  SetOpen(!open)
 }
  useEffect(() =>{


  },[])
  return (
    <div className='flex flex-col items-center justify-center text-center p-2 '>
    <h3 className=' flex flex-row gap-1'> <p className='text-gray-800 font-[0.5rem] text-[1.1rem]'>Search by date range when bike was stolen</p> <CgCalendarDates size={20} className='mt-1' onClick={handleChange} /></h3>  
    <div className='absolute z-index top-[18rem]'>
    {open ?   <DateRangePicker
        ranges={[selectionRange]}
        onChange={handelSelect}/> : "" }
    </div>
    </div> 
     
   
  )

}
export default Rangedate
