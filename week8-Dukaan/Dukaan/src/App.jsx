import React from 'react'
import RevenueCard from './components/RevenueCard'
import OrderTable from './components/OrderTable'
import Heading from './components/Heading'

const App = () => {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-10'>
      <RevenueCard title={"Next payout"} amount={"2,312.23"} orderCount={23} className="bg-red-800" ispecial={true} payoutDate={"Next payout date:"} time={"Today 4:00 PM"} />

      <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} />
      <RevenueCard title={"Amount processed"} amount={"23,92,312.19"} />

     

    </div>

<div className='m-10'>


<h2 className='font-bold '>Transactions | This Month</h2>
<div className=''>
  <button className='text-[#808080] bg-[#E6E6E6] p-2.5 rounded-full '>Payouts(22)</button>
<button className='bg-[#146EB4]  text-white p-2.5 rounded-full ml-2'>Refunds(6)</button>
</div>

{/* OrderTable Starts here  */}

<div className=''>

<Heading/>
<OrderTable/>

</div>
</div>
</>
  )
}

export default App
