import React, { useEffect, useRef } from 'react'
import { z } from 'zod'
import { Loader, Send, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import SectionTitle from './Commum/SectionTitle'
import { zodResolver } from '@hookform/resolvers/zod'
import gsap from 'gsap'

const informationClientSchema = z.object({
    name: z.string().min(3, "Name must have at least 3 characters."),
    tel: z.string()
        .regex(/^\d{9,11}$/, "Phone number must have 9 or 11 digits."),
    email: z.string()
        .email("Invalid email address."),
    subject: z.string().min(5, "Subject must have at least 5 characters."),
    text: z.string().min(10, "Message must have at least 10 characters."),
});

type InformationClientSchema = z.infer<typeof informationClientSchema>

export default function ContactUs() {
    const formRef = useRef(null)
    const headRef = useRef(null)


    useEffect(() => {
        const formBase = formRef.current
        const head = headRef.current

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: head,
                start: "top 60%",
                toggleActions: "play none none none"
            },
            defaults: {
                duration: 1,
                ease: "power1.in"
            }
        })

        tl.fromTo(head,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0 }
        ).fromTo(formBase,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0 }
        )

    }, [])

    const { register, handleSubmit, formState: { errors, isSubmitting } } =
        useForm<InformationClientSchema>({
            resolver: zodResolver(informationClientSchema)
        })

    const handleCallWhatsapp = async (data: InformationClientSchema) => {
        const message = `Name: ${data.name}%0APhone: ${data.tel}%0AEmail: ${data.email}%0ASubject: ${data.subject}%0A%0A${data.text}`;
        const whatsappUrl = `https://wa.me/5561981797054?text=${message}`;
        await window.open(whatsappUrl, '_blank');
    };

    return (<>
        <div className="h-1/2 p-5  flex flex-col justify-between">
            <SectionTitle title='Contact Us' />
            <div ref={headRef}>
                <span className='font-montserrat font-bold text-4xl text-emerald-400 '>Contact </span>
                <span className='font-montserrat font-bold text-4xl text-emerald-800'> with Me today!</span>
            </div>
            <div ref={formRef} className=''>
                <form onSubmit={handleSubmit(handleCallWhatsapp)}
                    className="grid grid-cols-4 gap-4">
                    <input {...register('name')} type="text" placeholder="Name" className="w-full p-3 border border-neutral-300 placeholder-black text-slate-600 rounded-md  col-span-2" />
                    <input {...register('tel')} type="tel" placeholder="Phone" className="w-full p-3 border border-neutral-300 placeholder-black text-slate-600 rounded-md  col-span-2" />
                    <input {...register('email')} type="email" placeholder="Email" className="w-full p-3 border border-neutral-300 placeholder-black text-slate-600 rounded-md  col-span-2" />
                    <input {...register('subject')} type="subject" placeholder="subject" className="w-full p-3 border border-neutral-300 placeholder-black text-slate-600 rounded-md  col-span-2" />
                    <textarea {...register('text')} placeholder="How can I help you?"
                        className="w-full p-3 border border-neutral-300 placeholder-black text-slate-600 rounded-md col-span-4 resize-none" />
                    <button
                        className={`flex items-center justify-center p-3 font-bold rounded-2xl transition-all duration-600 font-montserrat
                                ${isSubmitting ? 'bg-gray-200 cursor-not-allowed text-emerald-800 border-2 border-emerald-800' : 'bg-emerald-500 hover:bg-emerald-800 text-white'}`}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <>
                            <span>Sending...</span><Loader className="  h-4 w-4 ml-3 animate-spin" />
                        </> : <>
                            <span>Send</span><Send className="h-4 w-4 ml-3" />
                        </>}
                    </button>
                </form>
            </div>
        </div >
        {Object.keys(errors).length > 0 && (
            <div className='flex flex-col justify-around border-2 border-red-500 h-auto p-5 mt-6' >
                {errors.name && <div className="flex text-red-500 text-sm items-center"><X /> {errors.name.message}</div>}
                {errors.tel && <div className="flex text-red-500 text-sm items-center"><X />{errors.tel.message}</div>}
                {errors.email && <div className="flex text-red-500 text-sm items-center"><X />{errors.email.message}</div>}
                {errors.subject && <div className="flex text-red-500 text-sm items-center"><X />{errors.subject.message}</div>}
                {errors.text && <div className="flex text-red-500 text-sm items-center"><X />{errors.text.message}</div>}
            </div>
        )}
    </>
    )
}
