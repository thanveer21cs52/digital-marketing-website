import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import servicesData from '../data/services.json';
import { CheckCircle2, ArrowRight, Play } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData.items.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-black">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <header className="reven-gradient text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block"
          >
            Specialization
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black leading-tight tracking-tighter mb-8 max-w-5xl mx-auto"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-12"
          >
            {service.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/contact" className="btn btn-accent">
              Request Strategy Call <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </header>

      <section className="section-padding bg-slate-50">
        <div className="container px-6">
          <div className="editorial-layout items-center">
            <div className="col-span-12 lg:col-span-6">
              <span className="text-primary text-[10px] font-black uppercase tracking-[.3em] mb-4 block">Key Components</span>
              <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-8 leading-tight">
                Engineered for <span className="text-accent italic animate-pulse-glow">Scale.</span>
              </h2>
              <ul className="space-y-6">
                {service.features.map((feature, i) => (
                  <motion.li 
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 glass rounded-2xl group hover:bg-white transition-all"
                  >
                    <div className="mt-1 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-slate-900 block">{feature}</span>
                      <p className="text-sm text-slate-500 mt-1 uppercase tracking-widest font-bold text-[10px]">High-Fidelity Deployment</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-12 lg:col-span-6 relative group">
              <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-premium">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary cursor-pointer shadow-glow animate-bounce">
                  <Play size={32} />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 glass p-8 rounded-2xl max-w-xs border-accent/20 border">
                <p className="text-xs font-black uppercase tracking-[.2em] mb-2 text-accent">Real-Time Insight</p>
                <p className="text-lg font-black leading-tight text-slate-900">Over 40% Increase in Retention via this Module</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-950 text-white overflow-hidden text-center">
        <div className="container px-6">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-12">Ready to unleash Reven on your revenue?</h2>
          <Link to="/contact" className="btn btn-accent btn-large">Deploy Growth Strategy</Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
