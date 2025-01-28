'use client'
import React,{useState} from 'react'
import CardSkills from '../CardSkills'
import RevealSlide from '../animation/RevealSlide'
import {HtmlIcon,CssIcon,JsIcon,TsIcon,PythonIcon,NodeJsIcon,ReactIcon,NextIcon,TailwindIcon,BootstrapIcon,FramerIcon,
MySqlIcon,PostgresIcon,MongoDBIcon,PrismaIcon,RedisIcon,GitIcon,GithubIcon,DockerIcon,PostmanIcon,SupabaseIcon,FirebaseIcon,ViteIcon
,ExpressIcon,RadixIcon,MaterialIcon,DaisyIcon,JestIcon,FigmaIcon,JWTIcon,
OpenCvIcon,ScikitLearnIcon,TensorFlowIcon,KerasIcon,MediaPipeIcon, UltralyticIcon,MetaIcon, NumpyIcon, pandasIcon,MatplotlibIcon
} from '../SkillsIcon'
import Reveal from '../animation/Reveal'
import { Button } from '../ui/Button'


const widthSize = '60';
const heightSize = '60';

const IconWebList = [
  {Components: HtmlIcon, name:'HTML' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: CssIcon, name:'CSS' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: JsIcon, name:'Javascript' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: TsIcon, name:'Typescript' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: PythonIcon, name:'Python' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: NodeJsIcon, name:'NodeJs' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: ReactIcon, name:'React' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: NextIcon, name:'Nextjs' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: ExpressIcon, name:'ExpressJs' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: TailwindIcon, name:'TailwindCss' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: BootstrapIcon, name:'Bootstrap' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: FramerIcon, name:'Framer' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: RadixIcon, name:'RadixUI' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: MaterialIcon, name:'MaterialUI' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: DaisyIcon, name:'DaisyUI' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: MySqlIcon, name:'MySQL' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: PostgresIcon, name:'PostgreSQL' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: MongoDBIcon, name:'MongoDB' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: PrismaIcon, name:'Prisma' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: JWTIcon, name:'JWT' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: RedisIcon, name:'Redis' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: GitIcon, name:'Git' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: GithubIcon, name:'Github' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: DockerIcon, name:'Docker' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: PostmanIcon, name:'Postman' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: SupabaseIcon, name:'Supabase' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: FirebaseIcon, name:'Firebase' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: ViteIcon, name:'Vite' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: FigmaIcon, name:'Figma' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: JestIcon, name:'Jest' ,props:{width:widthSize, heightSize:heightSize}},


]

const IconDataList = [
  {Components: PythonIcon, name:'Python' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: OpenCvIcon, name:'OpenCV' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: ScikitLearnIcon, name:'SkLearn' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: TensorFlowIcon, name:'TensorFlow' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: KerasIcon, name:'Keras' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: MediaPipeIcon, name:'MediaPipe' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: UltralyticIcon, name:'Ultralytic(YOLO)' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: MetaIcon, name:'Meta(SAM)' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: NumpyIcon, name:'Numpy' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: pandasIcon, name:'Pandas' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: MatplotlibIcon, name:'Matplotlib' ,props:{width:widthSize, heightSize:heightSize}},
]



function Skills() {
 
  const [category,setCategory] = useState<string>('webDev'); 
  
  
  return (
    <div className=' h-fit w-full  flex flex-col gap-5 md:gap-10'>
        <div className='w-full flex flex-col gap-5'>
            <RevealSlide><h1 className='text-4xl font-black md:text-5xl'>Skills</h1></RevealSlide>
            <hr />
        </div>

        <Reveal className='w-full'>
          <div className='w-full flex justify-center gap-5'>
            
            <Button className={`bg-[#0e0e0e] text-white text-sm md:text-lg border-b-4 ${category ==='webDev'? 'border-main' : 'border-gray-500'} rounded-b-none hover:bg-black/10`}
            onClick={()=>{setCategory('webDev')}}
            >Web Development
            </Button>
            <Button className={`bg-[#0e0e0e] text-white text-sm md:text-lg border-b-4 ${category === 'data'? 'border-main' : 'border-gray-500'}  rounded-b-none hover:bg-black/10`}
            onClick={()=>{setCategory('data')}}
            >Data Science & AI
            </Button>
          </div>
        </Reveal>
        
        {/* <div className=' w-full max-h-[450px] md:max-h-[580px] no-scrollbar overflow-y-auto pe-6  md:py-2 md:px-3 self-center grid grid-cols-12 gap-x-6 gap-y-5 lg:gap-y-7 lg:gap-x-10' */}
        <div className='w-full max-h-[450px] md:max-h-[580px] no-scrollbar overflow-y-auto flex flex-row flex-wrap justify-center  gap-3 md:gap-8  pb-10'
        style={{
          maskImage: `linear-gradient(to top, transparent, black 20%)`,
        }}>
          
        { category === 'webDev' &&
          IconWebList.map(({Components,name,props},index)=>{
            return(
              <Reveal key={index}>
                  <CardSkills  Icon={Components} name={name} {...props} />
              </Reveal>

            )
          })
        }

        { category === 'data' &&
            IconDataList.map(({Components,name,props},index)=>{
              return(
                <Reveal key={index}>
                    <CardSkills  Icon={Components} name={name} {...props} />
                </Reveal>

              )
            })
          }
        
        </div>
        
        
      
    </div>
  )
}

export default Skills