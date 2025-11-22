import React, { useState, useMemo } from 'react';
import { questions } from './data';
import Sidebar from './components/Sidebar';
import QuestionCard from './components/QuestionCard';
import AnalysisDashboard from './components/AnalysisDashboard';
import { CategoryStats } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Calculate stats for sidebar and chart
  const stats: CategoryStats[] = useMemo(() => {
    const counts: Record<string, number> = {};
    questions.forEach(q => {
      counts[q.category] = (counts[q.category] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const filteredQuestions = useMemo(() => {
    return selectedCategory 
      ? questions.filter(q => q.category === selectedCategory)
      : questions;
  }, [selectedCategory]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar 
        categories={stats} 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory}
        totalQuestions={questions.length}
      />

      <main className="flex-1 p-6 md:p-12 overflow-x-hidden">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 serif">
              Simulado UFSC 2026
            </h1>
            <p className="text-slate-600 max-w-2xl">
              Análise completa e resoluções detalhadas focadas nas tendências biológicas atuais: 
              CRISPR, Vacinas mRNA, Mudanças Climáticas e mais.
            </p>
          </div>
          
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-lg hover:bg-emerald-700 transition shadow-md font-medium no-print"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>
            Gerar PDF
          </button>
        </header>

        {/* Only show Dashboard on "All Questions" view to avoid clutter */}
        {!selectedCategory && (
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 no-print">
                <AnalysisDashboard stats={stats} />
                <div className="bg-emerald-900 text-white p-8 rounded-xl shadow-sm flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
                        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 z-10 relative">Dica de Estudo</h3>
                    <p className="text-emerald-100 leading-relaxed z-10 relative">
                        O vestibular da UFSC utiliza o sistema de <strong>Somatório</strong>. 
                        Estratégia: Se você tem dúvida em uma proposição de valor alto (ex: 16 ou 32), 
                        muitas vezes é melhor não marcá-la para não invalidar os pontos das proposições que você tem certeza.
                        A coerência parcial pontua!
                    </p>
                </div>
             </div>
        )}

        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4 no-print">
            <h2 className="text-xl font-semibold text-slate-800">
                {selectedCategory ? `Questões de ${selectedCategory}` : 'Todas as Questões'}
            </h2>
            <span className="text-sm text-slate-500">
                Mostrando {filteredQuestions.length} questões
            </span>
          </div>

          {filteredQuestions.map((q, idx) => (
            <QuestionCard key={q.id} question={q} index={idx} />
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm no-print">
            <p>Desenvolvido para preparação UFSC 2026. Baseado no material fornecido.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
