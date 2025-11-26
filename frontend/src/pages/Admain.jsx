import React, { useState } from 'react'
import axios from 'axios'

const Admain = () => {
  const [admain, setAdmain] = useState(true)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [list, setList] = useState('')
  const url = 'http://localhost:3000'

  const handleChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(`${url}/admain/login`, { password })

    if (res.data.success) {
      setAdmain(false)
    } else {
      setError(res.data.message)
      setPassword("")
    }
  }

  const getList = async () => {
    const res = await axios.post(`${url}/admain/getlist`)
    const data = res.data
    setList((prev) => ({ ...prev, data }))
  }

  const verify = async (id) => {
    const res = await axios.post(`${url}/admain/verify`, { id })
    getList()
  }

  const unVerify = async () => {
    const res = await axios.post(`${url}/admain/unverify`)
    const data = res.data
    setList((prev) => ({ ...prev, data }))
  }

  return (
    <>

      <div className='w-full'>

        {admain ? <form onSubmit={handleSubmit} className="sm:w-[80%] mx-auto min-h-[75vh] flex flex-col justify-center items-center gap-1">

          <p className='text-lg text-red-600'>{error}</p>

          <label> <p>Enter Name</p>
            <input type="text" name="name" className="outline-none border-b-2 border-black" required/>
          </label>
          <label><p>Enter Password</p>
            <input type="password" name="password" onChange={handleChange} value={password} className="outline-none border-b-2 border-black" required/>
          </label>

          <button type="submit" className='px-3 py-1 mt-2 bg-blue-500 text-white rounded-lg cursor-pointer'>
            Submit
          </button>

        </form> :

          <div className='bg-[#FFFAFA] flex flex-col gap-4 py-10 rounded-xl my-10 items-center w-[70%] mx-auto'>

            <div className='w-full flex justify-around'>

              <div>
                <p>Get All Students List</p>
              <button type="submit" onClick={() => getList()} className='px-3 py-1 mt-2 bg-blue-500 text-white rounded-lg cursor-pointer'>
                Get List
              </button>
              </div>

             <div>
               <p>Get Unverify Students List</p>
              <button type="submit" onClick={() => unVerify()} className='px-3 py-1 mt-2 bg-blue-500 text-white rounded-lg cursor-pointer'>
                Get List
              </button>
             </div>

            </div>

            <div className='flex gap-10 w-full flex-wrap justify-around'>

              {list.data?.map((i) => <div key={i.id}>
                <p><b>Name</b> {i.name}</p>
                <p><b>Class</b> {i.class}</p>
                <p><b>Roll No</b> {i.roll_no}</p>
                <p><b>Status</b> {i.varify}</p>
                <p><b>Status</b> {i.email}</p>
                <p><b>Status</b> {i.createdAt}</p>

                <button onClick={() => verify(i.id)} className='px-3 py-1 mt-2 bg-blue-500 text-white rounded-lg cursor-pointer'>Verify</button>
              </div>)}

            </div>

          </div>}
      </div>
    </>
  )
}

export default Admain