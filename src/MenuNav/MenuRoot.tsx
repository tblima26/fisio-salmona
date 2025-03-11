import React, { ReactNode } from 'react'

interface MenuRootProps {
    children: ReactNode
}

export function MenuRoot({ children }: MenuRootProps) {
    return (
        <a>
            {children}
        </a>
    )
}
