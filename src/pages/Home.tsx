import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeData from '../data/home.json';
import commonData from '../data/common.json';
import PricingGrid from '../components/PricingGrid';
import StackedCaseStudies from '../components/StackedCaseStudies';

const Home = () => {
  return (
    <div className="home-page overflow-hidden bg-slate-50">
      {/* Premium Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40 z-10"></div>
           <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-transparent to-transparent"></div>
           <img 
            alt="Growth Protocol" 
            className="w-full h-full object-cover grayscale brightness-50" 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
           />
        </div>

        <div className="relative z-20 h-full flex flex-col justify-center items-center px-6 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl pt-16 w-full"
          >
            <div className="inline-flex items-center gap-2 mb-8 bg-accent text-primary px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-[0.3em] shadow-glow">
              <PlayCircle size={14} className="animate-pulse" />
              <span>{homeData.ui.protocolVersion}</span>
            </div>
            
            <h1 className="text-white text-[32px] sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] sm:leading-[0.9] tracking-tighter mb-8 uppercase">
              {homeData.hero.title.split(' ').slice(0, -1).join(' ')} <br/>
              <span className="text-accent">{homeData.hero.title.split(' ').slice(-1)}</span>
            </h1>
            
            <p className="text-slate-400 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-10 opacity-90">
              {homeData.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to={homeData.hero.cta.link} className="btn btn-accent group w-full sm:w-auto">
                {homeData.hero.cta.text}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
              <Link to="/case-studies" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/20 transition-all w-full sm:w-auto">
                {homeData.ui.caseStudiesCta}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Abstract Growth Stat Overlay */}
        <div className="hidden lg:block absolute bottom-20 left-20 p-8 glass-dark rounded-3xl border border-white/10 max-w-xs animate-fadeIn">
            <h3 className="text-white text-5xl font-black mb-1 animate-pulse-glow">{homeData.ui.growthStatValue}</h3>
            <p className="text-white/40 text-[9px] font-black uppercase tracking-[.3em]">{homeData.ui.growthVisualizationLabel}</p>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="py-16 bg-white border-b border-slate-100 relative z-30">
        <div className="container px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            {homeData.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl sm:text-5xl font-black text-primary tracking-tighter mb-2">{stat.value}</div>
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StackedCaseStudies />

      {/* Methodology Section */}
      <section className="section-padding bg-slate-50 relative">
        <div className="container px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-6 block">{homeData.ui.methodologyPreTitle}</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-10">
              {homeData.ui.methodologyTitle}
            </h2>
            <div className="h-1\.5 w-24 bg-accent mx-auto rounded-full"></div>
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
        <div className="container px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">{homeData.ui.verticalsPreTitle}</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[1.1]">
                SECTORS WE <br/> <span className="text-accent">DOMINATE.</span>
              </h2>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-6 no-scrollbar pb-12">
            {homeData.verticals.map((v) => (
              <div key={v.title} className="min-w-[320px] sm:min-w-[400px] glass-dark p-10 rounded-[3rem] border border-white/10 hover:border-accent/40 transition-all group">
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
      <section className="py-24 sm:py-40 bg-primary relative overflow-hidden">
         <div className="container relative z-10 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-white text-4xl sm:text-6xl font-black uppercase mb-12 leading-[0.9] tracking-tighter ring-white/10">
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

