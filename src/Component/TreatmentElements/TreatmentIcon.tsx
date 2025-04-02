import React, { ElementType } from 'react'

interface TreatmentIconProps {
    icon: ElementType
}
export function TreatmentIcon({ icon: Icon }: TreatmentIconProps) {
    return (
        <div>
            <Icon className='size-6' />
        </div>
    )
}
