import ThemeButton from '../commons/ThemeButton.tsx'
import '../../styles/global.css'


function Header() {
  return (
    <header className="top-0 w-full py-4 px-14 flex justify-between items-center flex-row bg-[rgb(var(--background-2))]">
      <div>
      <span className="text-2xl font-extrabold bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent tracking-wider drop-shadow-sm">
        Habita
      </span>



      </div>
      <div className="flex items-center justify-center">
        <ThemeButton />
        
      </div>
    </header>
  );
}

export default Header;
