import React from "react"
import logo from "../../assets/jagielska.png"
import {BiPhoneCall} from "react-icons/bi"
import {HiOutlineMenu, HiOutlineX} from "react-icons/hi"
import {useState} from "react"


export const NavLinks = [
    {
        id: 1,
        name: "Usługi",
        link: "/#services",

    },
    {
        id: 2,
        name: "Cennik",
        link: "/#prices",

    },
    {
        id: 3,
        name: "Sprzęt",
        link: "/#tech",

    },
    {
        id: 4,
        name: "Kontakt",
        link: "/#conatact",

    }
]

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <nav className="shadow-md w-full">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Telefon */}
            <div className="flex items-center gap-2 group">
              <BiPhoneCall className="text-2xl text-primary animate-pulse group-hover:scale-110 duration-200" />
              <span>+48 696969</span>
            </div>
  
            <div>
              <img src={logo} alt="logo" className="w-[130px] m-2" />
            </div>
  
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
