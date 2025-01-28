
import React from 'react'
// import { LinkdinIcon,GithubIcon,FacebookIcon,IGIcon } from '../SocialIcon'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import Reveal from '../animation/Reveal'
import { Github,Linkedin,Facebook,Instagram } from 'lucide-react'




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


const Footer = () => {
  return (
    
    <div className='w-full mt-16 md:mt-32  h-[600px] bg-black flex flex-col items-center '>
        <Reveal className='my-16 bg-[#1D1D21] md:w-1/2 md:h-7/12 md:px-10 md:py-5  md:text-center rounded-2xl '>
            <div className=' flex flex-col px-5 py-5 w-full gap-3 md:gap-5 items-center'>
                <h1 className='text-3xl font-bold text-center md:text-5xl md:font-extrabold '>Contact</h1>
                <p className='text-sm text-center  md:text-lg'>{`Appreciate your time here! Are you looking for someone to develop your website ? Feel free to contact me. I'm looking forward to your connection.`}</p>
                <p className='text-center text-lg text-main font-bold md:text-xl'>{`Let's keep in touch!`} </p>
                
                <div className='w-full flex justify-center items-center text-sm md:text-lg gap-2'>
                        <Mail size={32} />
                        <p>: Worraphong.che@gmail.com</p>
                </div>
                
                
                <div className='w-full flex justify-center gap-3'>
                    
                {
                        socialList1.map(({Icon,link},index) =>{
                            return(
                                <Link key={index} href={link} className='flex flex-col w-10 h-16  md:w-20 md:h-32 justify-center items-center gap-2 '>
                                    <div className='hidden md:block'>
                                        <Icon size={50} color={'#28E98C'}/>
                                    </div>
                                    <div className='block md:hidden'>
                                        <Icon size={35} color={'#28E98C'} />
                                    </div>
                                </Link>
                                
                            )
                        })
                    }
                </div>
            </div>
        </Reveal>
        

    </div>
  )
}

export default Footer