import React from 'react'

interface AboutTextProps {
    text: string
}

export function AboutText({ text }: AboutTextProps) {
    return (
        <span className=' font-montserrat font-semibold text-xl text-emerald-800'>{text}</span>
    )
}
