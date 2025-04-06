import React, { useEffect, useRef } from 'react'
import { About } from './AboutElements/About'
import { BatteryPlus, CircleArrowDown, CircleCheckBig, Dumbbell, Heart } from 'lucide-react'
import ButtonLink from './ButtonLink/ButtonLink'
import SectionTitle from './Commum/SectionTitle'
import gsap from 'gsap'

export default function AboutMe() {
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const optionsRef = useRef(null)
    const baseRef = useRef(null)

    useEffect(() => {
        const title = titleRef.current
        const text = textRef.current
        const options = optionsRef.current
        const base = baseRef.current

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: title, // ou pode criar uma `sectionRef` como container
                start: "top 60%", // inicia com 40% visível
                toggleActions: "play none none none",
            },
            defaults: {
                duration: 0.4,
                ease: "power2.out",
            }
        })

        tl.fromTo(title,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, }
        ).fromTo(text,
            { opacity: 0, x: -100, },
            { opacity: 1, x: 0, }
        ).fromTo(options,
            { opacity: 0, scale: 0.8, },
            { opacity: 1, scale: 1, }
        ).fromTo(base,
            { opacity: 0, y: 100, },
            { opacity: 1, y: 0, }
        )

    }, []
    )


    return (
        <div
            className='h-5/6 w-1/3 flex flex-col justify-between'>
            <SectionTitle title='About Me' />
            <div className='flex flex-col space-y-2' ref={titleRef}>
                <span className=' font-montserrat text-6xl text-emerald-800'>
                    Personalized Care
                </span>
                <span className=' font-montserrat text-6xl text-neutral-500'>
                    <p>Just for You</p>
                </span>
            </div>
            <span ref={textRef} className='text-neutral-500 font-poppins text-justify'>
                "Pain and injuries can arise unexpectedly. As a dedicated
                physiotherapist, I provide personalized services to offer quick,
                effective treatment, helping you manage discomfort, prevent further
                harm, and begin your healing journey without delay."
            </span>
            <div ref={optionsRef} className='grid grid-cols-2 gap-10'>
                <About.Root>
                    <About.Icon icon={BatteryPlus} />
                    <About.Text text='Recovery Strategies' />
                </About.Root>
                <About.Root>
                    <About.Icon icon={CircleCheckBig} />
                    <About.Text text='Be Proactive' />
                </About.Root>
                <About.Root>
                    <About.Icon icon={Dumbbell} />
                    <About.Text text='Workout Routines' />
                </About.Root>
                <About.Root>
                    <About.Icon icon={Heart} />
                    <About.Text text='Support & Motivation' />
                </About.Root>
            </div>
            <hr className=' border-t-2 border-emerald-800' />
            <div ref={baseRef} className='flex items-center justify-between'>
                <div className='flex space-x-5'>
                    <img src="/Images/salmona.png" className="max-h-24 w-auto shadow-2xl rounded-full" />

                    <div className='flex flex-col justify-around '>
                        <span className='text-2xl font-semibold font-poppins text-emerald-800'>Dr. Karolina Bastos</span>
                        <span className='font-poppins text-neutral-500'>Physiotherapy</span>
                    </div>
                </div>
                <div>
                    <ButtonLink id='contact' time={900}
                        text="Make An Appointment" icon={CircleArrowDown} />
                </div>
            </div>
        </div>
    )
}
