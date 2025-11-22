import React, { useState, useMemo } from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  index: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, index }) => {
  const [userSelection, setUserSelection] = useState<number[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggle = (num: number) => {
    setUserSelection(prev => 
      prev.includes(num) ? prev.filter(n => n !== num) : [...prev, num]
    );
  };

  const userSum = useMemo(() => userSelection.reduce((a, b) => a + b, 0), [userSelection]);
  const isCorrectSum = userSum === question.correctSum;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8 print-break-inside">
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide">
              Questão {question.id}
            </span>
            <span className="text-xs text-slate-500 font-medium border border-slate-200 px-2 py-1 rounded">
                {question.category}
            </span>
        </div>
        
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 serif">{question.title}</h3>
        <p className="text-slate-700 mb-6 leading-relaxed">{question.stem}</p>

        <div className="space-y-3 mb-6">
          {question.propositions.map((prop) => (
            <div 
                key={prop.number} 
                className={`p-3 rounded-lg border transition-all duration-200 ${
                    showAnswer 
                        ? prop.isCorrect 
                            ? 'bg-green-50 border-green-200' 
                            : 'bg-red-50 border-red-100 opacity-70'
                        : userSelection.includes(prop.number) 
                            ? 'bg-blue-50 border-blue-300'
                            : 'bg-slate-50 border-transparent hover:border-slate-200'
                }`}
            >
              <label className="flex items-start cursor-pointer select-none gap-3">
                <div className="relative flex items-center pt-1">
                    <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={userSelection.includes(prop.number)}
                    onChange={() => handleToggle(prop.number)}
                    disabled={showAnswer}
                    />
                    <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
                        showAnswer
                            ? prop.isCorrect ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300 bg-slate-200'
                            : userSelection.includes(prop.number) ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'
                    }`}>
                        {prop.number < 10 ? `0${prop.number}` : prop.number}
                    </div>
                </div>
                <div className="flex-1">
                    <span className={`text-sm md:text-base ${showAnswer && !prop.isCorrect ? 'text-slate-500 line-through decoration-slate-400' : 'text-slate-800'}`}>
                        {prop.text}
                    </span>
                    
                    {showAnswer && (
                        <div className={`mt-2 text-sm p-2 rounded ${prop.isCorrect ? 'text-green-800 bg-green-100/50' : 'text-red-800 bg-red-100/50'}`}>
                            <strong>{prop.isCorrect ? '✓' : '✗'} Análise:</strong> {prop.explanation}
                        </div>
                    )}
                </div>
              </label>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-200 gap-4 no-print">
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-600">
                Soma Selecionada: <span className="font-mono font-bold text-lg">{userSum}</span>
            </div>
            {showAnswer && (
                 <div className={`text-sm font-bold ${isCorrectSum ? 'text-green-600' : 'text-red-500'}`}>
                    {isCorrectSum ? 'Correto!' : `Gabarito: ${question.correctSum}`}
                 </div>
            )}
          </div>
          
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 font-medium text-sm transition-colors shadow-sm"
          >
            {showAnswer ? 'Ocultar Resolução' : 'Verificar Resposta'}
          </button>
        </div>

        {/* Always visible in print, togglable in screen */}
        <div className={`${showAnswer ? 'block' : 'hidden'} print:block mt-6 pt-6 border-t border-slate-200`}>
            <h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                Revisão e Conceitos-Chave
            </h4>
            <div className="bg-emerald-50/50 p-4 rounded-lg text-slate-700 text-sm leading-relaxed border border-emerald-100">
                <div className="flex gap-4 flex-col md:flex-row">
                    <div className="flex-1">
                        {question.review}
                    </div>
                    <div className="md:w-32 flex-shrink-0">
                         <img 
                            src={`https://picsum.photos/200/150?random=${question.id}`} 
                            alt="Conceito Biológico" 
                            className="rounded-md object-cover w-full h-24 md:h-full grayscale opacity-80 hover:grayscale-0 transition-all" 
                        />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default QuestionCard;
