import { motion } from 'framer-motion';
import contactData from '../data/contact.json';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      <header className="py-32 bg-slate-50 border-b border-primary/5">
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent text-[10px] font-black uppercase tracking-[.4em] mb-4 block"
            >
              The Engagement Protocol
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-black text-primary tracking-tighter mb-8 leading-[0.85]"
            >
              {contactData.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 max-w-2xl font-medium"
            >
              {contactData.subtitle}
            </motion.p>
          </div>
          <div className="lg:col-span-4 flex justify-end">
             <div className="w-40 h-40 bg-accent rounded-full flex items-center justify-center text-primary shadow-glow animate-bounce hover:scale-110 transition-transform cursor-pointer">
                <ArrowUpRight size={64} />
             </div>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container px-6 lg:px-24">
          <div className="editorial-layout items-start">
            <div className="col-span-12 lg:col-span-5 space-y-12">
              <div className="glass p-10 rounded-[2.5rem] border border-slate-100 hover:border-accent/40 transition-all group">
                <div className="w-12 h-12 bg-primary group-hover:bg-accent rounded-xl mb-8 flex items-center justify-center text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <h4 className="text-xs font-black uppercase tracking-[.3em] mb-4 text-accent">Headquarters</h4>
                <p className="text-xl font-black text-primary leading-tight">
                  {contactData.office.address}<br />
                  {contactData.office.city}<br />
                  {contactData.office.pincode}
                </p>
              </div>

              <div className="glass p-10 rounded-[2.5rem] border border-slate-100 hover:border-accent/40 transition-all group">
                <div className="w-12 h-12 bg-primary group-hover:bg-accent rounded-xl mb-8 flex items-center justify-center text-white transition-colors">
                  <Mail size={24} />
                </div>
                <h4 className="text-xs font-black uppercase tracking-[.3em] mb-4 text-accent">Direct Transmission</h4>
                <a href={`mailto:${contactData.office.email}`} className="text-xl font-black text-primary hover:text-accent transition-colors block mb-2 underline underline-offset-8 decoration-accent/30">
                  {contactData.office.email}
                </a>
                <p className="text-slate-500 font-bold">{contactData.office.phone}</p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 bg-white p-12 lg:p-16 rounded-[3rem] shadow-premium border border-slate-100">
              <h3 className="text-3xl font-black text-primary mb-12 flex items-center gap-4">
                Growth Brief <div className="h-[1px] bg-slate-100 grow"></div>
              </h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {contactData.formfields.slice(0, 2).map((field) => (
                    <div key={field.label}>
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">{field.label}</label>
                      <input 
                        type={field.type} 
                        className="w-full bg-slate-50 border-b-2 border-slate-100 py-4 focus:border-accent outline-none transition-all font-black"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                </div>
                {contactData.formfields.slice(2).map((field) => (
                  <div key={field.label}>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">{field.label}</label>
                    {field.type === 'select' ? (
                      <select className="w-full bg-slate-50 border-b-2 border-slate-100 py-4 focus:border-accent outline-none transition-all font-black appearance-none">
                        {field.options?.map(opt => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <textarea 
                        rows={4} 
                        className="w-full bg-slate-50 border-b-2 border-slate-100 py-4 focus:border-accent outline-none transition-all font-black"
                        placeholder={`Briefly describe your ${field.label.toLowerCase()}`}
                      ></textarea>
                    )}
                  </div>
                ))}
                <button type="submit" className="btn btn-primary w-full justify-center group py-6 text-sm">
                  Initialize Audit Phase <Send size={18} className="ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
