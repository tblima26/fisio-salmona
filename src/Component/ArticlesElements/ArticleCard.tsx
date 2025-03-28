import React, { ReactNode } from 'react'
interface ArticleCardProps {
    children: ReactNode
}

export function ArticleCard({ children }: ArticleCardProps) {
    return (
        <div className='flex flex-col w-sm h-auto space-y-4 border-2 border-neutral-300 p-4 rounded-3xl group'>
            {children}
        </div>
    )
}
