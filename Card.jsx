import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
export const Card = ({width , start , para , hover = "none" }) => {
  return (
    <div className={`${width} min-h-[30rem] hover:${hover}  bg-zinc-800 p-5 rounded-xl flex flex-col justify-between`}>
        <div>
        <div className='w-full flex justify-between items-center'>
            <h3>Up next : </h3>
            <FaArrowRightLong />
        </div>
        <h1 className='text-3xl font-semibold mt-10 '>Heading</h1>
        </div>
        <div className='down w-full'>
            {
              start === true &&  
              <>
                <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a project</h1>
                <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-800 '>Contact Us</button>
              </>
            }
            {
              para &&  <p className='text-sm text-zinc-600 font-medium'>Explore what drives our team</p>
            }
        </div>
    </div>
  )
}

export default Card 