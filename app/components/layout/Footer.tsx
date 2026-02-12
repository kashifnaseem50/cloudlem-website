'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Github, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-light border-t border-gray-200 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle chevron watermark pattern like Systems Limited */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="chevrons" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0 L60 30 L30 60 L0 30Z" fill="none" stroke="#000" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#chevrons)"/>
        </svg>
      </div>

      <div className="container-systems relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-1">
               <span className="text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-dark via-accent-cyan to-accent-blue">
                 Cloudlem
               </span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm">
              Enabling businesses to thrive in the digital era through innovative cloud solutions and strategic DevOps implementation.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/cloudlem" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-brand-dark/5 flex items-center justify-center text-gray-500 hover:bg-brand-dark hover:text-white transition-all">
                <Linkedin size={16} />
              </a>
              <a href="https://x.com/CloudlemOffical" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-brand-dark/5 flex items-center justify-center text-gray-500 hover:bg-brand-dark hover:text-white transition-all">
                <Twitter size={16} />
              </a>
              <a href="https://www.instagram.com/cloudlemoffical/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-brand-dark/5 flex items-center justify-center text-gray-500 hover:bg-brand-dark hover:text-white transition-all">
                <Instagram size={16} />
              </a>
              <a href="https://github.com/kashifnaseem50" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-brand-dark/5 flex items-center justify-center text-gray-500 hover:bg-brand-dark hover:text-white transition-all">
                <Github size={16} />
              </a>
              <a href="https://www.youtube.com/@cloudlem" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-brand-dark/5 flex items-center justify-center text-gray-500 hover:bg-brand-dark hover:text-white transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-brand-dark font-bold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {['DevOps Consulting', 'Cloud Infrastructure', 'AI & Machine Learning', 'Cloud Security'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-500 hover:text-brand-dark transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-brand-dark font-bold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-500 hover:text-brand-dark transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
             <h4 className="text-brand-dark font-bold mb-5 text-sm uppercase tracking-wider">Subscribe</h4>
             <p className="text-gray-500 mb-4 text-sm">Stay updated on how future of technology is shaping.</p>
             <div className="flex">
               <input 
                 type="email" 
                 placeholder="Enter your email here" 
                 className="bg-white border border-gray-200 rounded-l-md px-4 py-2.5 text-brand-dark text-sm focus:outline-none focus:border-accent-blue w-full placeholder:text-gray-400"
               />
               <button className="bg-brand-dark text-white font-bold px-5 py-2.5 rounded-r-md hover:bg-brand-dark/90 transition-colors text-sm">
                 Submit
               </button>
             </div>
          </div>

        </div>

        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Cloudlem Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="#" className="text-gray-400 hover:text-brand-dark transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-brand-dark transition-colors">Terms & Conditions</Link>
            <Link href="#" className="text-gray-400 hover:text-brand-dark transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
