'use client';

import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import CTASection from '@/components/CTASection';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Send,
  Globe
} from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* Immersive Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-60 lg:pb-40 overflow-hidden bg-primary">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-black/20 -skew-x-12 translate-x-1/4"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-primary-gold opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent"></div>

        <div className="luxury-container relative z-10 text-left">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-primary-gold text-[12px] font-bold uppercase tracking-[0.3em] mb-8 border border-white/10 backdrop-blur-sm">
              <Globe size={14} className="text-primary-gold" />
              Global Connectivity
            </div>
          </Reveal>

          <div className="max-w-4xl">
            <Reveal direction="up" delay={0.3}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8">
                Connect with the <br />
                <span className="text-primary-gold italic font-light">Noble Sanctuary.</span>
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl">
                Our legacy of excellence is just a conversation away. Reach out to our campus in Maheshra for admissions, tours, or general counsel.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Direct Access Cards */}
      <section className="bg-white py-12 relative z-20 -mt-10 lg:-mt-20">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { icon: <Phone size={32} />, label: 'Admission Hotline', detail: '+91-XXXXXXXXXX', sub: 'Mon - Sat: 9AM - 4PM' },
              { icon: <Mail size={32} />, label: 'Official Correspondence', detail: 'info@gloriouspublicschool.edu.in', sub: '24/7 Response Window' },
              { icon: <MapPin size={32} />, label: 'Campus Headquarters', detail: 'Maheshra, DARU, Hazaribagh', sub: 'Jharkhand, 825xxx' },
            ].map((item, i) => (
              <Reveal key={i} direction="up" delay={0.1 * i}>
                <div className="bg-primary p-12 lg:p-16 text-center lg:text-left border border-white/5 group hover:bg-primary-dark transition-luxury h-full">
                  <div className="text-primary-gold mb-6 group-hover:scale-110 transition-luxury">{item.icon}</div>
                  <p className="text-primary-gold font-bold uppercase tracking-widest text-[10px] mb-2">{item.label}</p>
                  <p className="text-xl lg:text-2xl font-bold text-white tracking-tight break-words">{item.detail}</p>
                  <p className="text-white/40 text-[10px] font-bold uppercase mt-4 tracking-widest">{item.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map - Symmetrical Dual Panel */}
      <section className="section-luxury bg-secondary relative overflow-hidden">
        <div className="luxury-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-stretch">
            {/* Form Panel */}
            <div className="lg:col-span-12">
              <div className="bg-white p-12 lg:p-24 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary-gold/10 translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-luxury"></div>

                <div className="grid lg:grid-cols-2 gap-20">
                  <div className="space-y-10">
                    <div className="space-y-4">
                      <Reveal direction="up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                          Direct Message
                        </div>
                      </Reveal>
                      <Reveal direction="up" delay={0.2}>
                        <h2 className="text-4xl font-bold text-primary leading-tight">
                          Formal <br />
                          <span className="text-primary-gold italic font-light">Correspondence.</span>
                        </h2>
                      </Reveal>
                      <Reveal direction="up" delay={0.3}>
                        <p className="text-gray-500 font-light leading-relaxed">
                          For invitations, official enquiries, or specialized counsel, please utilize the high-priority form. Our executive office manages all incoming requests with absolute discretion.
                        </p>
                      </Reveal>
                    </div>

                    <div className="space-y-8 pt-6">
                      <Reveal direction="up" delay={0.4}>
                        <div className="bg-primary-gold/5 p-8 border-l-4 border-primary-gold">
                          <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">Office Hours</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Monday - Saturday</span>
                              <span className="text-primary font-black">9:00 AM - 4:00 PM</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Sunday</span>
                              <span className="text-primary font-black">Reserved for Rest</span>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <Reveal direction="up" delay={0.2}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Name</label>
                          <input type="text" className="w-full px-0 py-4 border-b border-gray-200 focus:outline-none focus:border-primary-gold transition-luxury bg-transparent font-light" placeholder="Full Name" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone</label>
                          <input type="tel" className="w-full px-0 py-4 border-b border-gray-200 focus:outline-none focus:border-primary-gold transition-luxury bg-transparent font-light" placeholder="+91 XXXXX XXXXX" required />
                        </div>
                      </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.3}>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                        <input type="email" className="w-full px-0 py-4 border-b border-gray-200 focus:outline-none focus:border-primary-gold transition-luxury bg-transparent font-light" placeholder="email@example.com" required />
                      </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.4}>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject of Counsel</label>
                        <select className="w-full px-0 py-4 border-b border-gray-200 focus:outline-none focus:border-primary-gold transition-luxury bg-transparent font-light" required>
                          <option value="">Select Category</option>
                          <option>Admission Enquiry</option>
                          <option>Campus Visit Request</option>
                          <option>Career Opportunities</option>
                          <option>General Query</option>
                        </select>
                      </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.5}>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Message</label>
                        <textarea rows={4} className="w-full px-0 py-4 border-b border-gray-200 focus:outline-none focus:border-primary-gold transition-luxury bg-transparent font-light resize-none" placeholder="How may we assist you today?" required></textarea>
                      </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.6}>
                      <button type="submit" className="group relative w-full px-12 py-6 bg-primary text-white font-bold uppercase tracking-[0.2em] text-[12px] transition-luxury hover:-translate-y-2 shadow-2xl overflow-hidden mt-6">
                        <span className="relative z-10 flex items-center justify-center gap-4">
                          Send Formal Message <Send size={18} className="transition-luxury group-hover:translate-x-2" />
                        </span>
                      </button>
                    </Reveal>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Map Area - Standardized with Home Section Map style */}
      <section className="section-luxury bg-white overflow-hidden">
        <div className="luxury-container">
          <div className="text-left mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4">
                The Maheshra Destination
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Visit our <span className="text-primary-gold italic font-light">Campus Sanctuary.</span>
              </h2>
            </Reveal>
          </div>

          <div className="h-[600px] relative">
            <Reveal direction="up" width="100%">
              <div className="relative h-full w-full bg-secondary border-[12px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] group overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.234567890123!2d85.5009!3d24.0084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDAwJzMwLjIiTiA4NcKwMzAnMDMuMiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-1000 scale-[1.01] group-hover:scale-105"
                  title="Glorious Public School Location"
                ></iframe>

                {/* Floating Location Tag */}
                <div className="absolute top-10 left-10 bg-primary/90 backdrop-blur-md px-6 py-4 shadow-2xl border-l-[6px] border-primary-gold flex items-center gap-4 transition-luxury group-hover:translate-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                  <div>
                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white block">GPS Headquarters</span>
                    <span className="text-[10px] text-primary-gold font-bold uppercase tracking-widest">Live Presence</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
