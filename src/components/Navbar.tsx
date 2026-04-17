import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Palette, Zap, Target, BarChart3, TrendingUp, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import commonData from '../data/common.json';
import servicesData from '../data/services.json';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { currentTheme, setTheme, themes } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 h-20 flex items-center ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="container flex items-center justify-between px-6 lg:px-12">
          <Link to="/" className="text-xl sm:text-2xl font-black tracking-tighter flex items-center group" onClick={() => setIsOpen(false)}>
            <div className="flex flex-col leading-none">
              <span className="text-white group-hover:text-accent transition-colors">{commonData.shortName.toUpperCase()}</span>
              <span className="text-[8px] font-black tracking-[0.4em] text-accent opacity-60">PRECISION.GROWTH</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {commonData.navLinks.map((link) => (
              <div key={link.name} className="relative group/nav">
                {link.type === 'dropdown' ? (
                  <div 
                    className="relative py-2"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link 
                      to={link.href}
                      className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-white/70 hover:text-accent transition-all"
                    >
                      {link.name} <ChevronDown size={10} className={`ml-2 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                    </Link>
                    
                    <AnimatePresence>
                      {activeDropdown === 'services' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.98 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-[-20px] mt-4 w-[320px] bg-slate-950/95 backdrop-blur-2xl rounded-[32px] p-4 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden"
                        >
                          <div className="flex flex-col gap-2">
                             {(link.items || servicesData.items).map((item: any, i) => {
                               const title = item.name || item.title;
                               const href = item.href || `/services/${item.id}`;
                               return (
                                 <motion.div
                                    key={href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                 >
                                    <Link 
                                      to={href}
                                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/5"
                                    >
                                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-primary transition-all">
                                        {i % 4 === 0 && <Zap size={18} />}
                                        {i % 4 === 1 && <BarChart3 size={18} />}
                                        {i % 4 === 2 && <Target size={18} />}
                                        {i % 4 === 3 && <TrendingUp size={18} />}
                                      </div>
                                      <div>
                                        <p className="text-[10px] font-black text-white uppercase tracking-widest group-hover/item:text-accent transition-colors">{title}</p>
                                        <p className="text-[8px] font-medium text-white/30 uppercase tracking-[0.2em] mt-1">Growth Protocol</p>
                                      </div>
                                    </Link>
                                 </motion.div>
                               );
                             })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 hover:text-accent transition-all py-2 block relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}

            <div className="h-4 w-[1px] bg-white/10"></div>

            <Link to="/contact" className="btn btn-accent !py-3 !px-8 text-[9px] shadow-glow flex items-center group/btn">
              <span>{commonData.ui.sessionCta.toUpperCase()}</span>
              <ArrowRight size={12} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-3 text-white bg-white/5 rounded-2xl border border-white/5 shadow-sm active:scale-95 transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-slate-950 px-6 pt-32 flex flex-col items-center text-center space-y-8 overflow-y-auto no-scrollbar"
          >
            {commonData.navLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-center">
                <Link 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-4xl sm:text-5xl font-black text-white hover:text-accent uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
                {link.type === 'dropdown' && (
                  <div className="mt-4 flex flex-wrap justify-center gap-4">
                    {(link.items || servicesData.items).map((item: any) => (
                      <Link 
                        key={item.id || item.name}
                        to={item.href || `/services/${item.id}`}
                        onClick={() => setIsOpen(false)}
                        className="text-[10px] font-black text-white/40 hover:text-accent uppercase tracking-widest px-4 py-2 bg-white/5 rounded-xl border border-white/5"
                      >
                        {item.name || item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-12 w-full max-w-sm">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn btn-accent w-full text-center !py-6 !text-[11px] rounded-3xl shadow-glow"
              >
                {commonData.ui.auditCta.toUpperCase()}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

