'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import CTASection from '@/components/CTASection';
import {
  Monitor,
  BookOpen,
  Trophy,
  ShieldCheck,
  Building2,
  Waves,
  Layout,
  Cpu,
  Bookmark,
  Activity,
  ArrowRight,
  School
} from 'lucide-react';

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: <Layout size={32} />,
      title: 'Modern Classrooms',
      description: 'The school features 14 well-maintained classrooms designed for effective instructional purposes, ensuring a focused and productive environment.',
      features: ['Climate-Ready Design', 'Quality Ergonomic Furniture', 'High Ventilation Standards', 'Audio-Visual Ready'],
      bg: 'bg-primary/5'
    },
    {
      icon: <Cpu size={32} />,
      title: 'Digital Innovation Lab',
      description: 'Our dedicated computer-aided learning lab is equipped with functional systems to introduce students to digital literacy and future-tech tools.',
      features: ['Computer-Aided Learning', 'High-Speed Broadband', 'Guided Technical Sessions', 'Digital Literacy Modules'],
      bg: 'bg-secondary'
    },
    {
      icon: <Bookmark size={32} />,
      title: 'Enlightened Library',
      description: 'A curated sanctuary of knowledge housing a collection of refined literature and reference materials to foster a lifelong reading habit.',
      features: ['Curated Literature', 'Quiet Reflection Zone', 'Academic References', 'Teacher-Guided Reading'],
      bg: 'bg-primary-gold/5'
    },
    {
      icon: <Activity size={32} />,
      title: 'Elite Athletics Ground',
      description: 'A spacious, functional playground where students engage in professional sports, physical education, and competitive recreational play.',
      features: ['Expansive Turf Area', 'Outdoor Sports Equipment', 'Safety-First Design', 'Team Building Activities'],
      bg: 'bg-secondary'
    },
    {
      icon: <Waves size={32} />,
      title: 'Functional Utilities',
      description: 'Ensuring essential wellness with specialized hand pumps for clean water and separate, hygienic facilities for all genders.',
      features: ['Hygienic Water Systems', 'Gender-Separate Facilities', 'Uninterrupted Operations', 'Health & Safety Protocol'],
      bg: 'bg-primary-gold/5'
    },
    {
      icon: <Building2 size={32} />,
      title: 'Executive Spaces',
      description: 'Dedicated administrative blocks for non-teaching operations and high-level offices for school leadership coordination.',
      features: ['Principal Executive Suite', 'Faculty Staff Lounge', 'Admin Support Center', 'Coordination Hub'],
      bg: 'bg-primary/5'
    },
  ];

  return (
    <>
      {/* Immersive Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-60 lg:pb-40 overflow-hidden bg-primary">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-black/20 -skew-x-12 translate-x-1/4"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-primary-gold opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent"></div>

        <div className="luxury-container relative z-10">
          <div className="max-w-4xl space-y-8">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[12px] font-bold uppercase tracking-[0.4em]">
                <Building2 size={16} className="text-primary-gold" />
                World-Class Infrastructure
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05]">
                Environments of <br />
                <span className="text-primary-gold italic font-light">Pure Inspiration.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                A meticulously designed 25,000 sq. ft. sanctuary in Maheshra, crafted to provide the ultimate balance of focus, wellness, and growth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Facilities Grid - Balanced alternation */}
      <section className="section-luxury bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -skew-x-12 translate-x-32 -translate-y-32"></div>
        <div className="luxury-container">
          <div className="text-left mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4">
                The Campus Blueprint
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold">
                Elite Learning <span className="text-primary-gold italic font-light">Foundaries.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Reveal key={index} direction="up" delay={0.1 * index}>
                <div className={`${facility.bg} p-12 lg:p-16 border border-primary/5 relative group hover:bg-primary transition-luxury shadow-sm h-full`}>
                  <div className="w-16 h-16 bg-white flex items-center justify-center mb-10 text-primary-gold shadow-sm group-hover:bg-primary-gold group-hover:text-primary transition-luxury">
                    {facility.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white transition-luxury">{facility.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-8 group-hover:text-white/60 transition-luxury">{facility.description}</p>

                  <ul className="space-y-3 pt-6 border-t border-primary/10 group-hover:border-white/10">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-primary-gold/80 group-hover:text-white">
                        <ArrowRight size={12} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Quote Section */}
      <section className="section-luxury bg-charcoal overflow-hidden text-white relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent"></div>
        <div className="luxury-container relative z-10">
          <div className="max-w-5xl">
            <Reveal direction="up">
              <div className="relative p-12 lg:p-24 border border-white/10 bg-white/5 backdrop-blur-xl group">
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary-gold/20 translate-x-16 -translate-y-16"></div>
                <div className="space-y-8">
                  <div className="w-16 h-16 bg-primary-gold/10 flex items-center justify-center text-primary-gold">
                    <School size={32} />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-light italic leading-tight text-white/90">
                    "Infrastructure is not just buildings; it is the <span className="text-primary-gold font-bold">silent educator</span> that shapes every thought and ambition of our students."
                  </h2>
                  <div className="flex items-center gap-6 pt-6">
                    <div className="w-12 h-12 bg-primary-gold text-primary flex items-center justify-center font-bold">GPS</div>
                    <div>
                      <p className="text-[12px] font-black uppercase tracking-widest text-primary-gold">Maheshra Campus</p>
                      <p className="text-[12px] font-bold uppercase tracking-widest text-white/40">Since 1999</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final Detailed List - Standardized with Home Section Map style */}
      <section className="section-luxury bg-secondary">
        <div className="luxury-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                  Quality Assurance
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <h2 className="text-4xl font-bold text-primary">
                  The Gold Standard <br />
                  <span className="text-primary-gold italic font-light">of School Utilities.</span>
                </h2>
              </Reveal>
              <div className="space-y-8">
                {[
                  { title: 'Safe Water Fleet', desc: 'Managed through high-pressure deep borewells and filter systems.' },
                  { title: 'Separate Hygiene Zones', desc: 'Professionally maintained separate facilities for girls, boys, and staff.' },
                  { title: 'All-Weather Connectivity', desc: 'Maintained internal roads and access for residential tranquility.' }
                ].map((item, id) => (
                  <Reveal key={id} direction="up" delay={0.3 + id * 0.1}>
                    <div className="flex gap-6 group">
                      <div className="w-10 h-10 border border-primary-gold/30 flex items-center justify-center shrink-0 group-hover:bg-primary-gold group-hover:text-primary transition-luxury">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-[12px] uppercase tracking-widest mb-1">{item.title}</h4>
                        <p className="text-gray-500 font-light text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="relative h-[500px]">
              <Reveal direction="left" width="100%">
                <div className="relative h-full w-full border-[12px] border-white shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-luxury duration-1000"></div>
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <Building2 size={120} className="text-primary-gold/20" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

// Fixed Lucide imports
import { CheckCircle2 } from 'lucide-react';
