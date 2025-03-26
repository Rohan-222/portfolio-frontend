import React, { useState } from "react";
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" }, // Lowercased for consistency
  { href: "#testimonials", label: "Testimonials" }, // Fixed typo
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 md:rounded-xl backdrop-blur-lg p-4">
        {/* Logo */}
        <div className="text-white font-semibold text-lg uppercase">
          <a href="/">JASON ROOT</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white hover:text-stone-400 transition duration-300"
              onClick={handleLinkClick} // Ensures smooth scroll works properly
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none p-2" // Added padding for better UX
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <RiCloseFill size={28} /> : <RiMenu3Fill size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden p-4 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white hover:text-stone-400 transition duration-300"
              onClick={handleLinkClick} // Closes menu after clicking a link
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
