import React from 'react'

interface SmallTitleProps {
    text: string
}

export function SmallTitle({ text }: SmallTitleProps) {
    return (
        <div className='flex justify-center text-2xl text-white font-bold font-poppins'>
            {text}
        </div>
    )
}
