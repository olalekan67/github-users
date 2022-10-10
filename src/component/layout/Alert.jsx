
import { useContext } from 'react'
import AlertContext from '../../context/AlertContext'

function Alert() {
    const {alert} = useContext(AlertContext)

  return alert !== null && (
    <p className='px-3 px-md-5 text-danger mt-4 fs-5'>{alert.msg}</p>
  )
}

export default Alert