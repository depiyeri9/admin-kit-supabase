
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background bg-opacity-95 shadow-sm py-2 " : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="./icon.png"
                alt="Velour Essence"
                className="h-10 sm:h-12"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="about" className={`font-serif font-medium transition-colors ${scrolled ? "text-emerald hover:text-emerald-light" : "text-gold hover:text-gold-light" }`}>
              About
            </a>
            <a href="catalogue" className={`font-serif font-medium transition-colors ${scrolled ? "text-emerald hover:text-emerald-light" : "text-gold hover:text-gold-light" }`}>
              Collections
            </a>
            <a href="articles" className={`font-serif font-medium transition-colors ${scrolled ? "text-emerald hover:text-emerald-light" : "text-gold hover:text-gold-light" }`}>
              Article
            </a>
            <a href="gallery" className={`font-serif font-medium transition-colors ${scrolled ? "text-emerald hover:text-emerald-light" : "text-gold hover:text-gold-light" }`}>
              Gallery
            </a>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <ShoppingBag size={20} className="text-emerald" />
            </button>
            {/* <a href="#collection" className="font-serif luxury-btn">
              Shop Now
            </a> */}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=""
            >
              {isOpen ? <X color={scrolled ? "#0b4c3f" : "white"} size={24} /> : <Menu color={scrolled ? "#0b4c3f" : "white"} size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3 font-serif">
          <a href="about" className="block py-2 text-emerald hover:text-emerald-light font-medium" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="catalogue" className="block py-2 text-emerald hover:text-emerald-light font-medium" onClick={() => setIsOpen(false)}>
            Collections
          </a>
          <a href="articles" className="block py-2 text-emerald hover:text-emerald-light font-medium" onClick={() => setIsOpen(false)}>
            Articles
          </a>
          <a href="gallery" className="block py-2 text-emerald hover:text-emerald-light font-medium" onClick={() => setIsOpen(false)}>
            Gallery
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
