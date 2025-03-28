import React, { ReactNode } from 'react'

interface ArticleContentProps {
    children: ReactNode
}

export function ArticleContent({ children }: ArticleContentProps) {
    return (
        <div className='justify-between space-y-3'>
            {children}
        </div>
    )
}
