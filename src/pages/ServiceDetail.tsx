import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import servicesData from '../data/services.json';
import {
  ArrowRight, BarChart3, Search,
  Zap, Database, Users, MessageCircle,
  Rocket, CheckCircle2
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'performance-ads': Rocket,
  'seo-dominance': Search,
  'social-scale': Users,
  'whatsapp-marketing': MessageCircle,
  'content-ecosystems': Zap,
  'data-analytics': BarChart3,
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData.items.find(s => s.id === serviceId);
  const ui = servicesData.ui;

  if (!service) {
      return (
      <div className="pt-40 text-center container min-h-screen">
        <h1 className="text-4xl font-extrabold text-textdark mb-6">{ui.notFound}</h1>
        <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold text-sm rounded-full">
          {ui.backToServices}
        </Link>
      </div>
    );
  }

  const Icon = iconMap[service.id] || Database;
  const otherServices = servicesData.items.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="service-detail min-h-screen">

      {/* ▌HERO */}
      <section className="section-light pt-36 pb-20 md:pt-48 md:pb-28 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" />

        <div className="container px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-[#4A1C11]/45 font-medium mb-10">
                  <Link to="/services" className="hover:text-accent transition-colors">{ui.breadcrumbRoot}</Link>
                  <span>/</span>
                  <span className="text-[#4A1C11]/60 font-black uppercase tracking-widest text-[9px]">{service.title}</span>
                </div>

                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                  <Icon size={14} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{service.type}</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 text-[#4A1C11]">
                  {service.title}
                </h1>

                <p className="text-lg md:text-xl text-[#4A1C11]/70 leading-relaxed max-w-xl mb-12 font-medium">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-[#4a1c11] font-bold text-sm rounded-full hover:brightness-110 hover:scale-[1.03] transition-all shadow-lg"
                  >
                    {ui.deployButton} <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right — Quick stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl p-10 border border-[#4A1C11]/10 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent text-[#4a1c11] flex items-center justify-center shadow-sm">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#4A1C11]">{ui.whatsIncluded}</p>
                    <p className="text-xs text-[#4A1C11]/40 font-black uppercase tracking-widest">{service.features.length} {ui.coreDeliverables}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {service.features.map((feature: string) => (
                    <div key={feature} className="flex items-start gap-3 p-4 bg-white border border-[#4A1C11]/5 rounded-2xl shadow-sm hover:border-accent/40 transition-all group">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-[#4A1C11]/70">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-[#4A1C11]/10 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-extrabold tracking-tight text-[#4A1C11]">{ui.conversionLiftValue}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#4A1C11]/40 mt-1">{ui.conversionLiftLabel}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                    <BarChart3 size={20} className="text-accent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ▌PROCESS */}
      <section className="section-brown py-28 md:py-40 border-y border-white/10 text-white">
        <div className="container px-6">
          <div className="text-center mb-20">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
              {ui.processPreTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                {ui.processTitle}
              </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {servicesData.process.map((step: any, i: number) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 sm:gap-8 group"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent text-[#4a1c11] font-extrabold text-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {i < servicesData.process.length - 1 && (
                    <div className="w-[2px] flex-1 bg-white/10 my-2" />
                  )}
                </div>

                <div className="pb-16">
                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{step.title}</h4>
              <p className="text-white/60 leading-relaxed font-medium">{step.description}</p>
            </div>
          </motion.div>
        ))}
          </div>
        </div>
      </section>

      {/* ▌RELATED SERVICES */}
      <section className="section-light py-28 md:py-40">
        <div className="container px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">{ui.relatedPreTitle}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#4A1C11]">
                {ui.relatedTitle}
              </h2>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline underline-offset-4 shrink-0">
              {ui.viewAll} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s, i) => {
              const SIcon = iconMap[s.id] || Database;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/services/${s.id}`} className="block group">
                    <div className="p-8 rounded-3xl bg-white border border-[#4A1C11]/10 hover:border-accent/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(74,28,17,0.15)] transition-all duration-500 shadow-sm">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-[#4a1c11] transition-all shadow-sm">
                        <SIcon size={20} />
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-[#4A1C11] group-hover:text-accent transition-colors">{s.title}</h3>
                      <p className="text-sm text-[#4A1C11]/60 leading-relaxed font-medium">{s.shortDesc}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ▌CTA */}
      <section className="section-brown py-20 border-t border-white/10">
        <div className="container px-6">
          <div className="bg-white/5 text-white p-8 sm:p-14 lg:p-24 rounded-2xl sm:rounded-[3rem] text-center relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
                {ui.ctaTitle}
              </h2>
              <p className="text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed font-medium">
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
                  className="inline-flex items-center gap-3 px-10 py-5 border border-white/15 text-white font-bold text-sm rounded-full hover:border-accent hover:text-accent transition-all bg-white/5"
                >
                  {ui.viewAll} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
