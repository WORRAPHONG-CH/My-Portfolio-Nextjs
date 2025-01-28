import React from 'react'
import Image from 'next/image'
import ProfilePic from '@/public/assets/profile1.jpg'
import KmutnbLogo from '@/public/assets/logo-kmutnb.jpg'
import RevealSlide from '../animation/RevealSlide'
import Reveal from '../animation/Reveal'
import { Github,Linkedin,Facebook,Instagram } from 'lucide-react'
import Link from 'next/link'

interface SocialListType{
    Icon:React.ElementType,
    link:string
}


const socialList1:SocialListType[] = [
    {Icon:Github,link:'https://github.com/WORRAPHONG-CH'},
    {Icon:Linkedin,link:'https://www.linkedin.com/in/worraphong-chenvigyakit-bb58a2229/'},
    {Icon:Facebook, link:'https://www.facebook.com/pak.sookthai'},
    {Icon:Instagram, link:'https://www.instagram.com/wrpch_p/?igsh=d3owN2xxZ2thMDQ0&utm_source=qr'},
    ]  

function About() {
  return (
    <div className='h-fit min-w-full font-rubik flex flex-col gap-10 '>
        <div className='w-full flex flex-col gap-5'>
            <RevealSlide><h1 className='text-4xl w-fit font-extrabold md:text-5xl'>About</h1></RevealSlide>
            <hr />
        </div>
        
        <div className='grid grid-cols-12 gap-y-10 lg:gap-y-0 '>
          <div className='col-span-12 flex justify-center items-center w-full lg:col-span-4 '>
            <Reveal>
              <div className='w-full1 h-10/12  rounded-3xl bg-slate-100 shadow-lg shadow-green-300 lg:w-full overflow-hidden '>
                <Image alt='profile' src={ProfilePic} 
                priority={true}
                style={{width:'100%',height:'auto', objectFit:'cover'}}
                className='hover:scale-110 hover:blur-sm' 
                />
                
              </div>
              </Reveal>
          </div>
          
          <div className='col-span-12 lg:col-span-8 md:text-lg lg:px-10'>
            <RevealSlide>
              <div className=' indent-5 px-5 py-3  md:py-3 md:px-5 border border-main rounded-xl shadow-md   mb-10 md:indent-10'>
              <p className=' md:text-2xl font-extrabold text-main inline'>Hi there!</p>
                <p className='inline'>{` I'm`}</p>
                <span className='font-extrabold md:text-xl mx-2 text-main'>{`Worraphong Chenvigyakit.`}</span>
                <p className='inline text-sm md:text-lg'>{`I was a student of Robotic Engineering and looking for oppotunity to expand my knowladge and gain experience in Software Developer role.`}</p>
                <p className='text-sm indent-5 md:indent-10 md:text-lg'>{`My passion lies in programming. So I don't strick to my own programming language, ready to learn new technology and I'm available for any kind of job that suit my skills`}</p>
                
              </div>
            </RevealSlide>
              <RevealSlide>
              <div className='w-full flex flex-col gap-2  px-5 py-3 md:py-3 md:px-3 md:p-0 border border-main rounded-xl shadow-md  '>
                  <div className='flex items-center gap-2'>
                    <Image alt='kmutnb-logo' 
                    src={KmutnbLogo} 
                    style={{width:'10%', height:'auto'}}
                    className='rounded-full'
                    />
                    <h1 className='font-semibold text-md md:font-extrabold underline1 md:text-2xl '>
                      {`King Mongkut's University of Technology North Bangkok (KMUTNB)`}
                      </h1>
                  </div>
                  <div className='w-full indent-2 px-5 md:px-10 md:indent-10'>
                    <li className='text-sm md:text-lg '>Major: Bachelor of Production and Robotics Engineering</li>
                    <li className='text-sm md:text-lg '>Year:  2019-2023</li>
                    <li className='text-sm md:text-lg '>GPAX:  3.41 (8 semesters)</li>
                    <li className='text-sm md:text-lg '>Degree honors:  Second-Class Honor</li>
                  </div>
              </div>
              </RevealSlide>

              <div className='w-full flex justify-center gap-3 mt-5'>
                    
                {
                        socialList1.map(({Icon,link},index) =>{
                            return(
                                <Link key={index} href={link} className='flex flex-col w-10 h-16  md:w-20 md:h-32 justify-center items-center gap-2 border-b-4 border-main '>
                                    <Reveal className='hidden md:block'>
                                        <Icon size={50} color={'#28E98C'}/>
                                    </Reveal>
                                    <Reveal className='block md:hidden'>
                                        <Icon size={35} color={'#28E98C'} />
                                    </Reveal>
                                </Link>
                                
                            )
                        })
                    }
                </div>

          </div>
        
            

        </div>
    </div>
  )
}

export default About