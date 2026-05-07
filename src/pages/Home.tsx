import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, TrendingUp, Target, Zap, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import homeDataJson from '../data/home.json';
import commonDataJson from '../data/common.json';
import PricingGrid from '../components/PricingGrid';
import StackedCaseStudies from '../components/StackedCaseStudies';
import { getWebsiteData } from '../utils/dataLoader';

const Home = () => {
  const [homeData, setHomeData] = useState(getWebsiteData('home', homeDataJson));
  const [commonData, setCommonData] = useState(getWebsiteData('common', commonDataJson));
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleUpdate = () => {
      setHomeData(getWebsiteData('home', homeDataJson));
      setCommonData(getWebsiteData('common', commonDataJson));
    };
    window.addEventListener('websiteDataUpdated', handleUpdate);
    return () => window.removeEventListener('websiteDataUpdated', handleUpdate);
  }, []);

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
      <section className="section-light relative min-h-screen w-full overflow-hidden">
        {/* Background handled by section-light class */}

        <div className="relative z-20 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 max-w-7xl mx-auto text-center">
          <div className="max-w-4xl pt-20 sm:pt-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 sm:mb-8 bg-accent text-[#4a1c11] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] shadow-glow"
            >
              <PlayCircle size={14} className="animate-pulse" />
              <span>{homeData.ui.protocolVersion}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#4A1C11] text-[28px] sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-6 sm:mb-8 uppercase"
            >
              {homeData.ui.heroTitleLine1} <br />
              <span className="text-[#4A1C11]/90">{homeData.ui.heroTitleLine2}</span> <br />
              <span className="text-accent">{homeData.ui.heroTitleLine3}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#4A1C11]/75 text-xs sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-8 sm:mb-10"
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
              <Link to="/case-studies" className="px-6 sm:px-8 py-3 sm:py-4 bg-[#4A1C11]/5 backdrop-blur-md border border-[#4A1C11]/10 text-[#4A1C11] rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#4A1C11]/10 transition-all w-full sm:w-auto text-center shadow-sm">
                {homeData.ui.caseStudiesCta}
              </Link>
            </motion.div>
          </div>
        </div>


      </section>


      {/* High-Performance Metric Ribbon */}
      <section className="section-cream py-16 sm:py-24 relative overflow-hidden">
        {/* Background handled by section-cream class */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-secondary/5 blur-[120px] pointer-events-none"></div>

        <div className="container px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-accent mb-4">
              {homeData.ui.verticalsPreTitle}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-white mb-4">
              {homeData.ui.growthStatValue}
            </h2>
            <p className="text-sm sm:text-base text-white/85 max-w-2xl leading-relaxed font-medium">
              {homeData.ui.growthVisualizationLabel}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
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
                  className="group relative overflow-hidden rounded-[28px] sm:rounded-[34px] border border-border/35 bg-primary/5 p-6 sm:p-8 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.2)] backdrop-blur-xl hover:-translate-y-2 hover:border-accent/35 hover:shadow-[0_24px_70px_-20px_rgba(0,0,0,0.25)] transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(90,36,22,0.07),transparent_30%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="flex flex-col items-center lg:items-start space-y-2 sm:space-y-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-surface-low border border-border/40 flex items-center justify-center text-accent shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)] group-hover:bg-accent group-hover:text-secondary transition-all duration-500">
                      <Icon size={20} />
                    </div>

                    <div className="space-y-1 text-center lg:text-left">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-accent tracking-tighter leading-none"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.35em] text-textdark/65 group-hover:text-accent transition-colors duration-300">
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



      {/* Methodology Section */}
      <section className="section-light section-padding relative">
        <div className="container px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-24 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-6 block">{homeData.ui.methodologyPreTitle}</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-10 text-[#4A1C11]">
              {homeData.ui.methodologyTitle}
            </h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {homeData.methodology.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-10 rounded-2xl sm:rounded-[3rem] border border-[#4A1C11]/10 bg-white hover:border-accent/40 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(74,28,17,0.15)] transition-all duration-500 group relative overflow-hidden cursor-pointer shadow-sm"
              >
                <div className="text-8xl font-black text-[#4A1C11]/[0.03] absolute -top-4 -right-4 transition-colors group-hover:text-accent/10">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-[#4A1C11] group-hover:text-accent transition-colors">{step.title}</h3>
                  <p className="text-[#4A1C11]/70 text-sm leading-relaxed font-medium">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StackedCaseStudies />

      <PricingGrid />

      {/* Industries Slider (Horizontal Scroll) */}
      <section className="section-brown py-16 sm:py-24 text-white relative">
        <div className="container px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-10 sm:mb-16 gap-6 sm:gap-8">
            <div className="max-w-2xl text-center lg:text-left w-full lg:w-auto">
              <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">{homeData.ui.verticalsPreTitle}</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[1.1] text-white">
                {homeData.ui.verticalsHeading} <br /> <span className="text-accent drop-shadow-sm">{homeData.ui.verticalsHeadingAccent}</span>
              </h2>
            </div>

            {/* Scroll Navigation Buttons */}
            <div className={`items-center gap-4 w-full lg:w-auto justify-center lg:justify-end ${homeData.verticals.length > 3 ? 'flex' : 'flex lg:hidden'}`}>
                <button
                  onClick={() => scroll('left')}
                  className="w-12 h-12 rounded-full border border-[#d7c6ab]/40 flex items-center justify-center hover:bg-accent hover:text-primary transition-all active:scale-95"
                >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-16 h-16 rounded-full bg-accent text-secondary flex items-center justify-center hover:bg-[#fffaf2] hover:text-secondary transition-all active:scale-95 shadow-glow"
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
              <div key={v.title} className="min-w-[280px] sm:min-w-[400px] p-6 sm:p-10 rounded-2xl sm:rounded-[3rem] border border-white/10 bg-primary/10 hover:border-accent/40 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 cursor-pointer group snap-start relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-white group-hover:text-accent">{v.title}</h3>
                <p className="text-white/60 text-sm font-medium leading-relaxed mb-8">{v.focus}</p>
                <div className="flex flex-wrap gap-2">
                  {v.metrics.map(m => (
                    <span key={m} className="px-4 py-2 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-white/90 border border-white/10 group-hover:bg-accent group-hover:text-[#4a1c11] group-hover:border-accent transition-all duration-300">
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
      <section className="section-light py-24 sm:py-40 relative overflow-hidden border-t border-[#4A1C11]/10">
        {/* Subtle light ambient glows */}
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-accent/5 blur-[150px] rounded-full"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-accent/5 blur-[150px] rounded-full"></div>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLDAsMCwwLjA1KSIvPjwvc3ZnPg==')] pointer-events-none" />
        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-[#4A1C11] text-4xl sm:text-6xl font-extrabold tracking-tight mb-8 leading-[1.05]">
              {homeData.ui.ctaTitle}
            </h2>
            <p className="text-lg md:text-xl text-[#4A1C11]/80 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
              {homeData.ui.ctaSubtitle}
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-[#4a1c11] font-bold text-sm rounded-full hover:scale-105 transition-all shadow-glow">
              {commonData.ui.auditCta.toUpperCase()} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

