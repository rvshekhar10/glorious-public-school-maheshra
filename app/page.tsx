import Hero from '@/components/Hero';
import ResultsSection from '@/components/ResultsSection';
import PrincipalMessage from '@/components/PrincipalMessage';
import FacilitiesGrid from '@/components/FacilitiesGrid';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import { Reveal } from '@/components/ui/Reveal';
import { GraduationCap, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Why Choose Us */}
      <section className="section-luxury bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -skew-x-12 translate-x-32 -translate-y-32"></div>
        <div className="luxury-container">
          <div className="text-left mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4">
                The GPS Distinction
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why <span className="text-primary-gold italic font-light">Noble</span> Families Choose Us
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <p className="text-lg text-gray-500 max-w-2xl font-light">
                Providing Hazaribagh's finest residential education experience with a philosophy centered on character and competence.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-luxury"><GraduationCap size={24} /></div>,
                title: 'Established in 1999',
                description: 'Over 25 years of experience in delivering high-quality, value-based education.',
              },
              {
                icon: <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-luxury"><div className="font-bold">Eng</div></div>,
                title: 'English Immersion',
                description: 'Comprehensive English medium curriculum for global fluency and excellence.',
              },
              {
                icon: <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-luxury"><div className="w-6 h-6 border-2 border-current rounded-full"></div></div>,
                title: 'Holistic Development',
                description: 'Balanced residential and day boarding facilities with a focus on sports and arts.',
              }
            ].map((item, index) => (
              <Reveal key={index} direction="up" delay={0.1 * index}>
                <div className="group space-y-4">
                  {item.icon}
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary-gold transition-luxury">{item.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ResultsSection />
      <PrincipalMessage />
      <FacilitiesGrid />

      {/* Admission Process */}
      <section className="section-luxury bg-white border-y border-primary/5">
        <div className="luxury-container">
          <div className="text-left mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4">
                Begin The Journey
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Admission <span className="text-primary-gold italic font-light">Roadmap</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { step: '01', title: 'Enquiry', desc: 'Connect with our office via call or campus visit.' },
              { step: '02', title: 'Consultation', desc: 'Expert guidance on curriculum and campus life.' },
              { step: '03', title: 'Campus Tour', desc: 'In-person exploration of our world-class facilities.' },
              { step: '04', title: 'Confirmation', desc: 'Submission of credentials and enrollment.' },
            ].map((item, index) => (
              <Reveal key={index} direction="up" delay={0.1 * index}>
                <div className="group relative z-10 border-l border-primary/5 pl-8 py-4 hover:border-primary-gold transition-luxury">
                  <div className="text-4xl font-black text-primary/5 absolute top-0 left-0 -translate-x-1/2 group-hover:text-primary-gold/10 transition-luxury">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Visit Us Section - Immersive Map Refinement */}
      <section className="section-luxury bg-secondary overflow-hidden">
        <div className="luxury-container">
          <div className="text-left mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4">
                Find Your Way
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Visit Our <span className="text-primary-gold italic font-light">Maheshra</span> Campus.
              </h2>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            {/* Info Panel */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                {[
                  { icon: <MapPin className="text-primary-gold" size={24} />, title: 'Campus Address', detail: 'Maheshra, DARU Block, Hazaribagh, Jharkhand' },
                  { icon: <Phone className="text-primary-gold" size={24} />, title: 'Admissions Office', detail: '+91-XXXXXXXXXX' },
                  { icon: <Mail className="text-primary-gold" size={24} />, title: 'Official Email', detail: 'info@gloriouspublicschool.edu.in' }
                ].map((item, idx) => (
                  <Reveal key={idx} direction="up" delay={0.5 + idx * 0.1}>
                    <div className="flex gap-6 group">
                      <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 border border-primary/5 shadow-sm group-hover:bg-primary group-hover:text-white transition-luxury">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                        <p className="text-gray-500 font-light underline decoration-primary/10 underline-offset-4">{item.detail}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal direction="up" delay={0.8}>
                <div className="bg-white p-8 border-l-4 border-primary-gold shadow-sm">
                  <p className="text-primary font-bold uppercase tracking-widest text-[12px] mb-2">Academic Timing</p>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">The session commences in <span className="text-primary font-bold">April</span>. Visit during school hours: 08:00 AM - 02:00 PM.</p>
                </div>
              </Reveal>
            </div>

            {/* Immersive Map Area */}
            <div className="lg:col-span-7 h-[600px] relative">
              <Reveal direction="left" width="100%">
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
                  <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md px-6 py-4 shadow-2xl border-l-[6px] border-primary-gold flex items-center gap-4 transition-luxury group-hover:translate-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                    <div>
                      <span className="text-[12px] font-black uppercase tracking-[0.2em] text-primary block">GPS Campus</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Live Location</span>
                    </div>
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
