
import React from 'react';
import { CONTENT, IMAGES } from '../constants';
import { Target, Heart, Shield, Award, Building } from 'lucide-react';

const About: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      // Create a fallback placeholder
      const placeholder = document.createElement('div');
      placeholder.className = "w-full h-[400px] bg-slate-200 flex flex-col items-center justify-center text-slate-500 rounded-lg";
      placeholder.innerHTML = '<svg class="w-16 h-16 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg><span>School Building Image</span>';
      parent.appendChild(placeholder);
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Main Introduction */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-tl-3xl -z-10"></div>
              {/* Using the building image provided by user */}
              <img 
                src={IMAGES.building} 
                alt="School Building" 
                onError={handleImageError}
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-br-3xl -z-10"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-orange-600 font-semibold uppercase tracking-wide mb-2">
              आमचा परिचय
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              {CONTENT.about.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
              {CONTENT.about.text}
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="text-orange-800 font-medium italic">
                "मूकबधिर मुलांना गुणवत्तापूर्ण, समर्पित व प्रेमळ वातावरणात शिक्षण देणे हा आमचा मुख्य उद्देश आहे."
              </p>
            </div>
          </div>
        </div>

        {/* Mission / Objectives Grid */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              {CONTENT.mission.title}
            </h3>
            <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONTENT.mission.points.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {index === 0 ? <Award size={24} /> : 
                   index === 1 ? <Target size={24} /> :
                   index === 2 ? <Shield size={24} /> :
                   <Heart size={24} />}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
