
import React,{useEffect} from 'react'
import {motion,useInView,useAnimate} from 'motion/react'

interface UpDownProps {
    children: React.JSX.Element,
    width?: 'fit' | '100%',
    className?: string,
}

const LoopUpdown:React.FC<UpDownProps>= (
    {children,width='fit',className}
) => {

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope); //boolean

    useEffect(()=>{
        if(isInView){
            const animateUD = async () =>{
                await animate([
                    [scope.current, { opacity: [0, 1] }, { duration: 0.5, delay: 0.75 }],
                    [scope.current, { y: [0,30,30,0] }, { repeat: 19, duration: 2 ,delay:0.25, ease:'easeInOut'}],
                
                ])
            }
            animateUD();

        }
        
    },[isInView,animate,scope])

  return (
    <div ref ={scope} className={`w-${width} ${className}`}>
        <motion.div>
            {children}
        </motion.div>

    </div>
  )
}

export default LoopUpdown