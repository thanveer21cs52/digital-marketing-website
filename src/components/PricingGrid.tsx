import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeData from '../data/home.json';

const ui = homeData.pricingUi;

const PricingGrid = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <span className="text-accent font-black uppercase tracking-[0.5em] text-[11px] mb-4 block">{ui.preTitle}</span>
          <h2 className="text-section-title text-white tracking-tighter uppercase leading-[1.1] mb-6">{ui.title}</h2>
          <p className="text-body text-slate-300 font-medium leading-relaxed max-w-3xl opacity-80">
            {ui.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12">
          {homeData.pricing.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[40px] border transition-all duration-500 min-h-[480px] sm:min-h-[600px] cursor-pointer ${tier.popular
                ? 'bg-primary-container border-accent/30 shadow-[0_20px_60px_-15px_rgba(0,242,255,0.2)] -translate-y-2 lg:-translate-y-3 lg:scale-105 z-10'
                : 'bg-white/5 border-white/10 hover:border-accent/30 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(0,242,255,0.15)]'
                }`}
            >
              {tier.popular && (
                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-accent text-primary px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.4em] shadow-glow z-20 whitespace-nowrap">
                  {ui.popularBadge}
                </div>
              )}

              <div className="mb-10">
                <h4 className={`text-[12px] font-black uppercase tracking-[0.6em] mb-6 ${tier.popular ? 'text-accent' : 'text-slate-100'}`}>
                  {tier.name}
                </h4>
                <div className="flex flex-col">
                  <div className="flex items-baseline space-x-2">
                    <span className={`text-5xl sm:text-6xl font-black tracking-tighter ${tier.popular ? 'text-white' : 'text-white'}`}>
                      {tier.price}
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${tier.popular ? 'text-white/40' : 'text-white/40'}`}>
                      / {tier.period}
                    </span>
                  </div>
                  <p className={`text-[10px] font-black uppercase tracking-[0.3em] mt-4 ${tier.popular ? 'text-white/30' : 'text-white/30'}`}>
                    {tier.subtitle}
                  </p>
                </div>
              </div>

              <div className={`space-y-4 mb-12 flex-grow border-t pt-8 ${tier.popular ? 'border-white/10' : 'border-white/5'}`}>
                {tier.features.map(feat => (
                  <div key={feat} className="flex items-start space-x-3 group/feat">
                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 transition-all ${tier.popular ? 'bg-accent text-primary' : 'bg-white/10 text-white/40 group-hover/feat:bg-accent group-hover/feat:text-primary'
                      }`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className={`text-xs font-bold leading-tight transition-colors ${tier.popular ? 'text-white/80' : 'text-white/80 group-hover/feat:text-white'
                      }`}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className={`w-full py-5 rounded-[20px] font-black text-[11px] uppercase tracking-[0.4em] transition-all active:scale-95 block text-center ${tier.popular
                  ? 'bg-accent text-primary hover:bg-white shadow-glow'
                  : 'bg-primary text-white hover:bg-accent hover:text-primary'
                  }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingGrid;
