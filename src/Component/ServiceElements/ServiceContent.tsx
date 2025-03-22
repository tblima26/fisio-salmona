import React from 'react'

interface ServiceContentProps {
    text: string
}

export function ServiceContent({ text }: ServiceContentProps) {
    return (
        <div className='mt-5 font-poppins text-justify text-neutral-500 h-full
        transition-all duration-700
        group-hover:text-neutral-300'>
            {text}
        </div>
    )
}
