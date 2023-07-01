import Image from 'next/image'

import { UnifrakturCook, Racing_Sans_One, Merriweather_Sans, Lato, Abril_Fatface } from 'next/font/google'
import Link from 'next/link'






const unifraktur = UnifrakturCook({ subsets: ['latin'], weight: [ '700'] })
const bel = Merriweather_Sans({ subsets: ['latin'], weight: ['800']})
const race = Racing_Sans_One({subsets:['latin'], weight:['400']})
const lato = Lato({subsets: ['latin'], weight: ['700']})
const caprasimo = Abril_Fatface({subsets: ['latin'], weight: ['400']})

export default function Body() {
  return (
    <main className=''>
    {/* <div className='bg-blue-500 md:flex'>

        <section className='  grid w-full justify-center py-40 md:px-10 '>
            <article className='w-[65%] md:w-[45%] p-10'>
                <h2 className='md:text-[2rem] text-[18px] text-white'>Health is your greatest asset.</h2>
            </article>
            <article className=' -mt-5 w-[65%]'>
                <p className='px-10  hidden md:grid'>Health is not just the absence of 
                    illness, but a state of 
                    complete physical, mental, and social well-being.</p>
                    <span className='grid py-5 px-10 justify-start'>
                   <Link href={`../Book`}><p className='py-3 hidden  px-10 bg-slate-300 md:flex'>Book an appointment</p></Link> 
                         </span>
                     <span className=' flex justify-center'>
                        <p className='px-10 flex sm:py-4 -mt-6 bg-slate-300 md:hidden w-[60%]'>Book</p>
                        </span>
                   
            </article>
        </section>
        <article className='flex justify-center -mt-10'>
            <Image src={'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'}
            width={9000}
            height={400}
            alt='/'
             className='md:w-[100%] sm:w-full sm:h-full md:h-full'       />
        </article>
        
    </div> */}
     <div className='md:p-16 py-16 min-h-full bg-[#4977F6]'>
        <section className='grid grid-cols-1 w-full gap-5 md:gap-1 md:grid-cols-2 md:grid-rows-1 '>
          <article className='px-16'>
            <h2 className='md:text-[3rem] sm:w-full sm:text-[17px] md:w-[50%] text-white'>Health is your greatest asset.</h2>
            <p className='md:py-10 py-2 text-sm text-slate-200 md:w-[30%]'>Health is not just the absence of illness, but a state of complete physical, mental, and social well-being.</p>
            <aside className='bg-slate-100 md:w-[30%]'>
                <Link href={`/Book`}> <p className='py-5 text-sm md:text-[16px] text-center'>Book an appointment</p></Link>
           
            </aside>

          </article>
          <article className='grid'>
          <Image src={'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'}
            width={9000}
            height={400}
            alt='/'
             className='w-[100%] sm:w-full sm:h-full md:h-full'       />
          </article>
        </section>
    </div>
    <div className='bg-[#0A132E] p-14'>
        <section className='flex justify-center text-white py-16'>
            <h2>We&apos;ve been mentioned in the press</h2>
        </section>
        <article>
            <ul className='md:flex p-1 text-[#4977F6] md:justify-around grid justify-center'>
               <a href="https://www.washingtonpost.com/"><li className={`text-2xl  ${unifraktur.className} `}>The washington post</li></a> 

               <a href="https://techcrunch.com/"><li className={`${bel.className} text-2xl`}> TC TechCrunch</li></a> 
               <a href="https://www.bloomberg.com/africa"> <li className={`${race.className} text-2xl`}>Bloomberg</li></a>
                <a href="https://gizmodo.com/"><li className={`${lato.className} text-2xl`}>GIZMODO</li></a>
               <a href="https://www.forbes.com/?sh=16081e882254"><li className={`${caprasimo.className} text-2xl`}>Forbes</li> </a>
                
            </ul>
        </article>
    </div>
    </main>
  )
}
