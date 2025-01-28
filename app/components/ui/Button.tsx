import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
    // initial style
    'inline-flex items-center justify-center rounded-md text-sm font-medium shadow-md hover:shadow-lg',
    {
        variants:{
            variant:{
                default:"bg-main text-black font-semibold hover:bg-green-600/90",
                secondary: "bg-black text-white font-semibold hover:bg-black-600/90"
            },
            size:{
                sm: "h-9 text-sm rounded-md px-3 py-2",
                md: "h-10 text-md rounded-md px-3 py-2",
                lg: "h-11 text-xl rounded-md px-4 py-2",
            },
        },
        defaultVariants:{
            variant:"default",
            size:"md"
        }
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>{}

const Button  = React.forwardRef<HTMLButtonElement,ButtonProps>(
    ({className,variant,size,...props},ref) =>{

  return (
    <button
        className= {cn(buttonVariants({variant,size}), className)}
        ref = {ref}
        {...props}
        >
        
    </button>
  )
},
)

Button.displayName = "Button"
export {Button}