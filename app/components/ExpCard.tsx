import React from 'react'
import RevealSlide from './animation/RevealSlide'


export interface ExpCardProps{
    companyName?:string,
    role?:string,
    time?:string,
    province?:string,
    intro?: string,
    project?:string,
    contentLists?:string[]
}

export const ExpCard:React.FC<ExpCardProps> =(
    {...props}
) => {
    const {companyName, role, time, province, intro, project, contentLists} = props;
  return (
    
    <div className='flex flex-col gap-2 my-5 bg-slate-5001'>
        <div className=' flex justify-between'>
            <div className='flex flex-col gap-2 me-10'>
                <RevealSlide><p className='md:text-xl font-medium '>{companyName}</p></RevealSlide>
                <RevealSlide><p className='md:text-lg text-main font-medium '>{role}</p></RevealSlide>
            </div>
            <div className='flex flex-col items-end gap-2 text-sm  md:text-lg'>
            <RevealSlide><p>{time}</p></RevealSlide>
            <RevealSlide><p>{province}</p></RevealSlide>
            </div>     
        </div>
        <div className='flex flex-col gap-2 mb-5'>
        <RevealSlide><p className='text-sm  indent-5 md:text-lg md:indent-10'>{intro}</p></RevealSlide>
        <RevealSlide><p className='text-md text-main font-medium md:text-lg '>Project: {project}</p></RevealSlide>
            <div className='text-sm indent-5 md:text-lg md:indent-10'>
                {
                    contentLists?.map((content,index)=>{
                        return(
                            <RevealSlide key={index}><li key={index} className=''>{content}</li></RevealSlide>
                        )
                    })
                }
            </div>
        </div>
        
        <hr />
    </div>

  )
}

