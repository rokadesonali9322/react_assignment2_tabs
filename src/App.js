import React from 'react'
import CityCard from './compoents/CityCard'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CityProperty from './compoents/CityProperty'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CityCard />} />
        <Route path="/property/:id" element={<CityProperty />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
