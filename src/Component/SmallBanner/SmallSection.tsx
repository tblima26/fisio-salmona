import React, { ReactNode } from 'react'

interface SmallSectionProps {
    children: ReactNode
}
export function SmallSection({ children }: SmallSectionProps) {
    return (
        <div className='flex flex-col justify-center items-center px-16'>
            {children}
        </div>
    )
}
