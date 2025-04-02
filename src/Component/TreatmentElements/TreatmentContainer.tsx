import React, { ReactNode } from 'react'

interface TreatmentContainerProps {
    children: ReactNode
}

export function TreatmentContainer({ children }: TreatmentContainerProps) {
    return (
        <div className='text-emerald-800 flex space-x-2 items-center '>
            {children}
        </div>
    )
}
