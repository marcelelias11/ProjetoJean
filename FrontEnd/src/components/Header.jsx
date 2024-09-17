const Header = () => {
  return (
    <div className="bg-red-900">
      <header className="container flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-neutral-50">Nota Fácil</h1>
        <nav className="flex gap-4 text-neutral-50">
          <a href="#simulador">Simulador</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
