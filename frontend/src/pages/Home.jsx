import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='sm:w-[80%] mx-auto min-h-[75vh] flex flex-col justify-center items-center gap-1'>

         <Link to='/ragister'>
         <button type="submit" className='px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer'>
          Ragister for Verification
        </button>
        </Link>

        <Link to='/check'>
         <button type="submit" className='px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer'>
          Check Verification
        </button>
        </Link>
      </div>
    </>


  )
}

export default Home