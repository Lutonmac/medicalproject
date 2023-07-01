import React from 'react'
import Body from './component/body'
import Dentist from './component/Dentist'
import Doctor from './component/Doctor'
import Schedule from './component/schedule'
import ArticleNews from './component/articles'
import Test from './component/testimonial'
import Contact from './component/Contact'


export default function page() {
  return (
    <div>
    <Body />
    <Dentist />
    <Doctor />
    <Schedule />
    <ArticleNews />
    <Test />
    <Contact />
  
    </div>
  )
}
