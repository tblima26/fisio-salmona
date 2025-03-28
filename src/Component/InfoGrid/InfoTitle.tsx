import { title } from 'process'
import React, { ElementType } from 'react'

interface InfoTitleProps {
    title: string
    icon: ElementType
}

export function InfoTitle({ title, icon: Icon }: InfoTitleProps) {
    return (
        <div className='flex items-center text-xl text-emerald-600
         font-poppins space-x-4 mb-2'>
            <div>
                <Icon className='w-6 h-auto' />
            </div>
            <div>
                {title}
            </div>
        </div>
    )
}
