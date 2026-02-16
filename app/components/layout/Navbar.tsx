'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services' },
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/blog' },
    { title: 'Solutions', href: '/solutions' },
    { title: 'Careers', href: '/careers' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[72px] flex items-center ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-systems w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-[22px] font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-accent-cyan to-accent-blue">
            Cloudlem
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1 text-[13px] font-medium tracking-wide">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`px-4 py-2 rounded transition-all relative ${
                pathname === item.href ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.title}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-white rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button className="text-white/70 hover:text-white transition-colors p-2">
            <Search size={18} />
          </button>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-white text-brand-dark font-bold text-[13px] rounded-md hover:bg-white/90 transition-all uppercase tracking-wider"
          >
            Get in Touch
          </Link>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-brand-dark z-40 p-6 flex flex-col gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium py-4 border-b border-white/5 transition-colors ${
                pathname === item.href ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 px-6 py-3 bg-white text-brand-dark font-bold text-sm rounded-md text-center uppercase tracking-wider"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
