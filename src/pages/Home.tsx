import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, Zap, BarChart3, Search, Users, Layers, ShoppingBag, Database, ChevronRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeData from '../data/home.json';
import servicesData from '../data/services.json';
import commonData from '../data/common.json';

const iconMap: Record<string, any> = {
  Search,
  Users,
  Layers,
  ShoppingBag,
  Database,
};

const Home = () => {
  return (
    <div className="home-page overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 border-b border-primary/5">
        <div className="absolute inset-0 bg-primary opacity-[0.02] z-0"></div>
        <div className="container relative z-10 px-6">
          <div className="editorial-layout items-center">
            <div className="col-span-12 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 mb-8 bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                  <PlayCircle size={16} className="text-accent animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[.3em] text-accent">LIVE PERFORMANCE ENGINES</span>
                </div>
                <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-10 text-primary">
                  {homeData.hero.title.split(' ').map((word, i) => (
                    <span key={i} className={i === 0 ? 'block' : i === 1 ? 'text-accent' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-xl text-slate-500 max-w-xl mb-12 leading-relaxed font-medium">
                  {homeData.hero.subtitle}
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link to={homeData.hero.cta.link} className="btn btn-primary group">
                    {homeData.hero.cta.text}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/testimonials" className="btn bg-white border border-slate-200 text-slate-900 group">
                    View Case Studies
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ duration: 1.2, ease: "easeOut" }}
                 className="relative z-10"
               >
                 <div className="aspect-[4/5] bg-slate-900 rounded-[3rem] overflow-hidden shadow-premium relative group">
                    <img src={homeData.hero.image} alt="Growth Visualization" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[3000ms] grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-2xl border-white/10 border">
                       <BarChart3 className="text-accent mb-4" size={32} />
                       <h3 className="text-white text-3xl font-black mb-2 animate-pulse-glow">+314% YoY</h3>
                       <p className="text-white/50 text-xs font-black uppercase tracking-widest">Aggregate Portfolio Growth</p>
                    </div>
                 </div>
                 {/* Decorative background blocks */}
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-[80px] rounded-full animate-pulse"></div>
                 <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-surface border-y border-primary/5">
        <div className="container px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {homeData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start space-y-2 group"
            >
              <span className="text-5xl md:text-7xl font-black text-primary tracking-tighter group-hover:text-accent transition-colors duration-500">
                {stat.value}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[.3em] text-slate-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding overflow-hidden">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent text-[10px] font-black uppercase tracking-[.4em] mb-4 block">Our Protocol</span>
              <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-tight">
                Engineering <span className="italic">Revenue Velocity.</span>
              </h2>
            </div>
            <Link to="/about" className="group flex items-center text-xs font-black uppercase tracking-widest text-primary pb-2 border-b-2 border-accent">
               Deep-Dive into Process <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {homeData.methodology.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:border-accent/40 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="text-7xl font-black text-slate-50 absolute -top-4 -right-2 group-hover:text-accent/5 transition-colors">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-primary group-hover:bg-accent rounded-xl mb-12 flex items-center justify-center transition-colors shadow-premium">
                  {i === 0 && <ShieldCheck className="text-white" size={24} />}
                  {i === 1 && <Zap className="text-white" size={24} />}
                  {i === 2 && <BarChart3 className="text-white" size={24} />}
                  {i === 3 && <TrendingUp className="text-white" size={24} />}
                </div>
                <h3 className="text-2xl font-black text-primary mb-6 leading-tight group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {step.description}
                </p>
                <div className="h-1 w-12 bg-slate-100 group-hover:w-full group-hover:bg-accent transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-12 bg-slate-900 overflow-hidden relative">
         <div className="absolute inset-x-0 h-[1px] bg-white/5 top-0"></div>
         <div className="absolute inset-x-0 h-[1px] bg-white/5 bottom-0"></div>
         <div className="flex space-x-24 whitespace-nowrap animate-marquee px-6">
            {homeData.techStack.concat(homeData.techStack).map((tech, i) => {
              const Icon = iconMap[tech.icon];
              return (
                <div key={i} className="flex items-center space-x-4 text-white/30 hover:text-accent transition-colors">
                  {Icon && <Icon size={24} />}
                  <span className="text-xs font-black uppercase tracking-[.4em]">{tech.name}</span>
                </div>
              );
            })}
         </div>
      </section>

      {/* Industry Verticals */}
      <section className="section-padding bg-slate-950 text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full z-0"></div>
        <div className="container relative z-10 px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-accent text-[10px] font-black uppercase tracking-[.4em] mb-4 block">Sector Expertise</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
              Dominance Across High-Growth Verticals.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {homeData.verticals.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-dark p-12 rounded-[2.5rem] border border-white/5 flex flex-col justify-between group hover:border-accent/40 transition-all duration-700"
              >
                <div>
                   <h3 className="text-3xl font-black mb-4 group-hover:text-accent transition-colors">{v.title}</h3>
                   <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">{v.focus}</p>
                   <div className="flex flex-wrap gap-2 mb-12">
                      {v.metrics.map(m => (
                        <span key={m} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/50 border border-white/10 group-hover:border-accent/20 transition-colors">
                          {m}
                        </span>
                      ))}
                   </div>
                </div>
                <Link to="/contact" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary group-hover:scale-110 transition-all">
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="section-padding bg-white relative">
         <div className="container px-6">
            <div className="editorial-layout items-center">
               <div className="col-span-12 lg:col-span-6 relative order-2 lg:order-1">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                  >
                    <div className="aspect-square rounded-[3rem] overflow-hidden shadow-premium">
                       <img src={homeData.featuredTestimonial.image} alt={homeData.featuredTestimonial.client} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 glass p-12 rounded-[2.5rem] border border-accent/20 max-w-md shadow-premium">
                       <span className="text-accent text-[10px] font-black uppercase tracking-[.3em] mb-4 block">Impact Metric</span>
                       <h4 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-2 italic">25X Revenue</h4>
                       <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Growth Realized in 3 Months</p>
                    </div>
                  </motion.div>
               </div>
               <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 mb-12 lg:mb-0">
                  <div className="lg:pl-20">
                    <span className="text-primary text-[10px] font-black uppercase tracking-[.4em] mb-4 block">Success Chronicle</span>
                    <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-8 leading-tight">
                      How {homeData.featuredTestimonial.client} broke the 7-figure barrier.
                    </h2>
                    <blockquote className="text-2xl text-slate-500 font-medium italic mb-12 leading-relaxed border-l-4 border-accent pl-8">
                       "{homeData.featuredTestimonial.result}"
                    </blockquote>
                    <Link to="/testimonials" className="btn btn-primary group">
                       View All Case Studies
                       <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-primary relative overflow-hidden">
         <div className="absolute inset-0 reven-gradient opacity-90"></div>
         {/* Animating background orbs */}
         <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 blur-[150px] rounded-full animate-pulse"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
         
         <div className="container relative z-10 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-12 leading-[0.85]">
                Ready to unleash <span className="text-accent italic">Reven?</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/50 mb-16 max-w-2xl mx-auto font-medium">
                Stop guessing. Start scaling. Deploy our revenue protocol on your business today.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <Link to="/contact" className="btn btn-accent btn-large scale-125">
                  Begin Growth Audit
                </Link>
                <a href={`tel:${commonData.hq.phone.replace(/\s+/g, '')}`} className="text-white text-xs font-black uppercase tracking-widest hover:text-accent transition-colors">
                   Or call us: {commonData.hq.phone}
                </a>
              </div>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default Home;
