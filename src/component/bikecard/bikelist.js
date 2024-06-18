import React, { useEffect, useState } from 'react';
import Bikecard from './bikecard';
import Error from '../error';
const Bikelist = ({bikesData, isSearch, isError, isSuccess, search, dateStolen, data }) => {


 useEffect(() =>{
  
 },[search, dateStolen, data])
  return (
    <div className='flex flex-col gap-4 p-2'>
      {isError ? <Error/> : 
      data?.length !== 0 && isSuccess && isSearch ? 
      data?.map((bike, index) =>{
       const dateStolen = new Date(bike.date_stolen * 1000);
       const bike_date = dateStolen?.toUTCString();
       return(
        <Bikecard
         large_img={bike.large_img} 
         description={bike.description}
         title={bike.title}
         stolen_location={bike.stolen_location}
         year={bike.year}
         date_stolen={bike_date}
          />
       )
     }) : 
     data?.length == 0 && isSuccess && isSearch ? 
     <div className='text-center dark:text-primary-500 text-3xl font-extrabold tracking-tight text-gray-600 lg:text-3xl'> 
    Result of  Search is empty , please reload the site and search again
     </div>
     : 
     bikesData  && isSuccess ? 
     bikesData?.map((bike, index) =>{
      const dateStolen = new Date(bike.date_stolen * 1000);
      const bike_date = dateStolen?.toUTCString();
      return(
       <Bikecard
        large_img={bike.large_img} 
        description={bike.description}
        title={bike.title}
        stolen_location={bike.stolen_location}
        year={bike.year}
        date_stolen={bike_date}
         />
      )
    }) :
       <div className='text-center dark:text-primary-500 text-3xl font-extrabold tracking-tight text-gray-600 lg:text-3xl'> 
       Data not found, please reload the site and search again
       </div>
      }
    </div>

  )
}

export default Bikelist
