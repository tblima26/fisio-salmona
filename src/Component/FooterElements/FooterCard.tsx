import React, { ReactNode } from 'react'

interface FooterCardProps {
    children: ReactNode
}

export function FooterCard({ children }: FooterCardProps) {
    return (
        <div className="flex flex-col h-full w-[600px] items-center 
        justify-between break-words text-center p-4">
            {children}
        </div>
    )
}
