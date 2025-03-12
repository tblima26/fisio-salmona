
import './App.css'
import clinicImage from './images/clinic.jpg'
import { ArrowBigLeft, Cherry } from 'lucide-react'
import { Menu } from '../src/MenuNav'


function App() {

  return (
    <>
      <div className="w-full h-32 flex flex-col items-center justify-center bg-slate-500">
        <h1 className='text-5xl text-white font-jetbrains' >Hello</h1>
        <span className='text-2xl text-neutral-300 font-lato' >
          <Menu.Root link='https://www.instagram.com/tblima11/'>
            <Menu.Icon icon={ArrowBigLeft} />
            <Menu.Text text='ESTE É UM TESTE' />
          </Menu.Root>
        </span>
      </div>
      <img src={clinicImage} alt='clinic' className='h-screen object-cover w-full' />
      <div className="w-full h-32 flex flex-col items-center justify-center bg-slate-500">
        <h1 className='text-5xl text-white font-jetbrains flex items-center gap-5' ><Cherry size={30} />Next  Elements <Cherry size={30} /></h1>

        <span className='text-2xl text-neutral-300 font-lato' >Put your new elements</span>
      </div>
    </>
  )
}

export default App
