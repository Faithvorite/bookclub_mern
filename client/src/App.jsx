import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, AddBook } from './pages';

const App = () => {
  return (
    <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-[rgb(255,253,249)] md:px-36 p-4'>
      <Link to="/" className='text-[rgb(136,152,185)] font-bold font-logo sm:text-2xl'>
        BookClub.
      </Link>
      <Link to="/add-book"
      className=' bg-[rgb(136,152,185)] text-white px-2 sm:px-8 py-1 sm:py-2 rounded-md font-oswald tracking-wider hover:bg-[rgb(255,145,82)] uppercase'>Add Book</Link>
    </header>
    <main className='sm:px-24 lg:px-36 px-6 py-8 w-full bg-[rgb(255,145,82)]/10 min-h-[calc(100vh-73px)] '>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App