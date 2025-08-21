import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='mt-[100px] flex flex-col'>
      <Hero/>
      <ProductCard/>
    </div>
  )
}

export default Home
