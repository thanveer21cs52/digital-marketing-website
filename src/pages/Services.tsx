import { motion } from 'framer-motion';
import servicesData from '../data/services.json';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-20">
      <header className="bg-primary text-white py-32 border-b border-white/5">
        <div className="container px-6 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent text-[10px] font-black uppercase tracking-[.4em] mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-8"
          >
            {servicesData.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            {servicesData.description}
          </motion.p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.items.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between group hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-premium min-h-[500px]"
              >
                <div>
                  <div className="w-16 h-16 bg-primary group-hover:bg-accent rounded-2xl flex items-center justify-center mb-10 transition-colors shadow-premium text-white">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-primary mb-6 leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                    {item.shortDesc}
                  </p>
                  <ul className="space-y-3 mb-12">
                    {item.features.slice(0, 3).map(feature => (
                      <li key={feature} className="flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={`/services/${item.id}`} className="btn btn-primary w-full justify-between items-center py-4 px-8">
                  View Specialization <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 text-center">
        <div className="container px-6">
           <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-12">Don't see what you need?</h2>
           <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto">We engineer custom growth stacks for unique business models. Let's talk about your specific trajectory.</p>
           <Link to="/contact" className="btn btn-accent btn-large">Request Custom Proposal</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
