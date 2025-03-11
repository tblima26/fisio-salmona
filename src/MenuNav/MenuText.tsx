import React from 'react'

interface MenuTextProps {
    text: string
}

export function MenuText({ text }: MenuTextProps) {
    return (
        <span>{text}</span>
    )
}
