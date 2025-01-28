import React from 'react'

// import CardSkills from './CardSkills';
import {HtmlIcon,CssIcon,JsIcon,TsIcon,PythonIcon,NodeJsIcon,ReactIcon,NextIcon,TailwindIcon,BootstrapIcon,FramerIcon,
MySqlIcon,PostgresIcon,MongoDBIcon,PrismaIcon,RedisIcon,GitIcon,GithubIcon,DockerIcon,PostmanIcon,SupabaseIcon,FirebaseIcon,ViteIcon
,ExpressIcon,RadixIcon,MaterialIcon,DaisyIcon,
JestIcon} from './SkillsIcon'

import Reveal from './animation/Reveal';

const widthSize = '70';
const heightSize = '70';

const IconList = [
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
  {Components: RedisIcon, name:'Redis' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: GitIcon, name:'Git' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: GithubIcon, name:'Github' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: DockerIcon, name:'Docker' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: PostmanIcon, name:'Postman' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: SupabaseIcon, name:'Supabase' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: FirebaseIcon, name:'Firebase' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: ViteIcon, name:'Vite' ,props:{width:widthSize, heightSize:heightSize}},
  {Components: JestIcon, name:'Jest' ,props:{width:widthSize, heightSize:heightSize}},


]

const LogoAnimation = () => {
    return (
        <Reveal className="w-full py-12">
        <div className="mx-auto w-full px-4 md:px-8">
            <p className='text-2xl font-bold text-center md:text-4xl '>Thank you for your time!</p>
            <div
                className="group relative mt-6 flex gap-6 overflow-hidden py-2 "
                style={{
                    maskImage:
                    'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
                }}
            >
                {Array.from({ length: 5 }, (_, index) => (
                    <div
                        key={index}
                        className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                    >
                        {
                        IconList.map(({Components,props},indexIcon)=>{
                            return(
                            <div key={indexIcon} className='w-full'
                            >
                                <Components {...props} />
                                {/* <CardSkills  Icon={Components} name={name} {...props} /> */}
                            </div>
                            )
                        })
                        }
                    </div>
                    ))}
                </div>
            </div>
        </Reveal>
        )
}

export default LogoAnimation