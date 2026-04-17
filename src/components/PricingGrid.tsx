import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import homeData from '../data/home.json';

const PricingGrid = () => {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="container px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <span className="text-accent font-black uppercase tracking-[0.5em] text-[11px] mb-4 block">Execution Tiers</span>
          <h2 className="text-section-title text-slate-900 tracking-tighter uppercase leading-[1.1] mb-6">GROWTH PROTOCOLS</h2>
          <p className="text-body text-slate-500 font-medium leading-relaxed max-w-3xl opacity-70">
            Transparent pricing models engineered for high-velocity scaling and market dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {homeData.pricing.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-8 sm:p-10 rounded-[40px] border transition-all duration-700 min-h-[600px] ${
                tier.popular 
                  ? 'bg-slate-950 border-slate-900 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.5)] lg:scale-105 z-10' 
                  : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-accent hover:shadow-xl'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-accent text-primary px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.4em] shadow-glow z-20 whitespace-nowrap">
                  Most Deployed
                </div>
              )}

              <div className="mb-10">
                <h4 className={`text-[12px] font-black uppercase tracking-[0.6em] mb-6 ${tier.popular ? 'text-accent' : 'text-slate-400'}`}>
                  {tier.name}
                </h4>
                <div className="flex flex-col">
                  <div className="flex items-baseline space-x-2">
                    <span className={`text-5xl sm:text-6xl font-black tracking-tighter ${tier.popular ? 'text-white' : 'text-slate-950'}`}>
                      {tier.price}
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${tier.popular ? 'text-white/40' : 'text-slate-400'}`}>
                      / {tier.period}
                    </span>
                  </div>
                  <p className={`text-[10px] font-black uppercase tracking-[0.3em] mt-4 ${tier.popular ? 'text-white/30' : 'text-slate-400'}`}>
                    {tier.subtitle}
                  </p>
                </div>
              </div>

              <div className={`space-y-4 mb-12 flex-grow border-t pt-8 ${tier.popular ? 'border-white/10' : 'border-slate-200/50'}`}>
                {tier.features.map(feat => (
                  <div key={feat} className="flex items-start space-x-3 group/feat">
                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                      tier.popular ? 'bg-accent text-primary' : 'bg-slate-200 text-slate-400 group-hover/feat:bg-accent group-hover/feat:text-primary'
                    }`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className={`text-xs font-bold leading-tight transition-colors ${
                      tier.popular ? 'text-white/80' : 'text-slate-600 group-hover/feat:text-slate-950'
                    }`}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-[20px] font-black text-[11px] uppercase tracking-[0.4em] transition-all active:scale-95 ${
                tier.popular 
                  ? 'bg-accent text-primary hover:bg-white shadow-glow' 
                  : 'bg-primary text-white hover:bg-accent hover:text-primary'
              }`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingGrid;
