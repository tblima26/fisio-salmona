import React from 'react'

interface TreatmentTextProps {
    text: string
}

export function TreatmentText({ text }: TreatmentTextProps) {
    return (
        <div className='font-poppins text-sm'>
            {text}
        </div>
    )
}
