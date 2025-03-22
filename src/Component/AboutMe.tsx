import React from 'react'
import { About } from './AboutElements/About'
import { AboutIcon } from './AboutElements/AboutIcon'
import { BatteryPlus, Calendar, CircleArrowDown, CircleCheckBig, Dumbbell, Heart } from 'lucide-react'
import ButtonLink from './ButtonLink/ButtonLink'
import SectionTitle from './Commum/SectionTitle'

export default function AboutMe() {
    return (
        <div className='h-5/6 w-1/3 flex flex-col justify-between'>
            <SectionTitle title='About Me' />
            <div className='flex flex-col space-y-2'>
                <span className=' font-montserrat text-6xl text-slate-800'>
                    Personalized Care
                </span>
                <span className=' font-montserrat text-6xl text-slate-500'>
                    <p>Just for You</p>
                </span>
            </div>
            <span className='text-slate-500 font-poppins text-justify'>
                "Pain and injuries can arise unexpectedly. As a dedicated
                physiotherapist, I provide personalized services to offer quick,
                effective treatment, helping you manage discomfort, prevent further
                harm, and begin your healing journey without delay."
            </span>
            <div className='grid grid-cols-2 gap-10'>
                <About.Root>
                    <AboutIcon icon={BatteryPlus} />
                    <About.Text text='Recovery Strategies' />
                </About.Root>
                <About.Root>
                    <AboutIcon icon={CircleCheckBig} />
                    <About.Text text='Be Proactive' />
                </About.Root>
                <About.Root>
                    <AboutIcon icon={Dumbbell} />
                    <About.Text text='Workout Routines' />
                </About.Root>
                <About.Root>
                    <AboutIcon icon={Heart} />
                    <About.Text text='Support & Motivation' />
                </About.Root>
            </div>
            <hr className=' border-t-2 border-slate-400' />
            <div className='flex items-center justify-between'>
                <div className='flex space-x-5'>
                    <img src='./src/Images/salmona.png'
                        className='max-h-24 w-auto shadow-2xl rounded-full ' />
                    <div className='flex flex-col justify-around '>
                        <span className='text-2xl font-semibold font-poppins text-slate-800'>Dr. Karolina Bastos</span>
                        <span className='font-poppins text-slate-500'>Physiotherapy</span>
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
