import React from 'react'

interface ArticleImageProps {
    path: string
}

export function ArticleImage({ path }: ArticleImageProps) {
    return (
        <div className='mb-6 '>
            <img src={path} className='w-full h-auto object-cover rounded-2xl ' />
        </div>
    )
}
