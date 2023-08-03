import React from 'react'
import Marquee from 'react-fast-marquee'

const Merque = () => {
  return (
    <div className=' bg-slate-900 p-3 '>
        <div className='container mx-auto flex space-x-0'>
       <Marquee>
      <a className='text-red-800 font-sm '>
        I can be a React component, multiple React components, or just some text.
        </a>
       </Marquee>
    

        </div>
      </div>
  )
}

export default Merque