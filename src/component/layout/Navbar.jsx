import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function Navbar({ title }) {
  return (
    <div className='navbar mx-2 mx-md-5 mx-lg-5'>
        <h4 className="navBrand"><FaGithub className='nav-logo'/>{title}</h4>
        <ul className="nav">
            <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link text-white">About</Link></li>
        </ul>

    </div>
  )
}

Navbar.defaultProps = {
    title: "Github Finder",
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar