import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    title: "10X Lead Velocity",
    client: "TechEdge Global",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    color: "bg-accent"
  },
  {
    title: "Market Dominance Engine",
    client: "LuxVibe Retail",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    color: "bg-primary"
  },
  {
    title: "Global Scale Protocol",
    client: "Nexus Logistics",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
    color: "bg-secondary"
  }
];

const StackedCaseStudies = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-slate-950 text-accent font-black uppercase tracking-[0.5em] text-[10px] rounded-full shadow-2xl">
                <span>Success Protocols</span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter uppercase">
                ENGINEERING <br />
                <span className="text-accent">DOMINANCE</span> <br />
                <span className="text-slate-200">SINCE 2018</span>
              </h2>
              <p className="text-body text-slate-500 max-w-xl font-medium leading-relaxed opacity-80">
                Witness our high-velocity growth frameworks in action. We combine data intelligence with architectural marketing to build legacies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <Link to="/case-studies" className="group inline-flex items-center space-x-6 bg-slate-950 text-white px-10 py-5 rounded-[24px] font-black uppercase tracking-[0.4em] text-[11px] shadow-premium hover:bg-accent hover:text-primary transition-all">
                <span>Explore Dossier</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </Link>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?u=agency${i}`} alt="client" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-accent flex items-center justify-center text-[10px] font-black text-primary">
                  +150
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] h-[550px] perspective-1500 preserve-3d">
              {cases.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ 
                    opacity: 0, 
                    y: 20 * (cases.length - i), 
                    z: -40 * (cases.length - i), 
                    rotateX: -2 * (cases.length - i),
                    scale: 1 - 0.08 * (cases.length - i)
                  }}
                  whileInView={{ 
                    opacity: 1 - 0.25 * (cases.length - 1 - i),
                    y: 10 * (cases.length - 1 - i),
                    z: -40 * (cases.length - 1 - i),
                    rotateX: -2 * (cases.length - 1 - i),
                    scale: 1 - 0.08 * (cases.length - 1 - i)
                  }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 w-full h-full rounded-[56px] overflow-hidden border-[12px] border-white shadow-premium transition-all duration-700 preserve-3d"
                  style={{ zIndex: i + 1 }}
                >
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 transform translate-z-20">
                      <div className="w-8 h-1 bg-accent mb-3 rounded-full"></div>
                      <p className="text-white font-black text-[10px] uppercase tracking-widest mb-1">{c.client}</p>
                      <h4 className="text-white text-lg font-black uppercase tracking-tighter leading-none">{c.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedCaseStudies;
