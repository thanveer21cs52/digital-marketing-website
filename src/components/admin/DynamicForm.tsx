import React, { useState } from 'react';
import { Save, AlertCircle, FileText, List as ListIcon, Box, ChevronRight, Hash, Type } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DynamicFormProps {
  data: any;
  onChange: (newData: any) => void;
  onSave: () => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ data, onChange, onSave }) => {
  const [activeGroup, setActiveGroup] = useState<string | null>(Object.keys(data)[0] || null);

  const renderField = (key: string, value: any, path: string[]) => {
    const fullPath = [...path, key];
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return (
        <div key={fullPath.join('.')} className="space-y-6 bg-[#4a1c11]/5 p-8 rounded-3xl border border-[#4a1c11]/10">
          <div className="flex items-center gap-3 border-b border-[#4a1c11]/10 pb-4">
             <Box size={16} className="text-accent" />
             <h4 className="text-[11px] font-black uppercase tracking-widest text-[#4a1c11]">{label}</h4>
          </div>
          <div className="space-y-6">
            {Object.entries(value).map(([subKey, subValue]) => renderField(subKey, subValue, fullPath))}
          </div>
        </div>
      );
    }

    if (Array.isArray(value)) {
      return (
        <div key={fullPath.join('.')} className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
             <ListIcon size={16} className="text-accent" />
             <h4 className="text-[11px] font-black uppercase tracking-widest text-[#4a1c11]">{label}</h4>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {value.map((item, index) => (
              <div key={`${fullPath.join('.')}.${index}`} className="p-8 bg-white rounded-3xl border border-[#4a1c11]/10 shadow-sm relative group/item">
                <div className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest text-[#4a1c11]/20">#{index + 1}</div>
                <div className="space-y-6">
                  {typeof item === 'object' && item !== null ? 
                    Object.entries(item).map(([subKey, subValue]) => renderField(subKey, subValue, [...fullPath, index.toString()])) :
                    renderField(index.toString(), item, fullPath)
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    const handleChange = (newValue: any) => {
      const newData = JSON.parse(JSON.stringify(data));
      let current = newData;
      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];
      }
      current[key] = newValue;
      onChange(newData);
    };

    const isLongText = typeof value === 'string' && value.length > 50;
    const isNumber = typeof value === 'number';

    return (
      <div key={fullPath.join('.')} className="group/field space-y-2 opacity-80 cursor-not-allowed">
        <div className="flex justify-between items-center px-1">
          <div className="flex items-center gap-2">
            {isNumber ? <Hash size={10} className="text-[#4a1c11]/30" /> : <Type size={10} className="text-[#4a1c11]/30" />}
            <label className="text-[10px] font-black uppercase tracking-widest text-[#4a1c11]/50 block">
              {label}
            </label>
          </div>
        </div>
        
        {isLongText ? (
          <textarea
            value={value || ''}
            readOnly
            disabled
            rows={4}
            className="w-full bg-[#4a1c11]/2 border border-[#4a1c11]/5 rounded-2xl py-4 px-6 text-sm font-bold text-[#4a1c11]/60 outline-none cursor-not-allowed shadow-none"
          />
        ) : (
          <input
            type={isNumber ? 'number' : 'text'}
            value={value ?? ''}
            readOnly
            disabled
            className="w-full bg-[#4a1c11]/2 border border-[#4a1c11]/5 rounded-2xl py-4 px-6 text-sm font-bold text-[#4a1c11]/60 outline-none cursor-not-allowed shadow-none"
          />
        )}
      </div>
    );
  };

  if (!data) return null;

  const groups = Object.keys(data);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Group Navigation */}
      <div className="w-full lg:w-64 space-y-2 shrink-0">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4a1c11]/30 px-6 mb-4">Content Explorer</p>
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => setActiveGroup(group)}
            className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${
              activeGroup === group ? 'bg-[#4a1c11] text-accent shadow-xl' : 'bg-white border border-[#4a1c11]/10 text-[#4a1c11]/60 hover:bg-[#4a1c11]/5'
            }`}
          >
            <div className="flex items-center gap-3">
               <FileText size={14} />
               <span className="text-[10px] font-black uppercase tracking-widest">{group}</span>
            </div>
            <ChevronRight size={14} className={`${activeGroup === group ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
          </button>
        ))}

        <div className="pt-8 px-6">
           <div className="flex items-center gap-2 text-red-500/50">
              <AlertCircle size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Read Only Mode</span>
           </div>
           <p className="text-[8px] font-bold text-[#4a1c11]/30 uppercase tracking-tighter mt-2 leading-relaxed">
             Content editing is disabled in this environment.
           </p>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 w-full min-h-[600px]">
        <AnimatePresence mode="wait">
          {activeGroup && (
            <motion.div
              key={activeGroup}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 sm:p-12 rounded-[3.5rem] border border-[#4a1c11]/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-[#4a1c11]">
                       <FileText size={20} />
                    </div>
                    <div>
                       <h3 className="text-2xl font-black text-[#4a1c11] uppercase tracking-tighter">Editing: {activeGroup}</h3>
                       <p className="text-[9px] font-bold text-[#4a1c11]/40 uppercase tracking-widest">Enterprise Content Framework</p>
                    </div>
                  </div>

                  <div className="space-y-10">
                    {typeof data[activeGroup] === 'object' && data[activeGroup] !== null ? (
                      Array.isArray(data[activeGroup]) ? (
                        renderField(activeGroup, data[activeGroup], [])
                      ) : (
                        Object.entries(data[activeGroup]).map(([key, value]) => renderField(key, value, [activeGroup]))
                      )
                    ) : (
                      renderField(activeGroup, data[activeGroup], [])
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DynamicForm;
