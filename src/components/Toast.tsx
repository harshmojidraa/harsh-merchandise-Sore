import React from 'react';
import { useStore } from '../context/StoreContext';
import { Check, ShoppingBag } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast, setIsCartOpen } = useStore();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
      <div className="bg-[#202124] text-white px-4 py-3 rounded-2xl shadow-2xl border border-gray-700 flex items-center gap-3.5 max-w-sm">
        {toast.image ? (
          <img
            src={toast.image}
            alt="Product preview"
            className="w-10 h-10 object-cover rounded-xl bg-gray-800 flex-shrink-0"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4" />
          </div>
        )}

        <div className="flex-1 overflow-hidden">
          <div className="text-xs font-bold text-white truncate">{toast.title}</div>
          {toast.subtitle && (
            <div className="text-[11px] text-gray-300 truncate">{toast.subtitle}</div>
          )}
        </div>

        <button
          onClick={() => setIsCartOpen(true)}
          className="p-1.5 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
          title="Open Bag"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
