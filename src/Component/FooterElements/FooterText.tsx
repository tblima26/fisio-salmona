import React, { ElementType } from 'react'

interface FooterTextProps {
    text: string,

}

export function FooterText({ text }: FooterTextProps) {
    return (
        <div className='text-sm text-neutral-400'>
            {text}
        </div>
    )
}
