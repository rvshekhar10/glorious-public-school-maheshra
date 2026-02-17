'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import CTASection from '@/components/CTASection';
import {
  BookOpen,
  Clock,
  Calendar,
  Share2,
  ChevronRight,
  Newspaper,
  ArrowRight,
  GraduationCap,
  Bookmark
} from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Why English Medium Education Matters in Hazaribagh',
      excerpt: "In today's competitive world, English fluency is not just an advantage—it's a necessity. For families in Hazaribagh, choosing an English medium school like Glorious Public School opens doors to national opportunities.",
      date: 'February 10, 2026',
      readTime: '5 min read',
      category: 'Mastery',
      content: `
        <p>As parents in Hazaribagh, one of the most important decisions you'll make is choosing the right medium of instruction for your child's education. While Hindi and regional languages hold cultural significance, English medium education has become increasingly crucial for your child's future success.</p>
        
        <h3>The Global Benchmark</h3>
        <p>English is the global language of business, technology, and higher education. Students from English medium schools in Hazaribagh have a significant advantage when competing for admissions in top colleges, competitive exams like IIT-JEE and NEET, and eventually in the job market.</p>
        
        <h3>Building Confidence Early</h3>
        <p>At Glorious Public School, we've observed that students who start with English medium early develop better communication skills and confidence. They can express themselves clearly—skills that are essential in today's world.</p>
      `,
    },
    {
      title: 'Guide: Choosing the Best School in Hazaribagh',
      excerpt: 'Selecting the right school is one of the most important decisions for your child\'s future. Here\'s a comprehensive guide for parents on identifying true excellence.',
      date: 'February 05, 2026',
      readTime: '7 min read',
      category: 'Parenting',
      content: `
        <p>With several schools in Hazaribagh claiming to be the best, how do you make the right choice for your child? Here's a practical guide based on what truly matters.</p>
        
        <h3>Academic Track Record</h3>
        <p>Don't just look at advertisements—ask for actual results from the past years. A consistent performance indicates quality teaching. At Glorious Public School, we maintain transparency with our results and 100% pass rate.</p>
        
        <h3>Infrastructure and Facilities</h3>
        <p>Visit the school personally. Check if they have proper science labs, computer labs, library, and sports facilities. Smart classrooms with digital boards are becoming essential for modern education.</p>
      `,
    },
    {
      title: 'CBSE vs State Board: The Strategic Choice',
      excerpt: 'Understanding the key differences between CBSE and State Board education systems to make an informed decision for your child\'s academic journey.',
      date: 'January 28, 2026',
      readTime: '6 min read',
      category: 'Strategy',
      content: `
        <p>One of the most common questions parents in Hazaribagh ask is: "Should I choose CBSE or State Board for my child?" Let's break down the differences to help you decide.</p>
        
        <h3>Curriculum Depth</h3>
        <p>CBSE follows a national curriculum that's uniform across India. The syllabus is designed to prepare students for competitive exams like IIT-JEE, NEET, and other national-level tests. The syllabus is more application-based and conceptual.</p>
        
        <h3>Transferability</h3>
        <p>If your family might relocate due to job transfers, CBSE is the better choice. CBSE schools are present across India with the same curriculum, making transfers smooth.</p>
      `,
    },
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
              <Newspaper size={14} className="text-primary-gold" />
              Educational Insights
            </div>
          </Reveal>

          <div className="max-w-4xl">
            <Reveal direction="up" delay={0.3}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8">
                Wisdom for the <br />
                <span className="text-primary-gold italic font-light">Noble Guardian.</span>
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl">
                Curated articles and expert guidance for parents navigating the elite education landscape of Hazaribagh.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Blog Feed & Sidebar */}
      <section className="section-luxury bg-white">
        <div className="luxury-container">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

            {/* Main Feed */}
            <div className="lg:col-span-8 space-y-20">
              {blogPosts.map((post, index) => (
                <article key={index} className="group">
                  <Reveal direction="up" delay={0.1 * index}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em]">
                        <span className="bg-primary text-white px-3 py-1">{post.category}</span>
                        <span className="text-gray-400 flex items-center gap-2">
                          <Calendar size={12} className="text-primary-gold" />
                          {post.date}
                        </span>
                        <span className="text-gray-400 flex items-center gap-2">
                          <Clock size={12} className="text-primary-gold" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight group-hover:text-primary-gold transition-luxury">
                        <Link href="#">{post.title}</Link>
                      </h2>

                      <p className="text-gray-500 font-light text-lg leading-relaxed max-w-3xl">
                        {post.excerpt}
                      </p>

                      <div className="prose-luxury max-w-none text-gray-600 font-light italic border-l-2 border-primary-gold/20 pl-8 mb-8"
                        dangerouslySetInnerHTML={{ __html: post.content.substring(0, 300) + '...' }} />

                      <div className="flex items-center justify-between pt-8 border-t border-primary/5">
                        <Link href="#" className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.2em] text-[11px] group-hover:translate-x-2 transition-luxury">
                          <span>Continue Reading</span>
                          <ArrowRight size={16} className="text-primary-gold" />
                        </Link>

                        <button className="p-3 bg-secondary text-primary-gold hover:bg-primary hover:text-white transition-luxury">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  </Reveal>
                </article>
              ))}
            </div>

            {/* Premium Sidebar */}
            <aside className="lg:col-span-4 space-y-16">

              {/* Perspective Card */}
              <Reveal direction="left">
                <div className="bg-secondary p-10 border-l-4 border-primary-gold">
                  <h3 className="text-xl font-bold text-primary uppercase tracking-wider mb-6">Our Perspective</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">
                    At Glorious Public School, we believe that informed parents are the foundation of successful students. This blog is a curated sanctuary of advice for the Hazaribagh community.
                  </p>
                </div>
              </Reveal>

              {/* Categorization */}
              <Reveal direction="left" delay={0.2}>
                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-primary uppercase tracking-wider flex items-center gap-4">
                    <Bookmark size={20} className="text-primary-gold" />
                    Catalog
                  </h3>
                  <ul className="space-y-4">
                    {['Elite Education', 'Nobel Parenting', 'School Strategy', 'Career Compass'].map((cat, i) => (
                      <li key={i}>
                        <Link href="#" className="flex items-center justify-between py-3 border-b border-primary/5 text-gray-400 hover:text-primary hover:pl-2 transition-all font-bold uppercase tracking-widest text-[11px]">
                          <span>{cat}</span>
                          <ChevronRight size={14} className="text-primary-gold" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Premium CTA Sidebar */}
              <Reveal direction="left" delay={0.3}>
                <div className="bg-primary p-12 relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-gold/10 -translate-x-4 translate-y-4"></div>
                  <div className="relative z-10 space-y-6 text-center lg:text-left">
                    <GraduationCap size={40} className="text-primary-gold mx-auto lg:mx-0" />
                    <h3 className="text-2xl font-bold text-white leading-tight">Elite Admissions <br /> Now Open.</h3>
                    <p className="text-white/50 text-xs font-light leading-relaxed">Secure your child's legacy in Maheshra's premier sanctuary. Limited seats for 2026.</p>
                    <Link href="/admissions" className="block text-center bg-white text-primary px-8 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-primary-gold transition-luxury">
                      Start Journey
                    </Link>
                  </div>
                </div>
              </Reveal>

            </aside>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
