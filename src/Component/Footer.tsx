import { Link } from 'react-scroll'
import { MyFooter } from './FooterElements/Footers'

import React from 'react'
import { Landmark, Mail, MapPinned, PhoneCall } from 'lucide-react'

export default function Footer() {
    return (
        <div id="footer" className="w-full h-72 flex flex-col items-center justify-center 
        bg-neutral-800">
            <MyFooter.Root>
                <MyFooter.Card>
                    <Link to='top' smooth={true} duration={700} className='cursor-pointer' >
                        <span className='text-white text-4xl'>
                            Fisio Salmona
                        </span>
                    </Link>
                    <MyFooter.Text text='We understand that injuries and acute 
                    pain can happen unexpectedly. Our emergency physiotherapy.' />
                </MyFooter.Card>
                <MyFooter.Card>
                    <MyFooter.Title text='Working Hours' />
                    <MyFooter.Text text='Mon To Fri : 10:00 to 6:00' />
                    <MyFooter.Text text='Sat : 10:00AM to 3:00PM' />
                    <MyFooter.Text text='Sun : Closed' />
                </MyFooter.Card>
                <MyFooter.Card>
                    <MyFooter.Title text='Contact' />
                    <div className='flex flex-col space-y-4'>
                        <MyFooter.Content>
                            <MyFooter.Icon icon={PhoneCall} />
                            <MyFooter.Text text='+55 (61)981797054' />
                        </MyFooter.Content>
                        <MyFooter.Content>
                            <MyFooter.Icon icon={Mail} />
                            <MyFooter.Text text='fisiosalmona@gmail.com' />
                        </MyFooter.Content>
                        <MyFooter.Content>
                            <MyFooter.Icon icon={MapPinned} />
                            <MyFooter.Text text='QNM 38 Conj. I, casa 42.' />
                        </MyFooter.Content>
                    </div>
                </MyFooter.Card>
            </MyFooter.Root>
            <div className="w-7xl border-t border-neutral-600 mt-4" />

            {/* Copyright */}
            <p className="text-sm text-neutral-400 mt-2">
                © 2025 Physiocare. All Rights Reserved.
            </p>
        </div>
    )
}
