import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import commonData from '../data/common.json';
import servicesData from '../data/services.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container flex items-center justify-between h-20 px-6">
        <Link to="/" className="text-2xl font-black tracking-tighter flex items-center">
          {commonData.shortName.toUpperCase()}<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
            Home
          </Link>

          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
              Services <ChevronDown size={14} className="ml-1" />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 glass-dark rounded-xl p-4 flex flex-col space-y-2 border border-white/10"
                >
                  {servicesData.items.map(service => (
                    <Link 
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-accent hover:bg-white/5 p-2 rounded-lg transition-all"
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <Link to="/contact" className="btn btn-accent !py-2 !px-6 text-[10px]">
            GROWTH SESSION
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-40 bg-slate-950 flex flex-col p-8 pt-24 space-y-6 overflow-y-auto"
          >
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-white hover:text-accent"
            >
              Home
            </Link>

            <div className="flex flex-col space-y-4">
              <span className="text-accent text-[10px] font-black uppercase tracking-[.3em]">Services</span>
              {servicesData.items.map(service => (
                <Link 
                  key={service.id}
                  to={`/services/${service.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-white hover:text-accent"
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <hr className="border-white/10" />
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-white hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn btn-accent text-center mt-auto"
            >
              GROWTH SESSION
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
