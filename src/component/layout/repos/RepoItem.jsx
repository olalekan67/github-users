import React from 'react'
import PropTypes from 'prop-types'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

function RepoItem({ repo }) {

    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo
  return (
    <div className='mb-3 bg-dark py-3 px-3 rounded'>
        <div>
            <h5>
                <a href={html_url} className="text-white nav-link"><FaLink /> {name}</a>   
            </h5>
        </div>
        <p>{description}</p>
        <div className="d-flex flex-row gap-3">
            <div className='badge badge-info bg-white text-info'>
                <FaEye /> {watchers_count}
            </div>

            <div className='badge badge-info bg-white text-success'>
                <FaStar /> {stargazers_count}
            </div>

            <div className='badge badge-info bg-white text-danger'>
                <FaInfo /> {open_issues}
            </div>

            <div className='badge badge-info bg-white text-warning'>
                <FaUtensils /> {forks}
            </div>
        </div>
    </div>
  )
}


RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}
export default RepoItem