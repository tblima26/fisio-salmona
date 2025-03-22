import React, { ReactNode } from 'react'

interface ServiceCardProps {
  children: ReactNode
}

export function ServiceCard({ children }: ServiceCardProps) {
  return (
    <div className='col-span-1 flex flex-col justify-between h-80 w-64 p-8 
    border-2 rounded-4xl border-neutral-200 group transition-all duration-700 
    hover:bg-emerald-800 hover:shadow-2xl'>
      {children}
    </div>
  )
}
