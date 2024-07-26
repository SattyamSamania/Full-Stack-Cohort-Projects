import React from 'react'

const Button = ({label}) => {
  return (
    <div className='bg-black text-white rounded-md w-full p-2 font-semibold mt-3 cursor-pointer'>
      {label}
    </div>
  )
}

export default Button
