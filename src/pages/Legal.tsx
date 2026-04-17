import { motion } from 'framer-motion';
import legalData from '../data/legal.json';
import { Database, ShieldCheck, Activity, Layers, Clock } from 'lucide-react';

const Legal = ({ type }: { type: 'terms' | 'privacy' }) => {
  const data = (legalData as any)[type];
  const ui = legalData.ui;

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-40 bg-white min-h-screen">
      <div className="container px-6">
        {/* Document Header */}
        <header className="mb-16 md:mb-24 border-b border-primary/10 pb-12 md:pb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 text-accent mb-4 md:mb-6">
                 <ShieldCheck size={18} />
                 <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">{data.preTitle}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-primary uppercase tracking-tighter mb-4 leading-none">
                {data.title}
              </h1>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl md:rounded-3xl w-full md:min-w-[280px] md:w-auto"
            >
               <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                     <span className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">{ui.versionLabel}</span>
                     <span className="text-xs font-black text-primary font-mono">{data.version}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                     <span className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">{ui.releaseDateLabel}</span>
                     <span className="text-xs font-black text-primary">{data.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">{ui.statusLabel}</span>
                     <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                        <span className="text-xs font-black text-primary uppercase">{ui.activeStatus}</span>
                     </span>
                  </div>
               </div>
            </motion.div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20">
           {/* Sidebar Info - Hidden on mobile or pushed bottom? User wanted it "right" or "improved". Stacking on mobile is best. */}
           <aside className="lg:col-span-4 order-2 lg:order-1 space-y-10 md:space-y-12">
              <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-primary text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 group-hover:scale-110 transition-transform">
                    <Database size={80} className="md:w-32 md:h-32" />
                 </div>
                 <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-6 relative z-10">{ui.integrityTitle}</h3>
                 <p className="text-white/60 text-sm font-medium leading-relaxed relative z-10">
                    {ui.integrityDesc}
                 </p>
              </div>

              <div className="space-y-4">
                 <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 px-4">{ui.principlesLabel}</p>
                 {[
                   { icon: Activity, text: ui.principle1 },
                   { icon: Layers, text: ui.principle2 },
                   { icon: Clock, text: ui.principle3 }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl md:rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                       <item.icon className="text-accent" size={18} />
                       <span className="text-xs md:text-sm font-black text-primary uppercase tracking-tight">{item.text}</span>
                    </div>
                 ))}
              </div>
           </aside>

           {/* Main Protocol Sections */}
           <main className="lg:col-span-8 order-1 lg:order-2">
              <div className="space-y-12 md:space-y-16">
                {data.sections.map((section: any, i: number) => (
                  <motion.div 
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                       <div className="pt-0 md:pt-2">
                          <span className="text-3xl md:text-4xl font-black text-slate-100 group-hover:text-accent/20 transition-colors font-mono">
                             {section.id}.
                          </span>
                       </div>
                       <div className="grow border-b border-slate-100 pb-10 md:pb-12 group-last:border-none">
                          <h2 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tighter mb-4 md:mb-6">
                             {section.heading}
                          </h2>
                          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                             {section.text}
                          </p>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
           </main>
        </div>
      </div>
    </div>
  );
};

export default Legal;
