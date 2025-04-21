import React, { ReactNode } from 'react'
import { Link } from 'react-scroll'


interface MenuRootProps {
    children: ReactNode,
    id: string,
    time: number,
    onClick?: () => void,
}

export function MenuRoot({ children, id, time }: MenuRootProps) {
    return (
        <Link to={id} smooth={true} duration={time}
            className='flex items-center space-x-1 cursor-pointer 
            transition-transform duration-300 hover:-translate-y-1 hover:opacity-80"'>
            {children}
        </Link>
    )
}
