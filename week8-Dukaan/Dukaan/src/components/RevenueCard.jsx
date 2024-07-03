import React from 'react'

const RevenueCard = ({
    title, orderCount, amount
}) => {
  return (
    <>
     <div className='bg-white rounded shadow-sm p-10'>
        <div>{title}</div>

<div className='flex justify-between'>
    <div>{amount}</div>
  
  {orderCount ? <div className='flex underline text-blue-700'>
    <div>{orderCount} orders </div>
    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg></div>
  </div>  : null}
  
    </div>

   
      
    </div>
   </>
  )
}

export default RevenueCard
