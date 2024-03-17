// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../assets/logo.svg'

function Navbar() {
  return (
        <nav className="flex w-100% h-24 justify-between">
            <div className="flex items-center h-24 ml-14 text-base font-medium gap-10 text-black">
                <a href="#" className="text-">Find telent</a>
                <a href="#" className="text-">For designers</a>
                <a href="#" className="text-">Inspiration</a>
                <a href="#" className="text-">Learn design</a>
                <a href="#" className="text-"> Go pro</a>
                <img className='w-32 ml-14' src={logo} alt='logo' />
            </div>
            {/* <div className="flex items-center">
            </div> */}
            <div className="flex items-center h-24 p-5 text-base ">
            <a href="#" className="font-medium">Log in</a>
            <button className='p-6 h-4 bg-gray-100 rounded-md flex  items-center justify-center ml-8'>Sign up</button>
            <button className='p-6 h-4 bg-black text-white rounded-md flex items-center justify-center ml-4'>Hire Creatives</button>
            </div>
        </nav>  
  )
}

export default Navbar