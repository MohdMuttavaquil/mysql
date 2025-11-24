import React, { useState } from 'react'
import axios from 'axios'

const Check = () => {
  const [email, setEmail] = useState("")
  const [show, setShow] = useState(true)
  const [result, setResult] = useState("")
  const [ error, setError ] = useState("")
  const url = 'http://localhost:3000'

  const handleChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(`${url}/user/check`, { email })

    if (res.data.success) {
      const data = res.data.result[0]
      setResult((prev) => ({ ...prev, data }))
      setShow(false)
    } else {
      setError(res.data.message)
    }

    setEmail("")
  }

  return (
    <>
      {show ? <form onSubmit={handleSubmit} className='bg-[#FFFAFA] flex flex-col gap-4 sm:w-[20rem] py-10 rounded-xl my-10 items-center w-[70%] mx-auto'>

        <label>
          <p>Enter your Email</p>
          <input className="outline-none border-b-2 border-black" type='email' onChange={handleChange} name='email' value={email} required />
        </label>

        <button type="submit" className='px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer'>
          Check
        </button>
        
        <p className='text-red-600 text-lg'>{error}</p>
      </form> :
        <div className='bg-[#FFFAFA] flex flex-col gap-4 sm:w-[20rem] py-10 rounded-xl my-10 items-center w-[70%] mx-auto'>
          <p><b>Name</b> {result.data?.name}</p>
          <p><b>Class</b> {result.data?.class}</p>
          <p><b>Roll No</b> {result.data?.roll_no}</p>
          <p><b>Status</b> {result.data?.varify}</p>
        </div>}
    </>
  )
}

export default Check