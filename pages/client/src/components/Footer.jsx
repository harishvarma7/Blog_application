import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../images/logo.jpg"

const Footer = () => {
  return (
    <div>
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
    </div>
  )
}

export default Footer
