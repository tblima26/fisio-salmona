
import { Cherry, Icon } from 'lucide-react';
import './App.css'
import clinicImage from './images/clinic.jpg';


function App() {


  return (
    <>
      <div className="w-full h-32 flex flex-col items-center justify-center bg-slate-500">
        <h1 className='text-5xl text-white font-jetbrains' >Hello</h1>
        <span className='text-2xl text-neutral-300 font-lato' >hellow world!</span>
      </div>
      <img src={clinicImage} alt='clinic' className='h-screen object-cover w-full' />
      <div className="w-full h-32 flex flex-col items-center justify-center bg-slate-500">
        <h1 className='text-5xl text-white font-jetbrains flex items-center gap-5' ><Cherry size={30} />Proximos Elementos <Cherry size={30} /></h1>

        <span className='text-2xl text-neutral-300 font-lato' >Crie novos elementos aqui</span>
      </div>
    </>
  )
}

export default App
