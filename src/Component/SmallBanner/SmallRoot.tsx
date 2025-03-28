import React, { ReactNode } from 'react'

interface SmallRootProps {
    children: ReactNode,
}

export function SmallRoot({ children }: SmallRootProps) {
    return (
        <div className='flex h-full items-center justify-center divide-x-2
         divide-neutral-100'>
            {children}
        </div>
    )
}
