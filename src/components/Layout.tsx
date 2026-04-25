import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-accent/30 overflow-x-hidden">
      <ParticlesBackground />

      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-grow z-10"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
