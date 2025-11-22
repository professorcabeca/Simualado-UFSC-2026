import React from 'react';
import { CategoryStats } from '../types';

interface SidebarProps {
  categories: CategoryStats[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  totalQuestions: number;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, onSelectCategory, totalQuestions }) => {
  return (
    <aside className="w-full md:w-64 bg-white shadow-md md:h-screen md:sticky md:top-0 overflow-y-auto no-print">
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="text-emerald-600 mr-2">🧬</span> Filtros
        </h2>
        
        <nav className="space-y-2">
          <button
            onClick={() => onSelectCategory(null)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === null
                ? 'bg-emerald-100 text-emerald-800 font-semibold'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            Todas as Questões
            <span className="float-right text-xs bg-slate-200 px-2 py-1 rounded-full text-slate-600">{totalQuestions}</span>
          </button>

          <div className="pt-4 pb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-4">Por Conteúdo</p>
            {categories.map((stat) => (
              <button
                key={stat.category}
                onClick={() => onSelectCategory(stat.category)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm mb-1 transition-colors ${
                  selectedCategory === stat.category
                    ? 'bg-emerald-50 text-emerald-700 font-medium border-l-4 border-emerald-500'
                    : 'hover:bg-slate-50 text-slate-600 border-l-4 border-transparent'
                }`}
              >
                {stat.category}
                <span className="float-right text-xs text-slate-400">{stat.count}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
