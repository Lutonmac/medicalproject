import Image from 'next/image'
import React from 'react'



export let pgh;

async function fly(){
    const response = await fetch('https://raw.githubusercontent.com/Lutonmac/medic/main/medical.json')
    const data = await response.json()
    return data
}

export default async function ArticleNews() {
    const data = await fly()
    const messages = data.filter((message, index)=> index > 4 && index <= 7).map((message)=> (
        <div key={message.id}>
            <div className='border-[1px] border-gray-200 py-1 md:py-2 '>
            <article className='flex justify-center py-1 md:py-2'>
                <Image src= {message.profileImage}
                alt={message.detail}
                 width={200}
                 height={200}
                 title={`Read more information on ${message.detail}`}/>
                </article>
            <article className='px-5'>
                {message.topic}
            </article>
            <article className='w-[240px] px-5'>
                {message.detail}
            </article>
            <article className=" px-5">
                {message.link} 
            </article>
           </div>

        </div>
    ))
  return (

    <div className='p-3 md:p-5'>
        <section className='grid justify-center md:py-10'>
        <h2 className='text-center p-5 text-[#4977FC]'>ARTICLES & NEWS</h2>
        <p className='md:text-[30px] font-semibold w-[390px] text-center'>Our articles on health and personal wellness </p>
        </section>
    <div className='flex justify-center md:p-5'>
        <div  className='grid md:grid-cols-3 gap-5 grid-cols-1 justify-center'>
{messages}
    </div></div>
    </div>
  )
}


