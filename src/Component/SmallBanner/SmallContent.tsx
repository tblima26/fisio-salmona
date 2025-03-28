import React from 'react'

interface SmallContentProps {
    text: string
}
export function SmallContent({ text }: SmallContentProps) {
    return (
        <div className='flex justify-center text-sm text-neutral-200 font-montserrat'>
            {text}
        </div>
    )
}
