import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X, Facebook, Linkedin } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CAREERS", href: "/careers" },
  ];

  return (
    <header
      className="bg-white shadow-sm absolute top-0 left-0 right-0 z-50"
      style={{ fontFamily: "'PT Serif', serif" }}
    >
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-blue-500 to-emerald-400 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:+919400460136"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <Phone size={14} />
              <span>+91 9400460136</span>
            </a>
            <a
              href="mailto:info@neohomecaresolution.com"
              className="hidden sm:flex items-center gap-1 hover:opacity-80"
            >
              <Mail size={14} />
              <span>info@neohomecaresolution.com</span>
            </a>
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/share/1BoWTgWz6j/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://www.linkedin.com/company/neo-home-care-solution"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Neo Home Care Solution"
              className="h-12 w-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60"><text x="10" y="40" font-family="Arial" font-size="20" fill="%232563eb">Neo Home Care</text></svg>';
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-500 font-medium text-sm transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:block bg-gradient-to-r from-teal-400 to-emerald-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow duration-200 font-medium text-sm"
          >
            MAKE AN ENQUIRY
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-gray-700 hover:text-blue-500 font-medium text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full mt-4 bg-gradient-to-r from-teal-400 to-emerald-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow duration-200 font-medium text-sm text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              MAKE AN ENQUIRY
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
