import React, { ReactNode } from 'react'

interface FooterRootProps {
    children: ReactNode
}

export function FooterRoot({ children }: FooterRootProps) {
    return (
        <div className='flex h-2/3 w-7xl'>
            {children}
        </div>
    )
}
