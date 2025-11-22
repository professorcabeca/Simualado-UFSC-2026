export interface Proposition {
  number: number; // 01, 02, 04, etc.
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface Question {
  id: number;
  category: string; // e.g., "Genética", "Ecologia"
  title: string;
  stem: string; // The main text of the question
  propositions: Proposition[];
  review: string; // The "Resumo e Conceitos-Chave"
  correctSum: number;
}

export interface CategoryStats {
  category: string;
  count: number;
}
