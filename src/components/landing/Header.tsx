import ThemeButton from '../ThemeButton'

function Header() {
  return (
    <header className="py-6 px-14 flex justify-between items-center flex-row">
      <div>
      <h2 className="text-darkGray dark:text-lightGreen text-xl">Habita</h2>

      </div>
      <div className="flex items-center justify-center">
        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
