import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function UserItem({user : {avatar_url, login}}) {
  return (
    <div className='d-flex flex-row col-10 col-md-3 mb-3'>
        <img src={avatar_url} alt="profile" className='img-fluid rounded-circle h-75 col-3 col-md-4 col-lg-3' />
        <div>
        <p className="px-3 mt-2 fs-5" style={{wordBreak: "break-word", textTransform: "capitalize"}}>{login}</p>
        <Link className="px-3 text-info" to={`/user/${login}`}>visit profile</Link>
        </div>  
    </div>
  )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem