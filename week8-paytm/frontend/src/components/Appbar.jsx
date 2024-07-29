import React from 'react'

const Appbar = () => {
  return (
    <>
      <main className=' shadow flex justify-between items-center p-5 text-2xl'>

        <div>
            <h2 className='font-bold'>Payments App</h2>
        </div>
        <div className='flex items-center gap-4'>


        
        <div>Hello, User</div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div>
<div className="my-4">
      <hr className="border-gray-400" />
    </div>
</div>


      </main>
    </>
  )
}

export default Appbar
