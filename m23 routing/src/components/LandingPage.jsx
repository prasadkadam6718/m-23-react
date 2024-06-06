import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div>
      <h1>LandingPage</h1>
      <Link to="/home">Navigate to home</Link>
    </div>
  )
}

export default LandingPage