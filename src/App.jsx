
import './App.css';
import { useState, useEffect } from 'react';
//import clinicImage from './images/clinic.jpg'
import { Briefcase, CalendarDays, Cherry, FileText, GraduationCap, Heart, MapPinned, Phone, Users } from 'lucide-react';
import { Menu } from './Component/MenuNav/Menu';
import { Info } from './Component/InfoGrid/Infor';
import ContactUs from './Component/ContactUs';
import AboutMe from './Component/AboutMe';
import Specially from './Component/Specially';
import { Link } from 'react-scroll';
import MyArticles from './Component/MyArticles';
import SmallBanner from './Component/SmallBanner';
import Treatments from './Component/Treatments';
import Footer from './Component/Footer';


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
      <div className={`w-full h-10 flex items-center justify-between  fixed z-10 
      transition-all duration-300 p-8
      ${scrolled ? "bg-emerald-700/75  shadow-2xl text-white " : " bg-transparent text-neutral-200 "}`}>
        <div className="text-4xl font-montserrat">
          <Link to='top' smooth={true} duration={700} className='cursor-pointer' >
            <span>
              Fisio Salmona
            </span>
          </Link>
        </div>
        <div className="flex space-x-5">
          <Menu.Root id="about" time={500}>
            <Menu.Icon icon={Users} />
            <Menu.Text text="About Me" />
          </Menu.Root>
          <Menu.Root id="services" time={600}>
            <Menu.Icon icon={Briefcase} />
            <Menu.Text text="Specialty" />
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
      <div id='top'
        className="h-screen bg-center flex items-center justify-center">
        <img src="/Images/clinic.jpg" alt="Clinic"
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
            <Info.Content text='Committed to promoting health and well-being, we
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
      <div id='about' className='h-screen flex justify-center items-center space-x-10'>
        <img src='/Images/karol.jpg' className='h-5/6 w-auto rounded-4xl shadow-2xl' />
        <AboutMe />
      </div>
      <SmallBanner />
      <div id='services' className='h-screen flex flex-col justify-center items-center gap-5'>
        <Specially />
      </div>
      <div id='treatments' className='h-screen flex justify-center items-center'>
        <Treatments />
      </div>
      <div id='articles' className='h-screen flex justify-center items-center'>
        <MyArticles />
      </div>
      <div id='contact' className='h-screen flex justify-center items-center space-x-12'>
        <img src='./public/Images/contactus.jpg' className='h-1/2 w-auto rounded-4xl shadow-2xl' />
        <ContactUs />
      </div>
      <Footer />
    </>
  )
}

export default App