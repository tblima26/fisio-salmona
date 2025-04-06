import React from 'react'
import { Service } from './ServiceElements/Service'
import { serviceData } from './ServiceElements/ServiceData'
import SectionTitle from './Commum/SectionTitle'
import ButtonLink from './ButtonLink/ButtonLink'
import { PhoneCall } from 'lucide-react'

export default function Specially() {
    return (
        <div>
            <div className='flex items-center justify-between mb-10'>
                <div className='flex items-center gap-10'>
                    <SectionTitle title='Services' />
                    <div className='flex flex-col space-y-2 '>
                        <span className='text-emerald-800 text-4xl font-montserrat '>Focused Therapy</span>
                        <span className='text-neutral-500 text-4xl font-montserrat '>Health Solutions</span>
                    </div>
                </div>
                <div className='col-span-1 jus'>
                    <ButtonLink icon={PhoneCall} id='contact' text='Get Started on Your Recovery' time={700} />
                </div>
            </div>
            <div>
                <Service.Root>
                    {serviceData.map((service, index) => (
                        <Service.Card key={index}>
                            <div className='space-y-4 group-hover:text-neutral-100'>
                                <Service.Icon icon={service.icon} />
                                <Service.Title text={service.title} />
                            </div>
                            <Service.Content text={service.content} />
                        </Service.Card>
                    ))}
                </Service.Root>
            </div>
        </div>
    )
}
