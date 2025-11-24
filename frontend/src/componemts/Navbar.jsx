import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const url = 'http://localhost:3000'
  return (
    <div className='flex justify-between h-20 items-center sm:w-[70%] mx-auto'>

        <div className='text-2xl font-semibold font-serif'>
            <Link to='/'>logo</Link>
            
        </div>

        <div>
            <button className='px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer'>
                <Link to='/admain'>Admain</Link>
                
            </button>
        </div>
    </div>
  )
}

export default Navbar