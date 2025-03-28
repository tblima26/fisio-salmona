import React, { ReactNode } from 'react'

interface ArticleRootProps {
    children: ReactNode
}

export function ArticleRoot({ children }: ArticleRootProps) {
    return (
        <div className='flex space-x-20 mt-10'>
            {children}
        </div>
    )
}
