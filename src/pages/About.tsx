import { motion } from 'framer-motion';
import { Target, Users, Zap, TrendingUp, Quote, CheckCircle2 } from 'lucide-react';
import aboutData from '../data/about.json';

const iconMap: Record<string, any> = {
  Target,
  Users,
  Zap,
  TrendingUp,
};

const About = () => {
  return (
    <div className="about-page pt-32 pb-40">
      <div className="container px-6">
        {/* Header */}
        <header className="mb-24 max-w-4xl">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
              <span className="text-secondary text-accent mb-6 block uppercase font-black tracking-widest text-xs">{aboutData.ui.pageTitle}</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
                 {aboutData.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                 {aboutData.subtitle}
              </p>
           </motion.div>
        </header>

        {/* Story Section */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
           <div className="lg:col-span-12 xl:col-span-6 relative order-2 xl:order-1">
              <div className="aspect-[16/9] xl:aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 relative">
                 <img src={aboutData.image} alt="Founders" className="w-full h-full object-cover grayscale" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 hidden md:flex items-center gap-6 glass p-8 rounded-[2.5rem] border border-white/20 shadow-premium">
                 <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Quote className="text-primary" size={24} />
                 </div>
                 <div>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest leading-none mb-1">Founder Intent</p>
                    <p className="text-primary text-xl font-black italic tracking-tighter uppercase leading-none">Dominate the trajectory.</p>
                 </div>
              </div>
           </div>
           <div className="lg:col-span-12 xl:col-span-6 order-1 xl:order-2">
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-10 md:mb-12">
                 {aboutData.ui.visionTitle}
              </h2>
              <div className="space-y-8 md:space-y-12">
                 {aboutData.story.map((paragraph, i) => (
                   <motion.p 
                     key={i}
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed"
                   >
                      {paragraph}
                   </motion.p>
                 ))}
                 <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {["Protocol Extraction", "Scale Engineering"].map(item => (
                       <div key={item} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary bg-slate-50 p-4 rounded-xl border border-slate-100">
                          <CheckCircle2 className="text-accent" size={16} />
                          {item}
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Values Grid */}
        <section className="section-padding bg-slate-950 text-white rounded-[4rem] px-8 md:px-24 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1/2 h-full bg-accent/5 blur-[150px] rounded-full"></div>
           <div className="relative z-10">
              <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                 <span className="text-accent mb-6 block uppercase font-black tracking-widest text-[9px] md:text-xs">{aboutData.ui.valuesPreTitle}</span>
                 <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                    {aboutData.ui.valuesTitle}
                 </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                 {aboutData.values.map((value, i) => {
                   const Icon = (iconMap as any)[value.icon] || Zap;
                   return (
                     <motion.div
                       key={value.title}
                       initial={{ opacity: 0, scale: 0.9 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ delay: i * 0.1 }}
                       viewport={{ once: true }}
                       className="group text-center flex flex-col items-center"
                     >
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center mb-8 md:mb-10 group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-premium">
                           <Icon size={28} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-black uppercase mb-4 md:mb-6 group-hover:text-accent transition-colors">{value.title}</h4>
                        <p className="text-white/40 text-sm md:text-base font-medium leading-relaxed">{value.description}</p>
                     </motion.div>
                   );
                 })}
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;
