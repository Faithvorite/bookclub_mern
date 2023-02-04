import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            "BookClub."
        ],
        loop: true,
        delaySpeed: 8000,
    });
  return (
    <div className='items-center flex flex-col lg:flex-row space-x-4 space-y-2'>
      <div className=" relative h-48 w-full lg:w-1/2 text-5xl font-semibold px-2 bg-red-800 justify-center">
        <div className="mr-3 font-logo text-white pt-5">{text}</div>
        <div className=' font-oswald italic text-3xl text-white p-4 absolute bottom-0 right-0'>2023</div>
      </div>
      <div className="px-4 py-4 space-y-4 text-center lg:text-left"> 
          <p className='font-oswald text-xl'>Welcome to the Book Club!</p>
          <p className='font-oswald text-xl'>Browse the 2023 reading list or add your own.</p>
        
      </div>
    </div>
  )
}

export default Hero