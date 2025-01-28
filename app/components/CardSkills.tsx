import React from 'react'
import {motion} from 'motion/react'

export interface CardSkillProps{
    Icon: React.ElementType,
    name:string,
    width?:string,
    height?:string,
}

const CardSkills:React.FC<CardSkillProps> = (
    { Icon,name, ...props }
) => {
    
  return (
    <motion.div className=' flex flex-col gap-1 md:gap-5 w-24 h-28 md:w-36 md:h-36 py-5 items-center border border-gray-600
        rounded-lg shadow-md  backdrop-blur-lg  bg-gray-800   hover:shadow-white '
    whileHover={{scale:1.05}}
    >
        {Icon && <Icon {...props}/>}
        <p className='text-gray-300 font-medium text-sm  md:text-lg'>{name}</p>
    </motion.div>
  )
}

export default CardSkills