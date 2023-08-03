import React from 'react';
import CountUp from 'react-countup';
import { counterOfMembers } from '../../../data/dumyData';

const CouinterDown = () => {
  return (
    <div className=' w-full h-1/2  mt-6 p-3  '>
        {/* text side  */}
        <div className=' flex flex-col justify-center items-center space-y-3 mb-11 text-center w-[90%] md:w-full'>
            <p className='text-2xl md:text-3xl text-slate-50 font-medium mt-20'>Bagulat high school, Kumarkhali, Kushtia</p>
            <p className=' text-[12px] md:text-[18px]  font-normal text-slate-200 '>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart like mine.</p>
        </div>
        {/* imge & counter  */}
        <div className=' w-full h-auto sm:flex sm:flex-col md:flex-row gap-3 justify-between overflow-hidden items-center    '>
            {/* left side  */}
            <div className='p-3 sm:flex w-full md:w-[50%] justify-center items-center'>
                <img className='object-cover w-full' src="https://ndc.edu.bd/storage/app/uploads/public/62a/043/2a9/62a0432a90c05993939702.png" alt="" />
            </div>
            {/* right side  */}
            <div className='bg-transparent p-3 w-full sm:w-[45%] grid grid-rows-2 sm:grid-flow-col gap-4 sm:gap-2 md:gap-3 justify-center items-center '>

                {counterOfMembers.map((member) => (
                     <div key={member.id} className='w-48 h-44 border border-indigo-600 flex justify-center items-center'>
                     <div className='text-white flex flex-col justify-center items-center  '>
                        <div className=' text-2xl font-bold'>
                        <CountUp 
                         start={member.start}
                         end={member.end}
                         duration={2.75}
       
                          />
                        </div>
                      
                             
                             <p className='font-medium text-3xl text-white'>{member.filed}</p>
                         </div>
                    </div>

                ))}

              

              

               
            </div>

        </div>
    </div>
  )
}

export default CouinterDown