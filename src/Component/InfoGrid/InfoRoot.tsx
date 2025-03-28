import React, { ReactNode } from 'react'

interface InfoRootProps {
    children: ReactNode,
}

export function InfoRoot({ children }: InfoRootProps) {
    return (
        <div className='relative grid grid-cols-3 divide-x-2 rounded-md overflow-hidden divide-emerald-600
        shadow-2xl '>
            {children}
        </div>
    )
}
