import React, { ReactNode } from 'react'

interface InfoCardProps {
    children: ReactNode
}

export function InfoCard({ children }: InfoCardProps) {
    return (
        <div className='flex flex-col px-4 py-3 bg-neutral-200 h-[165px] w-[350px]'>
            {children}
        </div>
    )
}
