import { motion } from 'framer-motion';
import testimonialsData from '../data/testimonials.json';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <div className="pt-20">
      <header className="py-32 bg-slate-50 border-b border-slate-200">
        <div className="container px-6 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary text-[10px] font-black uppercase tracking-[.4em] mb-4 block"
          >
            Proof of Concept
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-primary tracking-tighter mb-8"
          >
            {testimonialsData.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto"
          >
            {testimonialsData.description}
          </motion.p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container px-6 space-y-32">
          {testimonialsData.items.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`editorial-layout items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
                <div className="mb-8 text-accent">
                  <Quote size={64} className="opacity-20" />
                </div>
                <h3 className="text-accent text-[10px] font-black uppercase tracking-[.3em] mb-4">Case Study: {item.client}</h3>
                <blockquote className="text-3xl md:text-5xl font-black text-primary leading-tight tracking-tighter mb-12 italic">
                  "{item.quote}"
                </blockquote>
                <div className="flex items-center gap-6 p-6 glass rounded-2xl border-accent/10 border max-w-md">
                   <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden shrink-0">
                     <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <span className="text-lg font-black text-slate-900 block">{item.author}</span>
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.designation} @ {item.client}</span>
                   </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-5 relative">
                <div className="aspect-[4/3] bg-primary rounded-3xl overflow-hidden relative group">
                  <img src={item.image} alt="Success Metric" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                      <span className="text-5xl md:text-7xl font-black text-white block mb-2">{item.stat}</span>
                      <span className="text-xs font-black uppercase tracking-[.3em] text-accent">{item.sector} Expansion</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-accent text-primary text-center">
        <div className="container px-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">Submit Your Brand for Analysis.</h2>
          <Link to="/contact" className="btn btn-primary btn-large">Request Growth Deep-Dive</Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
