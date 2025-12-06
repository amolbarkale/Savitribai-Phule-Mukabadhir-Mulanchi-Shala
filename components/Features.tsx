import React from 'react';
import { CONTENT } from '../constants';
import { CheckCircle2, Home, Mic, Music, Users, BookOpen } from 'lucide-react';

const Features: React.FC = () => {
  // Map icons to features loosely based on index or keywords
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return Users;
      case 1: return BookOpen;
      case 2: return Home;
      case 3: return Mic;
      case 4: return Music;
      default: return CheckCircle2;
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side: Content */}
          <div className="md:w-5/12">
            <h2 className="text-orange-600 font-semibold uppercase tracking-wide mb-2">
              शाळेची वैशिष्ट्ये
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              आमची शाळा, एक आदर्श कुटुंब
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              आम्ही केवळ पुस्तकी ज्ञान देत नाही, तर विद्यार्थ्यांना जीवनासाठी तयार करतो. आमची शाळा सर्व आधुनिक सोयी-सुविधांनी सुसज्ज आहे.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
               <h4 className="font-bold text-xl mb-2 text-gray-800">आमची जबाबदारी</h4>
               <p className="text-gray-600">
                 {CONTENT.responsibility.text}
               </p>
            </div>
          </div>

          {/* Right Side: Feature Grid */}
          <div className="md:w-7/12">
            <div className="grid sm:grid-cols-2 gap-6">
              {CONTENT.features.list.map((feature, index) => {
                const Icon = getIcon(index);
                return (
                  <div key={index} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                        <Icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 leading-snug">
                        {feature}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;