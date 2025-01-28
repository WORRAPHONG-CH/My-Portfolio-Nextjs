'use client'
import React,{ useEffect} from 'react'
import {motion, useInView, useAnimate} from 'motion/react'


interface RevealProps {
    children: React.JSX.Element,
    width?: 'fit' | "100%";
    
}



const RevealSlide:React.FC<RevealProps> = (
    {children, width = 'fit'}
) => {
    // console.log('hello child')
    // const ref = useRef(null);
    // const isInView = useInView(ref,{once:true}) // once: true => prevent continue firing on/off from scroll forward and backward
    const [scope,animate] = useAnimate();
    const isInView = useInView(scope,);

    
    useEffect(() => {
        // console.log('InView:', isInView);
        if (isInView) {
            // Fire animation
            const handleAnimate = async () => {
                animate([
                    [scope.current, { opacity: [0,1] , y:[20,0]}, {duration:0.5, delay:0.25} ],
                    ['#slide', {left:[0,'100%']}, {duration:0.5,ease:'easeIn'}]
                ]);
            };
            handleAnimate();
        }
    }, [isInView,animate,scope]);

    return (
        <div ref={scope} className={`w-${width} relative overflow-hidden`}>
            <motion.div id='target'  >
                {children}
            </motion.div>

            {/* Add slide div */}
            <motion.div id='slide' className='bg-main absolute top-0 bottom-0 right-0 left-0 z-20 '>
                
            </motion.div>

        </div>
  )
}

export default RevealSlide