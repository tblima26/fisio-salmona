import { ArrowDown } from 'lucide-react'
import React, { ButtonHTMLAttributes, ElementType } from 'react'

interface ArticleActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType
    text: string
}

export function ArticleAction({ icon: Icon, text, ...rest }: ArticleActionProps) {
    return (
        <button {...rest} className='flex gap-4 text-emerald-800 font-semibold
        font-codepro cursor-pointer p-3 hover:animate-pulse items-center'>
            <Icon />
            {text}
            <ArrowDown />
        </button>
    )
}
