import { Link } from 'react-router-dom';
import commonData from '../data/common.json';
import servicesData from '../data/services.json';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-1 flex flex-col items-start">
          <Link to="/" className="text-3xl font-black tracking-tighter mb-8">
            {commonData.shortName.toUpperCase()}<span className="text-accent">.</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
            Revenue-first performance engineering based in {commonData.hq.city}. 
            Dominating audits, scaling benchmarks, and engineering digital dominance.
          </p>
          <div className="flex space-x-6">
            {Object.entries(commonData.socials).map(([platform, link]) => (
              <a 
                key={platform} 
                href={link} 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-500 hover:text-accent transition-colors uppercase text-[10px] font-black tracking-widest"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[.3em] mb-8 text-accent">Solutions</h4>
          <ul className="space-y-4">
            {servicesData.items.map(service => (
              <li key={service.id}>
                <Link to={`/services/${service.id}`} className="text-slate-500 hover:text-white transition-colors text-sm font-medium">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[.3em] mb-8 text-accent">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">About Agency</Link></li>
            <li><Link to="/testimonials" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Case Studies</Link></li>
            <li><Link to="/privacy" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Privacy Protocol</Link></li>
            <li><Link to="/terms" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Service Agreement</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[.3em] mb-8 text-accent">Headquarters</h4>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            {commonData.hq.address}<br />
            {commonData.hq.city}<br />
            {commonData.hq.pincode}
          </p>
          <a href={`mailto:${commonData.hq.email}`} className="text-accent font-black text-sm block mb-2 underline decoration-accent/30 underline-offset-4">
            {commonData.hq.email}
          </a>
          <p className="text-slate-500 text-sm">{commonData.hq.phone}</p>
        </div>
      </div>

      <div className="container px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[.4em] text-slate-700 uppercase">
        <span>© {new Date().getFullYear()} {commonData.companyName}</span>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <span>Global / Region: IN-TN</span>
          <span className="text-slate-800">Developed with precision by Reven</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
