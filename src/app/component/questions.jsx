import { AiOutlineCheckCircle } from "react-icons/ai";

import React from 'react'
import Image from 'next/image'

export default function Questions() {
  return (
    <main>
        <div className=' md:ml-96'>

        <div className='p-7'>
           

        <h2 className=' w-56 text-lg font-semibold '>Post your questions,
            our experts are ready to answer</h2>
            <p>We service you 24/7 with ensure 100% care</p>
            
            <ul className=''>
            <span className='flex py-2'>
            <AiOutlineCheckCircle className='mt-1'/>
            <li className='px-2'>Development Facebook incubator stealth</li>
            </span>
            <span className='flex py-2'>
             <AiOutlineCheckCircle className='mt-1'/>
            <li className='px-2'>Development Facebook incubator stealth churn</li>
            </span>
            <span className='flex py-2'>
            <AiOutlineCheckCircle className='mt-1' />
            <li className='px-2'>Development Facebook incubator stealth</li>
            </span>
        </ul>
        <div className='flex p-5 justify-center md:grid md:justify-start '>
        <button className='p-5 bg-blue-600 '>Book an appointment</button>
            </div>
          
            </div>



                <div className='flex p-5 md:-mt-80  py-64 md:py-0 sm:py-0 justify-center'>
            
            <div className='bg-blue-700 w-[80%] h-10 md:py-0 sm:py-0 sm:w-[5%] sm:h-[17rem] md:w-[5%] md:h-[17rem]'>
           <div className='md:mt-4 -mt-52 ml-[2.5rem] sm:mt-4 sm:ml-[9rem] md:-ml-[9rem]'>
        <Image
         src={'https://images.unsplash.com/photo-1642977195677-e3533a97b9c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
         width={400}
         height={500}
         alt='day with dentist' className=' w-52 h-60'/>
         </div> 
         </div>
        </div>
        </div>
    </main>
  )
}
