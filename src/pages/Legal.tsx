import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import legalData from '../data/legal.json';
import { ShieldCheck, Activity, Layers, Clock, ArrowRight } from 'lucide-react';

const Legal = ({ type }: { type: 'terms' | 'privacy' }) => {
  const data = (legalData as any)[type];
  const ui = legalData.ui;

  return (
    <div className="legal-page bg-white min-h-screen">

      {/* ▌HERO — Split layout with document card */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

        <div className="container px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-[3px] bg-accent rounded-full" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
                  {data.preTitle}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-8">
                {data.title}
              </h1>
            </motion.div>

            {/* Right — Document card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="bg-slate-950 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-6 right-6 opacity-[0.06]">
                  <ShieldCheck size={140} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-10">
                    <ShieldCheck size={20} className="text-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{ui.documentInfoLabel}</span>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                      <span className="text-xs font-bold text-white/40 uppercase tracking-wider">{ui.versionLabel}</span>
                      <span className="text-sm font-bold text-white font-mono">{data.version}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                      <span className="text-xs font-bold text-white/40 uppercase tracking-wider">{ui.releaseDateLabel}</span>
                      <span className="text-sm font-bold text-white">{data.lastUpdated}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                      <span className="text-xs font-bold text-white/40 uppercase tracking-wider">{ui.statusLabel}</span>
                      <span className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        {ui.activeStatus}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">{data.sections.length} {ui.sectionsCovered}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* ▌CONTENT + SIDEBAR */}
      <section className="py-20 md:py-32">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Main content */}
            <main className="lg:col-span-8">
              <div className="space-y-0">
                {data.sections.map((section: any, i: number) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                  >
                    <div className="flex gap-6 md:gap-10 py-10 border-b border-slate-100 last:border-none">
                      {/* Section number */}
                      <span className="text-3xl font-extrabold text-slate-100 group-hover:text-accent/20 transition-colors shrink-0 pt-1 tabular-nums">
                        {section.id}
                      </span>

                      <div>
                        <h2 className="text-xl font-bold tracking-tight mb-4 group-hover:text-accent transition-colors">
                          {section.heading}
                        </h2>
                        <p className="text-base text-slate-500 leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Commitment card */}
              <div className="p-8 rounded-3xl bg-slate-950 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck size={20} className="text-accent" />
                  <h3 className="text-lg font-bold">{ui.integrityTitle}</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  {ui.integrityDesc}
                </p>
              </div>

              {/* Principles */}
              <div className="p-8 rounded-3xl border border-slate-100 bg-white">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">{ui.principlesLabel}</p>
                <div className="space-y-3">
                  {[
                    { icon: Activity, text: ui.principle1 },
                    { icon: Layers, text: ui.principle2 },
                    { icon: Clock, text: ui.principle3 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                        <item.icon size={16} />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick nav */}
              <div className="p-8 rounded-3xl border border-slate-100 bg-white">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">{ui.alsoSee}</p>
                <div className="space-y-3">
                  <Link
                    to={type === 'terms' ? '/privacy' : '/terms'}
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/30 transition-all group"
                  >
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-accent transition-colors">
                      {type === 'terms' ? 'Privacy Policy' : 'Terms of Service'}
                    </span>
                    <ArrowRight size={14} className="text-slate-400 group-hover:text-accent transition-colors" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
