'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, GraduationCap, MapPin, Mail, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/results', label: 'Results' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[110] pointer-events-none">
        {/* Secondary Top Navbar - Fades out on scroll */}
        <div className={`bg-primary-dark text-white py-2 transition-all duration-700 pointer-events-auto py-2 ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
          <div className="luxury-container flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-primary-gold" />
                <span className="text-[12px] font-medium tracking-wider uppercase">Maheshra, Hazaribagh</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-6">
                <Mail size={12} className="text-primary-gold" />
                <span className="text-[12px] font-medium tracking-wider uppercase">info@gloriouspublicschool.edu.in</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 mr-4">
                <Phone size={12} className="text-primary-gold" />
                <span className="text-[12px] font-bold tracking-wider">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="text-white hover:text-primary-gold transition-luxury">
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Primary Liquid Navigation */}
        <div className="flex justify-center w-full px-4 md:px-0">
          <nav
            className={`transition-all duration-700 pointer-events-auto ${isScrolled
              ? 'bg-white/80 backdrop-blur-2xl border border-white/40 py-2 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] rounded-full luxury-container-scrolled'
              : 'bg-transparent py-10 luxury-container h-auto'
              }`}
            style={{
              width: isScrolled ? 'fit-content' : '100%',
              maxWidth: isScrolled ? '1200px' : 'none'
            }}
          >
            <div className={`flex items-center justify-between transition-all duration-700 ${isScrolled ? 'gap-12 px-2' : ''}`}>
              {/* Logo Group */}
              <Link href="/" className="flex items-center gap-4 group shrink-0">
                {/* <div className={`transition-all duration-700 relative flex items-center justify-center backdrop-blur-md border p-2 shadow-sm ${isScrolled
                  ? 'w-10 h-10 rounded-full bg-primary border-primary/20 invisible md:visible'
                  : 'w-14 h-14 md:w-16 md:h-16 bg-white/10 border-white/10'
                  }`}>
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className={`w-full h-full object-contain filter drop-shadow-sm transition-all duration-700 ${isScrolled ? 'brightness-0 invert' : ''}`}
                  />
                </div> */}
                {!isScrolled && (
                  <div className="hidden xl:block">
                    <h1 className="text-xl font-bold tracking-tight leading-none mb-1 text-white">
                      GLORIOUS <span className="font-light text-primary-gold">PUBLIC SCHOOL</span>
                    </h1>
                    <p className="text-[9px] tracking-[0.3em] uppercase font-bold text-white/60">
                      Excellence Since 1999
                    </p>
                  </div>
                )}
              </Link>

              {/* Desktop Navigation */}
              <div className={`hidden lg:flex items-center gap-8 xl:gap-12 transition-all duration-700`}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative group ${isScrolled ? 'text-primary/70 hover:text-primary' : 'text-white/80 hover:text-white'
                      }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary-gold transition-all duration-500 group-hover:w-full`}></span>
                  </Link>
                ))}
              </div>

              {/* Admission CTA */}
              <div className="flex items-center gap-4 shrink-0">
                <Link
                  href="/admissions"
                  className={`transition-all duration-700 overflow-hidden uppercase tracking-[0.2em] font-bold text-[12px] flex items-center gap-2 ${isScrolled
                    ? 'bg-primary text-white py-2 px-6 rounded-full hover:bg-primary/90'
                    : 'btn-luxury !px-6 !py-3'
                    }`}
                >
                  <GraduationCap size={14} className={isScrolled ? 'hidden sm:block' : ''} />
                  <span>{isScrolled ? 'Join GPS' : 'Admission Open 26-27'}</span>
                </Link>

                {/* Mobile Menu Toggle (Within Liquid Nav) */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`lg:hidden p-2 transition-all duration-700 ${isScrolled ? 'text-primary' : 'text-white'}`}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[120] bg-white lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col pt-32 px-10 pb-20">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-10 right-10 p-2 text-primary border border-primary/10 rounded-full"
              >
                <X size={32} />
              </button>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={link.href}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-4xl font-bold text-primary flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <span className="w-10 h-[2px] bg-primary-gold transition-all duration-500 group-hover:w-20"></span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-12 pt-12 border-t border-gray-100 space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <p className="text-[12px] uppercase tracking-widest text-gray-400 font-bold">Contact Us</p>
                      <p className="text-lg font-bold text-primary">+91-XXXXXXXXXX</p>
                      <p className="text-sm text-gray-500">info@gloriouspublicschool.edu.in</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[12px] uppercase tracking-widest text-gray-400 font-bold">Visit Us</p>
                      <p className="text-sm text-gray-500 leading-relaxed">Maheshra, DARU Block, Hazaribagh, JH</p>
                    </div>
                  </div>

                  <Link
                    href="/admissions"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-4 bg-primary text-white py-6 px-10 rounded-2xl font-bold uppercase tracking-[0.2em] group"
                  >
                    <span>Start Admission Process</span>
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .luxury-container-scrolled {
          padding-left: 2rem !important;
          padding-right: 2rem !important;
        }
      `}</style>
    </>
  );
}
