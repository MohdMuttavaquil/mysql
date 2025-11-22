import React from 'react'

const Navbar = () => {
    const url = 'http://localhost:3000'
  return (
    <div className='flex justify-between h-20 items-center sm:w-[70%] mx-auto'>

        <div className='text-2xl font-semibold font-serif'>
            logo
        </div>
        <div>
            <button className='px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer'>
                Admain
            </button>
        </div>
    </div>
  )
}

export default Navbar