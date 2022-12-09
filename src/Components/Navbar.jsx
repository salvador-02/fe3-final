
import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

const Navbar = () => {

  const {dispatch, theme}= useContextGlobal()
  return (
    <nav className= "nav" id={theme.theme}>
      <div className= "nav-links">
      <Link to = "/">Home</Link>
      <Link to ="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      </div>
      <button onClick={onClick}>Change Theme</button>
    </nav>
  )
}

export default Navbar