import React from "react";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
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

  return (
    <footer
      className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white"
      style={{ fontFamily: "'PT Serif', serif" }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* About Section */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Neo Home Care Solution"
                className="h-14 w-auto brightness-0 invert"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <h3
                className="text-xl font-bold text-white"
                style={{ display: "none" }}
              >
                Neo Home Care Solution
              </h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Providing compassionate and professional home healthcare services
              tailored to your needs. Your health, our priority.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://www.facebook.com/share/1BoWTgWz6j"
                className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center transition-all duration-200 shadow-lg"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/neo-home-care-solution"
                className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center transition-all duration-200 shadow-lg"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                { name: "HOME", href: "/" },
                { name: "ABOUT US", href: "/about" },
                { name: "SERVICES", href: "/services" },
                { name: "CAREERS", href: "/careers" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-cyan-400 text-base transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-3 text-cyan-400 group-hover:translate-x-1 transition-transform duration-200">
                      ▸
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin size={22} />
                </div>
                <div className="pt-1">
                  <p className="text-base text-gray-200 leading-relaxed">
                    K.P Tower, Wandoor Road
                    <br />
                    Vaniyambalam, Malappuram
                    <br />
                    Kerala, India
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex items-center gap-4">
                  {/* Phone Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone size={22} />
                  </div>

                  {/* Phone Numbers */}
                  <div className="pt-2 flex flex-col">
                    <a
                      href="tel:+919400460136"
                      className="text-base text-gray-200 hover:text-cyan-400 transition-colors duration-200"
                    >
                      +91 9400 460 136
                    </a>

                    <a
                      href="tel:+919446460136"
                      className="text-base text-gray-200 hover:text-cyan-400 transition-colors duration-200 mt-1"
                    >
                      +91 9446 460 136
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail size={22} />
                </div>
                <div className="pt-2">
                  <a
                    href="mailto:info@neohomecaresolution.com"
                    className="text-base text-gray-200 hover:text-cyan-400 transition-colors duration-200"
                  >
                    info@neohomecaresolution.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Neo Home Care Solution. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
