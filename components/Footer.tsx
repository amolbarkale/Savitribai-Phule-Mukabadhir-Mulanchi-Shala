import React from 'react';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import { SCHOOL_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              सावित्रीबाई फुले<br />
              <span className="text-orange-500">मूकबधिर निवासी विद्यालय</span>
            </h3>
            <p className="mb-6 leading-relaxed text-slate-400">
              मूकबधिर मुलांच्या सर्वांगीण विकासासाठी कटिबद्ध. आम्हास भेट द्या आणि या पवित्र कार्यात सहभागी व्हा.
            </p>
            <div className="inline-block bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <span className="text-sm font-semibold text-orange-400 block">UDISE NO</span>
              <span className="text-white text-lg tracking-wider">{SCHOOL_DETAILS.udise}</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-slate-700 pb-2 inline-block">
              संपर्क माहिती
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0 mt-1" />
                <span>
                  {SCHOOL_DETAILS.name},<br />
                  {SCHOOL_DETAILS.location}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Building2 className="text-orange-500 shrink-0" />
                <span>
                  संचालित: {SCHOOL_DETAILS.trust}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-500 shrink-0" />
                <a href={`tel:${SCHOOL_DETAILS.phone}`} className="hover:text-white transition-colors">
                  {SCHOOL_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-500 shrink-0" />
                <a href={`mailto:${SCHOOL_DETAILS.email}`} className="hover:text-white transition-colors">
                  {SCHOOL_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="h-64 rounded-xl overflow-hidden bg-slate-800 shadow-inner border border-slate-700 relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.213076840612!2d74.9083!3d21.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec3555555555%3A0x0!2zMjHCsDExJzAwLjAiTiA3NMKwNTQnMzAuMCJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy"
               title="School Location"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
             <div className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 rounded opacity-80">
               Thalner, Dhule
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Savitribai Phule Mukbadhir Vidyalaya. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with <span className="text-red-500">♥</span> for Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;