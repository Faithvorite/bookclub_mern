import React, { useState, useEffect } from 'react'
import { BookList, Hero } from '../components'
import { bridge } from '../assets'
//Header => Logo > Add Books
//Home => Hero > BookClub books

const Home = () => {
  return (
    <div className='h-full font-base '>
      {/* <img className="z--10 opacity-50 object-contain fixed" src={bridge} alt="bg-img" /> */}
      <Hero />
      <BookList />
    </div>
  
    )
}

export default Home