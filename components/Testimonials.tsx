'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    relation: 'Parent of Class X Student',
    location: 'Daru, Hazaribagh',
    text: 'Best decision we made for our daughter\'s education. The teachers are dedicated, and the English medium instruction has improved her confidence tremendously. The residential facilities are safe and well-managed.',
    rating: 5,
  },
  {
    name: 'Meena Singh',
    relation: 'Parent of Class VII Student',
    location: 'Maheshra, Hazaribagh',
    text: 'As a parent in Maheshra, I am happy to have such a quality school nearby. My son loves the computer-aided learning lab and the playground. The co-educational environment is very healthy.',
    rating: 5,
  },
  {
    name: 'Anil Prasad',
    relation: 'Parent of Class IX Student',
    location: 'Hazaribagh Town',
    text: 'Our son has grown so much at Glorious Public School. The guidance from teachers and the boarding facilities are excellent. It is definitely one of the best schools in the DARU block.',
    rating: 5,
  },
  {
    name: 'Kavita Devi',
    relation: 'Parent of Class IV Student',
    location: 'Ichak, Hazaribagh',
    text: 'The discipline and values taught here are remarkable. My daughter has become more proficient in English. The school campus in Maheshra is beautiful and easily accessible.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-luxury bg-white overflow-hidden">
      <div className="luxury-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Heading and Stats */}
          <div className="space-y-10">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em]">
                Voices of Trust
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                What <span className="text-primary-gold italic font-light">Eminent</span> Parents Say.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <p className="text-lg text-gray-500 font-light leading-relaxed max-w-md">
                Trusted by hundreds of families across Hazaribagh for delivering world-class education and residential values.
              </p>
            </Reveal>

            <div className="flex gap-8 pt-6">
              <Reveal direction="up" delay={0.5}>
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-[12px] font-bold uppercase tracking-widest text-gray-400 mt-1">Happy Families</div>
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.6}>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9/5</div>
                  <div className="text-[12px] font-bold uppercase tracking-widest text-gray-400 mt-1">Parent Rating</div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-10 md:p-14 relative z-10 border-l-8 border-primary-gold"
              >
                <Quote size={48} className="text-primary-gold opacity-10 absolute top-8 right-8" />

                <div className="flex gap-1 mb-6">
                  {/* Rating Stars */}
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#c5a059" className="text-primary-gold" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-primary font-light italic leading-relaxed mb-10">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-primary text-white flex items-center justify-center font-bold text-xl uppercase">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg tracking-tight">{testimonials[current].name}</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{testimonials[current].relation}</p>
                    <p className="text-[12px] text-primary-gold font-bold uppercase mt-1 tracking-widest">{testimonials[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-12 h-12 border border-primary/10 flex items-center justify-center text-primary transition-luxury hover:bg-primary hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-[2px] transition-all duration-500 ${current === i ? 'w-10 bg-primary-gold' : 'w-4 bg-primary/10'}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 border border-primary/10 flex items-center justify-center text-primary transition-luxury hover:bg-primary hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
