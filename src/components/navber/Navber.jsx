import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiTwotoneMail } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import { NavLink } from 'react-router-dom'
import mujib_100 from "../../assets/mujib_100.png"
import schoolLogo from "../../assets/notardam.png"
import { menu } from "../../data/dumyData"

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false)

  let activeClass = "cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-red-800 "
  let inActiveClass = "cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent"
  
  return (
    <div className='text-white     '>
        {/*logo section    */}
        <div className=' container mx-auto  flex justify-between items-center bg-white p-4'>
          {/* email */}
          <div className=' hidden md:block'>
          <div className=' flex gap-2    '>
            <AiTwotoneMail size={40} color="#4ea1d3" />
           
            <div className='flex flex-col  ' >
              <p className='text-black font-medium text-lg'>Mail Us</p>
              <a 
              href="#" className='text-slate-500 hover:text-slate-400 duration-150 transition-all'>bagulathighschool@gmail.com</a>
            </div>
         

          </div>
          </div>
        
          {/* school logo  */}
          <img className='w-44  md:w-48   object-contain' src={schoolLogo} alt="schoolLogo" />
          {/* mujib-100 logo */}
          <img className='w-44  md:w-48   object-contain' src={mujib_100} alt="mujib_100" />
        </div>
        {/* nav ber    */}
        <div className='bg-[#052e59] '>
            {/* mobile humbager  */}
         <div className="  md:hidden flex  block justify-between p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
        
            <AiOutlineMenu className={` h-6 w-6 ${isOpen ? "hidden" : "block"}`} />
            <AiOutlineClose  className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`} />
          
          </button>
             {/* search ber  */}
          <div className="relative   " >
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">            
                  <BiSearchAlt2 size={20} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
          </div>
         </div>

         <div className={`w-full block flex-grow md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`} >

          <nav className='  flex items-center justify-between container mx-auto'>
              {/* manu item  */}
              <ul className=' container mx-auto flex flex-col md:flex-row  items-center justify-stretch gap-5  md:gap-5 p-6 text-sm sm:text-xl md:text-2xl  '>
              { menu.map((item) =>  (
                  <li key={item.id} >
                      <NavLink className={({isActive})=> (
                        isActive ? activeClass : inActiveClass
                      ) }  to={item.url}> {item.title} </NavLink>

                  </li>
              ))}
              </ul>

              {/* search ber  */}

              <div className="relative hidden md:block  " >
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">            
                  <BiSearchAlt2 size={20} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
              </div>

          </nav>

         </div>
        </div>
    </div>
  )
}

export default Navber