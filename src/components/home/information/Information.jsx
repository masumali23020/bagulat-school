import React from 'react'
import { NavLink } from "react-router-dom"
import { informationOfMemmer } from "../../../data/dumyData"

const Information = () => {
  return (
    <div className='grid gap-y-6  sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6  mt-7 container mx-auto p-4 sm:p-0'>
        {informationOfMemmer.map((card) => (
              <div key={card.id} className=' p-3 w-full h-44 sm:w-40 sm:h-36 bg-indigo-800 rounded-sm hover:bg-indigo-700 duration-200 cursor-pointer' >
           
              <div className='flex flex-col justify-center items-center space-y-4 '>
              <img className='w-28 h-20 sm:h-16' src={card.img} alt={card.name} />
                 <NavLink to={card.url} className='text-green-600 tracking-wide font-semibold text-[18px] sm:text-[14px] sm:text-center hover:text-green-500 duration-150'>{card.name} </NavLink>
              </div>
             
         </div>
        ))}
      
        
    </div>
  )
}

export default Information