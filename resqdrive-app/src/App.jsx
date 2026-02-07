import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Login from './components/login'
import Signup from './components/signup'
import Features from './components/features'
import HowItWorks from './components/HowItWorks'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Features />
      <HowItWorks />
    </Router>
  )
}

export default App