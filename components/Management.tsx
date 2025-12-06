
import React from 'react';
import { MANAGEMENT } from '../constants';
import { User } from 'lucide-react';

const Management: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const placeholder = document.createElement('div');
      placeholder.className = "w-full h-full bg-slate-200 flex items-center justify-center";
      // We can't easily render a react component into the DOM node here without ReactDOM, 
      // so we use innerHTML for the icon
      placeholder.innerHTML = '<svg class="w-20 h-20 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>';
      parent.appendChild(placeholder);
    }
  };

  return (
    <section id="management" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-semibold uppercase tracking-wide mb-2">
            आमचे मार्गदर्शक
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            व्यवस्थापन मंडळ
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            अश्विनी महिला बहुउद्देशीय संस्था, शिरपूर यांच्या दूरदृष्टी नेतृत्वाखाली शाळेची वाटचाल.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {MANAGEMENT.map((leader, index) => (
            <div key={index} className="w-full md:w-[400px] group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-100">
                {/* Image Container with aspect ratio optimized for vertical portraits */}
                <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    onError={handleImageError}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient Overlay at bottom for text readability */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>
                
                {/* Text Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <h4 className="text-2xl font-bold font-heading mb-1">{leader.name}</h4>
                  <p className="text-orange-300 font-medium tracking-wide text-lg">{leader.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;
