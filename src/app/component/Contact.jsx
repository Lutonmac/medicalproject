import React from 'react'

export default function Contact() {
  return (
    <main className='px-1 md:px-0'>
    <div className='bg-blue-300  p-10'>
        <section className='grid p-8 justify-center'>
            <h2 className='text-center p-5 text-[#6674FD]'>CONTACT US</h2>
            <p className='md:text-[30px] text-lg text-center md:w-[450px] font-semibold'>Get in touch to book your first appointment</p>
        </section>
        <section className=' p-3 grid-rows-2 justify-center grid'>
            <article className='p-[0.09rem] flex gap-1 md:gap-2'>
                <input type="text" name="" placeholder='First Name' id="" className='md:p-5 p-0 py-1 rounded-md placeholder:p-2'/>
                <input type="text" name="" id="" placeholder='Last Name' className='md:p-5 p-0 py-1 rounded-md placeholder:p-2'/>
            </article>
            <article className='p-[0.09rem] flex gap-1 md:gap-2'>
                <input type="text" placeholder='Phone Number' name="" id="" className='md:p-5 p-0 py-1 rounded-md placeholder:p-2'/>
                <input type="text" name="" id="" placeholder='Email' className='md:p-5 p-0 py-1 placeholder:p-2 rounded-md'/>
          
            </article>
        <article className='p-[0.09rem] grid'>
            
          <textarea name="" id="" cols="30" placeholder='Type your text here' rows="10" className=' placeholder:p-1 md:p-5'/>
           
           <div className="py-2 "> 
           <button className=' text-start p-4 bg-blue-700 shadow-md  shadow-blue-600 '>Submit Now</button>
            </div>
        </article>
      
        </section>
       
    </div>
</main>
  )
}
