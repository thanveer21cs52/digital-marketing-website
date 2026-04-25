import { Link } from 'react-router-dom';
import commonData from '../data/common.json';
import servicesData from '../data/services.json';
import homeData from '../data/home.json';

const ui = homeData.footerUi;

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-1 flex flex-col items-start">
          <Link to="/" className="text-3xl font-black tracking-tighter mb-8">
            {commonData.shortName.toUpperCase()}<span className="text-accent">.</span>
          </Link>
          <p className="text-slate-100 text-sm leading-relaxed mb-8 max-w-xs opacity-70">
            {ui.description}
          </p>
          <div className="flex space-x-6">
            {Object.entries(commonData.socials).map(([platform, link]) => (
              <a
                key={platform}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[.3em] mb-8 text-accent">{ui.solutionsTitle}</h4>
          <ul className="space-y-4">
            {servicesData.items.map(service => (
              <li key={service.id}>
                <Link to={`/services/${service.id}`} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[.3em] mb-8 text-accent">{ui.navigationTitle}</h4>
          <ul className="space-y-4">
            {commonData.navLinks.filter(l => l.type === 'link').map(link => (
              <li key={link.href}>
                <Link to={link.href || '/'} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
                  {link.name}
                </Link>
              </li>
            ))}
            <li><Link to="/privacy" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{commonData.ui.privacyTitle}</Link></li>
            <li><Link to="/terms" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{commonData.ui.termsTitle}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[.3em] mb-8 text-accent">{ui.headquartersTitle}</h4>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {commonData.hq.address}<br />
            {commonData.hq.city}<br />
            {commonData.hq.pincode}
          </p>
          <a href={`mailto:${commonData.hq.email}`} className="text-accent font-black text-sm block mb-2 underline decoration-accent/30 underline-offset-4">
            {commonData.hq.email}
          </a>
          <a href={`tel:${commonData.hq.phone.replace(/\s/g, '')}`} className="text-slate-300 text-sm hover:text-white transition-colors">
            {commonData.hq.phone}
          </a>
        </div>
      </div>

      <div className="container px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[.4em] text-slate-300 opacity-40 uppercase">
        <span>{commonData.ui.copyright.replace('{year}', new Date().getFullYear().toString())}</span>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <span>{commonData.ui.region}</span>
          <span className="text-white/20">{commonData.ui.developedBy}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
