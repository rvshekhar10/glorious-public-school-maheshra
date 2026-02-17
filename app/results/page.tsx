'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import CTASection from '@/components/CTASection';
import {
  Trophy,
  Star,
  TrendingUp,
  Award,
  Target,
  BookOpen,
  ArrowRight,
  TrendingUp as TrendingIcon
} from 'lucide-react';

export default function ResultsPage() {
  const yearWiseResults = [
    { year: '2025', passRate: '100%', above90: '12', distinctions: '45', avgPercentage: '84.5%' },
    { year: '2024', passRate: '100%', above90: '10', distinctions: '40', avgPercentage: '83.8%' },
    { year: '2023', passRate: '100%', above90: '8', distinctions: '38', avgPercentage: '82.2%' },
    { year: '2022', passRate: '100%', above90: '7', distinctions: '35', avgPercentage: '81.5%' },
  ];

  const toppers2025 = [
    { name: 'Amit Kumar', class: 'X', stream: 'General', percentage: '96.2%', rank: '1st' },
    { name: 'Sneha Devi', class: 'X', stream: 'General', percentage: '95.6%', rank: '2nd' },
    { name: 'Vikash Prasad', class: 'X', stream: 'General', percentage: '94.8%', rank: '3rd' },
  ];

  const achievements = [
    { icon: <Award />, title: 'Interschool Awards', count: '50+', desc: 'In academic competitions.' },
    { icon: <TrendingIcon />, title: 'Board Success', count: '100%', desc: 'Since our establishment.' },
    { icon: <BookOpen />, title: 'Scholarships', count: '15+', desc: 'Merit-based financial aid.' },
    { icon: <Trophy />, title: 'Special Merit', count: '20+', desc: 'In various academic fields.' },
  ];

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
              <Trophy size={14} className="text-primary-gold" />
              Academic Excellence
            </div>
          </Reveal>

          <div className="max-w-4xl">
            <Reveal direction="up" delay={0.3}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8">
                The Legacy of <br />
                <span className="text-primary-gold italic font-light">Noble Achievements.</span>
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl">
                Celebrating the outstanding performance and unwavering dedication of Maheshra's brightest minds since 1999.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* High-Impact Stats Grid */}
      <section className="bg-white py-12 relative z-20 -mt-10 lg:-mt-20">
        <div className="luxury-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 transform">
            {[
              { label: 'Avg Result 2025', value: '92.4%' },
              { label: 'Pass Rate', value: '100%' },
              { label: 'Above 90%', value: '15+' },
              { label: 'Distinctions', value: '45+' },
            ].map((stat, i) => (
              <Reveal key={i} direction="up" delay={0.1 * i}>
                <div className="bg-primary p-12 lg:p-16 text-center lg:text-left border border-white/5 group hover:bg-primary-dark transition-luxury">
                  <p className="text-primary-gold font-bold uppercase tracking-widest text-[10px] mb-2">{stat.label}</p>
                  <p className="text-4xl lg:text-5xl font-black text-white tracking-tighter">{stat.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Class X Toppers 2025 - Using Homepage Glass Style */}
      <section className="section-luxury bg-secondary relative overflow-hidden">
        <div className="luxury-container">
          <div className="text-left mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4">
                Class of 2025
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold">
                Our <span className="text-primary-gold italic font-light">Luminaries</span> of Class X.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
            {toppers2025.map((topper, index) => (
              <Reveal key={index} direction="up" delay={0.2 * index} width="100%">
                <div className="bg-white p-10 text-center relative hover-lift group border border-primary/5 shadow-sm">
                  {/* Rank Badge */}
                  <div className="absolute top-0 right-10 bg-primary text-primary-gold w-10 h-14 flex flex-col items-center justify-center font-bold text-xs transform -translate-y-2 group-hover:-translate-y-4 transition-luxury shadow-xl">
                    <div className="text-[12px] uppercase font-light">Pos</div>
                    {topper.rank}
                  </div>

                  {/* Avatar Area */}
                  <div className="relative w-28 h-28 mx-auto mb-8">
                    <div className="absolute inset-0 bg-primary rounded-none rotate-45 group-hover:rotate-90 transition-luxury duration-700"></div>
                    <div className="absolute inset-1 bg-white rounded-none flex items-center justify-center text-primary text-4xl font-bold z-10 transition-luxury group-hover:scale-105">
                      {topper.name.charAt(0)}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary-gold transition-luxury">
                    {topper.name}
                  </h3>
                  <div className="text-5xl font-extrabold text-primary mb-2 tracking-tighter">
                    {topper.percentage}
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.3em] font-bold text-gray-400">
                    Class {topper.class} | {topper.stream}
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
        </div>
      </section>

      {/* Year-wise Performance - Professional Table */}
      <section className="section-luxury bg-white">
        <div className="luxury-container">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-12">
              <div className="text-left mb-20">
                <Reveal direction="up">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4 text-primary">
                    <TrendingUp size={14} className="text-primary-gold" />
                    Historical Trajectory
                  </div>
                </Reveal>
                <Reveal direction="up" delay={0.3}>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary">
                    Consistent <span className="text-primary-gold italic font-light">Academic Evolution.</span>
                  </h2>
                </Reveal>
              </div>

              <div className="bg-primary p-1 shadow-2xl overflow-hidden">
                <table className="w-full text-white">
                  <thead className="bg-black/20">
                    <tr>
                      <th className="px-8 py-6 text-left text-[12px] font-bold uppercase tracking-widest text-primary-gold">Year</th>
                      <th className="px-8 py-6 text-center text-[12px] font-bold uppercase tracking-widest text-primary-gold">Pass Rate</th>
                      <th className="px-8 py-6 text-center text-[12px] font-bold uppercase tracking-widest text-primary-gold">Above 90%</th>
                      <th className="px-8 py-6 text-center text-[12px] font-bold uppercase tracking-widest text-primary-gold">Distinctions</th>
                      <th className="px-8 py-6 text-right text-[12px] font-bold uppercase tracking-widest text-primary-gold">Avg %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {yearWiseResults.map((result, index) => (
                      <tr key={index} className="hover:bg-white/5 transition-luxury group">
                        <td className="px-8 py-8 font-bold text-lg">{result.year}</td>
                        <td className="px-8 py-8 text-center text-primary-gold font-black">{result.passRate}</td>
                        <td className="px-8 py-8 text-center text-white/60">{result.above90}</td>
                        <td className="px-8 py-8 text-center text-white/60">{result.distinctions}</td>
                        <td className="px-8 py-8 text-right font-black text-2xl text-white">{result.avgPercentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Board Results - High Contrast Cards */}
      <section className="section-luxury bg-charcoal overflow-hidden text-white relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent"></div>
        <div className="luxury-container relative z-10">
          <div className="text-left mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-primary-gold text-[12px] font-bold uppercase tracking-[0.2em] mb-4 border border-white/10 backdrop-blur-sm">
                Holistic Excellence
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold">
                Competitive <span className="text-primary-gold italic font-light">Milestones.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <Reveal key={index} direction="up" delay={0.1 * index}>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 group hover:bg-white/10 transition-luxury h-full">
                  <div className="w-14 h-14 bg-primary-gold/10 flex items-center justify-center text-primary-gold mb-8 border border-primary-gold/20">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-black text-white mb-2 tracking-tighter group-hover:text-primary-gold transition-luxury">{achievement.count}</div>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{achievement.title}</h3>
                  <p className="text-white/40 text-sm font-light">{achievement.desc}</p>
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
