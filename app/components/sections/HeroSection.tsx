import { Button } from '../ui/Button';
import Image from 'next/image';
import TechSVG from '@/public/assets/tech.svg'
// import BackgroundGrid from '../ฺGridBackground';
import RevealSlide from '../animation/RevealSlide';
import LoopUpdown from '../animation/LoopUpdown';
import Link from 'next/link';


function HeroSection() {
  // console.log('hello Parent')
  return (
    <div className="min-w-full h-fit md:h-[100vh] md:ps-20 font-rubik grid grid-cols-12 mt-10 md:mt-0 relative">
      {/* <BackgroundGrid className="absolute inset-0 w-full " /> */}
      
      <div className='col-span-12 md:col-span-6 md:flex md:flex-col md:justify-center '>
        
          <div className='flex flex-col gap-3 md:px-0 md:w-full md:flex-col md:items-start md:gap-4 '>
          <RevealSlide>
          <h1 className='font-rubik font-extrabold text-5xl md:text-6xl xl:text-7xl'>
              {`Hi, I'm Park.`}
            </h1>
            </RevealSlide>
            {/* <p className='font-semibold text-2xl md:text-3xl '>Worraphong Chenvigyakit</p> */}
            <RevealSlide>
            <div className='flex items-center gap-2'>
              <p className='text-lg md:text-4xl '>{`I'm a`}</p>
              <p className='font-extrabold text-2xl md:text-4xl text-main leading-relaxed1 '>Software Developer</p>
            </div>
            </RevealSlide>
            <RevealSlide>
            <p className='text-sm w-11/12 md:text-lg '>{`I was a student of Robotics Engineering who is interested in web development, AI, data science and IOT. `}</p>
            </RevealSlide>
            
            <RevealSlide><p className='font-extrabold text-lg md:text-xl '>{`Let's keep in touch !`}</p></RevealSlide>
            
            <RevealSlide>
            <div className='my-2 flex gap-3'>
              {/* <Button className='text-sm md:text-md'>Contact Me</Button> */}
              <Link href={`https://drive.google.com/file/d/1pMrcsH30xXS6nfJ6-mYW1pGKwYj4ioUJ/view?usp=drive_link`}>
              <Button className='text-sm md:text-md '>Get Resume</Button>
              </Link>
            </div>
            </RevealSlide>
          </div>
        
          
      </div>
      
      <div className='col-span-12 w-10/12 relative md:w-full md:items-center md:flex md:col-span-6 md:flex-col md:pl-1 md:pt-20  '>
        <LoopUpdown>
        <Image alt='tech-svg' src={TechSVG} 
        sizes= '(max-width:768px) 100px'
        priority={true}
        style={{objectFit:'cover'}}
       
        /> 
        </LoopUpdown>
      </div>
      
    </div>
  )
}

export default HeroSection