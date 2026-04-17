import { motion } from 'framer-motion';
import legalData from '../data/legal.json';

const Legal = ({ type }: { type: 'terms' | 'privacy' }) => {
  const data = legalData[type];

  return (
    <div className="legal-page min-h-screen pt-32 pb-24">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-black mb-4 uppercase">{data.title}</h1>
          <p className="text-sm font-bold text-gold mb-12 uppercase tracking-widest">
            Last Updated: {data.lastUpdated}
          </p>

          <div className="space-y-12">
            {data.content.map((section, i) => (
              <div key={i} className="border-l-4 border-primary pl-8">
                <h2 className="text-xl font-black mb-4 uppercase tracking-tight">
                  {section.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;
