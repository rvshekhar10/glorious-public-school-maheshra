'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const sliderImages = [
  {
    url: '/images/hero/glorious-public-school-maheshara.png',
    title: 'Where Leaders Are Cultivated.',
    subtitle: 'Experience excellence in education at Hazaribagh\'s premier residential institution.',
  },
  {
    url: '/images/hero/cinematic-classroom.png',
    title: 'Nurturing Innovation and Curiosity.',
    subtitle: 'State-of-the-art laboratories and smart classrooms for the modern learner.',
  },
  {
    url: '/images/hero/luxury-library.png',
    title: 'A Legacy of Intellectual Growth.',
    subtitle: 'Our enlightened spaces inspire a lifelong love for reading and discovery.',
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center bg-black">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 z-0"
          >
            {/* Multi-layered overlay for ultimate readability */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />

            <img
              src={sliderImages[currentSlide].url}
              alt="Slider"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay - Centered with safe margins */}
      <div className="luxury-container relative z-20 w-full pt-20 pb-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 px-6 py-2 bg-white/10 backdrop-blur-md border-l-4 border-primary-gold mb-10"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-white">
              Admissions Open 2026-27
            </span>
          </motion.div>

          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] drop-shadow-2xl text-white">
                  {sliderImages[currentSlide].title.split(' ').map((word, i) => (
                    <span key={i} className={word === 'Leaders' || word === 'Innovation' || word === 'Intellectual' ? 'text-primary-gold italic font-light' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed drop-shadow-lg">
                  {sliderImages[currentSlide].subtitle} Legacy of <span className="text-primary-gold font-bold">25+ Years</span> in crafting noble futures.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 mt-14"
          >
            <Link href="/admissions" className="px-10 py-5 bg-primary text-white font-bold tracking-[0.2em] uppercase text-[12px] transition-luxury hover:-translate-y-1 shadow-2xl hover:shadow-primary/40 flex items-center justify-center gap-4">
              <span>Start Your Journey</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-[0.2em] uppercase text-[12px] transition-luxury hover:bg-white hover:text-primary hover:-translate-y-1 flex items-center justify-center gap-4">
              <span>Schedule a Visit</span>
              <div className="w-2 h-2 bg-primary-gold"></div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats - Repositioned for breathing room */}
      <div className="absolute bottom-60 left-0 w-full z-30 pointer-events-none">
        <div className="luxury-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 max-w-5xl">
            {[
              { label: 'Founded', value: '1999' },
              { label: 'Campus', value: 'Maheshra' },
              { label: 'Legacy', value: '25+ Yrs' },
              { label: 'Rating', value: '5 Star' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (i * 0.1) }}
                className="space-y-1 pointer-events-auto"
              >
                <div className="text-xl lg:text-2xl font-bold text-white tracking-tight font-playfair">{stat.value}</div>
                <div className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Controls - Moved Left to avoid WhatsApp floating button */}
      <div className="absolute bottom-10 right-24 lg:right-32 z-40 flex items-center gap-8">
        <div className="flex items-center gap-3">
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 bg-white ${currentSlide === i ? 'w-12 opacity-100' : 'w-6 opacity-20 hover:opacity-50'}`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button onClick={prevSlide} className="w-12 h-12 border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-luxury backdrop-blur-sm">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="w-12 h-12 border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-luxury backdrop-blur-sm">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Left Static Positioned */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-6 lg:left-16 z-40 flex items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary-gold to-transparent relative">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-4 bg-white/40"
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-bold">Scroll</span>
      </motion.div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}
