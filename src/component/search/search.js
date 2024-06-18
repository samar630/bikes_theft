import React from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
const Search = ({bikesData, value, setValue, handleSearch}) => {

  return (
    <>
      <div className='flex flex-col items-center justify-center text-center mt-[2rem]'>  
       <h1 className='p-4 font-[0.8rem] text-[1.7rem]'>SEARCH FOR STOLEN BIKES</h1>
       <form onSubmit={handleSearch}>
       <input
           type="search"
           id="default-search" 
           className="focus:outline-0 block w-[45rem] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
           placeholder="Search bike descriptions" 
           onChange={(e) => setValue(e.target.value)}
          required
         
        />  
       </form>
    
       
     </div> 
   </>


  )
}

export default Search
