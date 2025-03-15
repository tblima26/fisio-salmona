import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-scroll'


interface MenuRootProps {
    children: ReactNode,
    id: string,
    time: number,
}

export function MenuRoot({ children, id, time }: MenuRootProps) {
    return (
        <Link to={id} smooth={true} duration={time} className='flex items-center space-x-1 cursor-pointer'>
            {children}
        </Link>
    )
}
