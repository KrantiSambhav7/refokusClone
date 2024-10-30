import React from 'react'
import Button from './Button'
// MAX-W-SCREEN-XL is to make a container such that it takes only 80% of the screen 
const Navbar = () => {
  return (
    <div className='max-w-screen-xl justify-between p-3 mx-auto bg-zinc-500 flex items-center py-6 border-b-2 border-zinc-700 '>
      <div className='flex items-center'>
      <img className='b h-10 w-10' src="https://cdn-icons-png.flaticon.com/128/1532/1532444.png" alt="" /> 
      <div className='links flex gap-14 ml-20'>
       { ["Home" , "Work" , "Culture" , "" , "News"].map( (item,index) => (
        item.length === 0 ? <span className='w-0.5 h-7 bg-zinc-800'></span>  : 
         <a className='text-sm flex items-center gap-1' href="#" key={index}>
          {index===1 &&  <span style={{boxShadow: "0 0 0.25em #00FF19"}} className='inline-block rounded-full h-2 w-2 bg-green-500'></span>}  
          {item}
          </a>
       ) ) }
      </div>
    
     </div>
      <Button />
    </div>
  )
}

export default Navbar
