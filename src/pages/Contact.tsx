import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, MessageCircle, Clock, Send, ChevronDown } from 'lucide-react';

import contactData from '../data/contact.json';
import commonData from '../data/common.json';

const Contact = () => {
  const ui = contactData.ui;

  return (
    <div className="contact-page bg-white min-h-screen">

      {/* ▌HERO */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

        <div className="container px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
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

              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-8">
                {ui.heroTitle}{' '}
                <span className="text-accent">{ui.heroTitleAccent}</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
                {ui.heroSubtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={ui.heroImage}
                    alt={ui.pageTitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{ui.onlineStatus}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{ui.responseTime}</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-accent text-primary px-5 py-3 rounded-2xl shadow-lg">
                  <p className="text-xs font-bold">{ui.heroBadge}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ▌CONTACT INFO BAR */}
      <section className="border-y border-slate-100 bg-slate-50/60">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { icon: Mail, label: ui.emailLabel, value: commonData.hq.email, href: `mailto:${commonData.hq.email}` },
              { icon: Phone, label: ui.callLabel, value: commonData.hq.phone, href: `tel:${commonData.hq.phone.replace(/\s/g, '')}` },
              { icon: MapPin, label: ui.visitLabel, value: `${commonData.hq.address}, ${commonData.hq.city}`, href: commonData.hq.mapEmbed },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-10 md:py-14 px-6 md:px-10 flex items-center gap-5 group hover:bg-white transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-all">
                  <item.icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-slate-900 truncate">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ▌FORM + SIDEBAR */}
      <section className="py-28 md:py-40">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="bg-white p-10 md:p-16 rounded-3xl border border-slate-100 shadow-lg">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                    {ui.formTitle}
                  </h2>
                  <p className="text-slate-500">{ui.formSubtitle}</p>
                </div>

                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactData.formFields.filter(f => f.type !== 'textarea').map((field) => (
                      <div key={field.label}>
                        <label className="text-xs font-semibold text-slate-500 mb-2 block">{field.label}</label>
                        {field.type === 'select' ? (
                          <div className="relative">
                            <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 pr-12 text-sm font-medium focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none appearance-none cursor-pointer">
                              {ui.serviceOptions.map(opt => (
                                <option key={opt}>{opt}</option>
                              ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                          </div>
                        ) : (
                          <input
                            type={field.type}
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none"
                            placeholder={field.placeholder}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {contactData.formFields.filter(f => f.type === 'textarea').map((field) => (
                    <div key={field.label}>
                      <label className="text-xs font-semibold text-slate-500 mb-2 block">{field.label}</label>
                      <textarea
                        rows={5}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none resize-none"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-3 py-5 bg-accent text-primary rounded-full font-bold text-sm hover:brightness-110 hover:scale-[1.01] transition-all shadow-lg shadow-accent/20"
                  >
                    <Send size={18} />
                    {ui.submitButton}
                  </button>
                </form>
              </div>
            </motion.div>

            <div className="lg:col-span-4 space-y-6">

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-slate-950 text-white"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{ui.quickResponseTitle}</p>
                    <p className="text-xs text-white/40">{ui.quickResponseSubtitle}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {ui.benefits.map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.a
                href={commonData.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 p-8 rounded-3xl bg-[#25D366] text-white hover:brightness-110 transition-all shadow-lg group"
              >
                <MessageCircle size={28} />
                <div>
                  <p className="font-bold text-sm">{ui.whatsappTitle}</p>
                  <p className="text-xs text-white/80">{ui.whatsappSubtitle}</p>
                </div>
                <ArrowRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden border border-slate-100 shadow-lg aspect-[4/3]"
              >
                <iframe
                  src={commonData.hq.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
