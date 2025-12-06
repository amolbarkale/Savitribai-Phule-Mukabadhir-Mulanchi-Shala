
import React from 'react';
import { IMAGES } from '../constants';
import { Image as ImageIcon } from 'lucide-react';

const Gallery: React.FC = () => {
  const photos = [
    { src: IMAGES.classroom, label: 'वर्गातील क्षण' },
    { src: IMAGES.activity1, label: 'वृक्षारोपण उपक्रम' },
    { src: IMAGES.activity2, label: 'विद्यार्थी समूह' },
    { src: IMAGES.hero, label: 'शिक्षण आणि संवाद' },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const placeholder = document.createElement('div');
      placeholder.className = "absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400";
      placeholder.innerHTML = '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>';
      parent.appendChild(placeholder);
    }
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-orange-600 font-semibold uppercase tracking-wide mb-2">
            छायाचित्रे
          </h2>
          <h3 className="text-3xl font-heading font-bold text-gray-900">
            शाळेतील आनंदी क्षण
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl h-64 shadow-lg cursor-pointer bg-gray-200">
              <img 
                src={photo.src} 
                alt={photo.label} 
                onError={handleImageError}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-lg">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
