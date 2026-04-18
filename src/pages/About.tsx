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
    <div className="about-page bg-white min-h-screen">

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

              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
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

                <div className="absolute -bottom-6 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                  <p className="text-3xl font-extrabold tracking-tight text-accent mb-1">{ui.heroStatValue}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{ui.heroStatLabel}</p>
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
                  src={aboutData.image}
                  alt={ui.storyPreTitle}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-slate-950 text-white p-8 rounded-3xl shadow-2xl max-w-[260px]">
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
                  <p key={i} className="text-lg text-slate-500 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {aboutData.proofPoints.map(item => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span className="text-xs font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ▌STATS RIBBON */}
      <section className="border-y border-slate-100 bg-slate-50/60">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {aboutData.stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="py-12 md:py-16 px-6 md:px-10 text-center"
              >
                <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-1">{stat.value}</p>
                <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ▌VALUES */}
      <section className="py-28 md:py-40 bg-slate-950 text-white relative overflow-hidden">
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
                  className="group p-8 rounded-3xl bg-white/[0.04] border border-white/[0.06] hover:border-accent/30 hover:bg-white/[0.08] transition-all"
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
                className="flex gap-6 p-8 rounded-3xl border border-slate-100 bg-white hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent text-primary font-extrabold text-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ▌CTA */}
      <section className="py-28 md:py-40 bg-accent text-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLDAsMCwwLjA1KSIvPjwvc3ZnPg==')] pointer-events-none" />

        <div className="container px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 max-w-3xl mx-auto">
            {ui.ctaTitle}
          </h2>
          <p className="text-lg md:text-xl text-primary/60 max-w-2xl mx-auto mb-14 leading-relaxed">
            {ui.ctaSubtitle}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold text-sm rounded-full hover:scale-105 transition-all shadow-xl"
          >
            {ui.ctaButton} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
