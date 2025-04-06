import React, { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'

interface SmallRootProps {
    children: ReactNode,
}

export function SmallRoot({ children }: SmallRootProps) {
    const smallRef = useRef(null)

    useEffect(() => {
        const smallSection = smallRef.current
        gsap.fromTo(smallSection,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: smallSection,
                    start: 'top 90%',
                }
            }
        )
    }, [])

    return (
        <div ref={smallRef} className='flex h-full items-center justify-center divide-x-2
         divide-neutral-100'>
            {children}
        </div>
    )
}
