import React, { ReactNode } from 'react'

interface AboutRootProps {
    children: ReactNode
}

export default function AboutRoot({ children }: AboutRootProps) {
    return (
        <div className='col-span-1 flex space-x-4 items-center'>
            {children}
        </div>
    )
}
