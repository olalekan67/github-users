import React from 'react'
import { FaHome } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='d-flex flex-column text-center mt-5 mx-2 mx-md-5'>
      <div>
        <h1>Oops!</h1>
        <p className='fs-1'>404 - Page no found!</p>

        <Link to='/' className='btn btn-danger'>
          <FaHome className='goHome'/>
          Back To Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound