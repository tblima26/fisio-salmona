import React from 'react'

interface SectionTitleDarkProps {
    title: string
}

export default function SectionTitleDark({ title }: SectionTitleDarkProps) {
    return (
        <div className="w-fit bg-emerald-800 p-3 rounded-2xl ">
            <span className='font-montserrat font-bold text-sm text-white '>
                {title}
            </span>
        </div>
    )
}
