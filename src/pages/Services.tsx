import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Search, Zap, Target, BarChart3,
  MessageCircle, Database, ChevronDown, Rocket,
  TrendingUp, Users
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/services.json';
import commonData from '../data/common.json';

const iconMap: Record<string, React.ElementType> = {
  'performance-ads': Rocket,
  'seo-dominance': Search,
  'social-scale': Users,
  'whatsapp-marketing': MessageCircle,
  'content-ecosystems': Zap,
  'data-analytics': BarChart3,
};

const statIcons = [TrendingUp, Target, Users, Zap];

const Services = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const ui = servicesData.ui;

  return (
    <div className="services-page min-h-screen">

      {/* ▌HERO */}
      <section className="pt-36 pb-24 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-[3px] bg-accent rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
                {ui.preTitle}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-8 max-w-4xl">
              {ui.heroTitle}{' '}
              <span className="text-accent">{ui.heroTitleAccent}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-14">
              {servicesData.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-bold text-sm rounded-full hover:brightness-110 hover:scale-[1.03] transition-all shadow-lg shadow-accent/20"
              >
                {ui.heroCta} <ArrowRight size={16} />
              </Link>
              <a
                href="#all-services"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white/60 font-bold text-sm rounded-full hover:border-accent hover:text-accent transition-all"
              >
                {ui.browseServicesBtn}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ▌STATS RIBBON */}
      <section className="border-y border-white/5">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-white/5">
            {ui.statsRibbon.map((stat, i) => {
              const Icon = statIcons[i] || Zap;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="py-10 md:py-14 px-6 md:px-10 flex items-center gap-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">{stat.value}</p>
                    <p className="text-xs text-white/40 font-medium mt-0.5">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ▌SERVICE CARDS */}
      <section id="all-services" className="py-28 md:py-40">
        <div className="container px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-20 gap-4 sm:gap-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">{ui.servicesPreTitle}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                {ui.servicesTitle}
              </h2>
            </div>
            <Link to="/contact" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline underline-offset-4 shrink-0">
              {ui.customPlanCta} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.items.map((service, i) => {
              const Icon = iconMap[service.id] || Database;
              const isHovered = hoveredCard === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Link to={`/services/${service.id}`} className="block h-full">
                    <div className={`
                      relative h-full p-6 sm:p-10 rounded-2xl sm:rounded-3xl border transition-all duration-500 overflow-hidden
                      ${isHovered
                        ? 'glass-dark border-accent/30 shadow-[0_20px_60px_-15px_rgba(0,242,255,0.2)] -translate-y-2 text-white'
                        : 'glass-dark text-white'
                      }
                    `}>
                      <div className={`absolute -bottom-6 -right-6 transition-all duration-500 ${isHovered ? 'opacity-15 scale-110' : 'opacity-[0.03]'}`}>
                        <Icon size={160} />
                      </div>

                      <div className="relative z-10">
                        <div className={`
                          w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-all duration-500
                          ${isHovered ? 'bg-accent/20 text-accent' : 'bg-accent/10 text-accent'}
                        `}>
                          <Icon size={24} />
                        </div>

                        <span className={`
                          text-[9px] font-bold uppercase tracking-[0.2em] mb-4 block transition-colors
                          ${isHovered ? 'text-white/60' : 'text-white/40'}
                        `}>
                          {service.type}
                        </span>

                        <h3 className="text-xl font-bold tracking-tight mb-4 leading-snug">
                          {service.title}
                        </h3>

                        <p className={`text-sm leading-relaxed mb-8 transition-colors ${isHovered ? 'text-white/80' : 'text-white/50'}`}>
                          {service.shortDesc}
                        </p>

                        <div className={`
                          inline-flex items-center gap-2 text-xs font-bold tracking-wide transition-all
                          ${isHovered ? 'text-white' : 'text-accent'}
                        `}>
                          {ui.learnMore} <ArrowRight size={14} className={`transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ▌PROCESS */}
      <section className="py-28 md:py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="container px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">{ui.processPreTitle}</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              {ui.processTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {i < servicesData.process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-[2px] bg-white/10 z-0" />
                )}

                <div className="relative z-10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-dark hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,242,255,0.15)] transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-accent text-primary font-extrabold text-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <h4 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ▌FAQ */}
      <section className="py-28 md:py-40 text-white">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">{ui.faqPreTitle}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                {ui.faqTitle}
              </h2>
              <p className="text-lg text-white/40 leading-relaxed mb-12">
                {ui.faqDesc}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-bold text-sm rounded-full hover:brightness-110 transition-all">
                {commonData.ui.auditCta} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {servicesData.faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] overflow-hidden transition-all hover:border-white/10">
                  <button
                    className="w-full p-7 text-left flex justify-between items-center gap-6 group"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className="text-base font-semibold text-white group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-white/30 shrink-0 transition-transform duration-400 ${activeFaq === i ? 'rotate-180 text-accent' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-7 pb-7 text-white/40 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
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

export default Services;