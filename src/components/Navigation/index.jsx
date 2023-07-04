import React from 'react'
import Logo from '../Logo'
import Button from '../Button'
import Menu from '../icons/Menu'
import Basket from '../icons/Basket'
import Nav from '../Nav'
import Call from '../icons/Call'

function Navigation() {
  return (
    <section className='container py-5 items-center flex justify-between'>
        <Logo />
        <div className='flex gap-x-2 items-center lg:hidden'>
        <Button icon={<Basket />}/>
        <Button icon={<Menu />}/>
        </div>
        <Nav />
        <div className='hidden lg:inline'>
        <Button icon={<Call />} content="Contact Us"/>
        </div>
    </section>
  )
}

export default Navigation