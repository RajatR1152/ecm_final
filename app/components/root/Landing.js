'use client'
import React, { useEffect, useState } from 'react'
import Carousel from '../main.js/Carousel'
import Mobiles from '../landing/Mobiles'
import Laptops from '../landing/Laptops'
import Tshirts from '../landing/Tshirts'
import Categories from '../landing/Categories'
import Footer from '../header&footer/Footer'
import Shoes from '../landing/Shoes'
import ImgLayout from '../landing/ImgLayout'
import Tvs from '../landing/Tvs'
import Watches from '../landing/Watches'
import Earphones from '../landing/Earphones'
import LoaderComponent from './LoaderComponent'

export default function Landing() {

  const [loading, setLoading] = useState(true);

  useEffect(() => { setLoading(false) }, [3500])

  if (loading) return <LoaderComponent />

  return (
    <>
      <Carousel />
      <Mobiles />
      <Laptops />
      <Tshirts />
      <Tvs />
      <Earphones />
      <Watches />
      <Categories />
      <Shoes />
      <ImgLayout />
      <Footer />

    </>
  )
}
