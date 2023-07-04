import React from 'react'
import HeroImage from '../HeroImage'
import HeroTitle from '../HeroTitle'
import HeroContent from '../HeroContent'
import Info from '../HeroInfo'

import Btns from '../Btns'

function Hero() {
  return (
    <section className='container flex flex-col-reverse gap-7 lg:flex-row items-center'>
            <div className='flex flex-col gap-y-3'>
            <HeroTitle />
            <HeroContent />
            <Info />
            <Btns />
        </div>
        <HeroImage />
    </section>
  )
}

export default Hero