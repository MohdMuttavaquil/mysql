import { useState } from "react"
import axios from 'axios'

function Radister() {

   
  const [ data , setData ] = useState({
    name: "",
    email: "",
    userClass: "",
    rollNo: ""
  })
  const url = 'http://localhost:3000'

  const handleChange = (e)=>{
    const { name, value } = e.target
    setData((prev) => ({...prev, [name]: value}))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(data)
    const res = axios.post(`${url}/user/verify`, {data})
    alert(res.data)
    
    setData({  name: "",
    email: "",
    userClass: "",
    rollNo: ""})
  }


  return (
    <>
      
        <div className="sm:w-[80%] mx-auto min-h-[75vh] flex flex-col justify-center items-center gap-1">
        <p className="text-xl font-semibold">Please verify your attendance in collage</p>

        <form onSubmit={handleSubmit} className="bg-[#FFFAFA] flex flex-col gap-4 sm:w-[20rem] py-10 rounded-xl my-10 items-center">

          <label> <p>Enter Name</p>
            <input type="text" name="name" onChange={handleChange} value={data.name} className="outline-none border-b-2 border-black" />
          </label>
          <label><p>Enter Email</p>
            <input type="email" name="email" onChange={handleChange} value={data.email} className="outline-none border-b-2 border-black" />
          </label>

          <label> <p>Enter Class</p>
            <input type="text" name="userClass" onChange={handleChange} value={data.userClass} className="outline-none border-b-2 border-black" />
          </label>

          <label> <p>Enter Roll Number</p>
            <input type="number" name="rollNo" onChange={handleChange} value={data.rollNo} className="outline-none border-b-2 border-black" />
          </label>
          
          <br></br>
           <button type="submit" className='px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer'>
          Verify
        </button>
        </form>

      </div>


    </>
  )
}

export default Radister
