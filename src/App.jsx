
import './App.css'
import { useState, useEffect } from 'react'
//import clinicImage from './images/clinic.jpg'
import { Briefcase, CalendarClock, CalendarDays, Cherry, FileText, GraduationCap, Heart, MapPinned, Phone, Send, Users } from 'lucide-react'
import { Menu } from './Component/MenuNav/Menu';
import { Info } from './Component/InfoGrid/Infor';
import FormInfo from './Component/FormContact/FormInfo';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`w-full h-14 flex items-center justify-between  fixed z-10 
      transition-all duration-300 p-10
      ${scrolled ? "bg-slate-700/75  shadow-2xl text-white " : " bg-transparent text-neutral-200 "}`}>
        <div className="text-4xl font-montserrat">
          <a href="/">Fisio Salmona</a>
        </div>
        <div className="flex text-xl font-lato space-x-9">
          <Menu.Root id="about" time={500}>
            <Menu.Icon icon={Users} />
            <Menu.Text text="About us" />
          </Menu.Root>
          <Menu.Root id="services" time={600}>
            <Menu.Icon icon={Briefcase} />
            <Menu.Text text="Services/Specialty" />
          </Menu.Root>
          <Menu.Root id="treatments" time={700}>
            <Menu.Icon icon={Heart} />
            <Menu.Text text="Treatments" />
          </Menu.Root>
          <Menu.Root id="articles" time={800}>
            <Menu.Icon icon={FileText} />
            <Menu.Text text="Articles" />
          </Menu.Root>
          <Menu.Root id="contact" time={900}>
            <Menu.Icon icon={Phone} />
            <Menu.Text text="Contact Us" />
          </Menu.Root>
        </div>
      </div>
      <div className="h-screen bg-center flex items-center justify-center">
        <img src="./src/Images/clinic.jpg" alt="Clinic"
          className="absolute brightness-50 h-screen w-full object-cover" />
        <Info.Root>
          <Info.Card>
            <Info.Title icon={GraduationCap} title='Education' />
            <Info.SubTitle text='Professional Qualification' />
            <Info.Content text='Dr. Karolina, our RPG specialist, brings years of
            experience dedicated to your health. Discover personalized treatments
            and pathways to well-being under her attentive care.' />
          </Info.Card>
          <Info.Card>
            <Info.Title icon={MapPinned} title='Mission' />
            <Info.SubTitle text=' Location & Service' />
            <Info.Content text='CCommitted to promoting health and well-being, we
            offer personalized treatments for everyone. We accept a variety of 
            insurance plans to ensure easy access to our services.' />
          </Info.Card>
          <Info.Card>
            <Info.Title icon={CalendarDays} title='Calendar' />
            <Info.SubTitle text='Schedule Your Treatment' />
            <Info.Content text='Discover our specialized services and schedule 
            your session for a personalized experience.' />
          </Info.Card>
        </Info.Root>
      </div>

      <div id='about' className='h-screen flex justify-center items-center'>
        <span className='text-7xl font-montserrat'>About Us</span>
      </div>
      <div id='services' className='h-screen flex justify-center items-center'>
        <span className='text-7xl font-montserrat'>Services/ Specially</span>
      </div>
      <div id='treatments' className='h-screen flex justify-center items-center'>
        <span className='text-7xl font-montserrat'>Treatments</span>
        <FormInfo />
      </div>
      <div id='articles' className='h-screen flex justify-center items-center'>
        <span className='text-7xl font-montserrat'>Articles</span>
      </div>

      <div id='contact' className='h-screen flex justify-center items-center 
      bg-[url(./src/Images/contactus.jpg)] bg-cover'>
        <div class="relative bg-neutral-900/70 rounded-tl-xl rounded-bl-xl
        h-auto w-1/5 p-10 flex items-center justify-center ">
          <div class="w-full max-w-md space-y-6">
            <h2 class="text-white text-2xl font-bold text-center">Contact Us</h2>
            <form class="grid grid-cols-3 gap-4">
              <input type="text" placeholder="Name" class="w-full p-3 bg-transparent border border-white placeholder-white text-white rounded-md  col-span-3" />
              <input type="tel" placeholder="Phone" class="w-full p-3 bg-transparent border border-white placeholder-white text-white rounded-md " />
              <input type="email" placeholder="Email" class="w-full p-3 bg-transparent border border-white placeholder-white text-white rounded-md  col-span-2" />
              <button type="submit" class="w-full flex items-center justify-center  p-3 bg-neutral-300 text-gray-900 font-bold rounded-md col-span-3">
                <Send className=' h-4 w-4 mr-3' />
                Send
              </button>
            </form>
          </div>
        </div>
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
