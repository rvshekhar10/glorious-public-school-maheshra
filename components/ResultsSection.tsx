'use client';

import { Reveal } from './ui/Reveal';
import { Star, Trophy, Award, TrendingUp } from 'lucide-react';

export default function ResultsSection() {
  const toppers = [
    {
      name: 'Amit Kumar',
      percentage: '96.2%',
      stream: 'General',
      rank: '1st',
    },
    {
      name: 'Sneha Devi',
      percentage: '95.6%',
      stream: 'General',
      rank: '2nd',
    },
    {
      name: 'Vikash Prasad',
      percentage: '94.8%',
      stream: 'General',
      rank: '3rd',
    },
  ];

  return (
    <section className="section-luxury bg-primary relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent"></div>

      <div className="luxury-container relative z-10">
        <div className="text-left mb-20">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-primary-gold text-[12px] font-bold uppercase tracking-[0.2em] mb-4 border border-primary-gold/20 backdrop-blur-sm">
              <Trophy size={14} className="text-primary-gold" />
              Academic Excellence
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-primary-gold italic font-light">Luminaries</span> of 2025
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
              Upholding a legacy of excellence with consistent 100% success rate in board examinations.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {toppers.map((topper, index) => (
            <Reveal key={index} direction="up" delay={0.2 * index} width="100%">
              <div className="bg-white/5 backdrop-blur-xl p-10 text-center relative hover-lift group border border-white/10">
                {/* Rank Badge */}
                <div className="absolute top-0 right-10 bg-primary-gold text-primary w-10 h-14 flex flex-col items-center justify-center font-bold text-xs transform -translate-y-2 group-hover:-translate-y-4 transition-luxury shadow-xl">
                  <div className="text-[12px] uppercase font-light">Pos</div>
                  {topper.rank}
                </div>

                {/* Avatar Area */}
                <div className="relative w-28 h-28 mx-auto mb-8">
                  <div className="absolute inset-0 bg-primary-gold rounded-none rotate-45 group-hover:rotate-90 transition-luxury duration-700"></div>
                  <div className="absolute inset-1 bg-primary rounded-none flex items-center justify-center text-white text-4xl font-bold z-10 transition-luxury group-hover:scale-105">
                    {topper.name.charAt(0)}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-gold transition-luxury">
                  {topper.name}
                </h3>
                <div className="text-5xl font-extrabold text-primary-gold mb-2 tracking-tighter">
                  {topper.percentage}
                </div>
                <div className="text-[12px] uppercase tracking-[0.3em] font-bold text-white/40">
                  Class X | {topper.stream}
                </div>

                {/* Stars */}
                <div className="mt-8 flex justify-center gap-1 opacity-40 group-hover:opacity-100 transition-luxury">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="text-primary-gold" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Dynamic Stats Grid */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto border border-white/10 bg-white/5 backdrop-blur-md p-8">
          {[
            { icon: <Award size={24} />, label: 'Pass Rate', value: '100%' },
            { icon: <TrendingUp size={24} />, label: 'Above 90%', value: '15+' },
            { icon: <Star size={24} />, label: 'Distinctions', value: '40+' },
            { icon: <Trophy size={24} />, label: 'Merit List', value: '50+' },
          ].map((stat, i) => (
            <Reveal key={i} direction="up" delay={0.2 + (i * 0.1)}>
              <div className="text-center p-4">
                <div className="flex justify-center text-primary-gold mb-4 group-hover:scale-110 transition-luxury">
                  {stat.icon}
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-[12px] uppercase font-bold tracking-widest text-white/40">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
