import React, { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'

interface ServiceCardProps {
  children: ReactNode
}

export function ServiceCard({ children }: ServiceCardProps) {
  const cardRef = useRef(null)
  useEffect(() => {
    const card = cardRef.current

    gsap.fromTo(
      card,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        }
      }
    )
  }, [])


  return (
    <div ref={cardRef} className='col-span-1 flex flex-col justify-between h-80 w-64 p-8 
    border-2 rounded-4xl border-neutral-200 group transition-all duration-700 
    hover:bg-emerald-800 hover:shadow-2xl'>
      {children}
    </div>
  )
}
