import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function ReposList({ repos }) {
  return (
    <div className='py-4'>
        <div className="">
            <h1 className="">Latest Repos</h1>
        </div>
        {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo}/>
        ))}
    </div>
  )
}


ReposList.propTypes = {
    repos: PropTypes.array.isRequired
}
export default ReposList