import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({label, to, buttonText}) => {
  return (

    <main className='flex justify-center align-center'>
    
    
    <div className='m-3'>
      {label}
    </div>

    <Link className='pointer cursor-pointer underline mt-3' to={to}>
  {buttonText}  
    
    </Link>
    </main>
   
  )
}

export default BottomWarning
