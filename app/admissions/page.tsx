'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import CTASection from '@/components/CTASection';
import {
  GraduationCap,
  Calendar,
  FileText,
  CreditCard,
  HelpCircle,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Mail
} from 'lucide-react';

export default function AdmissionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the admission process?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The admission process involves enquiring via phone or visit, campus interaction, and physical document submission at the Maheshra campus.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents are required for admission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Birth certificate, transfer certificate, Aadhar card, and passport size photos of the student.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Immersive Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-60 lg:pb-40 overflow-hidden bg-primary">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-black/20 -skew-x-12 translate-x-1/4"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-primary-gold opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent"></div>

        <div className="luxury-container relative z-10">
          <div className="max-w-4xl space-y-8">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[12px] font-bold uppercase tracking-[0.4em]">
                <GraduationCap size={16} className="text-primary-gold" />
                Enrollment 2026-27
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05]">
                Shape Their <br />
                <span className="text-primary-gold italic font-light">Noble Future.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
                Secure your child's journey in Maheshra's premier residential sanctuary. Now accepting applications for the academic session 2026-27.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="group relative px-10 py-5 bg-white text-primary font-bold uppercase tracking-[0.2em] text-[12px] transition-luxury hover:-translate-y-2 shadow-2xl flex items-center justify-center gap-4"
                >
                  <Phone size={18} className="text-primary-gold" />
                  <span>Call Admissions</span>
                </a>

                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[12px] transition-luxury hover:bg-white/10 hover:-translate-y-2 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Eligibility - Clean Left Aligned Grid */}
      <section className="section-luxury bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -skew-x-12 translate-x-32 -translate-y-32"></div>
        <div className="luxury-container">
          <div className="text-left mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4">
                <Calendar size={14} className="text-primary-gold" />
                Admission Standards
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold">
                Eligibility <span className="text-primary-gold italic font-light">Criteria.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { class: 'Class I', age: '6+ Years', sub: 'Foundational Years' },
              { class: 'Class II-V', age: 'Academic Match', sub: 'Primary Excellence' },
              { class: 'Class VI-VIII', age: 'Academic Match', sub: 'Middle Scholars' },
              { class: 'Class IX-X', age: 'Academic Match', sub: 'Secondary Leaders' },
            ].map((item, index) => (
              <Reveal key={index} direction="up" delay={0.1 * index}>
                <div className="p-10 border border-primary/5 bg-secondary/30 group hover:bg-primary transition-luxury">
                  <p className="text-primary-gold font-bold uppercase tracking-widest text-[10px] mb-2 group-hover:text-white/60">{item.sub}</p>
                  <h3 className="text-3xl font-bold text-primary mb-4 group-hover:text-white">{item.class}</h3>
                  <div className="h-0.5 w-12 bg-primary-gold mb-6"></div>
                  <div className="flex items-center gap-3 text-gray-500 group-hover:text-white/60">
                    <Clock size={16} />
                    <span className="font-light">{item.age}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={0.6}>
            <div className="mt-20 p-10 bg-primary-gold/5 border-l-4 border-primary-gold flex flex-col md:flex-row gap-8 items-center max-w-5xl">
              <div className="w-16 h-16 bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary-gold/10">
                <HelpCircle size={32} className="text-primary-gold" />
              </div>
              <p className="text-lg text-primary font-light leading-relaxed">
                <strong className="font-bold">Important Note:</strong> Age should be completed as on 31st March 2026. Admissions are subject to the absolute availability of seats in each elite grade.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Required Documents - Immersive Dark Section */}
      <section className="section-luxury bg-charcoal overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 translate-x-1/2"></div>
        <div className="luxury-container relative z-10">
          <div className="text-left mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-primary-gold text-[12px] font-bold uppercase tracking-[0.2em] mb-4 border border-white/10 backdrop-blur-sm">
                <FileText size={14} className="text-primary-gold" />
                Documentation
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold">
                Required <span className="text-primary-gold italic font-light">Credentials.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Birth Certificate', desc: 'Official original and certified photocopy.' },
              { title: 'Transfer Certificate', desc: 'From previous elite institution (if applicable).' },
              { title: 'Aadhar Identification', desc: 'Valid ID of both the student and the parents.' },
              { title: 'Official Photographs', desc: '4 recent passport-size professional photos.' },
              { title: 'Academic Transcripts', desc: 'Previous class report cards and merit awards.' },
              { title: 'Residential Proof', desc: 'Any government-issued document with current address.' },
            ].map((doc, index) => (
              <Reveal key={index} direction="up" delay={0.1 * index}>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 group hover:bg-white/10 transition-luxury">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-primary-gold/10 flex items-center justify-center text-primary-gold border border-primary-gold/20">
                      <CheckCircle2 size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{doc.title}</h3>
                  </div>
                  <p className="text-white/40 font-light leading-relaxed">{doc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure - Premium Display */}
      <section className="section-luxury bg-white">
        <div className="luxury-container">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-10">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em]">
                  <CreditCard size={14} className="text-primary-gold" />
                  Investment in Future
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.3}>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Transparent <br />
                  <span className="text-primary-gold italic font-light">Fee Structure.</span>
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.4}>
                <p className="text-lg text-gray-500 font-light leading-relaxed">
                  We believe in providing the highest standard of English medium education at an affordable investment for discerning families in Hazaribagh.
                </p>
              </Reveal>

              <div className="space-y-4 pt-6">
                {[
                  "Sibling Loyalty: 10% - 15% Tuition Discount",
                  "Academic Scholarships for Merit Students",
                  "All-inclusive English Medium Curriculum"
                ].map((perk, i) => (
                  <Reveal key={i} direction="up" delay={0.5 + i * 0.1}>
                    <div className="flex items-center gap-4 text-primary font-bold text-sm tracking-wider uppercase">
                      <div className="w-8 h-[1px] bg-primary-gold"></div>
                      {perk}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <Reveal direction="left">
                <div className="bg-primary p-1 shadow-2xl overflow-hidden">
                  <table className="w-full text-white">
                    <thead className="bg-black/20">
                      <tr>
                        <th className="px-8 py-6 text-left text-[12px] font-bold uppercase tracking-widest text-primary-gold">Grade</th>
                        <th className="px-8 py-6 text-right text-[12px] font-bold uppercase tracking-widest text-primary-gold">Admission</th>
                        <th className="px-8 py-6 text-right text-[12px] font-bold uppercase tracking-widest text-primary-gold">Annual</th>
                        <th className="px-8 py-6 text-right text-[12px] font-bold uppercase tracking-widest text-primary-gold">Monthly</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {[
                        { class: 'Class I - V', admission: '₹5,000', annual: '₹8,000', monthly: '₹1,500' },
                        { class: 'Class VI - VIII', admission: '₹6,000', annual: '₹10,000', monthly: '₹2,000' },
                        { class: 'Class IX - X', admission: '₹7,500', annual: '₹12,500', monthly: '₹2,500' },
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-white/5 transition-luxury group">
                          <td className="px-8 py-8 font-bold text-lg">{row.class}</td>
                          <td className="px-8 py-8 text-right text-white/60">{row.admission}</td>
                          <td className="px-8 py-8 text-right text-white/60">{row.annual}</td>
                          <td className="px-8 py-8 text-right font-black text-2xl text-primary-gold">{row.monthly}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-6 text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em] italic">
                  * Transport, uniform, and books are not included in the standard fee structure.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form - Premium Counsel Layout */}
      <section className="section-luxury bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-full bg-primary/5"></div>
        <div className="luxury-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form Side */}
            <div className="lg:col-span-12">
              <div className="bg-white p-12 lg:p-24 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary-gold/10 translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-luxury"></div>

                <div className="grid lg:grid-cols-2 gap-20">
                  <div className="space-y-10">
                    <div className="space-y-4">
                      <Reveal direction="up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                          Direct Access
                        </div>
                      </Reveal>
                      <Reveal direction="up" delay={0.2}>
                        <h2 className="text-4xl font-bold text-primary leading-tight">
                          Personalized <br />
                          <span className="text-primary-gold italic font-light">Admission Counsel.</span>
                        </h2>
                      </Reveal>
                      <Reveal direction="up" delay={0.3}>
                        <p className="text-gray-500 font-light leading-relaxed">
                          Complete the formal enquiry below. Our dedicated admission dean will contact you within 24 business hours to guide your journey.
                        </p>
                      </Reveal>
                    </div>

                    <div className="space-y-8 pt-6">
                      {[
                        { icon: <MapPin size={20} />, title: 'Campus Visit', detail: 'Maheshra, DARU Block, Hazaribagh' },
                        { icon: <Mail size={20} />, title: 'Official Support', detail: 'info@gloriouspublicschool.edu.in' }
                      ].map((item, idx) => (
                        <Reveal key={idx} direction="up" delay={0.4 + idx * 0.1}>
                          <div className="flex gap-6">
                            <div className="text-primary-gold shrink-0">{item.icon}</div>
                            <div>
                              <h4 className="font-bold text-primary text-[12px] uppercase tracking-widest mb-1">{item.title}</h4>
                              <p className="text-gray-400 text-sm font-light">{item.detail}</p>
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>

                  <form className="space-y-6">
                    <Reveal direction="up" delay={0.2}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Student Name</label>
                          <input type="text" className="w-full px-0 py-4 border-b border-gray-200 focus:outline-none focus:border-primary-gold transition-luxury bg-transparent font-light" placeholder="Full Legal Name" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Target Grade</label>
                          <select className="w-full px-0 py-4 border-b border-gray-200 focus:outline-none focus:border-primary-gold transition-luxury bg-transparent font-light" required>
                            <option value="">Select Grade</option>
                            {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'].map(grade => (
                              <option key={grade} value={grade}>Class {grade}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.3}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Parent Name</label>
                          <input type="text" className="w-full px-0 py-4 border-b border-gray-200 focus:outline-none focus:border-primary-gold transition-luxury bg-transparent font-light" placeholder="Father/Mother Name" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Contact Number</label>
                          <input type="tel" className="w-full px-0 py-4 border-b border-gray-200 focus:outline-none focus:border-primary-gold transition-luxury bg-transparent font-light" placeholder="+91 XXXXX XXXXX" required />
                        </div>
                      </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.4}>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Residential Area</label>
                        <input type="text" className="w-full px-0 py-4 border-b border-gray-200 focus:outline-none focus:border-primary-gold transition-luxury bg-transparent font-light" placeholder="Locality in Hazaribagh" required />
                      </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.5}>
                      <button type="submit" className="group relative w-full px-12 py-6 bg-primary text-white font-bold uppercase tracking-[0.2em] text-[12px] transition-luxury hover:-translate-y-2 shadow-2xl overflow-hidden mt-6">
                        <span className="relative z-10 flex items-center justify-center gap-4">
                          Submit Form for Review <ArrowRight size={18} className="transition-luxury group-hover:translate-x-2" />
                        </span>
                      </button>
                    </Reveal>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Symmetrical Accordion Alternative */}
      <section className="section-luxury bg-white">
        <div className="luxury-container">
          <div className="text-left mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4">
                <HelpCircle size={14} className="text-primary-gold" />
                Common Queries
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold">
                Assisting Your <span className="text-primary-gold italic font-light">Decision.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            {[
              {
                q: 'When do elite admissions open?',
                a: 'Admissions for 2026-27 are now officially open. We recommend initiating the process early as seats are strictly limited to maintain excellence.',
              },
              {
                q: 'Is there an entrance assessment?',
                a: 'For Classes III-X, a simple intellectual interaction is conducted to understand the student’s current foundation and match them with our curriculum.',
              },
              {
                q: 'Do you cover all of Hazaribagh?',
                a: 'Yes, our premium transit fleet covers Maheshra and almost all key sectors of Hazaribagh and the DARU block.',
              },
              {
                q: 'What is the standard ratio?',
                a: 'We maintain a prestigious 25:1 student-teacher ratio to ensure every child receives the tailored guidance they deserve.',
              },
            ].map((faq, index) => (
              <Reveal key={index} direction="up" delay={0.1 * index}>
                <div className="p-10 bg-secondary/30 border border-primary/5 group hover:border-primary-gold transition-luxury">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-4">
                    <span className="w-1.5 h-6 bg-primary-gold group-hover:h-8 transition-all"></span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed lg:pl-6">{faq.a}</p>
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
