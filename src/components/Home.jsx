import React, { useState, useEffect } from 'react';
import { Heart, Clock, Shield, Users, Home, CheckCircle, Phone, ArrowRight } from 'lucide-react';

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Load PT Serif font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Hero slider data
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=80',
      title: 'Bringing Health & Happiness Home',
      subtitle: 'Expert nursing care in the comfort of your home'
    },
    {
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=2000&q=80',
      title: 'Trusted Care for Your Loved Ones',
      subtitle: 'Professional, verified, and compassionate nursing services across India'
    },
    {
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=2000&q=80',
      title: 'Available 24/7 for Your Family',
      subtitle: 'Round-the-clock professional nursing and caregiving support'
    }
  ];

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'PT Serif', serif" }}>
      {/* Hero Slider Section */}
      <div className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/95 mb-8 animate-fade-in-delay">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-200 flex items-center gap-2">
                    Get Started <ArrowRight size={20} />
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section
        id="services"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive home healthcare solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Professional Nursing Care</h3>
              <p className="text-gray-700">
                Trained nurses to handle advanced medical needs at home, available round the clock.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Elderly and Patient Care</h3>
              <p className="text-gray-700">
                Special help for elders, bedridden patients, and those recovering after hospital stays.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Stay-in & Daytime Options</h3>
              <p className="text-gray-700">
                Choose between full-time (stay-in) and regular day staff as needed.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Professional & Non-Professional Staff</h3>
              <p className="text-gray-700">
                Both qualified nurses and care attendants available for all situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Neo Stands Out Section */}
      <section
        id="why-neo"
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible('why-neo') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Why Neo Stands Out: Genuine Care
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We treat every patient like family, providing comfort and support all day.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Trusted Staff</h3>
                    <p className="text-gray-700">
                      Verified, background-checked, and experienced team you can rely on.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Packages</h3>
                    <p className="text-gray-700">
                      Custom solutions to match your family's needs and budget.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Booking</h3>
                    <p className="text-gray-700">
                      Simple process—get the help you need, quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&w=800&q=80" 
                alt="Nurse caring for elderly patient at home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section
        id="promise"
        data-animate
        className={`py-20 bg-gradient-to-r from-blue-500 to-emerald-400 text-white transition-all duration-1000 ${
          isVisible('promise') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Promise</h2>
            <p className="text-xl opacity-95">Committed to excellence in every aspect of care</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <CheckCircle className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Punctual & Regular Staff Shifts</h3>
              <p className="opacity-90">
                Reliable scheduling ensuring continuous care without interruptions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <CheckCircle className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Clear Communication</h3>
              <p className="opacity-90">
                Transparent updates with patients and families throughout the care journey.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <CheckCircle className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Safe, Hygienic Practices</h3>
              <p className="opacity-90">
                Strict adherence to medical protocols and cleanliness standards.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <CheckCircle className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="opacity-90">
                Personalized care plans matching your family's needs and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section
        id="gallery"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible('gallery') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Care in Action</h2>
            <p className="text-xl text-gray-600">Compassionate professionals dedicated to your wellbeing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80" 
                alt="Professional nursing care"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80" 
                alt="Elderly care services"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=600&q=80" 
                alt="Home healthcare support"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        data-animate
        className={`py-20 bg-gray-800 text-white transition-all duration-1000 ${
          isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Quality Home Care?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a consultation and discover how we can support your family's healthcare needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-gradient-to-r from-blue-500 to-emerald-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-200 flex items-center gap-2">
              <Phone size={20} />
              Call Us Now
            </button>
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
}