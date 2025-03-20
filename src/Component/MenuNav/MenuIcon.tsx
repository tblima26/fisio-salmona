import React, { ElementType } from 'react'

interface MenuIconProps {
    icon: ElementType
}

export function MenuIcon({ icon: Icon }: MenuIconProps) {
    return (
        <Icon className=' mr-1.5 ' />
    )
}
