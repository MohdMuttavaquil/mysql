import React, { useState } from 'react'
import axios from 'axios'

const Check = () => {
    const [email, setEmail ] = useState("")
    const [ show, setShow ] = useState(true)
    const [ result, setResult ] = useState("")
    const url = 'http://localhost:3000'

    const handleChange = (e)=>{
        const { value } = e.target 
        setEmail(value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const res = axios.post(`${url}/user/check`, {email})
        const data = res.data
        console.log(data)
        setResult((prev) =>({...prev, data}))
    }
  return (
    <>
        {show ? <form onSubmit={handleSubmit}>
            <label>
                <p>Enter your Email</p>
                <input className="outline-none border-b-2 border-black"  type='email' onChange={handleChange} name='email' value={email} required />
            </label>

             <br></br>
           <button type="submit" className='px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer'>
          Check
        </button>

        </form>:<div></div>}
    </>
  )
}

export default Check