import React from 'react'
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import {useContext, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import { getUser, getUserRepos } from '../context/GithubAction'
import Loading from '../component/layout/Loading'
import GithubContext from '../context/GithubContext'
import ReposList from '../component/layout/repos/ReposList'



function User() {

    const { user, loading, repos, dispatch} = useContext(GithubContext)

    const params = useParams()


    useEffect(() => {
      const getUserData = async () => {
        dispatch({type: 'SET_LOADING'})
        const user = await getUser(params.login)
        dispatch({type: 'GET_USER', payload: user})
        
        const repos = await getUserRepos(params.login)
        dispatch({type: 'GET_REPOS', payload: repos})
      }
        
      getUserData()
      
    }, [dispatch, params.login])

    const {
      name,
      type,
      avatar_url,
      location,
      bio,
      blog,
      twitter_username,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = user

   
    if(loading){
      return <Loading />
    }


  return (
    <div className='px-3 px-md-5 mt-sm-3 mt-md-5'>
      <div className="d-flex flex-column">
        <div className='mb-3 mb-md-5'>
          <Link to='/'>Back to Home</Link>
        </div>
        <div className="d-flex flex-row gap-1 gap-md-2 gap-lg-3">
          <div className='card col-5 col-md-3 h-75'>
            <img src={avatar_url} alt="" className='card-img-bottom img-fluid rounded'/>
            <div className="card-img-overlay" id='card-text'>
              <h2 className="card-text">{name}</h2>
              <p className="card-text">{login}</p>
            </div>
          </div>

          <div className='col-6 col-md-8 pt-2 px-1 px-md-2'>
            <div className="d-flex flex-row">
              <h3>{name}</h3>
              <div>
                <p className="badge bg-success mt-2 mx-2">{type}</p>
              </div>
              
              {
                hireable && (
                  <div>
                    <p className="badge bg-info mt-2 mx-2">Hireable</p>
                  </div>
                )
              }
            </div>

            <p>{bio}</p>

            <div className="mt-4">
              <a href={html_url} 
              target="_blank" 
              rel='noreferrer' 
              className='btn btn-outline-secondary'>Visit Github Profile</a>
            </div>

            <div className="d-flex flex-row mt-5 gap-4">
              <div className="d-flex flex-column">
                {location && (
                  <>
                    <p className="text-secondary">Location</p>
                    <p className="fs-5">{location}</p>
                  </>
                  
                )}
              </div>

              <div className="d-flex flex-column">
                {blog && (
                  <>
                    <p className="text-secondary">Website</p>
                    <a href={`https://${blog}`}
                    target='_blank' 
                    rel='noreferrer' className='fs-5 nav-link'>{blog}</a>
                  </>
                  
                )}
              </div>

              <div className="d-flex flex-column">
                {twitter_username && (
                  <>
                    <p className="text-secondary">Twitter</p>
                    <a href={`https://twitter.com/${twitter_username}`}
                    target='_blank' 
                    rel='noreferrer' className='fs-5 nav-link'>{twitter_username}</a>
                  </>
                  
                )}
              </div>
            </div>
          </div>
            
        </div>

        <div className="py-4 d-flex flex-row gap-4">
            <div className='d-flex flex-row'>
                <div className="flex-column">
                  <p className='text-muted'>Followers</p>
                  <p className="fs-5 text-bold">{followers}</p>
                </div>
                <div className='mt-3 mx-md-4 mx-lg-5'>
                  <FaUsers className='fs-1 text-info'/>
                </div>
            </div>

            <div className='d-flex flex-row '>
                <div className="flex-column">
                  <p className='text-muted'>Following</p>
                  <p className="fs-5 text-bold">{following}</p>
                </div>
                <div className='mt-3 mx-md-4 mx-lg-5'>
                  <FaUserFriends className='fs-1 text-info'/>
                </div>
            </div>

            <div className='d-flex flex-row'>
                <div className="flex-column">
                  <p className='text-muted'>Public Repos</p>
                  <p className="fs-5 text-bold">{public_repos}</p>
                </div>
                <div className='mt-3 mx-md-4 mx-lg-5'>
                  <FaCodepen className='fs-1 text-info'/>
                </div>
            </div>

            <div className='d-flex flex-row'>
                <div className="flex-column">
                  <p className='text-muted'>Public Gists</p>
                  <p className="fs-5 text-bold">{public_gists}</p>
                </div>
                <div className='mt-3 mx-md-4 mx-lg-5'>
                  <FaStore className='fs-1 text-info'/>
                </div>
            </div>
        </div>

        <ReposList repos={repos}/>
      </div>
    </div>
  )
}

export default User