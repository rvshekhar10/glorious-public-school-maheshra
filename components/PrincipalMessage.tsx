'use client';

import { Quote, User } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export default function PrincipalMessage() {
  return (
    <section className="section-luxury bg-secondary overflow-hidden">
      <div className="luxury-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Area */}
          <div className="relative">
            <Reveal direction="right">
              <div className="relative group">
                {/* Frame Background */}
                <div className="absolute top-8 left-8 -right-4 -bottom-4 border border-primary/10 transition-luxury group-hover:top-4 group-hover:left-4"></div>

                {/* Principal Image Container */}
                <div className="relative z-10 aspect-[4/5] overflow-hidden bg-white shadow-2xl border-[12px] border-white">
                  <img
                    src="/images/principal.png"
                    alt="Dr. Sunita Devi - Principal"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>

                  {/* Name Overlay - simplified to avoid overlap */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-[12px] uppercase tracking-[0.3em] font-bold opacity-80 mb-2">School Principal</p>
                    <div className="h-[1px] w-12 bg-primary-gold mb-3"></div>
                    <h3 className="text-2xl font-bold tracking-tight">Dr. Sunita Devi</h3>
                  </div>
                </div>

                {/* Accent Quote - repositioned to avoid clash */}
                <div className="absolute -top-10 -right-10 glass-card p-6 max-w-[220px] hidden xl:block z-20 shadow-xl border-l-4 border-primary-gold">
                  <Quote size={24} className="text-primary-gold mb-3 opacity-40 rotate-180" />
                  <p className="text-xs font-bold text-primary italic leading-relaxed">
                    "Wisdom is the ultimate wealth that never diminishes."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Content Area */}
          <div className="space-y-10 lg:pl-10">
            <div className="space-y-6">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em]">
                  Leadership Vision
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                  Nurturing <span className="text-primary-gold italic font-light">Character</span> <br />
                  Beyond Curriculum.
                </h2>
              </Reveal>
            </div>

            <div className="space-y-8 text-gray-500 font-light leading-relaxed text-lg">
              <Reveal direction="up" delay={0.4}>
                <p>
                  Namaste! As the Principal of <span className="text-primary font-bold italic underline decoration-primary-gold/30 underline-offset-8">Glorious Public School</span>, I welcome you to our academic sanctuary. Since 1999, we have been more than just a school; we are a crucible of values and excellence.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.5}>
                <p>
                  In the tranquil environment of Maheshra, we provide a residential experience that fosters self-discipline, resilience, and intellectual curiosity. Our co-educational setup mirroring real-world dynamics.
                </p>
              </Reveal>
            </div>

            <Reveal direction="up" delay={0.6}>
              <div className="bg-white p-8 border-l-[1px] border-primary-gold relative mt-10 shadow-sm">
                <Quote size={40} className="absolute -top-5 -left-5 text-primary-gold opacity-10" />
                <p className="text-primary font-medium italic leading-relaxed mb-6">
                  "We don't just prepare students for exams; we prepare them to become responsible citizens and future leaders of Hazaribagh and our nation."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-primary-gold"></div>
                  <div>
                    <h4 className="font-bold text-primary text-sm uppercase tracking-widest">DR. SUNITA DEVI</h4>
                    <p className="text-[12px] text-gray-400 font-bold">M.A., B.Ed., Ph.D. (Education)</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
