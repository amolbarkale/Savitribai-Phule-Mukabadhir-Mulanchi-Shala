
import React from 'react';
import { IMAGES, SCHOOL_DETAILS } from '../constants';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-[80vh] md:h-[600px] w-full bg-slate-900 overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${IMAGES.hero})`,
          // Add a fallback background color in case image hasn't loaded
          backgroundColor: '#2d3748' 
        }}
      ></div>
      
      {/* Overlay Gradient - Darkened slightly to ensure text readability on varied user images */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-600 text-white text-xs md:text-sm font-semibold mb-4 tracking-wider">
            स्थापना : {SCHOOL_DETAILS.established}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 leading-tight">
            शब्द नसे मुखी, <br />
            <span className="text-orange-400">तरी संवाद साधते डोळे</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            सावित्रीबाई फुले मूकबधिर निवासी विद्यालय - जिथे विशेष मुलांना मिळते प्रेमाचे, विश्वासाचे आणि प्रगतीचे घर.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition duration-300 shadow-lg shadow-orange-600/30"
            >
              अधिक माहिती
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition duration-300 backdrop-blur-sm"
            >
              संपर्क साधा
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
