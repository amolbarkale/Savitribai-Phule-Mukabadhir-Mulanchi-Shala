
import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { Image as ImageIcon, ZoomIn, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { src: IMAGES.groupListening, label: 'गट श्रवण यंत्रणा', category: 'Education' },
    { src: IMAGES.teacherBlackboard, label: 'विशेष शिक्षण वर्ग', category: 'Education' },
    { src: IMAGES.audiologySession, label: 'श्रवण व वाणी विकास', category: 'Therapy' },
    { src: IMAGES.classroomDesks, label: 'अभ्यास सत्र', category: 'Education' },
    { src: IMAGES.classroom, label: 'वर्गातील क्षण', category: 'Education' },
    { src: IMAGES.activity1, label: 'वृक्षारोपण उपक्रम', category: 'Activities' },
    { src: IMAGES.activity2, label: 'स्नेहसंमेलन व वेशभूषा', category: 'Activities' },
    { src: IMAGES.hero, label: 'संवाद शिक्षण', category: 'Education' },
    { src: IMAGES.building, label: 'शाळा इमारत', category: 'Campus' },
  ];

  const categories = ['All', 'Education', 'Activities', 'Therapy', 'Campus'];

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const placeholder = document.createElement('div');
      placeholder.className = "absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400";
      placeholder.innerHTML = `
        <div class="text-center p-4">
          <svg class="w-10 h-10 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <span class="text-xs">Image not found</span>
        </div>
      `;
      parent.appendChild(placeholder);
    }
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-orange-600 font-semibold uppercase tracking-wide mb-2">
            छायाचित्र दालन
          </h2>
          <h3 className="text-3xl font-heading font-bold text-gray-900">
            शाळेतील अविस्मरणीय क्षण
          </h3>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-orange-600 text-white shadow-md transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat === 'All' ? 'सर्व' : 
               cat === 'Education' ? 'शिक्षण' :
               cat === 'Activities' ? 'उपक्रम' :
               cat === 'Therapy' ? 'उपचार पद्धती' :
               'परिसर'}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-200 aspect-[4/3]"
              onClick={() => setSelectedImage(photo.src)}
            >
              <img 
                src={photo.src} 
                alt={photo.label} 
                onError={handleImageError}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-300 text-xs font-bold uppercase tracking-wider mb-1">
                  {photo.category === 'Education' ? 'शिक्षण' :
                   photo.category === 'Activities' ? 'उपक्रम' :
                   photo.category === 'Therapy' ? 'उपचार पद्धती' :
                   'परिसर'}
                </span>
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium text-lg">{photo.label}</span>
                  <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                    <ZoomIn className="text-white w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>या विभागात सध्या छायाचित्रे उपलब्ध नाहीत.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors bg-white/10 p-2 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
