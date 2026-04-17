import { motion } from 'framer-motion';
import { 
  ArrowRight, Search, Users, Layers, 
  ShoppingBag, Database, ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/services.json';
import commonData from '../data/common.json';

const iconMap: Record<string, any> = {
  PERFORMANCE: Search,
  AUTHORITY: Users,
  INFRASTRUCTURE: Layers,
};

const Services = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="services-page pt-32 pb-40">
      <div className="container px-6">
        {/* Header */}
        <header className="mb-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
              {servicesData.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              {servicesData.description}
            </p>
          </motion.div>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {servicesData.items.map((service, i) => {
            const Icon = (iconMap as any)[service.type] || Database;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Link to={`/services/${service.id}`} className="block">
                  <div className="glass p-10 rounded-[3rem] border border-slate-100 hover:border-accent/40 shadow-sm transition-all duration-700 h-full flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                       <Icon size={120} />
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-primary text-white rounded-2xl mb-10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 leading-tight group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 font-medium leading-relaxed mb-10">
                        {service.shortDesc}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary group-hover:text-accent transition-colors mt-auto relative z-10">
                      Explore Specialization <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Global Strategy / FAQ */}
        <section className="bg-slate-50 p-10 md:p-24 rounded-[4rem] border border-slate-100">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
              <div className="lg:col-span-5">
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-none">
                    Common <br className="hidden md:block"/> Protocols.
                 </h2>
                 <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                    Transparency is the metadata of trust. We maintain absolute precision in how we engineer, deploy, and scale your growth trajectory.
                 </p>
                 <Link to="/contact" className="btn btn-primary w-full md:w-auto text-center">
                    {commonData.ui.auditCta}
                 </Link>
              </div>
              <div className="lg:col-span-7 space-y-6">
                 {servicesData.faqs.map((faq, i) => (
                   <div key={i} className="bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all duration-500">
                      <button 
                        className="w-full p-8 text-left flex justify-between items-center group"
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      >
                         <span className="text-sm font-black uppercase tracking-tight text-primary group-hover:text-accent transition-colors">
                            {faq.question}
                         </span>
                         <ChevronDown size={18} className={`transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                         {activeFaq === i && (
                           <motion.div 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: 'auto', opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="overflow-hidden md:px-8 pb-8 px-6"
                           >
                              <p className="text-slate-500 font-medium leading-relaxed pt-2 border-t border-slate-50">
                                 {faq.answer}
                              </p>
                           </motion.div>
                         )}
                      </AnimatePresence>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
