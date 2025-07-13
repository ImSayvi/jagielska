import React, { useState, useEffect } from "react";
import logo from "../../assets/jagielska.png";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export const NavLinks = [
  { id: 1, name: "Usługi", link: "/#services" },
  { id: 2, name: "Cennik", link: "/#prices" },
  { id: 3, name: "Sprzęt", link: "/#tech" },
  { id: 4, name: "Kontakt", link: "/#contact" }, // poprawka literówki
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 fixed top-0 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between transition-all duration-300">
          {/* Telefon */}
          <div className="flex items-center gap-2 group">
            <BiPhoneCall className="text-2xl text-primary animate-pulse group-hover:scale-110 duration-200" />
            <span>+48 696969</span>
          </div>

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="logo"
              className={`transition-all duration-300 ${
                isScrolled ? "w-[100px]" : "w-[130px]"
              }`}
            />
          </div>

          {/* Linki */}
          <ul className="hidden md:flex gap-12">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="inline-block text-lg hover:text-primary duration-200"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            {menuOpen ? (
              <HiOutlineX
                className="text-3xl cursor-pointer hover:text-primary duration-200"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <HiOutlineMenu
                className="text-3xl cursor-pointer hover:text-primary duration-200 mr-3"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-4 pb-4 text-center">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg hover:text-primary duration-200"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
