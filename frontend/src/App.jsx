import { useState } from 'react'
import { Dashboard } from './pages/Dashboard'
import { TripDetail } from './pages/TripDetail'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flag } from './components/Flag';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/flag" element={<Flag />} />
        <Route path="/detail" element={<TripDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
