import { useState } from "react"
import Navbar from "./componemts/Navbar"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Ragister from "./pages/Ragister"
import Check from "./pages/Check"


function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/ragister" element={<Ragister />} ></Route>
        <Route path="/check" element={<Check />} ></Route>
      </Routes>

    </>
  )
}

export default App
