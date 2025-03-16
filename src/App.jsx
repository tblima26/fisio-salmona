
import './App.css'
import clinicImage from './images/clinic.jpg'
import { Briefcase, Cherry, FileText, Heart, Phone, Users } from 'lucide-react'
import { Menu } from './MenuNav/Menu';

function App() {

  return (
    <>
      <div className="w-full h-20 flex  items-center justify-between px-6 bg-slate-500 ">
        <div className='text-4xl text-white font-montserrat ' >Fisio Salmona</div>
        <div className='flex text-xl text-neutral-300 font-lato space-x-9' >
          <Menu.Root id='about' time={500}>
            <Menu.Icon icon={Users} />
            <Menu.Text text='About us' />
          </Menu.Root>
          <Menu.Root id='services' time={600}>
            <Menu.Icon icon={Briefcase} />
            <Menu.Text text="Services/Specialty" />
          </Menu.Root>
          <Menu.Root id='treatments' time={700}>
            <Menu.Icon icon={Heart} />
            <Menu.Text text="Treatments" />
          </Menu.Root>
          <Menu.Root id='articles' time={800}>
            <Menu.Icon icon={FileText} />
            <Menu.Text text="Articles" />
          </Menu.Root>
          <Menu.Root id='contact' time={900}>
            <Menu.Icon icon={Phone} />
            <Menu.Text text="Contact Us" />
          </Menu.Root>
        </div>
      </div>
      <img src={clinicImage} alt='clinic' className='h-screen object-cover w-full' />
      <div id='about' className='h-screen flex justify-center items-center'>
        <span className='text-7xl font-montserrat'>About Us</span>
      </div>
      <div id='services' className='h-screen flex justify-center items-center'>
        <span className='text-7xl font-montserrat'>Services/ Specially</span>
      </div>
      <div id='treatments' className='h-screen flex justify-center items-center'>
        <span className='text-7xl font-montserrat'>Treatments</span>
      </div>
      <div id='articles' className='h-screen flex justify-center items-center'>
        <span className='text-7xl font-montserrat'>Articles</span>
      </div>
      <div id='contact' className='h-screen flex justify-center items-center'>
        <span className='text-7xl font-montserrat'>Contact Us</span>
      </div>
      <div id='footer' className="w-full h-32 flex flex-col items-center justify-center bg-slate-500">
        <h1 className='text-5xl text-white font-jetbrains flex items-center gap-5' >
          <Cherry size={30} />Next  Elements <Cherry size={30} /></h1>
        <span className='text-2xl text-neutral-300 font-lato' >Put your new elements</span>
      </div>
    </>
  )
}

export default App
