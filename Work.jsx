import React from 'react'

const Work = () => {
    var images = [
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png" , top:"50%" , left:"50%" ,isActive: false},
        {url:"" , top:"56%" , left:"44%" ,isActive: false},
        {url:"" , top:"45%" , left:"56%" ,isActive: false},
        {url:"" , top:"60%" , left:"53%" ,isActive: false},
        {url:"" , top:"43%" , left:"40%" ,isActive: false},
        {url:"" , top:"60%" , left:"55%" ,isActive: false},
     ] ; 

  return (
    <div className='w-full'>
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-white text-[30vw] leading-none font-regular select-none tracking-tight'>Work</h1>
            <div className='absolute w-full h-full top-0'>
              {images.map( (item , index) => (
                item.isActive && 
                <img className='absolute w-60 h-60 rounded-md -translate-x-[50%] -translate-y-[50%]' src={item.url} style={{top:item.top , left:item.left}} alt="" />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Work