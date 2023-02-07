import React, { useState } from 'react'
import {bridge} from "../assets/index"
import { Loader, Card, FormField } from "../components"
const BookList = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  return (
    <section className='h-screen w-full bg-[rgb(13ol
    6,152,185)]/20 p-4 my-10 rounded-lg items-center justify-center text-center'>
      <h1 className='font-oswald tracking-widest uppercase text-4xl font-bold text-[rgb(136,152,185)]'>Reading List</h1>
    </section>
  )
}

export default BookList