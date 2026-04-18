import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';


const cases = [
  {
    title: "10X Lead Velocity",
    client: "TechEdge Global",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    description: "Multi-channel funnel optimization protocol for SAAS dominance.",
    metrics: "420% CTR"
  },
  {
    title: "Market Dominance Engine",
    client: "LuxVibe Retail",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    description: "Architectural conversion framework for D2C scaling.",
    metrics: "5.8x ROAS"
  },
  {
    title: "Global Scale Protocol",
    client: "Nexus Logistics",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200",
    description: "Enterprise data integration and predictive lead scoring.",
    metrics: "₹12Cr Revenue"
  }
];

const StackedCaseStudies = () => {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cases.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="relative py-32 sm:py-48 bg-white overflow-hidden border-b border-slate-100 group/section">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-[0.03]"
             style={{ backgroundImage: 'radial-gradient(#0f172a 1.5px, transparent 0)', backgroundSize: '60px 60px' }}>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          <div className="w-full lg:w-5/12 space-y-12">
            <div className="space-y-8">
              <motion.div 
                key={index + 'title'}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-3 px-6 py-3 bg-slate-950 text-accent font-black uppercase tracking-[0.5em] text-[10px] rounded-full shadow-2xl"
              >
                <span>PROTOCOL {index + 1}</span>
              </motion.div>
              
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
                ENGINEERING <br />
                <span className="text-accent underline decoration-slate-200 decoration-8 underline-offset-[12px]">DOMINANCE</span> <br />
                <span className="text-slate-200">PRECISION.</span>
              </h2>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <p className="text-xl sm:text-2xl font-black text-slate-400 uppercase tracking-tighter leading-tight">
                    {cases[index].title}
                  </p>
                  <p className="text-body text-slate-500 max-w-xl font-medium leading-relaxed opacity-80">
                    {cases[index].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-10">
              <div className="flex items-center gap-6">
                 <button 
                  onClick={prevCard}
                  className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all active:scale-95 shadow-lg group"
                 >
                   <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                 </button>
                 <button 
                  onClick={nextCard}
                  className="w-20 h-20 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-accent hover:text-primary transition-colors duration-300 active:scale-90 shadow-2xl group"
                 >
                   <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform duration-300" />
                 </button>
              </div>
              <div className="hidden sm:block h-12 w-[1px] bg-slate-100"></div>
              <div className="text-left">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-1">Execution Velocity</p>
                <p className="text-2xl font-black text-slate-900 tracking-tighter">{cases[index].metrics}</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] h-[650px] perspective-1500 preserve-3d cursor-pointer group/stack" onClick={nextCard}>
              <AnimatePresence initial={false}>
                {cases.map((c, i) => {
                  const isTop = i === index;
                  const distance = (i - index + cases.length) % cases.length;
                  
                  if (distance > 2) return null; // Only show top 3 cards

                  return (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, x: 100, rotateZ: 10 }}
                      animate={{ 
                        opacity: 1 - distance * 0.25,
                        x: 0,
                        y: distance * -30,
                        z: distance * -100,
                        rotateX: distance * -5,
                        rotateZ: distance * -2,
                        scale: 1 - distance * 0.1,
                        cursor: isTop ? 'pointer' : 'default'
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: 400, 
                        rotateZ: 20,
                        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-0 left-0 w-full h-full rounded-[64px] overflow-hidden border-[16px] border-white shadow-[0_40px_100px_rgba(0,0,0,0.15)] preserve-3d transition-shadow hover:shadow-premium"
                      style={{ 
                        zIndex: cases.length - distance,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    >
                      <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover/stack:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-10 right-10 transform translate-z-40">
                         <div className="bg-white px-5 py-2 rounded-2xl shadow-2xl flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Live Protocol</span>
                         </div>
                      </div>

                      <div className="absolute bottom-12 left-12 right-12">
                        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 transform translate-z-30">
                          <div className="flex justify-between items-end">
                            <div>
                               <p className="text-white/60 font-black text-[10px] uppercase tracking-[0.3em] mb-3">{c.client}</p>
                               <h4 className="text-white text-3xl font-black uppercase tracking-tighter leading-none">{c.title}</h4>
                            </div>
                            <div className="text-accent">
                               <ArrowRight size={32} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              
              {/* Stack Background Glow - Optimized to prevent flickering */}
              <motion.div 
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute inset-0 bg-accent blur-[120px] rounded-full -z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedCaseStudies;
