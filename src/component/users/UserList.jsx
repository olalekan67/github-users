import React from 'react'
import { useContext } from 'react'
import UserItem from './UserItem'
import GithubContext from '../../context/GithubContext'
import Loading from '../layout/Loading'

function UserList() {

    const {users, loading} = useContext(GithubContext)

    if(!loading){
      return (
                <div className='col-md-12 d-flex flex-row flex-wrap '>
                {users.map((user) => (
                  <UserItem key={user.id} user={user} />
                ))}
                </div>  
    
      )
    }else{
      return <Loading />
    }
  
}

export default UserList