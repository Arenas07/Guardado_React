import ThemeButton from '../commons/ThemeButton'
import '../../styles/global.css'

function Header() {
  return (
    <header className="py-6 px-14 flex justify-between items-center flex-row">
      <div>
      <h2 className="text-[rgb(var(--default-contrast))] text-xl">Habita</h2>


      </div>
      <div className="flex items-center justify-center">
        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
