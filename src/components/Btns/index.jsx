import React from 'react'
import Bg from '../HeroButtons/Bg'
import Outline from '../HeroButtons/outline'

function Btns() {
  return (
   <div className='flex py-2 gap-x-5 items-center'>
     <Bg />
    <Outline />
   </div>
  )
}

export default Btns