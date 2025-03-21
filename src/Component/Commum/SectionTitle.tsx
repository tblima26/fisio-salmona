import React from 'react'

interface SectionTitleProps {
    title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className="w-fit bg-emerald-300 p-3 rounded-2xl ">
            <span className='font-montserrat font-bold text-sm text-neutral-100 '>
                {title}
            </span>
        </div>
    )
}
