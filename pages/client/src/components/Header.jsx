import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Logo from "../images/logo.jpg"
import { AuthContext } from '../context/authContext'

const Header = () => {
  const {currentUser, logout}=useContext(AuthContext)
  return (
    <div className='navbar'>
    <div className='container'>
     
    <div className='logo'>
    <img src={Logo} />
    
    </div>
     
    <div className='links'>
    <Link className='link' to="/?cat=art"><h6>ART</h6></Link> 
    <Link className='link' to="/?cat=technology"><h6>TECHNOLOGY</h6></Link> 
    <Link className='link' to="/?cat=cinema"><h6>CINEMA</h6></Link> 
    <Link className='link' to="/?cat=design"><h6>DESIGN</h6></Link> 
    <Link className='link' to="/?cat=food"><h6>FOOD</h6></Link> 
    <span>{currentUser?.username}</span>
    {currentUser ? <span onClick={logout}>Logout</span> : <Link className="link" to="login">Login</Link>}
    <span className='write'>
    <Link className='link' to="/write">Write</Link>
    </span>

    </div>

    </div>
      
    </div>
  )
}

export default Header
