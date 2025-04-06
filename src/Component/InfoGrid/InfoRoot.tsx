import React, { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface InfoRootProps {
    children: ReactNode,
}

export function InfoRoot({ children }: InfoRootProps) {
    const smallBanerRef = useRef(null)

    useEffect(() => {
        const smallBanner = smallBanerRef.current
        if (smallBanner) {
            gsap.fromTo(
                smallBanner,
                { opacity: 0, scale: 0.3 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: smallBanner,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, [])

    return (
        <div ref={smallBanerRef}
            className='relative grid grid-cols-3 divide-x-2 rounded-md 
        overflow-hidden divide-emerald-600 shadow-2xl opacity-0'>
            {children}
        </div>
    )
}
