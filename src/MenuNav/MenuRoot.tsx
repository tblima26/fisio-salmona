import React, { AnchorHTMLAttributes, ReactNode } from 'react'

interface MenuRootProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode,
}

export function MenuRoot({ children, ...props }: MenuRootProps) {
    return (
        <a {...props} href='###' className='flex items-center space-x-1'>
            {children}
        </a>
    )
}
