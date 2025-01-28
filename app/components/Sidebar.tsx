'use client'
import React,{useState} from 'react'
import { X,Menu} from 'lucide-react'
import { Button } from './ui/Button'
import {motion} from 'motion/react'
import Link from 'next/link'


// const variants = {
//     hidden:{
        
//     }
// }

interface NavListProps{
    navMenu:string[][],

}

const Sidebar:React.FC<NavListProps> = ({navMenu}) => {

    const [click,setClick] = useState<boolean>(false)
    // console.log('click:',click)
    // console.log(navMenu)

  return (
    <div className='flex md:hidden h-full items-center justify-end px-5 '>
        {!click && <Button variant={'secondary'} className='bg-black fixed z-20' onClick={()=>{setClick(!click)}}>
            <Menu size={30} color='white' />
        </Button>}
        {click && 
            <motion.div className='fixed inset-y-0 inset-x-16  top-0 right-0 z-20 bg-black 
            flex flex-col gap-1 px-5 py-2'
            initial={{opacity:1}} animate={{opacity:1,left:['100%','30%']}} transition={{duration:0.75, delay:0.25, ease:'easeIn'}}
            > 
                <Button variant={'secondary'} className='bg-black w-2/12 p-0 m-0' 
                onClick={()=>{setClick(!click)}}>
                    <X size={30} color='white' />
                </Button>

                {navMenu.map(([title,link],index)=>{
                    // console.log(title,link)
                    return(
                        <Link href={link} key={index} className='h-20 flex text-xl font-bold items-center w-3/4 hover:border-b-2 hover:border-main hover:text-main'>
                            <p key={index}>{title}</p>
                        </Link>
                    )
                })}
                
            </motion.div>
            
            }

        

     </div>

     

    
  )
}

export default Sidebar