import React, { ElementType } from 'react'
import { Link } from 'react-scroll'

interface ButtonLinkProps {
    id: string,
    time: number,
    text: String,
    icon: ElementType,
}

export default function ButtonLink({ text, id, time, icon: Icon }: ButtonLinkProps) {
    return (
        <Link to={id} smooth={true} duration={time}
            className='flex items-center bg-emerald-200 p-4 rounded-2xl gap-x-3 transition-all duration-500
            font-semibold font-montserrat text-sm text-neutral-700 hover:text-neutral-200
            hover:cursor-pointer hover:bg-emerald-800 '>
            {text}
            <Icon className='animate-bounce' />
        </Link>
    )
}
