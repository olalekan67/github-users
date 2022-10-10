import React from 'react'
import { useState, useContext } from 'react'
import { searchUsers } from '../../context/GithubAction'
import AlertContext from '../../context/AlertContext'
import GithubContext from '../../context/GithubContext'


function UserSearch() {
  const [text, setText] = useState('')

  const {users, dispatch} = useContext(GithubContext)
  const {setAlert} = useContext(AlertContext)


  const handleTextChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if(text === ''){
      setAlert("Please enter a search", 'error')
    }else{
      dispatch({type: 'SET_LOADING'})
      const users = await searchUsers(text)
      dispatch({type: 'GET_USERS', payload: users})


      setText('')
    }
  }

  return (
    <div className="d-flex flex-column flex-md-row col-12 px-3 px-md-5 mt-5 mb-5">
      <div className="col-12 col-md-7 col-lg-7">
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <input 
            type="text" 
            className="col-7 col-lg-6 py-2 rounded-pill px-3" 
            placeholder="Search"
            value={text}
            onChange={handleTextChange}
            ></input>
            <button type='submit' className="col-4 col-lg-2 py-2 rounded-pill btn btn-info" >Search</button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className="col-6 col-lg-3 mt-2">
          <button onClick={() => dispatch({type: 'CLEAR_USERS'})} className="text-white col-8 col-sm-7 col-md-3 py-2 rounded-pill btn btn-outline-danger justify-content-start">Clear</button>
        </div>
      )}
       
    </div>
  )
}

export default UserSearch