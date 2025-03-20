import { Send } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import SectionTitle from './Commum/SectionTitle'

export default function ContactUs() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

    return (
        <div className="h-1/2 p-5  flex flex-col justify-between">
            <SectionTitle title='Contact Us' />
            <div className=" ">
                <span className='font-montserrat font-bold text-4xl text-slate-500 '>Connect </span>
                <span className='font-montserrat font-bold text-4xl text-slate-800'> with Us today!</span>
            </div>
            <div className=''>
                <form className="grid grid-cols-4 gap-4">
                    <input {...register('name')} type="text" placeholder="Name" className="w-full p-3 border border-neutral-300 placeholder-black text-slate-600 rounded-md  col-span-2" />
                    <input {...register('tel')} type="tel" placeholder="Phone" className="w-full p-3 border border-neutral-300 placeholder-black text-slate-600 rounded-md  col-span-2" />
                    <input {...register('email')} type="email" placeholder="Email" className="w-full p-3 border border-neutral-300 placeholder-black text-slate-600 rounded-md  col-span-2" />
                    <input {...register('subject')} type="subject" placeholder="subject" className="w-full p-3 border border-neutral-300 placeholder-black text-slate-600 rounded-md  col-span-2" />
                    <textarea {...register('text')} placeholder="Your message"
                        className="w-full p-3 border border-neutral-300 placeholder-black text-slate-600 rounded-md col-span-4 resize-none" />
                    <button
                        className="flex items-center justify-center  p-3 bg-slate-600 text-white font-bold rounded-3xl hover:bg-slate-800 transition-all
                    duration-600"
                        type="submit"
                    >
                        Send
                        <Send className=' h-4 w-4 ml-3' />
                    </button>
                </form>
            </div>
        </div >
    )
}
