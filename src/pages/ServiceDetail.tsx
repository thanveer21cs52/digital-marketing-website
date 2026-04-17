import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import servicesData from '../data/services.json';
import commonData from '../data/common.json';
import { 
  ArrowRight, Zap, Target, BarChart3, 
  Search, Database, Layers, 
  Activity, Terminal, Cpu, ChevronRight
} from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData.items.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-40 text-center container min-h-screen">
        <h1 className="uppercase italic text-primary">{servicesData.ui.notFound}</h1>
        <Link to="/services" className="btn btn-primary mt-8">{servicesData.ui.backToServices}</Link>
      </div>
    );
  }

  const type = service.type || 'PERFORMANCE';

  return (
    <div className="pt-20 overflow-hidden">
      {type === 'PERFORMANCE' && <PerformanceVariant service={service} />}
      {type === 'AUTHORITY' && <AuthorityVariant service={service} />}
      {type === 'INFRASTRUCTURE' && <InfrastructureVariant service={service} />}
    </div>
  );
};

/* --- PERFORMANCE VARIANT (VIBRANT / IMPACT) --- */
const PerformanceVariant = ({ service }: { service: any }) => (
  <div className="bg-white">
    <header className="py-24 md:py-40 relative overflow-hidden bg-white border-b border-primary/5">
       <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)' }}></div>
       </div>
       <div className="container relative z-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
             <div className="lg:col-span-8">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                   <div className="inline-flex items-center gap-2 mb-6 md:mb-10 px-4 md:px-6 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent">
                      <Zap size={14} className="animate-bounce" />
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em]">{servicesData.ui.performanceLabel}</span>
                   </div>
                   <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.9] md:leading-[0.85] tracking-tighter uppercase mb-8 md:mb-12">
                      {service.title.split(' ').map((word: string, i: number) => (
                         <span key={i} className={i === 1 ? "text-accent italic" : "text-primary"}>{word} </span>
                      ))}
                   </h1>
                   <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-2xl mb-10 md:mb-16 leading-relaxed">
                      {service.description}
                   </p>
                   <div className="flex flex-col md:flex-row gap-6">
                      <Link to="/contact" className="btn btn-accent btn-large rounded-[2rem] shadow-glow-accent px-12 md:px-16 group text-center">
                         {servicesData.ui.deployButton} <ArrowRight className="inline ml-4 group-hover:translate-x-2 transition-transform" />
                      </Link>
                   </div>
                </motion.div>
             </div>
             <div className="lg:col-span-4 mt-12 lg:mt-0">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative group"
                >
                   <div className="aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-premium transform group-hover:scale-105 transition-transform duration-700">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-1000" />
                   </div>
                   <div className="absolute -inset-4 border-2 border-accent/10 rounded-[4rem] md:rounded-[5rem] -z-10 group-hover:scale-110 transition-transform hidden md:block"></div>
                </motion.div>
             </div>
          </div>
       </div>
    </header>

    <section className="py-24 md:section-padding">
       <div className="container px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
             <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tighter mb-6 md:mb-8">{servicesData.ui.componentsLabel}</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                {service.features.map((f: string) => (
                   <div key={f} className="p-6 md:p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-4 md:gap-6 group hover:border-accent transition-all">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary text-white flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors shrink-0">
                         <Target size={18} />
                      </div>
                      <span className="text-xs md:text-sm font-black uppercase tracking-widest text-primary">{f}</span>
                   </div>
                ))}
             </div>
          </div>
          <div className="lg:col-span-8 flex items-center">
             <div className="w-full aspect-square md:aspect-video bg-slate-950 rounded-[3rem] md:rounded-[4rem] overflow-hidden relative shadow-premium">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <div>
                       <BarChart3 size={64} className="text-accent mb-6 mx-auto animate-pulse md:w-32 md:h-32" />
                       <p className="text-white text-[9px] md:text-xs font-black uppercase tracking-[0.5em] md:tracking-[1em] opacity-40">{servicesData.ui.liveStreamLabel}</p>
                    </div>
                </div>
                {/* Stats overlays */}
                <div className="absolute top-6 left-6 md:top-12 md:left-12 glass p-4 md:p-8 rounded-2xl md:rounded-3xl border border-white/10">
                   <p className="text-white/40 text-[8px] md:text-[10px] font-black uppercase mb-1">{servicesData.ui.conversionLiftLabel}</p>
                   <p className="text-2xl md:text-4xl font-black text-accent tracking-tighter">+42.8%</p>
                </div>
             </div>
          </div>
       </div>
    </section>
  </div>
);

