'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden bg-primary-dark">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-primary/20 -skew-x-12 translate-x-1/4"></div>
      <div className="absolute top-0 right-0 w-1/4 h-full bg-primary-gold opacity-5"></div>

      <div className="luxury-container relative z-10">
        <div className="bg-primary/40 backdrop-blur-xl border border-white/10 p-12 lg:p-24 relative overflow-hidden group">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary-gold/30 translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-luxury"></div>

          <div className="max-w-4xl space-y-12">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[12px] font-bold uppercase tracking-[0.4em]">
                <GraduationCap size={16} className="text-primary-gold" />
                Enrollment 2026-27
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
                Secure Your Child's <br />
                <span className="text-primary-gold italic font-light underline decoration-white/20 underline-offset-[12px]">Noble Future</span> Today.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                Limited seats available for the upcoming academic session. Join Hazaribagh's most prestigious residential institution.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link
                  href="/admissions"
                  className="group relative px-12 py-6 bg-white text-primary font-bold uppercase tracking-[0.2em] text-[12px] transition-luxury hover:-translate-y-2 shadow-2xl overflow-hidden text-center sm:text-left"
                >
                  <span className="relative z-10 flex items-center justify-center sm:justify-start gap-4">
                    Start Your Journey <ArrowRight size={18} className="transition-luxury group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-primary-gold/10 translate-y-full transition-luxury group-hover:translate-y-0"></div>
                </Link>

                <Link
                  href="/contact"
                  className="px-12 py-6 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[12px] transition-luxury hover:bg-white/10 hover:-translate-y-2 backdrop-blur-sm text-center sm:text-left"
                >
                  Explore Campus
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
