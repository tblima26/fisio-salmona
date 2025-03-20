import { CalendarClock } from 'lucide-react'
import React from 'react'

export default function FormInfo() {
    return (
        <div className='bg-slate-800/70 h-1/2 w-auto p-10 shadow-2xl rounded-2xl'>
            <span className='text-4xl font-bold font-montserrat text-white flex 
          items-center justify-center p-1'>
                <CalendarClock className='h-10 w-auto mr-4' /> Information
            </span>
            <div className='mt-4 text-white font-poppins text-lg'>
                <ul className='space-y-4'>
                    <li className="flex justify-between">
                        <span>Segunda-feira</span> <span>08:00 – 16:00</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Terça-feira</span> <span>08:00 – 16:00</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Quarta-feira</span> <span>08:00 – 16:00</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Quinta-feira</span> <span>08:00 – 16:00</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Sexta-feira</span> <span>08:00 – 16:00</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Sábado</span> <span>08:00 – 12:00</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Domingo</span> <span>Fechado</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
