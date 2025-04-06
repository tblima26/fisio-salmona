import React from 'react'


interface SmallSectionProps {
    children: React.ReactNode
}

export function SmallSection({ children }: SmallSectionProps) {


    return (
        <div className='flex flex-col justify-center items-center px-16'>
            {children}
        </div>
    )
}
