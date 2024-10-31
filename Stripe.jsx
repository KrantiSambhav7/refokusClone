import React from 'react'

const Stripe = ({ val }) => {
  return (
    <div className='w-[16.67%] px-4 py-5 border-t-2 border-b-2 border-r-2 border-zinc-600 flex justify-between items-center'>
        <img src={val.url} alt="" />
        <span className='font-semibold text-white'>{val.number}</span>
    </div>
  )
}

export default Stripe