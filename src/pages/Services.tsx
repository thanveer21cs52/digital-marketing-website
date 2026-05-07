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
      <section className="section-light pt-36 pb-24 md:pt-48 md:pb-32 relative overflow-hidden">
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

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-8 max-w-4xl text-[#4A1C11]">
              {ui.heroTitle}{' '}
              <span className="text-accent">{ui.heroTitleAccent}</span>
            </h1>

            <p className="text-lg md:text-xl text-[#4A1C11]/70 leading-relaxed max-w-2xl mb-14 font-medium">
              {servicesData.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-[#4a1c11] font-bold text-sm rounded-full hover:brightness-110 hover:scale-[1.03] transition-all shadow-lg"
              >
                {ui.heroCta} <ArrowRight size={16} />
              </Link>
              <a
                href="#all-services"
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#4A1C11]/20 text-[#4A1C11]/70 font-bold text-sm rounded-full hover:border-accent hover:text-accent transition-all bg-[#4A1C11]/5"
              >
                {ui.browseServicesBtn}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ▌STATS RIBBON */}
      <section className="section-light border-y border-[#4A1C11]/10">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-[#4A1C11]/10">
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
                  <div className="w-11 h-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0 border border-accent/20">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#4A1C11]">{stat.value}</p>
                    <p className="text-xs text-[#4A1C11]/50 font-medium mt-0.5 uppercase tracking-widest">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ▌SERVICE CARDS */}
      <section id="all-services" className="section-light py-28 md:py-40">
        <div className="container px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-20 gap-4 sm:gap-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">{ui.servicesPreTitle}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#4A1C11]">
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
                        ? 'bg-white border-accent shadow-[0_30px_70px_-15px_rgba(74,28,17,0.15)] -translate-y-2'
                        : 'bg-white border-[#4A1C11]/10'
                      }
                    `}>
                      <div className={`absolute -bottom-6 -right-6 transition-all duration-500 ${isHovered ? 'opacity-10 scale-110 text-accent' : 'opacity-[0.03] text-[#4A1C11]'}`}>
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
                          ${isHovered ? 'text-textdark/60' : 'text-textdark/40'}
                        `}>
                          {service.type}
                        </span>

                        <h3 className="text-xl font-bold tracking-tight mb-4 leading-snug text-[#4A1C11]">
                          {service.title}
                        </h3>

                        <p className={`text-sm leading-relaxed mb-8 transition-colors ${isHovered ? 'text-[#4A1C11]/80' : 'text-[#4A1C11]/60'}`}>
                          {service.shortDesc}
                        </p>

                        <div className={`
                          inline-flex items-center gap-2 text-xs font-bold tracking-wide transition-all
                          ${isHovered ? 'text-accent' : 'text-[#4A1C11]/70'}
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
      <section className="section-brown py-28 md:py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="container px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">{ui.processPreTitle}</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
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
                <div className="relative z-10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 hover:border-accent/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-accent text-[#4a1c11] font-extrabold text-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ▌FAQ */}
      <section className="section-light py-28 md:py-40 text-[#4A1C11]">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">{ui.faqPreTitle}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-[#4A1C11]">
                {ui.faqTitle}
              </h2>
              <p className="text-lg text-[#4A1C11]/60 leading-relaxed mb-12">
                {ui.faqDesc}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-[#4a1c11] font-bold text-sm rounded-full hover:brightness-110 transition-all shadow-lg">
                {commonData.ui.auditCta} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {servicesData.faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-[#4A1C11]/10 bg-white overflow-hidden transition-all hover:border-accent/40 shadow-sm">
                  <button
                    className="w-full p-7 text-left flex justify-between items-center gap-6 group"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className="text-base font-semibold text-[#4A1C11] group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-textdark/35 shrink-0 transition-transform duration-400 ${activeFaq === i ? 'rotate-180 text-accent' : ''}`}
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
                        <p className="px-7 pb-7 text-[#4A1C11]/60 leading-relaxed font-medium">
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
      <section className="section-light py-28 md:py-40 relative overflow-hidden border-t border-[#4A1C11]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-accent/5 blur-[150px] rounded-full"></div>
        </div>

        <div className="container px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 max-w-3xl mx-auto text-[#4A1C11]">
            {ui.ctaTitle}
          </h2>
          <p className="text-lg md:text-xl text-[#4A1C11]/70 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            {ui.ctaSubtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-[#4a1c11] font-bold text-sm rounded-full hover:brightness-110 transition-all shadow-lg"
            >
              {ui.ctaButton} <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-5 border border-[#4A1C11]/15 text-[#4A1C11] font-bold text-sm rounded-full hover:border-accent hover:text-accent transition-all bg-[#4A1C11]/5"
            >
              {ui.browseServicesBtn} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
