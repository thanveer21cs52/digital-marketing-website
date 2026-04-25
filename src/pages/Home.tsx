import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, TrendingUp, Target, Zap, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import homeData from '../data/home.json';
import commonData from '../data/common.json';
import PricingGrid from '../components/PricingGrid';
import StackedCaseStudies from '../components/StackedCaseStudies';

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 450;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home-page overflow-hidden">
      {/* Premium Hero Section with Particle Background */}
      <section className="relative h-screen w-full overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent z-10"></div>

        <div className="relative z-20 h-full flex flex-col justify-center items-center px-6 max-w-7xl mx-auto text-center">
          <div className="max-w-4xl pt-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8 bg-accent text-primary px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-[0.3em] shadow-glow"
            >
              <PlayCircle size={14} className="animate-pulse" />
              <span>{homeData.ui.protocolVersion}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white text-[32px] sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] sm:leading-[0.9] tracking-tighter mb-8 uppercase"
            >
              {homeData.ui.heroTitleLine1} <br />
              <span className="text-secondary">{homeData.ui.heroTitleLine2}</span> <br />
              <span className="text-accent">{homeData.ui.heroTitleLine3}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-slate-100 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-10 opacity-90"
            >
              {homeData.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to={homeData.hero.cta.link} className="btn btn-accent group w-full sm:w-auto">
                {homeData.hero.cta.text}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
              <Link to="/case-studies" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/20 transition-all w-full sm:w-auto">
                {homeData.ui.caseStudiesCta}
              </Link>
            </motion.div>
          </div>
        </div>


      </section>


      {/* High-Performance Metric Ribbon */}
      <section className="py-20 relative overflow-hidden border-y border-white/5">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-accent/5 blur-[100px] pointer-events-none"></div>

        <div className="container px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {homeData.stats.map((stat, i) => {
              const icons = [TrendingUp, Target, Zap, Award];
              const Icon = icons[i] || Zap;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`px-8 py-6 group ${i !== homeData.stats.length - 1 ? 'lg:border-r border-white/5' : ''}`}
                >
                  <div className="flex flex-col items-center lg:items-start space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-premium">
                      <Icon size={24} />
                    </div>

                    <div className="space-y-1 text-center lg:text-left">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-accent tracking-tighter"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white group-hover:text-accent transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <StackedCaseStudies />

      {/* Methodology Section */}
      <section className="section-padding relative">
        <div className="container px-6 lg:px-12">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-6 block">{homeData.ui.methodologyPreTitle}</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-10">
              {homeData.ui.methodologyTitle}
            </h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeData.methodology.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-10 rounded-[3rem] border border-white/10 hover:border-accent/30 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(0,242,255,0.15)] transition-all duration-500 group relative overflow-hidden cursor-pointer"
              >
                <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 transition-colors group-hover:text-accent/10">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-white">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-medium">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PricingGrid />

      {/* Industries Slider (Horizontal Scroll) */}
      <section className="py-24 text-white relative">
        <div className="container px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-center lg:text-left w-full lg:w-auto">
              <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">{homeData.ui.verticalsPreTitle}</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[1.1]">
                {homeData.ui.verticalsHeading} <br /> <span className="text-accent">{homeData.ui.verticalsHeadingAccent}</span>
              </h2>
            </div>

            {/* Scroll Navigation Buttons */}
            <div className={`items-center gap-4 w-full lg:w-auto justify-center lg:justify-end ${homeData.verticals.length > 3 ? 'flex' : 'flex lg:hidden'}`}>
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-16 h-16 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-white hover:text-primary transition-all active:scale-95 shadow-glow"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 no-scrollbar pt-6 pb-12 snap-x snap-mandatory"
          >
            {homeData.verticals.map((v) => (
              <div key={v.title} className="min-w-[280px] sm:min-w-[400px] glass-dark p-10 rounded-[3rem] border border-white/10 hover:border-accent/30 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(0,242,255,0.15)] transition-all duration-500 cursor-pointer group snap-start">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter group-hover:text-accent">{v.title}</h3>
                <p className="text-white/60 text-sm font-medium leading-relaxed mb-8">{v.focus}</p>
                <div className="flex flex-wrap gap-2">
                  {v.metrics.map(m => (
                    <span key={m} className="px-4 py-1.5 bg-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-white/60 border border-white/10">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-40 relative overflow-hidden border-t border-white/5">
        {/* Abstract Glows */}
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-accent/10 blur-[150px] rounded-full"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-secondary/10 blur-[150px] rounded-full"></div>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLDAsMCwwLjA1KSIvPjwvc3ZnPg==')] pointer-events-none" />
        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-white text-4xl sm:text-6xl font-extrabold tracking-tight mb-8 leading-[1.05]">
              {homeData.ui.ctaTitle}
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-14 leading-relaxed">
              {homeData.ui.ctaSubtitle}
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-primary font-bold text-sm rounded-full hover:scale-105 transition-all shadow-glow">
              {commonData.ui.auditCta.toUpperCase()} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

