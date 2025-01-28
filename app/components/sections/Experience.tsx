import React from 'react'
import { ExpCard, type ExpCardProps } from '../ExpCard'
import RevealSlide from '../animation/RevealSlide'

const contentLists:ExpCardProps[] = [
  {companyName:'ABB AUTOMATION (THAILAND) CO.,LTD', 
    role:'Project Engineer (Internship)',time:'1 Jun - 29 Jul 2022',
    province:'Samutprakarn',
    intro: 'I was an intern at ABB AUTOMATION. A senior assigned me to create a programs that could draw images which receive from input image files or capture image from camera then covert them to RAPID files and display 3D simulation in RobotStudio(ABB application). ',
    project:'Drawing Robot', 
    contentLists:['Applied image processing techniques to preprocess and obtained sketch image.',
      'Applied TSP (The Traveling Salesman Problem) algorithm to optimized path of drawing.',
      'Calculate z-axis position and convert Python code to RAPID code in RobotStudio.',
      'The RAPID code simulated in 3D to draw the image which capture from camera. '
    ]},
  {companyName:'THAI STANLEY ELECTRIC PUBLIC COMPANY LIMITED', 
      role:'Design Engineer (R&D)',time:'1 Feb - 10 June 2024',
      province:'Pathumthani',
      intro: 'The first job as a Design engineer role, I have experience with Solidwork, CATIA v5, used to design in 2D for sketch structure and 3D with Hybrid design(Solid & Surface patterns) to design motorcycle lamp. Learn how to schedule times of development, material cost analysis, light simulation, testing(heat,vibration) to obtain the certification for customers and learn to collaborate with other teams.',
      project:'Motorcycle head lamp (Honda)', 
      contentLists:['Planned schedule to researching materials, coordinating with other teams, design and development of motorcycle lamp.',
        'Designed 2D sketch and 3D parts of motorcycle lamp in CATIAv5 (Solid and Surface).',
        'Prepared drawing parts reference with carline axis for the customers.',
        'Prepared heat and light simulation report to verify performance of lamp.',
        'Tested prototype other project for vibration testing.',
    ]},

]

export default function Experience() {
  return (
    <div className='h-fit w-full font-rubik'>
        <div className='w-full flex flex-col gap-2'>
            <RevealSlide><h1 className='text-4xl  font-bold  md:text-5xl'>Experience</h1></RevealSlide>
            <hr />
        </div>

        <div className='w-full'>
          {
            contentLists.map((
              {companyName, role,time,province,intro, project, contentLists},index
            ) =>{
              return(
                <ExpCard key={index} companyName={companyName} role={role} 
                time={time} province={province} intro={intro} project={project} contentLists={contentLists}/>
              )
            })
          }
          
        </div>

    </div>
  )
}
