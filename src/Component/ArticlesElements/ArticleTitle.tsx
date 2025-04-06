import React from 'react'

interface ArticleTitleProps {
    text: string
}

export function ArticleTitle({ text }: ArticleTitleProps) {
    return (
        <div className=' font-poppins text-justify text-xl 
        text-wrap'>
            {text}
        </div>
    )
}
