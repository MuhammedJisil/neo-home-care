import React, { useEffect, useRef, useState } from "react";
import {
  Heart,
  Users,
  Clock,
  Stethoscope,
  Home,
  Shield,
  Activity,
  Award,
  CheckCircle,
  Phone,
  Calendar,
  Briefcase,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  // Add PT Serif font
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
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.1 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const services = [
    {
      image: "./image-10.jpeg",
      icon: <Stethoscope size={48} />,
      title: "24/7 Professional Nursing Care",
      description:
        "Our trained and certified nurses provide round-the-clock medical care for patients with basic to advanced medical needs. We ensure professional healthcare services in the comfort of your home, including medication management, wound care, vitals monitoring, and emergency medical support.",
      features: [
        "Registered Nurses (RN)",
        "Licensed Practical Nurses (LPN)",
        "Medication Administration",
        "Post-Operative Care",
        "Chronic Disease Management",
      ],
    },
    {
      image: "./image-9.jpeg",
      icon: <Heart size={48} />,
      title: "Elderly and Patient Care",
      description:
        "Specialized compassionate care for elderly individuals, bed-ridden patients, and those recovering from hospital stays. Our caregivers assist with daily living activities while maintaining dignity and promoting independence. We understand the unique needs of seniors and post-hospitalization recovery.",
      features: [
        "Daily Living Assistance",
        "Mobility Support",
        "Personal Hygiene Care",
        "Meal Preparation",
        "Companionship",
      ],
    },
    {
      image: "./image-8.jpeg",
      icon: <Clock size={48} />,
      title: "Stay-In & Daytime Options",
      description:
        "Flexible care schedules designed to meet your specific needs and budget. Choose between full-time live-in care for continuous support or regular daytime staff for assistance during specific hours. We accommodate your preferences to ensure the best care arrangement for your family.",
      features: [
        "24/7 Live-In Care",
        "Daytime Care (8-12 hours)",
        "Night Duty Care",
        "Weekend Care",
        "Flexible Scheduling",
      ],
    },
    {
      image: "./image-7.jpg",
      icon: <Users size={48} />,
      title: "Professional & Non-Professional Staff",
      description:
        "We provide a complete range of healthcare professionals and care attendants to suit every situation. From qualified nurses with medical expertise to compassionate care attendants for daily assistance, we match the right caregiver to your specific requirements.",
      features: [
        "Qualified Nurses",
        "Care Attendants",
        "Physiotherapists",
        "Health Aides",
        "Patient Companions",
      ],
    },
  ];

  const whyChoosePoints = [
    {
      icon: <Award size={36} />,
      title: "Qualified Professionals",
      description:
        "All our staff are thoroughly vetted, certified, and experienced healthcare professionals committed to excellence",
    },
    {
      icon: <Shield size={36} />,
      title: "Trusted & Reliable",
      description:
        "We maintain the highest standards of care with compassionate service you can depend on every single day",
    },
    {
      icon: <Activity size={36} />,
      title: "24/7 Availability",
      description:
        "Round-the-clock support and emergency response ensure you're never alone when you need help most",
    },
    {
      icon: <UserCheck size={36} />,
      title: "Personalized Care Plans",
      description:
        "Customized care strategies tailored to individual health conditions, preferences, and family requirements",
    },
    {
      icon: <Home size={36} />,
      title: "Comfort of Home",
      description:
        "Receive professional medical care in familiar surroundings, promoting faster recovery and peace of mind",
    },
    {
      icon: <Briefcase size={36} />,
      title: "Comprehensive Services",
      description:
        "From basic assistance to advanced medical care, we handle all aspects of home healthcare under one roof",
    },
  ];

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'PT Serif', serif" }}
    >
      {/* Hero Section */}
      <div
        ref={addToRefs}
        className={`relative bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 text-white py-20 px-4 pt-42 overflow-hidden transition-all duration-1000 ${
          visibleSections.has(0)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-emerald-500/90"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive home healthcare solutions delivered with compassion
            and expertise
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`transition-all duration-1000 ${
                visibleSections.has(index + 1)
                  ? "opacity-100 translate-x-0"
                  : `opacity-0 ${
                      index % 2 === 0 ? "-translate-x-10" : "translate-x-10"
                    }`
              }`}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-shadow duration-300`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-emerald-500/10"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl text-white shadow-lg">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 pt-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle
                          className="text-emerald-500 flex-shrink-0"
                          size={20}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div
          ref={addToRefs}
          className={`mt-24 transition-all duration-1000 ${
            visibleSections.has(services.length + 1)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that professional, compassionate care
              makes in your life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div
          ref={addToRefs}
          className={`mt-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 lg:p-16 text-white shadow-2xl transition-all duration-1000 ${
            visibleSections.has(services.length + 2)
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                1
              </div>

              <h3 className="text-2xl font-bold mb-3">Contact Us</h3>
              <p className="text-blue-50 leading-relaxed">
                Reach out via phone or email to discuss your healthcare needs
                and concerns
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                2
              </div>

              <h3 className="text-2xl font-bold mb-3">Schedule Assessment</h3>
              <p className="text-blue-50 leading-relaxed">
                We conduct a thorough evaluation to understand your requirements
                and create a personalized care plan
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                3
              </div>

              <h3 className="text-2xl font-bold mb-3">Begin Care</h3>
              <p className="text-blue-50 leading-relaxed">
                Our qualified staff arrives at your home and starts providing
                the compassionate care you deserve
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          ref={addToRefs}
          className={`mt-24 text-center transition-all duration-1000 ${
            visibleSections.has(services.length + 3)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Contact us today to discuss your healthcare needs and discover how
            we can provide the perfect care solution for you and your loved ones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919400460136"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call +919400460136
            </a>
            <Link
              to="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
