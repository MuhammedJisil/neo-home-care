import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { Title, Meta } from "react-head";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Intersection Observer for scroll animations
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
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
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Load PT Serif font and add animation styles
  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Add animation styles
    const style = document.createElement("style");
    style.textContent = `
      .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .scroll-animate.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    // Create mailto link with form data
    const subject = formData.subject || "Contact Inquiry";
    const body = `Name: ${formData.name}%0D%0AEmail: ${
      formData.email
    }%0D%0APhone: ${
      formData.phone || "Not provided"
    }%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    window.location.href = `mailto:info@neohomecaresolution.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "'PT Serif', serif" }}
    >
      <Title>Contact Us | Neo Home Care Solutions</Title>
      <Meta
        name="description"
        content="Get in touch with Neo Home Care Solutions for reliable and compassionate home care services. Contact our team for inquiries, service bookings, support, or customized care plans tailored to your loved one’s needs."
      />

      {/* Hero Section with Background Image */}
      <div className="relative h-[560px] w-full text-white py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: 'url("./image-6.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative flex flex-col items-center justify-center text-center h-full max-w-7xl mx-auto px-6">
          <div className="scroll-animate">
            <MessageSquare className="mx-auto mb-4" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              We're here to help and answer any questions you might have
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

      {/* Main Content */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="scroll-animate">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-8">
              Reach out to us for any inquiries about our home care services.
              We're committed to providing compassionate care for your loved
              ones.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    K.P Tower, Wandoor Road
                    <br />
                    Vaniyambalam, Malappuram
                    <br />
                    Kerala, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Phone className="text-emerald-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="tel:+919446460136"
                      className="hover:text-blue-500 transition-colors"
                    >
                      +91 9400 460 136
                    </a>
                    <br />
                    <a
                      href="tel:+919207460136"
                      className="hover:text-blue-500 transition-colors"
                    >
                      +91 9446 460 136
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Mail className="text-teal-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:info@neohomecaresolution.com"
                      className="hover:text-blue-500 transition-colors"
                    >
                      info@neohomecaresolution.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="text-purple-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Business Hours
                  </h3>
                  <p className="text-gray-600">
                    24/7 Emergency Care Available
                    <br />
                    Office Hours: Mon - Sat, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src="./image-14.png"
                alt="Neo Home Care Solution"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 scroll-animate">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="+91 9446 460 136"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-emerald-400 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>

              <p className="text-xs text-gray-500 text-center">
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 scroll-animate">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Neo Home Care Solution?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">24/7</span>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">
                Round-the-Clock Care
              </h3>
              <p className="text-gray-600">
                Emergency services available anytime, ensuring your loved ones
                are never alone.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">
                Professional Staff
              </h3>
              <p className="text-gray-600">
                Experienced and certified healthcare professionals dedicated to
                quality care.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center scroll-animate">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">
                Local Presence
              </h3>
              <p className="text-gray-600">
                Serving Malappuram and surrounding areas with personalized home
                care services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
