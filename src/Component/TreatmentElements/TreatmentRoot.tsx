import React, { ReactNode } from 'react'

interface TreatmentRootProps {
    children: ReactNode
}

export function TreatmentRoot({ children }: TreatmentRootProps) {
    return (
        <div className='flex flex-col  w-1/2 
                p-7 rounded-4xl justify-around space-y-3'>
            {children}
        </div>
    )
}
