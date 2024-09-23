import React from 'react'
import BannerSlider from '../components/home/BannerSlider'
import Hero from '../components/home/Hero'
import CircularImages from '../components/home/CircularImages'

function Home() {
  return (
    <div>
        <BannerSlider />

        <Hero />

        <CircularImages />
    </div>
  )
}

export default Home