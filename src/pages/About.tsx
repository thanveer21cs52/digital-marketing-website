import { motion } from 'framer-motion';
import { Target, Users, Zap, TrendingUp, BarChart3, ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutData from '../data/about.json';
import commonData from '../data/common.json';

const iconMap: Record<string, React.ElementType> = {
  Target,
  Users,
  Zap,
  TrendingUp,
  BarChart3,
};

const About = () => {
  const ui = aboutData.ui;

  return (
    <div className="about-page min-h-screen">

      {/* ▌HERO */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

        <div className="container px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-[3px] bg-accent rounded-full" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
                  {ui.pageTitle}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-8">
                {aboutData.title.split('.')[0]}
                <span className="text-accent">.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
                {aboutData.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={aboutData.image}
                    alt={ui.pageTitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-6 -left-8 bg-primary/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/10">
                  <p className="text-3xl font-extrabold tracking-tight text-accent mb-1">{ui.heroStatValue}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{ui.heroStatLabel}</p>
                </div>

                <div className="absolute -top-4 -right-4 bg-accent text-primary px-5 py-3 rounded-2xl shadow-lg">
                  <p className="text-xs font-bold">{ui.heroBadge}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ▌OUR STORY */}
      <section className="py-20 md:py-32">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={aboutData.storyImage}
                  alt={ui.storyPreTitle}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-primary/90 backdrop-blur-sm text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl max-w-[220px] sm:max-w-[260px] border border-white/10 hidden sm:block">
                <Quote size={20} className="text-accent mb-4" />
                <p className="text-sm font-semibold italic leading-relaxed mb-4">
                  "{ui.founderQuote}"
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                  {commonData.founder}, {ui.founderLabel}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">{ui.storyPreTitle}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10">
                {ui.visionTitle}
              </h2>

              <div className="space-y-6">
                {aboutData.story.map((paragraph, i) => (
                  <p key={i} className="text-lg text-white/60 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.proofPoints.map(item => (
                  <div key={item} className="flex items-center gap-3 p-4 glass-dark rounded-2xl">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span className="text-xs font-semibold text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ▌STATS RIBBON */}
      <section className="border-y border-white/5">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
            {aboutData.stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="py-6 sm:py-8 px-4 sm:px-6 text-center glass-dark rounded-2xl hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,242,255,0.15)] transition-all duration-500"
              >
                <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-1">{stat.value}</p>
                <p className="text-xs text-white/40 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ▌VALUES */}
      <section className="py-28 md:py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="container px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
              {ui.valuesPreTitle}
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto">
              {ui.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value, i) => {
              const Icon = iconMap[value.icon] || Zap;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-dark hover:border-accent/30 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(0,242,255,0.15)] transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-all">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ▌WHY US */}
      <section className="py-28 md:py-40">
        <div className="container px-6">
          <div className="text-center mb-20">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">{ui.whyUsPreTitle}</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {ui.whyUsTitle}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {aboutData.whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-dark hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,242,255,0.15)] transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-accent text-primary font-extrabold text-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors">{item.title}</h4>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ▌CTA */}
      <section className="py-28 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-accent/5 blur-[150px] rounded-full"></div>
        </div>

        <div className="container px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 max-w-3xl mx-auto text-white">
            {ui.ctaTitle}
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed">
            {ui.ctaSubtitle}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-primary font-bold text-sm rounded-full hover:scale-105 transition-all shadow-glow"
          >
            {ui.ctaButton} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
