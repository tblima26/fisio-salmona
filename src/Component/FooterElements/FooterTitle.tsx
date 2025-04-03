import React from 'react'

interface FooterTitleProps {
    text: string
}
export function FooterTitle({ text }: FooterTitleProps) {
    return (
        <div className='text-2xl font-semibold font-poppins text-white'>
            {text}
        </div>
    )
}
