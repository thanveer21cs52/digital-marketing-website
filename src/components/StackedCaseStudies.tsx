import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeData from '../data/home.json';

const cases = homeData.caseStudies;
const ui = homeData.caseStudyUi;

const StackedCaseStudies = () => {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextCard = () => {
    setIsAutoPlaying(false);
    setIndex((prev) => (prev + 1) % cases.length);
  };

  const prevCard = () => {
    setIsAutoPlaying(false);
    setIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-accent/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-secondary/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="container px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-dark rounded-full"
            >
              <Sparkles size={12} className="text-accent" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-accent">{ui.preTitle}</span>
            </motion.div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {ui.titleLine1}<br />
              <span className="text-accent">{ui.titleLine2}</span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevCard}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all active:scale-95"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextCard}
              className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-white transition-all active:scale-95 shadow-glow"
            >
              <ArrowRight size={18} />
            </button>

            {/* Progress dots */}
            <div className="flex gap-2 ml-4">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlaying(false); setIndex(i); }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-accent' : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Case Study Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left: Main Card */}
              <div className="lg:col-span-7 glass-dark rounded-[2.5rem] p-10 sm:p-14 border border-white/10 relative overflow-hidden group hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,242,255,0.15)] transition-all duration-500">
                {/* Large step number */}
                <div className="absolute -top-6 -right-4 text-[12rem] font-black text-white/[0.02] leading-none select-none pointer-events-none">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[9px] font-black uppercase tracking-[0.5em] text-accent px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                      {cases[index].category}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">
                      {ui.protocolLabel} {index + 1}/{cases.length}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4">
                    {cases[index].title}
                  </h3>

                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                    {cases[index].client}
                  </p>

                  <p className="text-white/70 text-base sm:text-lg leading-relaxed font-medium max-w-xl mb-10">
                    {cases[index].description}
                  </p>

                  <div className="flex items-center gap-3">
                    <Link to="/case-studies" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-glow">
                      {ui.viewCta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Metrics Stack */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Primary Metric */}
                <div className="glass-dark rounded-[2rem] p-8 sm:p-10 flex-1 flex flex-col justify-center border border-white/10 group hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,242,255,0.15)] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30 mb-3">{ui.primaryMetricLabel}</p>
                    <p className="text-5xl sm:text-7xl font-black text-accent tracking-tighter leading-none mb-2">
                      {cases[index].metrics}
                    </p>
                    <p className="text-white/40 text-xs font-bold">{ui.primaryMetricSubtext}</p>
                  </div>
                </div>

                {/* Secondary Metrics Row */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-dark rounded-[1.5rem] p-6 border border-white/10 group hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,242,255,0.15)] transition-all duration-500">
                    <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/30 mb-2">{ui.stat2Label}</p>
                    <p className="text-2xl sm:text-3xl font-black text-white tracking-tighter leading-none">
                      {cases[index].stat2}
                    </p>
                  </div>
                  <div className="glass-dark rounded-[1.5rem] p-6 border border-white/10 group hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,242,255,0.15)] transition-all duration-500">
                    <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/30 mb-2">{ui.stat3Label}</p>
                    <p className="text-2xl sm:text-3xl font-black text-white tracking-tighter leading-none">
                      {cases[index].stat3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StackedCaseStudies;
