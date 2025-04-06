import React, { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'

interface ServiceRootProps {
  children: ReactNode
}

export function ServiceRoot({ children }: ServiceRootProps) {
  const divRef = useRef(null)
  useEffect(() => {
    const div = divRef.current

    gsap.fromTo(div,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
      }
    )

  }, [])
  return (
    <div ref={divRef} className='grid grid-cols-4 gap-10' >
      {children}
    </div>
  )
}
