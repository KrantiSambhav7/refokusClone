import React from 'react'

const Footer = () => {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl mx-auto  py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[11rem] font-semibold leading-none tracking-tight'>refokus .</h1>
            </div>
            <div className='basis-1/2 flex gap-4 '>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-700'>Socials</h4>
                   { ["Instagram" , "Twitter X?" , "LinkedIn"].map( (item , index ) => (
                        <a className='block mt-2 capitalize text-zinc-600 ' href="">{item}</a>
                    )) } 
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-700'>Socials</h4>
                   { ["Instagram" , "Twitter X?" , "LinkedIn"].map( (item , index ) => (
                        <a className='block mt-2 capitalize text-zinc-600 ' href="">{item}</a>
                    )) } 
                </div>
                <div className='basis-1/2 flex flex-col items-end'>
                    <p className='text-right '>Refokus is pioneering the digital agency driven by design and empowered by the technology</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer