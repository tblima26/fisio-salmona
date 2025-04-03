import React, { ReactNode } from 'react'

interface FooterContentProps {
    children: ReactNode,
}

export function FooterContent({ children }: FooterContentProps) {
    return (
        <div className='flex space-x-7 items-center'>
            {children}
        </div>
    )
}
