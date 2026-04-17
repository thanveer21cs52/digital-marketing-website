import { motion } from 'framer-motion';
import aboutData from '../data/about.json';
import { Target, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      <header className="py-32 border-b border-primary/5">
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 text-center">
             <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent text-[10px] font-black uppercase tracking-[.4em] mb-4 block"
            >
              The Reven Ethos
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-black text-primary tracking-tighter mb-8 leading-[0.85]"
            >
              {aboutData.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              {aboutData.vision}
            </motion.p>
          </div>
        </div>
      </header>

      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container px-6 relative z-10">
          <div className="editorial-layout">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-8">
                Operating with <span className="text-accent italic">Lethal Precision.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-12">
                We didn't come to play the agency game. We came to redefine it. By combining engineering rigor with performance-first marketing, we ensure your brand doesn't just grow—it dominates.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-1 gap-8">
              {aboutData.values.map((value, i) => (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-12 rounded-[2.5rem] border border-white flex gap-8 items-start group hover:border-accent/40 transition-all"
                >
                  <div className="w-16 h-16 bg-primary group-hover:bg-accent rounded-2xl shrink-0 flex items-center justify-center text-white transition-colors">
                    {i === 0 && <Target size={32} />}
                    {i === 1 && <Eye size={32} />}
                    {i === 2 && <Heart size={32} />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-accent transition-colors">{value.title}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container px-6">
          <div className="text-center mb-24">
            <span className="text-accent text-[10px] font-black uppercase tracking-[.4em] mb-4 block">The Performance Team</span>
            <h2 className="text-4xl md:text-7xl font-black text-primary tracking-tighter">Growth Engineers.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.team.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[3rem] text-center glass border-slate-100 hover:border-accent/30 transition-all"
              >
                <div className="aspect-square bg-slate-100 rounded-[2.5rem] overflow-hidden mb-8 relative">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-2xl font-black text-primary mb-2">{member.name}</h4>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-slate-950 text-white text-center">
        <div className="container px-6">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 animate-pulse-glow">Ready to Build Your Legacy?</h2>
          <Link to="/contact" className="btn btn-accent btn-large">Deploy Reven Protocol</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
