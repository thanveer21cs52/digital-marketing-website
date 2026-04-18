import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, TrendingUp, Target, Zap, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import homeData from '../data/home.json';
import commonData from '../data/common.json';
import PricingGrid from '../components/PricingGrid';
import StackedCaseStudies from '../components/StackedCaseStudies';

const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % (homeData.hero.images?.length || 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page overflow-hidden bg-slate-50">
      {/* Premium Hero Section with Auto-Rotating Slider */}
      <section className="relative h-screen w-full overflow-hidden bg-slate-950">
        <AnimatePresence>
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.9, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/80 via-primary/20 to-transparent"></div>
            <img 
              alt="Growth Protocol" 
              className="w-full h-full object-cover grayscale brightness-[0.5]" 
              src={homeData.hero.images?.[heroIndex]} 
            />
          </motion.div>
        </AnimatePresence>

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
              Rayan Digital <br/>
              <span className="text-secondary">Marketing</span> <br/>
              <span className="text-accent underline decoration-slate-800 decoration-8 underline-offset-8">Agency</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-slate-400 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-10 opacity-90"
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

        {/* Abstract Growth Stat Overlay */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden lg:block absolute bottom-20 left-20 p-8 glass-dark rounded-3xl border border-white/10 max-w-xs"
        >
            <h3 className="text-white text-5xl font-black mb-1 animate-pulse-glow">{homeData.ui.growthStatValue}</h3>
            <p className="text-white/40 text-[9px] font-black uppercase tracking-[.3em]">{homeData.ui.growthVisualizationLabel}</p>
        </motion.div>

        {/* Slider Indicators */}
        <div className="absolute bottom-10 right-10 flex gap-2 z-30">
          {homeData.hero.images?.map((_, i) => (
            <button 
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`h-1 transition-all duration-500 rounded-full ${i === heroIndex ? 'w-12 bg-accent' : 'w-4 bg-white/20'}`}
            />
          ))}
        </div>
      </section>


      {/* High-Performance Metric Ribbon */}
      <section className="py-20 bg-slate-900 relative overflow-hidden border-y border-white/5">
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
                      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-white transition-colors duration-300">
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
      <section className="section-padding bg-slate-50 relative">
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
                className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:border-accent hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="text-8xl font-black text-slate-50 absolute -top-4 -right-4 transition-colors group-hover:text-accent/5">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PricingGrid />

      {/* Industries Slider (Horizontal Scroll) */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="container px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-center lg:text-left w-full lg:w-auto">
              <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">{homeData.ui.verticalsPreTitle}</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[1.1]">
                SECTORS WE <br/> <span className="text-accent">DOMINATE.</span>
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
                className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center hover:bg-accent transition-all active:scale-95 shadow-glow"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 no-scrollbar pb-12 snap-x snap-mandatory"
          >
            {homeData.verticals.map((v) => (
              <div key={v.title} className="min-w-[280px] sm:min-w-[400px] glass-dark p-10 rounded-[3rem] border border-white/10 hover:border-accent/40 transition-all group snap-start">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter group-hover:text-accent">{v.title}</h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed mb-8">{v.focus}</p>
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
      <section className="py-24 sm:py-40 bg-slate-950 relative overflow-hidden border-t border-white/5">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent-glow)_0%,_transparent_70%)]"></div>
        </div>
         <div className="container relative z-10 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-white text-4xl sm:text-6xl font-black uppercase mb-12 leading-[0.9] tracking-tighter">
                {homeData.ui.ctaTitle}
              </h2>
              <Link to="/contact" className="btn btn-accent !py-6 !px-12 !text-xs !rounded-2xl shadow-glow">
                {commonData.ui.auditCta.toUpperCase()}
              </Link>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default Home;

