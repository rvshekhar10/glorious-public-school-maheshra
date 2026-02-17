'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, GraduationCap, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal pt-24 pb-12 text-white overflow-hidden border-t border-white/5">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 p-2 transition-luxury group-hover:scale-105">
                <img src="/logo.png" alt="GPS Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight leading-none text-white">GLORIOUS</h3>
                <p className="text-[12px] tracking-[0.3em] uppercase text-primary-gold font-bold">Public School</p>
              </div>
            </Link>

            <p className="text-gray-400 font-light leading-relaxed text-sm max-w-sm">
              Crafting noble futures through a perfect blend of modern academic excellence and traditional residential values since 1999.
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center transition-luxury hover:bg-primary-gold hover:text-charcoal hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-gold">Quick Nav</h4>
            <ul className="space-y-4">
              {['About', 'Admissions', 'Facilities', 'Results', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white transition-luxury flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary-gold transition-all group-hover:w-4"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Info Column */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-gold">Academic Info</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-primary-gold underline decoration-white/10 underline-offset-8">
                  <MapPin size={18} />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Maheshra, DARU Block,<br />Hazaribagh, Jharkhand
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-primary-gold underline decoration-white/10 underline-offset-8">
                  <Phone size={18} />
                </div>
                <p className="text-sm text-gray-400 font-light">+91-XXXXXXXXXX</p>
              </div>
              <div className="flex gap-4">
                <div className="text-primary-gold underline decoration-white/10 underline-offset-8">
                  <Mail size={18} />
                </div>
                <p className="text-sm text-gray-400 font-light">info@gloriouspublicschool.edu.in</p>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-primary-gold">Stay Updated</h4>
            <p className="text-sm text-gray-400 font-light">Join our list for campus events and admission updates.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-primary-gold transition-luxury text-white"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-gold hover:translate-x-1 transition-luxury">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[12px] text-gray-500 font-bold uppercase tracking-[0.2em]">
              &copy; {currentYear} Glorious Public School. Excellence Since 1999.
            </p>
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.1em]">
              Designed by <a href="https://purpul.in" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:underline transition-luxury">PURPUL DIGITAL</a> . Powered by <span className="text-white/60">SchoolOS</span>
            </p>
          </div>
          <div className="flex gap-8 text-[12px] text-gray-500 font-bold uppercase tracking-[0.2em]">
            <Link href="/privacy" className="hover:text-primary-gold transition-luxury">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-gold transition-luxury">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
