import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight } from 'lucide-react';
import contactData from '../data/contact.json';
import commonData from '../data/common.json';

const Contact = () => {
  return (
    <div className="contact-page pt-32 pb-40">
      <div className="container px-6">
        {/* Header */}
        <header className="mb-24 max-w-4xl">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
           >
              <span className="text-secondary text-accent mb-6 block uppercase font-black tracking-widest text-[9px] md:text-xs">{contactData.ui.pageTitle}</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
                 {contactData.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                 {contactData.subtitle}
              </p>
           </motion.div>
        </header>

        {/* Global Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
           {[
             { icon: MessageCircle, title: contactData.ui.generalInquiry, value: commonData.hq.email, href: `mailto:${commonData.hq.email}` },
             { icon: Phone, title: contactData.ui.directLine, value: commonData.hq.phone, href: `tel:${commonData.hq.phone.replace(/\s+/g, '')}` },
             { icon: MapPin, title: contactData.ui.officeTitle, value: commonData.hq.city, href: "#" }
           ].map((contact, i) => (
             <motion.a
               key={contact.title}
               href={contact.href}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="glass p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 flex flex-col items-center text-center group hover:border-accent shadow-sm"
             >
                <div className="w-16 h-16 bg-primary text-white rounded-[1.5rem] mb-10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-500 group-hover:scale-110">
                   <contact.icon size={28} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{contact.title}</p>
                <p className="text-2xl font-black text-primary tracking-tighter uppercase leading-none group-hover:text-accent transition-colors">{contact.value}</p>
             </motion.a>
           ))}
        </div>

        {/* Form and Office Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-start">
           <div className="lg:col-span-7">
              <div className="bg-slate-50 p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-slate-100">
                 <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-12 flex items-center gap-6">
                    {contactData.ui.formTitle}
                 </h2>
                 <form className="space-y-8 md:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                       <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">{contactData.ui.labels.fullName}</label>
                          <input type="text" className="w-full bg-white border border-slate-200 rounded-[1.5rem] px-8 py-5 text-sm font-black uppercase tracking-tight focus:border-accent/40 focus:ring-4 focus:ring-accent/5 transition-all outline-none" />
                       </div>
                       <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">{contactData.ui.labels.emailAddress}</label>
                          <input type="email" className="w-full bg-white border border-slate-200 rounded-[1.5rem] px-8 py-5 text-sm font-black uppercase tracking-tight focus:border-accent/40 focus:ring-4 focus:ring-accent/5 transition-all outline-none" />
                       </div>
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">{contactData.ui.labels.serviceType}</label>
                       <select className="w-full bg-white border border-slate-200 rounded-[1.5rem] px-8 py-5 text-sm font-black uppercase tracking-tight focus:border-accent/40 focus:ring-4 focus:ring-accent/5 transition-all outline-none appearance-none">
                          <option>Performance Ads</option>
                          <option>Search Dominance</option>
                          <option>Social Automation</option>
                       </select>
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">{contactData.ui.labels.message}</label>
                       <textarea rows={6} className="w-full bg-white border border-slate-200 rounded-[2rem] px-8 py-6 text-sm font-black uppercase tracking-tight focus:border-accent/40 focus:ring-4 focus:ring-accent/5 transition-all outline-none resize-none"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary w-full !py-8 !text-xs !rounded-[2rem] shadow-glow flex items-center justify-center gap-6 group">
                       Initialize Protocol Engagement <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </button>
                 </form>
              </div>
           </div>

           <div className="lg:col-span-5 space-y-16">
              <div>
                 <h2 className="text-3xl font-black text-primary uppercase tracking-tighter mb-10">{contactData.ui.locationTitle}</h2>
                 <div className="p-10 md:p-14 bg-slate-900 text-white rounded-[3.5rem] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
                       <MapPin size={100} />
                    </div>
                    <span className="text-accent font-black text-[10px] uppercase tracking-widest mb-6 block">Headquarters Protocol</span>
                    <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">{commonData.hq.address}</p>
                    <p className="text-white/40 text-lg font-medium leading-relaxed">{commonData.hq.city}, {commonData.hq.pincode}</p>
                    <div className="mt-12 w-full h-px bg-white/10"></div>
                    <div className="mt-12 flex justify-between items-center">
                       <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Operational 24/7</span>
                       <a href="#" className="flex items-center gap-3 text-accent text-[10px] font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
                          Get Directions <ArrowRight size={14} />
                       </a>
                    </div>
                 </div>
              </div>

              <div className="p-12 md:p-16 border-l-4 border-accent bg-slate-50 rounded-r-[3.5rem]">
                 <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">Response SLA</span>
                 <p className="text-xl md:text-2xl text-primary font-black uppercase tracking-tighter leading-tight italic">
                    "All high-signal growth inquiries are triaged and processed within standard 4-hour performance windows."
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
