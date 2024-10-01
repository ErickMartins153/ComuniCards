import barraIcon from '../assets/options.svg';
import perfilIcon from '../assets/perfilIcon.svg';

export function NavBar() {
  return (
    <nav className='flex justify-between items-center px-10 pt-2 bg-[#B1D8FF] '>
        <div className='flex gap-5'>
            <button> <img src={barraIcon} alt="Menu" className='size-16' /> </button>
            <h1 className='text-4xl'>CC</h1>
        </div>
        <div>
            <img src={perfilIcon} alt="Perfil" className='size-16' />
        </div>
    </nav>
  );
}