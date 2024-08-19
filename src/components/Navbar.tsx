
const Navbar = () => {
  return (
    <div>
      <header className="shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <a href="#">
            <img className="w-24 px-4 my-4" src="/sofa-logo.svg" />
          </a>
          <p className="text-slate-600 font-bold text-xl">Bem-vindo, User</p>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
