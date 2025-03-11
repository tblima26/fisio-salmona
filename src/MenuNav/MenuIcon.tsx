import React, { ElementType } from 'react'

interface MenuIconProps {
    icon: ElementType
}

export function MenuIcon({ icon: Icon }: MenuIconProps) {
    return (
        <Icon />
    )
}
