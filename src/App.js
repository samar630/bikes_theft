import React from 'react'
import Home from './component/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className='app'>
            <main className='flex' > 
            <div className='w-full'>
            <Routes>
              <Route   path='/' element={<Home/>} /> 
            </Routes>
            </div>
         </main>
       </div>   
   </BrowserRouter>
  
  );
}

export default App;
