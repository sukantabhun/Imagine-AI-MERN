import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import { logo } from './assets'

import { Home , CreatePost } from  './Pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-0 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <div className='flex items-center'>
            <img src={logo} alt="logo" className='w-20 object-contain' />
            <h1 className='text-[22px] font-extrabold'>Imagine AI</h1>
          </div>
        </Link>
        <div>
          <Link to='https://ai-studio-project.vercel.app/' className="font-inter font-medium bg-[#50b054] text-white px-4 py-2 rounded-md mr-4">Home</Link>
          <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
        </div>
        
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
