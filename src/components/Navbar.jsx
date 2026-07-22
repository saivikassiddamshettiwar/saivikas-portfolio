import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
          Saivikas
        </h1>

        <ul className="hidden md:flex gap-10 text-gray-300">

          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;