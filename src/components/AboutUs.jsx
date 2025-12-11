import React from "react";
import { Heart, Shield, Users, Award, Clock, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Title, Meta } from "react-head";

export default function AboutUs() {
  // Load PT Serif font
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

  // Intersection Observer for scroll animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "'PT Serif', serif" }}
    >
      <Title>About Us | Neo Home Care Solutions</Title>
      <Meta
        name="description"
        content="Learn about Neo Home Care Solutions—our mission to provide reliable, compassionate, and professional home care services. Discover how our trained caregivers, personalized care plans, and commitment to quality make home care safer and more comfortable for every family."
      />

      {/* Hero Section with Background Image */}
      <div className="relative h-[560px] w-full text-white py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("./image-6.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content - Centered */}
        <div className="relative flex flex-col items-center justify-center text-center h-full max-w-7xl mx-auto px-6">
          <div className="scroll-animate">
            <Heart className="mx-auto mb-6" size={56} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed">
              Bringing compassionate, expert healthcare to the comfort of your
              home
            </p>
          </div>
        </div>
      </div>

      {/* Add styles for scroll animations */}
      <style>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scroll-animate-delay-1 {
          transition-delay: 0.1s;
        }
        
        .scroll-animate-delay-2 {
          transition-delay: 0.2s;
        }
        
        .scroll-animate-delay-3 {
          transition-delay: 0.3s;
        }
      `}</style>

      {/* Main Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Neo Home Nursing Service, under Neo Home Care Solutions, was
                  founded by a passionate entrepreneur with a vision to
                  transform healthcare delivery in India. We recognized that
                  quality medical care shouldn't be confined to hospital
                  walls—it should reach people where they feel most comfortable:
                  their homes.
                </p>
                <p>
                  Today, we provide expert home-based nursing and caregiving
                  services across India, bringing professional healthcare
                  directly to your doorstep. Our team specializes in elderly
                  care, post-surgical recovery, and chronic condition
                  management, ensuring that every patient receives the
                  personalized attention they deserve.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl scroll-animate scroll-animate-delay-1">
              <img
                src="./hero-1.png"
                alt="Compassionate nursing care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-2xl scroll-animate">
              <img
                src="image-5.png"
                alt="Patient care at home"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2 scroll-animate scroll-animate-delay-1">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Our mission centers on three fundamental principles: comfort,
                  safety, and dignity. We believe every individual deserves
                  healthcare that respects their personal space, maintains their
                  independence, and prioritizes their well-being above all else.
                </p>
                <p>
                  We are committed to delivering compassionate, personalized
                  healthcare that addresses not just medical needs, but
                  emotional and psychological comfort as well. Through our
                  services, families can rest assured that their loved ones
                  receive professional care in the familiar surroundings of
                  home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team & Expertise Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center scroll-animate">
            Our Team & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="scroll-animate">
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  At the heart of Neo Home Nursing Service is our team of
                  certified nurses and caregivers. Each member undergoes
                  rigorous vetting and comprehensive training to ensure they
                  meet our exacting standards of professional excellence and
                  compassionate care.
                </p>
                <p>
                  Our nurses are specially trained in essential healthcare
                  services including medication administration, wound care,
                  vital sign monitoring, and patient mobility assistance. They
                  bring clinical expertise combined with genuine empathy,
                  creating a healing environment that extends beyond medical
                  treatment.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl scroll-animate scroll-animate-delay-1">
              <img
                src="./image-4.jpeg"
                alt="Professional nursing team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-blue-50 p-6 rounded-lg scroll-animate">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Elderly Care
              </h3>
              <p className="text-gray-600">
                Specialized care for seniors, focusing on daily living
                assistance, companionship, and health monitoring.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg scroll-animate scroll-animate-delay-1">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Post-Surgical Recovery
              </h3>
              <p className="text-gray-600">
                Professional wound care, medication management, and
                rehabilitation support during recovery.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg scroll-animate scroll-animate-delay-2">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                <Home className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Chronic Condition Management
              </h3>
              <p className="text-gray-600">
                Ongoing support for diabetes, heart disease, respiratory
                conditions, and other chronic illnesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className="py-16 bg-gradient-to-r from-blue-500 to-emerald-400 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center scroll-animate">
            Our Commitment to Excellence
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center scroll-animate">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">24/7 Availability</h3>
              <p className="text-white/90 text-lg">
                Round-the-clock service ensuring reliable support whenever
                families need it, day or night.
              </p>
            </div>

            <div className="text-center scroll-animate scroll-animate-delay-1">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Rigorously Vetted</h3>
              <p className="text-white/90 text-lg">
                Every team member undergoes comprehensive background checks and
                certification verification.
              </p>
            </div>

            <div className="text-center scroll-animate scroll-animate-delay-2">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Family-First Approach</h3>
              <p className="text-white/90 text-lg">
                We treat every patient like family, ensuring safe, hygienic
                practices and clear communication always.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center scroll-animate">
            Why Choose Neo Home Care Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start scroll-animate">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Award className="text-blue-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Certified Professionals
                </h3>
                <p className="text-gray-600">
                  Our nurses hold valid certifications and receive ongoing
                  training in the latest healthcare practices and protocols.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start scroll-animate scroll-animate-delay-1">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Heart className="text-emerald-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Personalized Care Plans
                </h3>
                <p className="text-gray-600">
                  Every patient receives an individualized care plan tailored to
                  their specific medical needs and personal preferences.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start scroll-animate scroll-animate-delay-2">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Shield className="text-teal-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Safety First
                </h3>
                <p className="text-gray-600">
                  Strict adherence to medical protocols, hygiene standards, and
                  safety procedures in every interaction.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start scroll-animate scroll-animate-delay-3">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Home className="text-blue-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Comfort of Home
                </h3>
                <p className="text-gray-600">
                  Professional medical care delivered in the familiar,
                  comfortable environment where healing happens best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center scroll-animate">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Trust Neo Home Care Solutions for Excellence in Home Healthcare
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            We understand that inviting healthcare professionals into your home
            requires trust. That's why we've built our reputation on
            reliability, professionalism, and genuine care. Every interaction
            with our team reflects our commitment to treating your family
            members as we would treat our own.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 to-emerald-400 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow duration-200 inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
