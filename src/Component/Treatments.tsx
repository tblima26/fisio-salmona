import { Check, CircleArrowDown } from 'lucide-react'
import React from 'react'
import { Treatment } from './TreatmentElements/Treatment'
import SectionTitle from './Commum/SectionTitle'
import ButtonLink from './ButtonLink/ButtonLink'

export default function Treatments() {
    return (
        <div className='flex items-center justify-center space-x-20 h-2/3'>
            <div className='flex flex-col space-y-10 w-2xl h-full'>
                <div>
                    <img src='../src/Images/shoulder.jpg'
                        className='h-64 w-2xl object-cover rounded-l-4xl rounded-br-4xl 
                    rounded-tr-[150px] shadow-2xl' />
                </div>
                <div className='flex justify-between space-x-20'>
                    <Treatment.Root>
                        <Treatment.Container>
                            <Treatment.Icon icon={Check} />
                            <Treatment.Text text="Personalized Treatment Plans" />
                        </Treatment.Container>
                        <Treatment.Container>
                            <Treatment.Icon icon={Check} />
                            <Treatment.Text text="Advanced Pain Management" />
                        </Treatment.Container>
                        <Treatment.Container>
                            <Treatment.Icon icon={Check} />
                            <Treatment.Text text="Certified Physiotherapists" />
                        </Treatment.Container>
                        <Treatment.Container>
                            <Treatment.Icon icon={Check} />
                            <Treatment.Text text="Sports Injury Rehabilitation" />
                        </Treatment.Container>
                        <Treatment.Container>
                            <Treatment.Icon icon={Check} />
                            <Treatment.Text text="Holistic Healing Approach" />
                        </Treatment.Container>
                        <Treatment.Container>
                            <Treatment.Icon icon={Check} />
                            <Treatment.Text text="Post-Surgical Recovery" />
                        </Treatment.Container>
                    </Treatment.Root>
                    <div className='flex flex-col w-1/2 bg-emerald-800 rounded-tr-4xl p-7 
                rounded-br-[150px] rounded-l-4xl text-white font-poppins justify-around'>
                        <span className='text-sm text-justify'>
                            “ The spine is the lifeline. A lorem lot of people should
                            go to a ipsum chiropractor but they don’t know it. ”
                        </span>
                        <div className=' flex flex-col space-y-3'>
                            <span className='text-xl'>
                                Dr. Karolina Salmona
                            </span>
                            <span>
                                Chyrone Founder
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-2xl flex flex-col space-y-10 justify-around
            h-full'>
                <div>
                    <SectionTitle title='Treatment' />
                </div>
                <div>
                    <span className='font-montserrat font-bold text-4xl
                    text-emerald-800'>
                        Comprehensive Care for Your Recovery
                    </span>
                </div>
                <div className='flex flex-col'>
                    <div className='text-justify text-xl text-overflow font-lato indent-4 text-neutral-800'>
                        Our approach to physiotherapy is designed to provide personalized
                        treatment plans tailored to your needs. With certified physiotherapists
                        and advanced pain management techniques, we ensure effective
                        rehabilitation for sports injuries and post-surgical recovery.
                    </div>
                    <div className='text-justify text-xl text-overflow font-lato indent-4 text-neutral-800'>
                        Through a holistic healing approach, we focus on restoring mobility,
                        reducing discomfort, and enhancing overall well-being.
                        Your health is our priority, and we are committed to guiding
                        you every step of the way.
                    </div>
                </div>
                <div>
                    <ButtonLink id='contact' time={900}
                        text="Talk To Me" icon={CircleArrowDown} />
                </div>

            </div>
        </div >
    )
}
