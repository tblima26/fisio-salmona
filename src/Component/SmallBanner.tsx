import React from 'react'
import { Small } from './SmallBanner/Small'

export default function SmalBanner() {
    return (
        <div className='w-full h-[10vw] bg-emerald-800'>
            <Small.Root>
                <Small.Section>
                    <Small.Title text='Schedule' />
                    <Small.Content text='Monday to Friday, open from 8 AM to 4 PM.' />
                </Small.Section>
                <Small.Section>
                    <Small.Title text='Proven Results' />
                    <Small.Content text='Effective techniques for a fast recovery.' />
                </Small.Section>
                <Small.Section>
                    <Small.Title text='Flexible Scheduling' />
                    <Small.Content text='Convenient appointment times for your schedule.' />
                </Small.Section>
            </Small.Root>
        </div>
    )
}
