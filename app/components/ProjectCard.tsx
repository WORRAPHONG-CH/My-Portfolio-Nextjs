import Image from 'next/image'
import React from 'react'
import { GithubIcon } from './SocialIcon'
import Link from 'next/link'
import {LaptopMinimal} from 'lucide-react'
import { Url } from 'next/dist/shared/lib/router/router'
import RevealSlide from './animation/RevealSlide'
import Reveal from './animation/Reveal'
// import { StaticImageData } from 'next/image'


interface ProjectCardType{
    name:string,
    // imgSrc: StaticImageData,
    imgSrc: string,
    tech:string[],
    content: string,
    githubLink ?: Url ,
    demoLink ?: Url ,
}

export const ProjectCard:React.FC<ProjectCardType> = (
    {name,imgSrc,tech,content,githubLink,demoLink}
) => {
  return (
    <Reveal className=''>
    <div className='w-full h-[550px] md:h-[520px]  hover:cursor-pointer'>
        <div className='w-full h-[180px] md:h-[220px] relative overflow-hidden hover:rounded-2xl'>
            <Image src={imgSrc} alt={name} priority={true}
            fill
            style={{objectFit:'contain'}}
            className='rounded-2xl hover:scale-105 bg-auto'
            />
            
        </div>
        <div className='w-full px-3 py-5 flex flex-col gap-5'>
            <div className='flex flex-col gap-2 '>
                <div className='flex justify-between'>
                    <RevealSlide><p className='text-xl font-bold '>{name}</p></RevealSlide>
                    <div className='flex gap-3 '>
                    <RevealSlide><Link href={demoLink? demoLink : "#project"}><LaptopMinimal size={30} color='white'/></Link></RevealSlide>
                    <RevealSlide><Link href={githubLink? githubLink : "#"} ><GithubIcon width='25' height='25'/></Link></RevealSlide>
                    </div>
                    
                </div>
                <hr />
            </div>
            <RevealSlide><p className='text-md'> {content}</p></RevealSlide>
            {/* <hr /> */}
            <div className='w-full flex flex-wrap gap-2 '>
            {
                
                tech.map((techName,index)=>{
                    return(
                        <RevealSlide key={index}>
                        <div key={index} className='text-sm bg-main text-gray-800 font-medium  px-2 py-2 rounded-full shadow-2xl'>
                            <span>{techName}</span>
                        </div>
                        </RevealSlide>
                    )
                })
                
            }
            </div>
            
        </div>

    </div>
    </Reveal>
  )
}

