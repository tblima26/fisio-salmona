import React, { ElementType } from 'react'

interface ServiceIconProps {
  icon: ElementType
}

export function ServiceIcon({ icon: Icon }: ServiceIconProps) {
  return (
    <div className='text-emerald-800 w-fit p-3 rounded-xl bg-emerald-100 transition-all duration-700
     group-hover:bg-emerald-50'>
      <Icon />
    </div>
  )
}
