import React from 'react'
import UserList from '../component/users/UserList'
import UserSearch from '../component/users/UserSearch'

function Home() {
  return (
    // <div className='text-white mx-2 mx-md-5 mt-5 d-flex flex-row' id='div1'>
    <>
      <UserSearch />
      <UserList />
    </>
    // </div>
  )
}

export default Home