import React from 'react'

interface InfoSubTitleProps {
    text: string
}

export default function InfoSubTitle({ text }: InfoSubTitleProps) {
    return (
        <div className='text-slate-700 mb-1.5 font-bold font-poppins'>{text}</div>
    )
}

