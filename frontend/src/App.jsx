import React from 'react'

import NavBar from "./Components/NavBar.jsx"
import Home from "./Pages/Home.jsx"
import Patients from "./Pages/Patients.jsx"
import Admin from "./Pages/Admin.jsx"


import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        
        
        </BrowserRouter>

    </div>
  )
}
