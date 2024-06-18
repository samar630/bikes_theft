import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import Pagination from './pagination/pagination';
import Search from '../component/search/search';
import Rangedate from './search/rangedate';
import { FETCH_STATUS } from './fetchStatus';
import { wait } from '@testing-library/user-event/dist/utils';
import Bikelist from './bikecard/bikelist';
import Spinner from './spinner';
const Home = () => {
  const [bikesData, setBikesData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [bikesPerPage, setBikesPerPage] = useState(10);
  const [data, setData] = useState("")
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(FETCH_STATUS.IDLE)
  const [doSearch, setDoSearch]  = useState(null)
  const [pageCount, setPageCount] = useState(1)
  const [value, setValue] = useState("")
  const [search, setSearch] = useState("")
  const [dateStolen, setDateStolen] = useState("")
  const [startDate,setStartDate]= useState(new Date());
  const [endDate,setEndDate]= useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

 const handelSelect = (date) =>{
  const filtered = bikesData.filter((bike) =>{
    const dateStolen = new Date(bike.date_stolen * 1000) 
    if(   dateStolen >= date.selection.startDate &&
      dateStolen <= date.selection.endDate ){
        return bike
    }else return null
  
  })
  setStartDate(date.selection.startDate);
  setEndDate(date.selection.endDate);
  setDateStolen(filtered)
  setData(filtered) 
  setDoSearch(FETCH_STATUS.SEARCH)
 }
  const getBikes = async () => {
    try{
      setStatus(FETCH_STATUS.LOADING);
      const res = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=5000&location=IP&distance=10&stolenness=stolen`);
      const data = await res.json();
      await wait(2000)
      if(data){
        setBikesData(data.bikes);
        setStatus(FETCH_STATUS.SUCCESS)
      }
    }catch(err){
          setStatus(FETCH_STATUS.ERROR);
          setError(err.message)
    }
   
  };
  function handleSearch (event) {
    event.preventDefault();
    const lowercasedValue = value.toLowerCase().trim();
    const filtered = bikesData?.filter((result) => {
      const lowercasedTitle = result.title.toLowerCase().replace(/\s/g, '');
      return lowercasedTitle.includes(lowercasedValue);
    });
    setSearch(filtered)
    setDoSearch(FETCH_STATUS.SEARCH)
    return setData(filtered) 
  };

const isLoading = status === FETCH_STATUS.LOADING;
const isSuccess = status === FETCH_STATUS.SUCCESS;
const isError = status === FETCH_STATUS.ERROR;
const isSearch = doSearch == FETCH_STATUS.SEARCH;
const lastPostIndex = currentPage * bikesPerPage;
const firstPostIndex = lastPostIndex - bikesPerPage;
const currentPages = bikesData?.slice(firstPostIndex, lastPostIndex) 
useEffect(() =>{
  getBikes()
  console.log(data, "data")
  
  console.log(doSearch, "doSearch")
},[currentPage, pageCount,search,dateStolen,data, doSearch])
if(isLoading) return <Spinner />

  return (
    <div>
      <Navbar/>
      <Search bikesData={currentPages}  value={value} setValue={setValue} handleSearch={handleSearch} />
      <Rangedate selectionRange={selectionRange} handelSelect={handelSelect}  />
      <Bikelist
       search={search} 
       dateStolen={dateStolen}  
      isLoading={isLoading}
       isError={isError}
       isSuccess={isSuccess}
       bikesData={doSearch === null ? currentPages : data} 
       isSearch={isSearch}
       data={data} />
      <Pagination 
       totalBikes={doSearch === null ? bikesData?.length : data.length}
       bikesPerPage={bikesPerPage}
       setCurrentPage={setCurrentPage}
       currentPage={currentPage}
       />
    </div>
  )
}

export default Home
