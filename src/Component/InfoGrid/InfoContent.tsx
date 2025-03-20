import React from 'react'

interface InfoContentProps {
    text: string
}

export function InfoContent({ text }: InfoContentProps) {
    return (
        <div className='text-neutral-500 text-justify font-poppins text-xs'>
            {text}
        </div>
    )
}
