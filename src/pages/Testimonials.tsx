import { motion } from 'framer-motion';
import { Quote, Star, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import testimonialsData from '../data/testimonials.json';
import commonData from '../data/common.json';

const Testimonials = () => {
  return (
    <div className="testimonials-page pt-32 pb-40">
      <div className="container px-6">
        {/* Header */}
        <header className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             className="max-w-3xl"
           >
              <span className="text-secondary text-accent mb-6 block uppercase font-black tracking-widest text-[9px] md:text-xs">{testimonialsData.ui.pageTitle}</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
                 {testimonialsData.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                 {testimonialsData.subtitle}
              </p>
           </motion.div>
           <Link to="/contact" className="btn btn-primary w-full md:w-auto text-center hidden md:flex">
              {commonData.ui.auditCta}
           </Link>
        </header>

        {/* Global Stats Grid - High Impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
           {testimonialsData.summaryStats.map((stat, i) => (
             <motion.div 
               key={stat.label}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="glass p-10 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center group hover:border-accent/40"
             >
                <p className="text-6xl md:text-7xl font-black text-primary tracking-tighter mb-4 group-hover:text-accent transition-colors">{stat.value}</p>
                <p className="text-sm font-black uppercase text-slate-400 tracking-widest leading-none">{stat.label}</p>
             </motion.div>
           ))}
        </div>

        {/* Testimonials Masonry/Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-40">
          {testimonialsData.items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] border border-slate-100 hover:border-accent/40 shadow-sm transition-all duration-700 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 text-accent">
                   <Quote size={120} />
                </div>
                
                <div className="flex items-center gap-4 mb-10">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={14} className="fill-accent text-accent" />
                   ))}
                </div>

                <p className="text-xl md:text-2xl font-medium text-primary italic leading-relaxed mb-12 relative z-10">
                  "{t.content}"
                </p>

                <div className="mt-auto flex justify-between items-end border-t border-slate-100 pt-10">
                   <div>
                      <p className="text-xl font-black uppercase text-primary tracking-tighter mb-1">{t.name}</p>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{t.company}</p>
                   </div>
                   <div className="flex flex-col items-end">
                      <p className="text-accent text-2xl font-black tracking-tighter leading-none mb-1">{t.result}</p>
                      <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">{testimonialsData.ui.resultLabel}</p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <section className="bg-slate-950 text-white p-12 md:p-24 rounded-[4rem] relative overflow-hidden text-center md:text-left">
           <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
           <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
              <div className="max-w-2xl">
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
                    Join the ranks of <br/> High-Velocity Growth.
                 </h2>
                 <p className="text-white/40 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
                    Your trajectory is defined by the protocols you deploy. Let's engineer your dominance together.
                 </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                 <Link to="/contact" className="btn btn-accent px-12 text-center">
                    {commonData.ui.auditCta}
                 </Link>
                 <Link to="/services" className="px-12 py-6 border border-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-colors text-center inline-flex items-center justify-center gap-4">
                    Explore Services <ArrowRight size={16} />
                 </Link>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
