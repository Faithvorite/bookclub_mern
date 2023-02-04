import React, { useState, useEffect } from 'react'
import { BookList, Hero } from '../components'
//Header => Logo > Add Books
//Home => Hero > BookClub books

const Home = () => {
  return (
    <div className='h-full font-base '>
      <Hero />
      <BookList />
    </div>
  
    )
}

export default Home