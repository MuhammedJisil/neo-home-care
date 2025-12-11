import React from "react";
import { Phone, Mail, MapPin, Facebook, Linkedin, MessageCircle} from "lucide-react";
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
              {/* Phone Number */}
    <li className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
        <Phone size={22} />
      </div>
      <div className="pt-2">
        <a
          href="tel:+919446460136"
          className="text-base text-gray-200 hover:text-cyan-400 transition-colors duration-200"
        >
          +91 9446 460 136
        </a>
      </div>
    </li>

   {/* WhatsApp */}
<li className="flex items-start gap-4">
  <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </div>
  <div className="pt-2">
    <a
      href="https://wa.me/919400460136"
      target="_blank"
      rel="noopener noreferrer"
      className="text-base text-gray-200 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
    >
      +91 9400 460 136
     
    </a>
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
