'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import CTASection from '@/components/CTASection';
import {
  History,
  Target,
  Compass,
  Award,
  Users,
  ShieldCheck,
  GraduationCap,
  Star,
  Quote,
  ArrowRight,
  BookOpen,
  Heart
} from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Immersive Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-60 lg:pb-40 overflow-hidden bg-primary">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/20 -skew-x-12 translate-x-20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-gold opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent"></div>

        <div className="luxury-container relative z-10 text-left">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-primary-gold text-[12px] font-bold uppercase tracking-[0.3em] mb-8 border border-white/10 backdrop-blur-sm">
              <History size={14} className="text-primary-gold" />
              Our Legacy Since 1999
            </div>
          </Reveal>

          <div className="max-w-4xl">
            <Reveal direction="up" delay={0.3}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8">
                The Heritage of <br />
                <span className="text-primary-gold italic font-light">Academic Noblesse.</span>
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl">
                A premier residential sanctuary in Maheshra, Hazaribagh, dedicated to sculpting the next generation of global leaders through English-medium excellence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Story - Left Aligned & Symmetrical */}
      <section className="section-luxury bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -skew-x-12 translate-x-32 -translate-y-32"></div>
        <div className="luxury-container">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 space-y-10">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em]">
                  The Foundation
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Serving the Hazaribagh <br />
                  <span className="text-primary-gold italic font-light">Community Since 1999.</span>
                </h2>
              </Reveal>

              <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                <Reveal direction="up" delay={0.4}>
                  <p>
                    Established in 1999, <span className="text-primary font-bold">Glorious Public School</span> was founded with a vision to provide quality education in the rural heart of Hazaribagh. Located in the DARU block of Jharkhand, our school has been a cornerstone of local education for over 25 years.
                  </p>
                </Reveal>
                <Reveal direction="up" delay={0.5}>
                  <p>
                    As a private, unaided institution, we offer both residential and day boarding facilities. Our school consists of grades from 1 to 10, along with an attached pre-primary section to provide a strong foundation for young learners.
                  </p>
                </Reveal>
                <Reveal direction="up" delay={0.6}>
                  <p>
                    With English as the medium of instruction, we prepare our students to be globally competitive while remaining rooted in local community values. Our 14-classroom campus is designed to provide a safe and conducive learning environment.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Immersive Image Container */}
            <div className="lg:col-span-5 relative">
              <Reveal direction="left">
                <div className="relative group">
                  <div className="absolute top-8 left-8 -right-4 -bottom-4 border border-primary/10 transition-luxury group-hover:top-4 group-hover:left-4"></div>
                  <div className="relative z-10 aspect-[4/5] bg-secondary shadow-2xl border-[12px] border-white overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-luxury group-hover:bg-transparent"></div>
                    <div className="w-full h-full flex items-center justify-center bg-secondary">
                      <GraduationCap size={120} className="text-primary-gold/20" />
                    </div>
                    {/* Placeholder for real image */}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - High Contrast */}
      <section className="section-luxury bg-charcoal overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent"></div>
        <div className="luxury-container relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal direction="up">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 lg:p-16 h-full relative group hover:bg-white/10 transition-luxury">
                <div className="w-16 h-16 bg-primary-gold/10 flex items-center justify-center mb-10 text-primary-gold border border-primary-gold/20">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-wider">Our Vision</h2>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  To be a leading residential school in rural Hazaribagh, recognized for academic excellence, character development, and creating opportunities for students from all backgrounds to succeed in a global landscape.
                </p>
                <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-primary-gold/20 origin-left scale-x-0 group-hover:scale-x-100 transition-luxury duration-700"></div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 lg:p-16 h-full relative group hover:bg-white/10 transition-luxury">
                <div className="w-16 h-16 bg-primary-gold/10 flex items-center justify-center mb-10 text-primary-gold border border-primary-gold/20">
                  <Compass size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-wider">Our Mission</h2>
                <ul className="space-y-4">
                  {[
                    "Provide elite English medium education to rural area children.",
                    "Maintain world-class residential and boarding facilities.",
                    "Foster holistic development through modern technology.",
                    "Instill unbreakable moral values and character discipline.",
                    "Ensure premium infrastructure for a conducive environment."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start text-white/60 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-gold mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Institutional Profile - Symmetrical Card */}
      <section className="section-luxury bg-white">
        <div className="luxury-container">
          <div className="max-w-6xl mx-auto">
            <div className="bg-secondary p-12 lg:p-24 border border-primary/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>

              <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="space-y-8">
                  <Reveal direction="up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                      Accreditation
                    </div>
                  </Reveal>
                  <Reveal direction="up" delay={0.3}>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                      Private Unaided <br />
                      <span className="text-primary-gold italic font-light">Co-educational</span> School
                    </h2>
                  </Reveal>
                  <Reveal direction="up" delay={0.4}>
                    <p className="text-gray-500 font-light text-lg italic leading-relaxed">
                      "Managed with a singular focus on delivering high-quality education, we operate from our own private architectural marvel with comprehensive facilities."
                    </p>
                  </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-primary p-12 shadow-2xl">
                  {[
                    { label: 'Established', value: '1999', sub: '25+ Years' },
                    { label: 'School Type', value: 'Private', sub: 'Unaided' },
                    { label: 'Category', value: 'Boarding', sub: 'Res. & Day' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center md:text-left space-y-1">
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                      <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
                      <p className="text-primary-gold text-[10px] font-bold uppercase tracking-[0.2em]">{stat.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership - Standardizing with Homepage Style */}
      <section className="section-luxury bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-20"></div>
        <div className="luxury-container relative z-10">
          <div className="text-left mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-primary-gold text-[12px] font-bold uppercase tracking-[0.2em] mb-4 border border-white/10 backdrop-blur-sm">
                <Users size={14} className="text-primary-gold" />
                Leadership Team
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                The Architects of <span className="text-primary-gold italic font-light">Excellence.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
            {[
              { name: 'Dr. Sunita Devi', role: 'Principal', qual: 'M.A., B.Ed., Ph.D.' },
              { name: 'Mr. Rajesh Kumar', role: 'Vice Principal', qual: 'M.Sc., B.Ed.' },
              { name: 'Mrs. Anita Singh', role: 'Academic Coordinator', qual: 'M.A., B.Ed.' },
            ].map((member, index) => (
              <Reveal key={index} direction="up" delay={0.1 * index}>
                <div className="bg-white/5 backdrop-blur-md p-12 border border-white/10 group transition-luxury hover:bg-white/10">
                  <div className="w-20 h-20 bg-primary-gold text-primary mb-8 flex items-center justify-center text-4xl font-black group-hover:rotate-[360deg] transition-all duration-1000">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="h-0.5 w-12 bg-primary-gold mb-4"></div>
                  <p className="text-primary-gold font-bold uppercase tracking-widest text-[11px] mb-2">{member.role}</p>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{member.qual}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Premium Icons & Left Aligned */}
      <section className="section-luxury bg-white">
        <div className="luxury-container">
          <div className="text-left mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4">
                <Star size={14} className="text-primary-gold" />
                Our Ethos
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Values That Define <span className="text-primary-gold italic font-light">Nobility.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <BookOpen />, title: 'Excellence', desc: 'Striving for the highest academic standards with absolute dedication.' },
              { icon: <ShieldCheck />, title: 'Integrity', desc: 'Honesty and strong moral principles guiding every decision we make.' },
              { icon: <Star />, title: 'Discipline', desc: 'Self-control and orderly conduct in learning and the journey of life.' },
              { icon: <Heart />, title: 'Compassion', desc: 'Empathy and genuine care for others within our academic community.' },
            ].map((value, index) => (
              <Reveal key={index} direction="up" delay={0.1 * index}>
                <div className="p-10 border border-primary/5 hover:bg-primary group transition-luxury shadow-sm">
                  <div className="w-14 h-14 bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-primary transition-luxury">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-white transition-luxury">{value.title}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-white/70 transition-luxury">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
