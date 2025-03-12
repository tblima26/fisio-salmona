import React, { ReactNode } from 'react'

interface MenuRootProps {
    children: ReactNode,
    link: string,
}

export function MenuRoot({ children, link }: MenuRootProps) {
    return (
        <a href={link} className='flex items-center gap-4'>
            {children}
        </a>
    )
}
