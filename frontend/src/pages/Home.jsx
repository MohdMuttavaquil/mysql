import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='sm:w-[80%] mx-auto min-h-[60vh] flex flex-col justify-center items-center gap-4'>

        <div> <p className="text-xl font-semibold">Please verify your attendance in collage</p></div>

        <div className='flex gap-4'>
          <Link to='/ragister'>
            <button type="submit" className='px-10 py-4 text-xl bg-blue-500 text-white rounded-lg cursor-pointer'>
              Ragister for Verification
            </button>
          </Link>

          <Link to='/check'>
            <button type="submit" className='px-10 py-4 text-xl bg-blue-500 text-white rounded-lg cursor-pointer'>
              Check Verification
            </button>
          </Link>
        </div>

      </div>
    </>


  )
}

export default Home