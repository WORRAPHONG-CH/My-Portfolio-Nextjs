
import React from 'react'
import Link from 'next/link'
import Sidebar from './Sidebar'
import Reveal from './animation/Reveal'


function Navbar() {
  const navList = [
    ['Home','#home'],
    ['About','#about'],
    ['Experience','#experience'],
    ['Project','#project'],
    ['Contact', '#contact'],
  ]
  return (
    <Reveal className='min-w-full h-16 bg-black md:h-16 md:flex md:justify-center md:items-center'>
      <div className='min-w-full h-16 md:h-16'>
        
          <div className='hidden h-full md:flex md:items-center text-lg font-extrabold  md:gap-10 '>
            {
              navList.map(([title,url],index) =>{
                return (
                  <Link href={url} key={index} className=' h-full flex items-center hover:border-b-2 hover:border-main hover:text-main'>
                    <p className=''>{title}</p>
                  </Link>
                )
              })
            }
            
          </div>
          
          <Sidebar navMenu={navList}/>
          
          
      </div>
    </Reveal>
  )
}

export default Navbar