import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  LogOut,
  Trash2,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Search,
  Filter,
  Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import homeDataJson from '../../data/home.json';
import aboutDataJson from '../../data/about.json';
import servicesDataJson from '../../data/services.json';
import contactDataJson from '../../data/contact.json';
import commonDataJson from '../../data/common.json';
import testimonialsDataJson from '../../data/testimonials.json';
import { getWebsiteData } from '../../utils/dataLoader';
import DynamicForm from '../../components/admin/DynamicForm';

// Types for our data
interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'archived';
}

const ITEMS_PER_PAGE = 5;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'enquiries' | 'pages'>('overview');
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const jsonDataMap: Record<string, any> = {
    home: homeDataJson,
    about: aboutDataJson,
    services: servicesDataJson,
    contact: contactDataJson,
    common: commonDataJson,
    testimonials: testimonialsDataJson
  };

  const [editData, setEditData] = useState<any>(null);

  useEffect(() => {
    if (selectedPage) {
      setEditData(getWebsiteData(selectedPage, jsonDataMap[selectedPage]));
    }
  }, [selectedPage]);



  useEffect(() => {
    // Load enquiries from localStorage
    const savedEnquiries = localStorage.getItem('website_enquiries');
    if (savedEnquiries) {
      setEnquiries(JSON.parse(savedEnquiries));
    } else {
      // Mock data if none exists
      const mockEnquiries: Enquiry[] = [
        {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+1 234 567 890',
          service: 'Digital Strategy',
          message: 'I would like to discuss a new marketing campaign for my business.',
          date: new Date().toISOString(),
          status: 'new'
        },
        {
          id: '2',
          name: 'Jane Smith',
          email: 'jane@brand.com',
          phone: '+44 7700 900000',
          service: 'SEO Optimization',
          message: 'Our website traffic has dropped significantly in the last month.',
          date: new Date(Date.now() - 86400000).toISOString(),
          status: 'read'
        }
      ];
      setEnquiries(mockEnquiries);
      localStorage.setItem('website_enquiries', JSON.stringify(mockEnquiries));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const updateEnquiryStatus = (id: string, status: Enquiry['status']) => {
    const updated = enquiries.map(e => e.id === id ? { ...e, status } : e);
    setEnquiries(updated);
    localStorage.setItem('website_enquiries', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] flex">
      {/* Sidebar */}
      <div className="w-72 bg-[#4a1c11] text-white flex flex-col fixed h-full z-30">
        <div className="p-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-[#4a1c11]">
              <Settings size={20} />
            </div>
            <div>
              <h1 className="font-black text-sm uppercase tracking-tighter">Admin Panel</h1>
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest">v1.0.0</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-2 overflow-y-auto no-scrollbar">
          {[
            { id: 'overview', icon: LayoutDashboard, label: 'Analytics' },
            { id: 'enquiries', icon: MessageSquare, label: 'Lead Management', badge: enquiries.filter(e => e.status === 'new').length },
            { id: 'pages', icon: Settings, label: 'Site Pages' },
          ].map((item) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  setActiveTab(item.id as any);
                  if (item.id !== 'pages') setSelectedPage(null);
                }}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 group ${
                  activeTab === item.id ? 'bg-accent text-[#4a1c11]' : 'hover:bg-white/5 text-white/60'
                }`}
              >
                <div className="flex items-center gap-4">
                  <item.icon size={18} className={activeTab === item.id ? 'text-[#4a1c11]' : 'group-hover:text-white'} />
                  <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                </div>
                {item.badge ? (
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-black ${
                    activeTab === item.id ? 'bg-[#4a1c11] text-accent' : 'bg-accent text-[#4a1c11]'
                  }`}>
                    {item.badge}
                  </span>
                ) : null}
              </button>

              {item.id === 'pages' && activeTab === 'pages' && (
                <div className="mt-2 ml-10 space-y-1 border-l border-white/10 pl-4">
                  {Object.keys(jsonDataMap).map(page => (
                    <button
                      key={page}
                      onClick={() => setSelectedPage(page)}
                      className={`w-full text-left py-2 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                        selectedPage === page ? 'text-accent' : 'text-white/40 hover:text-white'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-red-500/10 text-red-400 transition-all group"
          >
            <LogOut size={18} />
            <span className="text-xs font-black uppercase tracking-widest">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-72 p-12">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-black text-[#4a1c11] uppercase tracking-tighter">
              {activeTab === 'overview' && 'Performance Overview'}
              {activeTab === 'pages' && (selectedPage ? `Editing: ${selectedPage}` : 'Website Content Management')}
              {activeTab === 'enquiries' && 'Lead Pipeline'}
            </h2>
            <p className="text-[#4a1c11]/50 text-xs font-bold uppercase tracking-[0.2em] mt-2">
              Welcome back, Administrator
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="/"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-[#4a1c11]/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#4a1c11] hover:bg-accent transition-all"
            >
              <ExternalLink size={14} />
              View Site
            </a>
          </div>
        </header>

        <main>
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <div className="bg-white p-8 rounded-[2.5rem] border border-[#4a1c11]/10 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/40 mb-4">Total Enquiries</p>
                  <h3 className="text-5xl font-black text-[#4a1c11] tracking-tighter">{enquiries.length}</h3>
                  <div className="mt-6 flex items-center gap-2 text-green-500">
                    <span className="text-xs font-bold">+12% this month</span>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-[#4a1c11]/10 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/40 mb-4">New Messages</p>
                  <h3 className="text-5xl font-black text-accent tracking-tighter">
                    {enquiries.filter(e => e.status === 'new').length}
                  </h3>
                  <div className="mt-6 flex items-center gap-2 text-[#4a1c11]/60">
                    <span className="text-xs font-bold">Action required</span>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-[#4a1c11]/10 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/40 mb-4">Site Status</p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <h3 className="text-2xl font-black text-[#4a1c11] tracking-tighter uppercase">Live & Secure</h3>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[#4a1c11]/60">
                    <span className="text-xs font-bold">SSL Certificate Active</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'enquiries' && (
              <motion.div
                key="enquiries"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-[2.5rem] border border-[#4a1c11]/10 shadow-sm overflow-hidden">
                  <div className="p-8 border-b border-[#4a1c11]/5 flex justify-between items-center">
                    <div className="relative w-96">
                      <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#4a1c11]/30" />
                      <input
                        type="text"
                        placeholder="Search enquiries..."
                        className="w-full bg-[#4a1c11]/5 border border-[#4a1c11]/10 rounded-xl py-3 pl-14 pr-6 text-sm font-bold text-[#4a1c11] outline-none"
                      />
                    </div>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 px-6 py-3 bg-[#4a1c11]/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#4a1c11]">
                        <Filter size={14} />
                        Filter
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-[#4a1c11]/5">
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/40">Status</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/40">Customer</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/40">Service</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/40">Date</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/40">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#4a1c11]/5">
                        {enquiries.length > 0 ? (
                          enquiries
                            .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
                            .map((enquiry) => (
                              <tr key={enquiry.id} className="hover:bg-[#4a1c11]/[0.02] transition-colors group">
                                <td className="px-8 py-6">
                                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                                    enquiry.status === 'new' ? 'bg-accent text-[#4a1c11]' :
                                    enquiry.status === 'read' ? 'bg-[#4a1c11]/10 text-[#4a1c11]' :
                                    'bg-[#4a1c11]/5 text-[#4a1c11]/40'
                                  }`}>
                                    {enquiry.status}
                                  </span>
                                </td>
                                <td className="px-8 py-6">
                                  <div>
                                    <p className="text-sm font-black text-[#4a1c11]">{enquiry.name}</p>
                                    <p className="text-xs text-[#4a1c11]/50 font-medium">{enquiry.email}</p>
                                  </div>
                                </td>
                                <td className="px-8 py-6">
                                  <p className="text-xs font-bold text-[#4a1c11]">{enquiry.service}</p>
                                </td>
                                <td className="px-8 py-6">
                                  <p className="text-xs font-medium text-[#4a1c11]/50">{new Date(enquiry.date).toLocaleDateString()}</p>
                                </td>
                                <td className="px-8 py-6">
                                  <button
                                    onClick={() => {
                                      setSelectedEnquiry(enquiry);
                                      if (enquiry.status === 'new') updateEnquiryStatus(enquiry.id, 'read');
                                    }}
                                    className="w-10 h-10 rounded-xl bg-[#4a1c11]/5 text-[#4a1c11] flex items-center justify-center hover:bg-accent transition-all"
                                  >
                                    <Eye size={18} />
                                  </button>
                                </td>
                              </tr>
                            ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="px-8 py-20 text-center text-[#4a1c11]/30 font-bold uppercase text-xs tracking-widest">
                              No enquiries received yet.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination Controls */}
                  {enquiries.length > ITEMS_PER_PAGE && (
                    <div className="px-8 py-6 border-t border-[#4a1c11]/5 flex justify-between items-center bg-[#4a1c11]/[0.02]">
                       <p className="text-[10px] font-bold text-[#4a1c11]/40 uppercase tracking-widest">
                         Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, enquiries.length)} of {enquiries.length} leads
                       </p>
                       <div className="flex items-center gap-2">
                         <button 
                           disabled={currentPage === 1}
                           onClick={() => setCurrentPage(prev => prev - 1)}
                           className="p-2 border border-[#4a1c11]/10 rounded-xl hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                         >
                           <ChevronLeft size={16} />
                         </button>
                         
                         {[...Array(Math.ceil(enquiries.length / ITEMS_PER_PAGE))].map((_, i) => (
                           <button
                             key={i}
                             onClick={() => setCurrentPage(i + 1)}
                             className={`w-10 h-10 rounded-xl text-[10px] font-black uppercase transition-all ${
                               currentPage === i + 1 ? 'bg-[#4a1c11] text-accent shadow-lg' : 'bg-white border border-[#4a1c11]/10 text-[#4a1c11] hover:bg-accent'
                             }`}
                           >
                             {i + 1}
                           </button>
                         ))}

                         <button 
                           disabled={currentPage === Math.ceil(enquiries.length / ITEMS_PER_PAGE)}
                           onClick={() => setCurrentPage(prev => prev + 1)}
                           className="p-2 border border-[#4a1c11]/10 rounded-xl hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                         >
                           <ChevronRight size={16} />
                         </button>
                       </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === 'pages' && (
              <motion.div
                key="pages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {!selectedPage ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.keys(jsonDataMap).map(page => (
                      <button
                        key={page}
                        onClick={() => setSelectedPage(page)}
                        className="group bg-white p-10 rounded-[3rem] border border-[#4a1c11]/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 text-left relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors" />
                        <div className="relative z-10">
                          <div className="w-12 h-12 bg-[#4a1c11]/5 rounded-2xl flex items-center justify-center text-[#4a1c11] mb-8 group-hover:bg-accent transition-all">
                            <Settings size={20} />
                          </div>
                          <h3 className="text-2xl font-black text-[#4a1c11] uppercase tracking-tighter mb-2">{page}</h3>
                          <p className="text-[10px] font-bold text-[#4a1c11]/40 uppercase tracking-widest">Manage {page}.json content</p>
                          
                          <div className="mt-10 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                            <span className="text-[10px] font-black uppercase tracking-widest">Launch Editor</span>
                            <ChevronRight size={14} />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                      <button 
                        onClick={() => setSelectedPage(null)}
                        className="flex items-center gap-2 px-6 py-3 bg-[#4a1c11]/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#4a1c11] hover:bg-accent transition-all"
                      >
                        <ChevronRight size={14} className="rotate-180" />
                        Back to Pages
                      </button>
                      <div className="h-px flex-1 bg-[#4a1c11]/10" />
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/30">Live Editing: {selectedPage}.json</p>
                    </div>

                    {editData ? (
                      <DynamicForm 
                        data={editData} 
                      />
                    ) : (
                      <div className="flex items-center justify-center h-64">
                        <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Enquiry Detail Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#4a1c11]/40 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden border border-[#4a1c11]/10"
          >
            <div className="p-12">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <span className="px-3 py-1 bg-accent text-[#4a1c11] rounded-full text-[9px] font-black uppercase tracking-widest mb-4 inline-block">
                    {selectedEnquiry.service}
                  </span>
                  <h3 className="text-4xl font-black text-[#4a1c11] uppercase tracking-tighter">{selectedEnquiry.name}</h3>
                  <p className="text-sm font-bold text-[#4a1c11]/50 mt-1">{selectedEnquiry.email} • {selectedEnquiry.phone}</p>
                </div>
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="w-12 h-12 rounded-full bg-[#4a1c11]/5 flex items-center justify-center text-[#4a1c11] hover:bg-red-500 hover:text-white transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              <div className="bg-[#4a1c11]/5 p-8 rounded-3xl mb-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/40 mb-4">Message</p>
                <p className="text-[#4a1c11] font-medium leading-relaxed">
                  "{selectedEnquiry.message}"
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="flex-1 py-5 border border-[#4a1c11]/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#4a1c11] hover:bg-[#4a1c11]/5 transition-all"
                >
                  Close View
                </button>
                <a
                  href={`mailto:${selectedEnquiry.email}`}
                  className="flex-1 py-5 bg-[#4a1c11] text-accent rounded-2xl text-[10px] font-black uppercase tracking-widest text-center shadow-xl hover:scale-[1.02] transition-all"
                >
                  Reply via Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
