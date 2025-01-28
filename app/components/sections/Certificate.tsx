import React from 'react'
import { CertCard } from '../CertCard';
import azureCert from '@/public/assets/AZURE_FUNDAMENTAL_CERT.png'
import aiOncloudCert from '@/public/assets/AI_ON_CLOUD_CERT.png'
import RevealSlide from '../animation/RevealSlide';


const certCotent = [
  {imgSrc:aiOncloudCert,alt:'AI on cloud certificate', title:'AI on Cloud ', date: '18 Oct - 20 Dec 2022',
    contentList:[`Relate to fundamental of AI (Machine learning), computer vision, deep learning, and NLP, focusing on non-deep approaches.`,
      `Applied Automated ML in Azure to train and evaluate models without the need for coding.`,
      `Train, deploy and test models by using Microsoft Azure's platform.`
    ]},
  {imgSrc:azureCert,alt:'Azure fundamental certificate', title:'Azure Fundamentals', date:'18 Oct - 20 Dec 2022',
    contentList:['Learn how to use Azure services, fundametals of Azure and how to implement azure service with project' ,
      `Create 'Cognitive service' to enable people access multiple service with a single API keys `,
      'Learn to use Powershell with Git on cloud shell',
      `Create 'Language service' for NLP and learn to use 'Customvision.ai' to manage dataset for computer vision`
    ]}
] 

export const Certificate = () => {
  return (
    <div className='w-full h-fit font-rubik'>
        <div className='w-full flex flex-col gap-5'>
            <RevealSlide><h1 className='text-4xl font-bold md:text-5xl'>Certificate</h1></RevealSlide>
            <hr />
        </div>
        <div className='flex flex-col mt-5'>
            {
              certCotent.map(({imgSrc,alt,title,date,contentList},index)=>{
                return (
                  <CertCard key={index} 
                  imgSrc={imgSrc}  altImg ={alt}
                  title={title} date={date}
                  contentList={contentList}
                  />
                )
              })
            }
            
        </div>
    
    </div>
  )
}


export default Certificate;