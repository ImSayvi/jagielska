import React from "react";
import logo from "../../assets/jagielska.png";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const NavLinks = [
  { id: 1, name: "Usługi", link: "/#services" },
  { id: 2, name: "Cennik", link: "/#prices" },
  { id: 3, name: "Sprzęt", link: "/#tech" },
  { id: 4, name: "Kontakt", link: "/#contact" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 pt-10 pb-6 mt-16 border-t border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo + social media */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Logo" className="w-28 sm:w-36" />
            <div className="flex gap-4">
              <a href="https://www.instagram.com/klaudiajagielskaphotography/" target="_blank" rel="noreferrer">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.facebook.com/kusko.kusowskaphotography" target="_blank" rel="noreferrer">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>

          {/* Nawigacja */}
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-semibold text-lg">Nawigacja</h3>
            <ul className="flex flex-col gap-1 text-sm">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a href={link} className="hover:text-primary duration-200">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <h3 className="font-semibold text-lg">Kontakt</h3>
            <div className="flex items-center gap-2">
              <BiPhoneCall className="text-xl text-primary animate-pulse" />
              <span className="text-sm">+48 696 969</span>
            </div>
          </div>

          {/* Strona wykonana przez :) */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <h3 className="font-semibold text-lg">Strona zrobiona przez</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm">Julia Sparzak</span>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/sayvidoinstuff/" target="_blank" rel="noreferrer">
                        <FaLinkedinIn className="text-2xl hover:text-primary duration-300" />
                    </a>
                    <a href="https://www.facebook.com/SayviXD" target="_blank" rel="noreferrer">
                        <FaFacebook className="text-2xl hover:text-primary duration-300" />
                    </a>
                    <a href="https://github.com/ImSayvi" target="_blank" rel="noreferrer">
                        <FaGithub className="text-2xl hover:text-primary duration-300" />
                    </a>
                </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Jagielska. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
