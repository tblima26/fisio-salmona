import React, { ElementType } from 'react'

interface FooterIconProps {
    icon: ElementType
}

export function FooterIcon({ icon: Icon }: FooterIconProps) {
    return (
        <div className='text-white '>
            <Icon />
        </div>
    )
}
''