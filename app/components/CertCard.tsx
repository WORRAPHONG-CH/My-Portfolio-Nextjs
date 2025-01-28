import React from 'react'
import Image, { StaticImageData } from 'next/image'
import RevealSlide from './animation/RevealSlide'
import Reveal from './animation/Reveal';

interface CertProps{
  imgSrc:StaticImageData,
  altImg: string,
  title:string,
  date:string,
  contentList?:string[],
}

export const CertCard:React.FC<CertProps> = (
    {imgSrc,altImg, title,date, contentList}
) => {

  return (
    <div className='grid grid-cols-12 w-full my-5 gap-y-5  font-rubik'>
        <div className='col-span-12 md:col-span-5 relative w-full  bg-slate-50  '>
          <Reveal className='w-full flex justify-center'>
          <Image src={imgSrc} alt={altImg}  priority={true} 
          style={{objectFit:'cover' , width:'100%', height:'auto'}}
          className=''
          />
          </Reveal>
  
        </div>

        <div className='col-span-12 h-fit  md:col-span-7 md:px-20 md:py-3'>
          <div className='w-full flex justify-between items-center mb-5 md:mb-5'>
            <RevealSlide><p className='font-bold  text-xl md:text-3xl'>{title}</p></RevealSlide>
            <RevealSlide><p className='text-sm md:text-lg'>{date}</p></RevealSlide>
          </div>

          {
            contentList?.map((content,index)=>{
              return (
                <RevealSlide key={index}>
                <li key={index} className='text-md indent-5 md:indent-4 md:text-xl'
                >{content}</li>
                </RevealSlide>
              )
            })
          }

        </div>
    </div>
  )
}

