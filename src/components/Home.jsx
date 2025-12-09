import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users, Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Neo Home Care Solution
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Professional healthcare services in the comfort of your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Our Services <ArrowRight size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Compassionate Care</h3>
              <p className="text-gray-600">Dedicated support with empathy and respect</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Trusted Professionals</h3>
              <p className="text-gray-600">Qualified and experienced healthcare staff</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock care when you need it</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Plans</h3>
              <p className="text-gray-600">Care tailored to your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Experience Quality Care?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to learn more about our services
          </p>
          <Link 
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}