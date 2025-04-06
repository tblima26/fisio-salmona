import React from 'react'

interface ArticleImageProps {
    path: string
}

export function ArticleImage({ path }: ArticleImageProps) {
    return (
        <div className=' h-96 mb-6'>
            <img src={path} className='w-full h-full object-cover rounded-2xl 
            object-center' />
        </div>
    )
}
