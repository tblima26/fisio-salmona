import React from 'react'
import { Service } from './ServiceElements/Service'
import { serviceData } from './ServiceElements/ServiceData'
import { Rocket } from 'lucide-react'

export default function Specially() {
    return (
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
    )
}
