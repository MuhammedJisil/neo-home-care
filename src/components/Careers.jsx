import React, { useState } from 'react';
import { Phone, Mail, MapPin, Briefcase, Upload, CheckCircle } from 'lucide-react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    cv: null
  });
  const [submitted, setSubmitted] = useState(false);

  // Load PT Serif font
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const positions = [
    'MLT (Medical Laboratory Technician)',
    'GNM (General Nursing and Midwifery)',
    'ANM (Auxiliary Nurse Midwife)',
    'GNA (General Nursing Assistant)',
    'General Duty'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      cv: e.target.files[0]
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.position) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Create mailto link with form data
    const subject = `Job Application - ${formData.position}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0APosition: ${formData.position}%0D%0A%0D%0APlease find my CV attached.`;
    
    window.location.href = `mailto:info@neohomecaresolution.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        cv: null
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'PT Serif', serif" }}>
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-500 to-emerald-400 text-white py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="text-center">
          <Briefcase className="mx-auto mb-4" size={48} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl md:text-2xl opacity-90">Be part of something meaningful - care for those who need it most</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Work With Us?</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Competitive Compensation</h3>
                  <p className="text-gray-600">We offer industry-leading salaries and comprehensive benefits packages.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-emerald-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Professional Growth</h3>
                  <p className="text-gray-600">Continuous training and development opportunities to advance your career.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-teal-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Supportive Environment</h3>
                  <p className="text-gray-600">Work with a compassionate team dedicated to making a difference.</p>
                </div>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare team"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Apply Now</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Application submitted! Please check your email client to send your CV.</span>
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="+1 234 567 8989"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position Applying For *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select a position</option>
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload CV/Resume *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <label htmlFor="cv" className="cursor-pointer">
                    <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                    <p className="text-sm text-gray-600">
                      {formData.cv ? formData.cv.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  </label>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-emerald-400 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200"
              >
                Submit Application
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our terms and conditions
              </p>
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{position}</h3>
                    <p className="text-sm text-gray-600 mb-3">Full-time position</p>
                    <button 
                      onClick={() => {
                        setFormData(prev => ({ ...prev, position }));
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-blue-500 hover:text-blue-600 font-medium text-sm"
                    >
                      Apply Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
}