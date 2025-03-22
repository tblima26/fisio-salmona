import React from 'react'

interface ServiceTitleProps {
  text: string
}

export function ServiceTitle({ text }: ServiceTitleProps) {
  return (
    <div className=' text-emerald-800  text-xl font-semibold font-montserrat
     group-hover:text-neutral-100 transition-all duration-700'>
      {text}
    </div>
  )
}