/* --- AUTHORITY VARIANT (CLEAN / EDITORIAL) --- */
const AuthorityVariant = ({ service }: { service: any }) => (
  <div className="bg-slate-50 min-h-screen">
    <header className="py-24 md:py-40 relative px-6">
       <div className="container relative z-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
             <div className="lg:col-span-7">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                   <span className="text-accent font-black text-[9px] md:text-[10px] uppercase tracking-[0.6em] mb-8 md:mb-12 block">{servicesData.ui.authorityLabel}</span>
                   <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-primary tracking-tighter uppercase leading-[0.9] mb-10 md:mb-16">
                      {service.title}
                   </h1>
                   <div className="w-24 md:w-32 h-1.5 bg-accent mb-10 md:mb-16"></div>
                   <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed italic mb-10 md:mb-12">
                      "{service.description}"
                   </p>
                </motion.div>
             </div>
             <div className="lg:col-span-5">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                   <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-premium grayscale md:hover:grayscale-0 transition-all duration-700 md:hover:scale-105">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute top-10 -left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl hidden md:block"></div>
                </motion.div>
             </div>
          </div>
       </div>
    </header>

    <section className="py-24 md:py-32 bg-white">
       <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="relative order-2 lg:order-1 mt-12 lg:mt-0">
             <div className="aspect-[4/5] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl md:skew-y-3">
                <img src={service.image} alt="Authority" className="w-full h-full object-cover grayscale" />
             </div>
             <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-slate-950 text-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-premium max-w-[240px] md:max-w-xs">
                <Search className="text-accent mb-4 md:mb-6" size={32} />
                <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-2 md:mb-4">{servicesData.ui.forecastingTitle}</h3>
                <p className="text-white/40 text-xs md:text-sm font-medium">{servicesData.ui.forecastingDesc}</p>
             </div>
          </div>
          <div className="space-y-12 md:space-y-16 order-1 lg:order-2">
             <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">{servicesData.ui.methodologyTitle}</h2>
             <div className="space-y-8 md:space-y-10">
                {service.features.map((f: string, i: number) => (
                   <div key={f} className="flex gap-6 md:gap-8 group">
                      <span className="text-3xl md:text-4xl font-black text-slate-100 group-hover:text-accent transition-colors font-mono">{i+1}.</span>
                      <div>
                         <h4 className="text-lg md:text-xl font-black text-primary uppercase tracking-tight mb-2">{f}</h4>
                         <p className="text-slate-500 text-sm md:text-base font-medium">{servicesData.ui.retentionLift}</p>
                      </div>
                   </div>
                ))}
             </div>
             <Link to="/contact" className="btn btn-primary btn-large w-full lg:w-auto px-12 group !rounded-none text-center">
                Request Strategy Paper <ChevronRight className="inline ml-4 group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>
       </div>
    </section>
  </div>
);

/* --- INFRASTRUCTURE VARIANT (DARK / TECHNICAL) --- */
const InfrastructureVariant = ({ service }: { service: any }) => (
  <div className="bg-slate-950 text-white min-h-screen">
    <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    
    <header className="py-24 md:py-40 relative z-10 px-6">
       <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
             <div className="lg:col-span-8">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                   <div className="w-16 h-16 md:w-20 md:h-20 bg-accent text-primary rounded-2xl md:rounded-3xl mb-8 md:mb-10 flex items-center justify-center shadow-glow-accent">
                      <Database size={32} />
                   </div>
                   <span className="text-accent font-mono text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.8em] mb-6 md:mb-8 block">{servicesData.ui.infrastructureLabel}</span>
                   <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase mb-10 md:mb-12 leading-[0.9]">
                      {service.title}
                   </h1>
                   <div className="flex flex-wrap gap-3 md:gap-4 mb-10 md:mb-12">
                      {service.features.map((f: string) => (
                         <span key={f} className="px-4 py-1.5 md:px-6 md:py-2 border border-white/10 bg-white/5 rounded-full text-[9px] md:text-xs font-mono uppercase text-white/60">
                            {f}
                         </span>
                      ))}
                   </div>
                   <p className="text-lg md:text-xl text-white/40 max-w-2xl font-medium leading-relaxed font-mono">
                      {service.description}
                   </p>
                </motion.div>
             </div>
             <div className="lg:col-span-4 mt-12 lg:mt-0">
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="relative group"
                >
                   <div className="aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 group-hover:border-accent/40 transition-colors">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-30 md:group-hover:opacity-100 transition-opacity duration-700" />
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
                </motion.div>
             </div>
          </div>
       </div>
    </header>

    <section className="py-24 md:py-40 border-t border-white/5 bg-slate-900/50">
       <div className="container px-6 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
             <div className="p-8 md:p-12 border border-white/5 bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] group hover:border-accent/40 transition-all">
                <Terminal className="text-accent mb-6 md:mb-8" size={32} />
                <h4 className="text-lg md:text-xl font-black uppercase mb-4">{servicesData.ui.engineTitle}</h4>
                <p className="text-white/40 text-[13px] md:text-sm font-mono leading-relaxed">{servicesData.ui.engineDesc}</p>
             </div>
             <div className="p-8 md:p-12 border border-white/5 bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] group hover:border-accent/40 transition-all">
                <Layers className="text-accent mb-6 md:mb-8" size={32} />
                <h4 className="text-lg md:text-xl font-black uppercase mb-4">{servicesData.ui.stackTitle}</h4>
                <p className="text-white/40 text-[13px] md:text-sm font-mono leading-relaxed">{servicesData.ui.stackDesc}</p>
             </div>
             <div className="p-8 md:p-12 border border-white/5 bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] group hover:border-accent/40 transition-all sm:col-span-2 lg:col-span-1">
                <Cpu className="text-accent mb-6 md:mb-8" size={32} />
                <h4 className="text-lg md:text-xl font-black uppercase mb-4">{servicesData.ui.processingTitle}</h4>
                <p className="text-white/40 text-[13px] md:text-sm font-mono leading-relaxed">{servicesData.ui.processingDesc}</p>
             </div>
          </div>
          <div className="mt-20 md:mt-32 text-center">
             <Link to="/contact" className="btn btn-accent btn-large w-full md:w-auto rounded-none px-12 md:px-20 font-mono text-sm tracking-widest shadow-glow-accent">
                INITIALIZE_DEPLOYMENT
             </Link>
          </div>
       </div>
    </section>
  </div>
);

export default ServiceDetail;
