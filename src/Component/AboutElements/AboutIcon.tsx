import React, { ElementType } from 'react'

interface AboutIconProps {
    icon: ElementType
}

export function AboutIcon({ icon: Icon }: AboutIconProps) {
    return (
        <Icon className='text-slate-500 h-8 w-auto' />
    )
}
