import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, User, LogIn, ShieldCheck } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin1234') {
      sessionStorage.setItem('adminToken', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf2] flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#4a1c11]/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#4a1c11]/10 shadow-2xl relative overflow-hidden">
          {/* Subtle line pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#4a1c11_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="relative z-10">
            <div className="flex flex-col items-center mb-10">
              <div className="w-16 h-16 bg-accent/15 rounded-2xl flex items-center justify-center text-accent mb-6">
                <ShieldCheck size={32} />
              </div>
              <h1 className="text-3xl font-black text-[#4a1c11] uppercase tracking-tighter">Admin Portal</h1>
              <p className="text-[#4a1c11]/50 text-xs font-bold uppercase tracking-[0.2em] mt-2">Secure Gateway</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/40 ml-4 mb-1 block">Username</label>
                <div className="relative">
                  <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#4a1c11]/30" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-[#4a1c11]/5 border border-[#4a1c11]/10 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-[#4a1c11] focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    placeholder="Enter username"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/40 ml-4 mb-1 block">Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#4a1c11]/30" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#4a1c11]/5 border border-[#4a1c11]/10 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-[#4a1c11] focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-red-500 text-xs font-bold text-center"
                >
                  {error}
                </motion.p>
              )}

              <button
                type="submit"
                className="w-full bg-[#4a1c11] text-accent py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-8"
              >
                <LogIn size={16} />
                Access Dashboard
              </button>
            </form>
          </div>
        </div>

        <p className="text-center mt-8 text-[#4a1c11]/30 text-[10px] font-black uppercase tracking-widest">
          &copy; 2026 Digital Marketing Agency • Unauthorized Access Prohibited
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
