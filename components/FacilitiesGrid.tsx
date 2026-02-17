'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Beaker,
  Monitor,
  BookOpen,
  Trophy,
  ShieldCheck,
  Bus,
  Presentation,
  HeartPulse,
  ArrowRight
} from 'lucide-react';
import { Reveal } from './ui/Reveal';

export default function FacilitiesGrid() {
  const facilities = [
    {
      icon: <Beaker size={32} />,
      title: 'Advanced Laboratories',
      description: 'Well-equipped Physics, Chemistry, and Biology labs with modern apparatus for hands-on learning',
    },
    {
      icon: <Monitor size={32} />,
      title: 'Digital Innovation Lab',
      description: '50+ computers with high-speed internet, coding classes, and digital literacy programs',
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Enlightened Library',
      description: '10,000+ books, magazines, and digital resources. Quiet reading spaces for students',
    },
    {
      icon: <Trophy size={32} />,
      title: 'Global Sports Arena',
      description: 'Cricket ground, basketball court, volleyball court, and indoor games facilities',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Fortified Security',
      description: '24/7 surveillance for complete safety. Secure environment for your child',
    },
    {
      icon: <Bus size={32} />,
      title: 'Luxury Transit',
      description: 'GPS-enabled buses covering all areas of Hazaribagh with trained drivers and attendants',
    },
    {
      icon: <Presentation size={32} />,
      title: 'Smart Learning Hubs',
      description: 'Interactive digital boards, projectors, and audio-visual learning in every classroom',
    },
    {
      icon: <HeartPulse size={32} />,
      title: 'Wellness Center',
      description: 'Full-time nurse and tie-up with nearby hospitals for emergency medical care',
    },
  ];

  return (
    <section className="section-luxury bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-gold/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="luxury-container relative z-10">
        <div className="text-left mb-20">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-primary-gold text-[12px] font-bold uppercase tracking-[0.2em] mb-4 border border-white/10 backdrop-blur-sm">
              World-Class Infrastructure
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Crafting a <span className="text-primary-gold italic font-light">Noble</span> Environment
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <p className="text-lg text-white/50 max-w-2xl mx-auto font-light">
              Every cornerstone of our institution is designed to inspire, nurture, and empower future leaders.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {facilities.map((facility, index) => (
            <Reveal key={index} direction="up" delay={0.1 * index} width="100%">
              <div className="bg-white/5 backdrop-blur-md p-8 group hover:bg-primary transition-luxury border border-white/5 shadow-2xl">
                <div className="w-16 h-16 bg-white/10 flex items-center justify-center mb-8 text-primary-gold group-hover:bg-white group-hover:text-primary transition-luxury">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-luxury">
                  {facility.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/80 transition-luxury">
                  {facility.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center">
          <Reveal direction="up" delay={0.2}>
            <Link href="/facilities" className="inline-flex items-center gap-4 px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[12px] transition-luxury hover:bg-white hover:text-primary backdrop-blur-sm">
              <span>View Full Campus Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
