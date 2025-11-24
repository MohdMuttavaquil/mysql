import { useState } from "react"
import Navbar from "./componemts/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Ragister from "./pages/Ragister"
import Check from "./pages/Check"
import Admain from "./pages/Admain"


function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/ragister" element={<Ragister />} ></Route>
        <Route path="/check" element={<Check />} ></Route>
        <Route path="/admain" element={<Admain />} ></Route>
      </Routes>

    </>
  )
}

export default App
