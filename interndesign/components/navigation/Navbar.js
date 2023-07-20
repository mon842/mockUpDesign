import React from 'react'
import NavbarB from './NavbarB'
import NavbarSide from './NavbarSide'

const Navbar = () => {
  return (
    <div>
        <div className='block md:hidden lg:hidden'>
            <NavbarB/>
        </div>
        <div className='hidden md:block lg:block'>
            <NavbarSide/>
        </div>
    </div>
  )
}

export default Navbar