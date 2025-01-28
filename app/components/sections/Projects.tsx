import React from 'react'
import { ProjectCard } from '../ProjectCard';
// import LogoKMUTNB from '@/public/assets/logo-kmutnb.jpg'
import RevealSlide from '../animation/RevealSlide';

const projectContentList = [
  { name: 'Whisper Blog', imgSrc: '/assets/whisper.png',
    tech: ['Nextjs', 'Typescript', 'PostgreSQL', 'Prisma', 'TailwindCss', 'Framer', 'Supabase', 'Docker', 'Vercel'],
    content: 'Whisper Blog is a web application for people who want to share their life stories whether lifestyle, article, technology, travel and more',
    githubLink: 'https://github.com/WORRAPHONG-CH/whisper-blog', 
    demoLink: 'https://whisper-blog-sigma.vercel.app/' },
  { name: 'Atlanta', imgSrc: '/assets/Atlanta.png',
    tech: ['React', 'TailwindCss','DaisyUI', 'Framer-motion', 'Vercel'],
    content: 'The Atlanta Restaurant Website is a dynamic and responsive web application designed to showcase a restaurant’s menu, including various categories such as foods, drinks, and desserts.',
    githubLink: 'https://github.com/WORRAPHONG-CH/Atlanta-react-vite', 
    demoLink: 'https://atlanta-react-vite.vercel.app/' },
  { name: 'PARKSHOT', imgSrc: '/assets/Parkshot.png',
    tech: ['HTML', 'CSS', 'javascript', 'Boostrap','Firebase'],
    content: 'PARKSHOT is a simple website with responsive design and represent about a photographer who want to show his work and services',
    githubLink: '', 
    demoLink: 'https://parkshot-dc780.firebaseapp.com/' },
  { name: 'Shrimp Length Estimation', imgSrc: '/assets/Shrimp.png',
    tech: ['Python', 'OpenCV','Ultralytic(YOLOv8)','SAM','Scikit-learn','numpy','matplotlib'],
    content: 'This project aims to predict shrimp size by capturing from video using image-processing technique, YOLOv8 for shrimp detection, SAM for Shrimp segmentation, Sklearn for provide ML models.',
    githubLink: 'https://github.com/WORRAPHONG-CH/Shrimp-Size-Estimation', 
    demoLink: '' },
  { name: 'Hand-Sign-Classification', imgSrc: '/assets/handsign.png',
    tech: ['Python', 'OpenCV','MediaPipe','Scikit-learn','numpy','matplotlib'],
    content: 'This project aims to applied Mediapipe with machine learning models and image processing to classify the hand sign into 5 classes (“LIKE”, “DISLIKE”, “OK”, “LOVE”, “STOP”).',
    githubLink: 'https://github.com/WORRAPHONG-CH/Hand-Sign-Classification', 
    demoLink: '' },
  { name: 'ABB Drawing Robot', imgSrc: '/assets/ABB.png',
    tech: ['Python', 'OpenCV','TSP'],
    content: 'I was an intern at ABB AUTOMATION. A senior assigned me to create a programs that could draw images which receive from input image files or capture image from camera',
    githubLink: 'https://github.com/WORRAPHONG-CH/ABB-Drawing-Robot-with-ImageProcessing', 
    demoLink: '' },
]

const Projects = () => {
  return (
    <div className='w-full h-screen md:h-fit'>
      <div className='w-full flex flex-col gap-5'>
        <RevealSlide><h1 className='text-4xl font-extrabold md:text-5xl'>Projects</h1></RevealSlide>
        <hr />
      </div>
      <div className='w-full h-[calc(100vh-100px)] grid grid-cols-12 gap-y-5 mt-8 lg:gap-x-5 lg:gap-y-8 overflow-y-auto md:no-scrollbar'>
        {
          projectContentList.map(({ name, imgSrc, tech, content, githubLink, demoLink }, index) => {
            return (
              <div key={index} className='col-span-12 lg:col-span-4 rounded-b-2xl shadow-2xl'>
                <ProjectCard name={name} imgSrc={imgSrc} tech={tech} content={content}
                  githubLink={githubLink} demoLink={demoLink}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects;
