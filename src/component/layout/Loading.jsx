import React from 'react'
import spinner from './assets/spinner.gif'

function Loading() {
  return (
    <div className="d-flex justify-content-center">
        <img src={spinner} alt="loading.." className='img-fluid mx-auto w-25' />
    </div>
  )
}

export default Loading