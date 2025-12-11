import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
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
    <div
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50"
      style={{ fontFamily: "'PT Serif', serif" }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>

      <div className="relative flex items-center justify-center min-h-screen px-6 py-20 pt-40">
        <div className="max-w-4xl w-full text-center">
          {/* Large 404 */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 flex items-center justify-center">
                <Search className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>
            <h1 className="text-[120px] md:text-[100px] font-bold bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent leading-none mb-4">
              404
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto mb-8 rounded-full"></div>
          </div>

          {/* Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We couldn't find the page you're looking for. It might have been
              moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/"
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-400 to-emerald-400 text-white font-medium rounded-full hover:shadow-lg transition-all duration-200"
            >
              <Home className="w-5 h-5" />
              GO TO HOMEPAGE
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-3 bg-white text-gray-700 font-medium rounded-full hover:shadow-lg transition-all duration-200 border border-gray-200"
            >
              <ArrowLeft className="w-5 h-5" />
              GO BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
