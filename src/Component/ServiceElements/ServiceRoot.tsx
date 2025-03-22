import React, { ReactNode } from 'react'

interface ServiceRootProps {
  children: ReactNode
}

export function ServiceRoot({ children }: ServiceRootProps) {
  return (
    <div className='grid grid-cols-4 gap-10' >
      {children}
    </div>
  )
}
