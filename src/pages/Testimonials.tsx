import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight, TrendingUp, Target, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import testimonialsData from '../data/testimonials.json';
import commonData from '../data/common.json';

const Testimonials = () => {
  const ui = testimonialsData.ui;

  return (
    <div className="case-studies-page bg-white min-h-screen">

      {/* ▌HERO */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

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
                {testimonialsData.title.split(' ').map((word, i) => (
                  <span key={i} className={i >= 2 ? 'text-accent' : ''}>{word} </span>
                ))}
              </h1>

              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
                {testimonialsData.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="bg-slate-950 rounded-3xl p-10 shadow-2xl">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-8">{ui.recentResults}</p>
                  <div className="space-y-5">
                    {testimonialsData.items.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.15 }}
                        className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]"
                      >
                        <div className="w-10 h-10 rounded-full bg-accent text-primary font-bold text-sm flex items-center justify-center shrink-0">
                          {item.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-white truncate">{item.name}</p>
                          <p className="text-xs text-white/40 truncate">{item.company}</p>
                        </div>
                        <p className="text-sm font-bold text-accent shrink-0">{item.result.split(' ')[0]}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-extrabold text-white tracking-tight">{ui.avgGrowthValue}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">{ui.avgGrowthLabel}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ▌STATS RIBBON */}
      <section className="border-y border-slate-100 bg-slate-50/60">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {testimonialsData.summaryStats.map((stat, i) => {
              const icons = [TrendingUp, Target, Users];
              const Icon = icons[i] || BarChart3;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="py-12 md:py-16 px-6 md:px-10 flex items-center gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ▌CASE STUDY CARDS */}
      <section className="py-28 md:py-40">
        <div className="container px-6">
          <div className="mb-20">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">{ui.cardsPreTitle}</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {ui.cardsTitle}
            </h2>
          </div>

          <div className="space-y-8">
            {testimonialsData.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 md:p-14 rounded-3xl border border-slate-100 bg-white hover:border-accent/30 hover:shadow-xl transition-all group">

                  <div className="lg:col-span-3 flex flex-col justify-center">
                    <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 group-hover:bg-accent/5 group-hover:border-accent/20 transition-all">
                      <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-accent mb-2">
                        {item.result.split(' ')[0]}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {item.result.split(' ').slice(1).join(' ')}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 mb-6">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 italic">
                      "{item.content}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{item.name}</p>
                        <p className="text-xs text-slate-400">{item.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 flex items-center justify-center lg:justify-end">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-sm font-bold text-slate-600 rounded-full hover:border-accent hover:text-accent transition-all group-hover:border-accent group-hover:text-accent"
                    >
                      {ui.cardCta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ▌TRUST SIGNALS */}
      <section className="py-16 border-y border-slate-100 bg-slate-50/60">
        <div className="container px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {commonData.trustSignals.map(signal => (
              <div key={signal} className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <div className="w-2 h-2 rounded-full bg-accent" />
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ▌CTA */}
      <section className="py-28 md:py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="container px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
                {ui.ctaTitle}
              </h2>
              <p className="text-lg text-white/40 leading-relaxed mb-12 max-w-lg">
                {ui.ctaSubtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-primary font-bold text-sm rounded-full hover:brightness-110 transition-all shadow-lg shadow-accent/30"
                >
                  {ui.ctaButton} <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 px-10 py-5 border border-white/10 text-white font-bold text-sm rounded-full hover:border-white/30 transition-all"
                >
                  {ui.browseServicesBtn} <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {testimonialsData.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-5 p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:border-accent/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-accent text-primary font-bold text-sm flex items-center justify-center shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{item.name}</p>
                    <p className="text-xs text-white/40 truncate">{item.company}</p>
                  </div>
                  <p className="text-sm font-bold text-accent shrink-0">{item.result.split(' ')[0]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
