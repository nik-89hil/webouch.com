import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='header'>
        <div className="left">
            <h2>Webouch.com</h2>
        </div>
        <div className="right">
            <p>
                <NavLink to={"/"}>Home</NavLink>
            </p>
            <p>
            <NavLink to={"/about"}>About</NavLink>
            </p>
            <p>
            <NavLink to={"/services_and_prices"}>Services</NavLink>
            </p>
            <p>
            <a href="https://wa.me/+918384072633">Connect</a>
            </p>
        </div>
      
    </div>
    </>
  )
}

export default Header
