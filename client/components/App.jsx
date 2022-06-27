import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header.jsx'

import AllQueens from './GetQueens.jsx'
import Seasons from './Seasons.jsx'

function App() {
  return (
    <>
      {/* <Header /> */}
      <Seasons />
      <Routes>
        {/* <Route path="/" element={<AllQueens />} /> */}
        <Route path="/seasons" element={<Seasons />} />
      </Routes>
    </>
  )
}

export default App
