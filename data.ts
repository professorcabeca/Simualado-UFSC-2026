import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    category: "Genética e Biotecnologia",
    title: "Genômica e Terapia Gênica (CRISPR)",
    stem: "Em 2024, foi aprovada a primeira terapia gênica baseada na ferramenta CRISPR-Cas9, chamada Casgevy. Sobre esta revolução biotecnológica e seus conceitos fundamentais, é correto afirmar que:",
    correctSum: 26,
    propositions: [
      { number: 1, text: "A enzima Cas9 é uma endonuclease que corta moléculas de RNA mensageiro.", isCorrect: false, explanation: "INCORRETA. A Cas9 corta DNA, não RNA mensageiro. É uma edição do genoma." },
      { number: 2, text: "O sistema CRISPR utiliza um RNA-guia (gRNA) que se liga ao DNA-alvo por complementaridade, direcionando a Cas9.", isCorrect: true, explanation: "CORRETA. O gRNA guia a enzima com alta precisão até a sequência alvo." },
      { number: 4, text: "A anemia falciforme é autossômica dominante.", isCorrect: false, explanation: "INCORRETA. É autossômica recessiva; precisa de duas cópias do alelo mutante." },
      { number: 8, text: "A reativação da hemoglobina fetal (HbF) é eficaz pois ela não possui a mutação e transporta oxigênio.", isCorrect: true, explanation: "CORRETA. A HbF é funcional e compensa a hemoglobina defeituosa." },
      { number: 16, text: "É um exemplo de edição gênica em células somáticas, não hereditárias.", isCorrect: true, explanation: "CORRETA. Altera células do paciente (somáticas), não sendo passado aos filhos." },
      { number: 32, text: "Por ser ex vivo, necessita de vetor viral como adenovírus para transporte no corpo.", isCorrect: false, explanation: "INCORRETA. Se é ex vivo, a edição ocorre fora do corpo, não precisando de vetor viral para transporte sistêmico." }
    ],
    review: "CRISPR-Cas9 funciona como uma 'tesoura molecular' guiada por RNA. Diferença crucial: Edição Somática (afeta o indivíduo) vs. Germinativa (afeta descendentes). A anemia falciforme é recessiva."
  },
  {
    id: 2,
    category: "Ecologia",
    title: "Biomas Brasileiros e Foco Regional (SC)",
    stem: "O estado de Santa Catarina está majoritariamente inserido na Mata Atlântica. Sobre os biomas e a ecologia de SC:",
    correctSum: 31,
    propositions: [
      { number: 1, text: "A Mata de Araucárias é típica deste bioma, com Araucaria angustifolia dominante.", isCorrect: true, explanation: "CORRETA. A Floresta Ombrófila Mista é uma formação da Mata Atlântica." },
      { number: 2, text: "Restingas e manguezais são ecossistemas associados à Mata Atlântica; manguezais são berçários.", isCorrect: true, explanation: "CORRETA. São ecossistemas vitais e sensíveis na zona costeira." },
      { number: 4, text: "A Mata Atlântica apresenta alta biodiversidade e endemismo devido ao relevo acidentado.", isCorrect: true, explanation: "CORRETA. Barreiras geográficas promovem especiação alopátrica." },
      { number: 8, text: "Poluição hídrica por agrotóxicos e metais pesados (carvão) são problemas ecológicos relevantes em SC.", isCorrect: true, explanation: "CORRETA. Destaca problemas reais do interior e do sul do estado." },
      { number: 16, text: "A maricultura pode causar eutrofização se houver manejo inadequado.", isCorrect: true, explanation: "CORRETA. Excesso de matéria orgânica pode levar ao desequilíbrio." }
    ],
    review: "Mata Atlântica: Hotspot de biodiversidade. Inclui Mata de Araucárias, Manguezais e Restingas. Problemas locais: mineração de carvão e agrotóxicos."
  },
  {
    id: 3,
    category: "Fisiologia Humana",
    title: "Microbioma e Eixo Intestino-Cérebro",
    stem: "Pesquisas recentes consolidam a importância do 'eixo intestino-cérebro'. Sobre a fisiologia humana, o microbioma e interações:",
    correctSum: 15,
    propositions: [
      { number: 1, text: "A relação humanos-microbiota é mutualismo (abrigo/nutrientes vs digestão/vitaminas).", isCorrect: true, explanation: "CORRETA. Benefício mútuo." },
      { number: 2, text: "Disbiose pode ser causada por antibióticos indiscriminados.", isCorrect: true, explanation: "CORRETA. Antibióticos matam bactérias boas e ruins." },
      { number: 4, text: "Intestino e cérebro comunicam-se bioquimicamente (ex: metabólitos SCFAs).", isCorrect: true, explanation: "CORRETA. Metabólitos afetam o sistema nervoso central." },
      { number: 8, text: "Fibras são 'prebióticos', servindo de substrato para microbiota.", isCorrect: true, explanation: "CORRETA. Prebióticos alimentam os probióticos." },
      { number: 16, text: "Neuroinflamação é mediada por neurônios motores.", isCorrect: false, explanation: "INCORRETA. É mediada pela glia (micróglia), células de defesa do SNC." }
    ],
    review: "Mutualismo: Relação benéfica obrigatória/muito próxima. Disbiose: Desequilíbrio da flora. Eixo Intestino-Cérebro envolve comunicação química e nervosa."
  },
  {
    id: 4,
    category: "Saúde Pública",
    title: "Epidemiologia e Dengue",
    stem: "Sobre a dengue, método Wolbachia e vacinas:",
    correctSum: 60,
    propositions: [
      { number: 1, text: "Dengue é bacteriana transmitida pelo Aedes aegypti.", isCorrect: false, explanation: "INCORRETA. Dengue é viral (Arbovirose)." },
      { number: 2, text: "Método Wolbachia libera mosquitos transgênicos estéreis.", isCorrect: false, explanation: "INCORRETA. Wolbachia é uma bactéria introduzida, não transgênese do mosquito em si (embora existam mosquitos transgênicos, a descrição mistura conceitos)." },
      { number: 4, text: "Wolbachia compete por recursos e dificulta replicação do vírus no vetor.", isCorrect: true, explanation: "CORRETA. É um controle biológico intracelular." },
      { number: 8, text: "Vacina Qdenga usa vírus atenuado dos quatro sorotipos.", isCorrect: true, explanation: "CORRETA. Induz resposta robusta sem doença grave." },
      { number: 16, text: "Controle depende de saneamento e eliminação de criadouros.", isCorrect: true, explanation: "CORRETA. Ação multifatorial." },
      { number: 32, text: "Imunidade é sorotipo-específica (quem pega DENV-1 não pega DENV-1, mas pode pegar outros).", isCorrect: true, explanation: "CORRETA. Existem 4 sorotipos principais." }
    ],
    review: "Dengue: Viral (Flavivirus). Vetor: Aedes aegypti. Wolbachia: Controle biológico. Vacina Atenuada: Vírus vivo enfraquecido."
  },
  {
    id: 5,
    category: "Bioquímica",
    title: "Enzimas e Biologia Sintética",
    stem: "Sobre enzimas e a criação de enzimas artificiais via IA:",
    correctSum: 11,
    propositions: [
      { number: 1, text: "Enzimas são proteínas; sequência de aminoácidos define estrutura 3D.", isCorrect: true, explanation: "CORRETA. Estrutura primária dita a terciária." },
      { number: 2, text: "Função catalítica está no 'sítio ativo', modelo chave-fechadura.", isCorrect: true, explanation: "CORRETA. Especificidade enzimática." },
      { number: 4, text: "Enzimas aumentam a energia de ativação.", isCorrect: false, explanation: "INCORRETA. Elas DIMINUEM a energia de ativação para acelerar a reação." },
      { number: 8, text: "Temperatura e pH extremos podem desnaturar a enzima.", isCorrect: true, explanation: "CORRETA. Perda da forma 3D = perda de função." },
      { number: 16, text: "Enzimas são consumidas durante a reação.", isCorrect: false, explanation: "INCORRETA. Elas são catalisadores e não são consumidas." }
    ],
    review: "Enzimas: Catalisadores biológicos proteicos. Diminuem energia de ativação. São sensíveis a pH e Temperatura. Não são reagentes (não acabam)."
  },
  {
    id: 6,
    category: "Evolução",
    title: "Resistência a Antibióticos",
    stem: "Sobre os mecanismos evolutivos das superbactérias:",
    correctSum: 14,
    propositions: [
      { number: 1, text: "O antibiótico induz a mutação de resistência (Lamarck).", isCorrect: false, explanation: "INCORRETA. Visão Lamarckista. O antibiótico seleciona, não cria." },
      { number: 2, text: "Mutações ocorrem de forma aleatória e espontânea.", isCorrect: true, explanation: "CORRETA. Base do Neodarwinismo." },
      { number: 4, text: "O antibiótico atua como agente de seleção natural.", isCorrect: true, explanation: "CORRETA. Seleciona os resistentes pré-existentes." },
      { number: 8, text: "Transferência horizontal (plasmídeos/conjugação) acelera a resistência.", isCorrect: true, explanation: "CORRETA. Bactérias trocam genes entre si." },
      { number: 16, text: "Ilustra a Lei do Uso e Desuso.", isCorrect: false, explanation: "INCORRETA. Isso é Lamarckismo." }
    ],
    review: "Seleção Natural: O ambiente seleciona variantes aptas. Mutação: Aleatória. Transferência Horizontal: Conjugação bacteriana espalha resistência rapidamente."
  },
  {
    id: 7,
    category: "Ecologia",
    title: "Mudanças Climáticas",
    stem: "Sobre eventos climáticos, 'ponto de inflexão' amazônico e enchentes:",
    correctSum: 15,
    propositions: [
      { number: 1, text: "Rios voadores transportam umidade da Amazônia para o Sul.", isCorrect: true, explanation: "CORRETA. Essencial para chuvas no centro-sul." },
      { number: 2, text: "Savanização ocorre se o desmatamento prolongar demais a estação seca.", isCorrect: true, explanation: "CORRETA. Feedback positivo de degradação." },
      { number: 4, text: "Aquecimento global potencializa El Niño e evaporação, agravando chuvas.", isCorrect: true, explanation: "CORRETA. Mais calor = mais energia e vapor na atmosfera." },
      { number: 8, text: "Remoção da mata ciliar agrava enchentes por diminuir infiltração.", isCorrect: true, explanation: "CORRETA. Solo impermeável aumenta escoamento superficial." },
      { number: 16, text: "Metano tem menor potencial de aquecimento que CO2.", isCorrect: false, explanation: "INCORRETA. Metano (CH4) tem potencial muito maior (20-80x) que CO2, embora dure menos tempo." }
    ],
    review: "Rios Voadores: Serviços ecossistêmicos. Savanização: Perda irreversível da floresta. Mata Ciliar: Proteção contra enchentes e erosão."
  },
  {
    id: 8,
    category: "Imunologia",
    title: "Vacinas e Imunidade",
    stem: "Sobre vacinas de mRNA e conceitos de imunidade:",
    correctSum: 60,
    propositions: [
      { number: 1, text: "Vacinas e soros são ambos imunização ativa.", isCorrect: false, explanation: "INCORRETA. Soros são passivos (anticorpos prontos)." },
      { number: 2, text: "Vacina de mRNA introduz o antígeno pronto.", isCorrect: false, explanation: "INCORRETA. Introduz a receita (mRNA) para a célula fazer o antígeno." },
      { number: 4, text: "mRNA fornece a 'receita' para ribossomos fabricarem proteína viral.", isCorrect: true, explanation: "CORRETA. Mecanismo da Pfizer/Moderna." },
      { number: 8, text: "Vacina de vírus atenuado usa patógeno enfraquecido.", isCorrect: true, explanation: "CORRETA. Réplica levemente para gerar imunidade forte." },
      { number: 16, text: "mRNA é seguro, degradado no citoplasma e não altera DNA.", isCorrect: true, explanation: "CORRETA. Não entra no núcleo." },
      { number: 32, text: "Imunidade passiva natural: anticorpos via placenta/leite.", isCorrect: true, explanation: "CORRETA. Proteção materna." }
    ],
    review: "Ativa: Corpo produz anticorpos (Vacina/Doença). Passiva: Recebe pronto (Soro/Leite). mRNA: Tradução no citoplasma, sem risco genético."
  },
  {
    id: 9,
    category: "Fisiologia Humana",
    title: "Sistema Endócrino (Glicemia)",
    stem: "Sobre a regulação hormonal da glicemia, diabetes e obesidade:",
    correctSum: 27,
    propositions: [
      { number: 1, text: "Insulina é hipoglicemiante, estimula captação de glicose.", isCorrect: true, explanation: "CORRETA. Produzida pelas células beta." },
      { number: 2, text: "Glucagon é hiperglicemiante, quebra glicogênio.", isCorrect: true, explanation: "CORRETA. Age no jejum." },
      { number: 4, text: "Diabetes tipo 1 resulta em superprodução de insulina.", isCorrect: false, explanation: "INCORRETA. Resulta na falta de produção (destruição das células beta)." },
      { number: 8, text: "Diabetes tipo 2 é caracterizado por resistência à insulina.", isCorrect: true, explanation: "CORRETA. Ligado à obesidade." },
      { number: 16, text: "Tecido adiposo atua como órgão endócrino liberando substâncias pró-inflamatórias.", isCorrect: true, explanation: "CORRETA. Adipocinas influenciam resistência insulínica." }
    ],
    review: "Insulina: Baixa glicose (Beta). Glucagon: Aumenta glicose (Alfa). Tipo 1: Autoimune/Falta insulina. Tipo 2: Resistência."
  },
  {
    id: 10,
    category: "Genética Molecular",
    title: "Dogma Central",
    stem: "Sobre transcrição e tradução:",
    correctSum: 27,
    propositions: [
      { number: 1, text: "Em eucariotos, transcrição no núcleo, tradução no citoplasma.", isCorrect: true, explanation: "CORRETA. Compartimentalização celular." },
      { number: 2, text: "Splicing remove íntrons e une éxons.", isCorrect: true, explanation: "CORRETA. Processamento do RNAm." },
      { number: 4, text: "Código genético é degenerado pois um códon codifica vários aminoácidos.", isCorrect: false, explanation: "INCORRETA. Degenerado significa que VÁRIOS códons codificam UM aminoácido (sinônimos)." },
      { number: 8, text: "Bactérias não fazem splicing; transcrição/tradução simultâneas.", isCorrect: true, explanation: "CORRETA. Sem núcleo, processos acoplados." },
      { number: 16, text: "Mutação silenciosa troca base mas mantém aminoácido.", isCorrect: true, explanation: "CORRETA. Graças ao código degenerado." }
    ],
    review: "Dogma: DNA -> RNA -> Proteína. Splicing: Só eucariotos. Código Degenerado: Redundância protege contra mutações."
  },
  {
    id: 11,
    category: "Fisiologia Humana",
    title: "Sistema Nervoso",
    stem: "Sobre estrutura e função do sistema nervoso (Alzheimer):",
    correctSum: 31,
    propositions: [
      { number: 1, text: "Neurônio: Dendritos recebem, axônio transmite.", isCorrect: true, explanation: "CORRETA. Sentido do impulso." },
      { number: 2, text: "Impulso nervoso depende de bomba Na/K e canais iônicos.", isCorrect: true, explanation: "CORRETA. Natureza eletroquímica." },
      { number: 4, text: "Bainha de mielina permite condução saltatória (mais rápida).", isCorrect: true, explanation: "CORRETA. Isolante elétrico." },
      { number: 8, text: "Sinapse química envolve neurotransmissores.", isCorrect: true, explanation: "CORRETA. Comunicação entre neurônios." },
      { number: 16, text: "Alzheimer afeta memória e hipocampo.", isCorrect: true, explanation: "CORRETA. Neurodegeneração." }
    ],
    review: "Impulso Nervoso: Despolarização (Entra Na+). Sinapse: Química (lenta, modulável) ou Elétrica. Mielina acelera."
  },
  {
    id: 12,
    category: "Bioenergética",
    title: "Fotossíntese e Respiração",
    stem: "Sobre bioenergética e ciclo do carbono:",
    correctSum: 63,
    propositions: [
      { number: 1, text: "Fotossíntese consome CO2 e água, libera O2.", isCorrect: true, explanation: "CORRETA. Fase Clara e Escura." },
      { number: 2, text: "Respiração consome glicose e O2, libera CO2.", isCorrect: true, explanation: "CORRETA. Processo inverso energético." },
      { number: 4, text: "Fase clara (tilacoides) faz fotólise da água liberando O2.", isCorrect: true, explanation: "CORRETA. Origem do oxigênio." },
      { number: 8, text: "Fase escura (estroma) usa ATP/NADPH para fixar CO2.", isCorrect: true, explanation: "CORRETA. Ciclo de Calvin." },
      { number: 16, text: "Plantas respiram dia e noite, fotossintetizam só com luz.", isCorrect: true, explanation: "CORRETA. Respiração é vital e contínua." },
      { number: 32, text: "Floresta em crescimento é sumidouro de carbono.", isCorrect: true, explanation: "CORRETA. Fixa mais que libera." }
    ],
    review: "Fotossíntese: Cloroplasto (Tilacoide/Estroma). Respiração: Mitocôndria. Equilíbrio O2/CO2 define o papel ecológico."
  },
  {
    id: 13,
    category: "Biotecnologia",
    title: "DNA Recombinante (Insulina)",
    stem: "Sobre a técnica de DNA recombinante:",
    correctSum: 31,
    propositions: [
      { number: 1, text: "Bactéria com gene humano é transgênica (OGM).", isCorrect: true, explanation: "CORRETA. Material genético exógeno." },
      { number: 2, text: "Enzimas de restrição cortam DNA em locais específicos.", isCorrect: true, explanation: "CORRETA. Tesouras moleculares." },
      { number: 4, text: "DNA ligase cola o gene no plasmídeo.", isCorrect: true, explanation: "CORRETA. Cola molecular." },
      { number: 8, text: "Transformação bacteriana insere o plasmídeo na bactéria.", isCorrect: true, explanation: "CORRETA. Bactéria passa a produzir a proteína." },
      { number: 16, text: "Sucesso depende do código genético ser universal.", isCorrect: true, explanation: "CORRETA. Bactéria lê gene humano igual." }
    ],
    review: "Ferramentas: Enzima de Restrição (corta), Ligase (cola), Plasmídeo (vetor), Bactéria (fábrica). Código Universal permite isso."
  },
  {
    id: 14,
    category: "Ecologia",
    title: "Poluição e Microplásticos",
    stem: "Sobre microplásticos e bioacumulação:",
    correctSum: 15,
    propositions: [
      { number: 1, text: "Microplásticos primários (fabricados pequenos) vs secundários (degradação).", isCorrect: true, explanation: "CORRETA. Definição exata." },
      { number: 2, text: "Bioacumulação ocorre no indivíduo ao longo da vida.", isCorrect: true, explanation: "CORRETA. Acumula e não sai." },
      { number: 4, text: "Biomagnificação aumenta concentração ao longo da cadeia trófica.", isCorrect: true, explanation: "CORRETA. Topo da cadeia sofre mais." },
      { number: 8, text: "Filtradores (mexilhões) são vulneráveis e bioindicadores.", isCorrect: true, explanation: "CORRETA. Retêm partículas." },
      { number: 16, text: "São poluentes inertes sem risco químico.", isCorrect: false, explanation: "INCORRETA. Adsorvem POPs e liberam toxinas (disruptores endócrinos)." }
    ],
    review: "Bioacumulação (Indivíduo) vs Biomagnificação (Cadeia). Microplásticos carregam toxinas e afetam filtradores."
  },
  {
    id: 15,
    category: "Genética",
    title: "Mendeliana (Heredograma)",
    stem: "Pais normais (I-1, I-2) têm filha afetada (II-2). Doença autossômica recessiva (Anemia Falciforme).",
    correctSum: 63,
    propositions: [
      { number: 1, text: "Pais não afetados com filha afetada indica recessividade.", isCorrect: true, explanation: "CORRETA. Pais são heterozigotos (Aa)." },
      { number: 2, text: "Afetado (II-2) é homozigoto recessivo (aa).", isCorrect: true, explanation: "CORRETA." },
      { number: 4, text: "Pais I-1 e I-2 são heterozigotos (Aa).", isCorrect: true, explanation: "CORRETA. Para terem filho aa sendo normais." },
      { number: 8, text: "Irmão normal (II-3) tem 2/3 de chance de ser Aa.", isCorrect: true, explanation: "CORRETA. Entre os normais (AA, Aa, Aa), 2 são Aa." },
      { number: 16, text: "Parceiro II-4 com filho afetado deve ser heterozigoto (Aa).", isCorrect: true, explanation: "CORRETA. Se tivesse AA, não teria filho aa." },
      { number: 32, text: "II-1 (normal, filho de Aa x Aa) casando com afetada (aa), chance de filho afetado é 1/3.", isCorrect: true, explanation: "CORRETA. Prob(II-1 ser Aa) = 2/3. Prob(filho aa se pai Aa) = 1/2. Total: 2/3 * 1/2 = 1/3." }
    ],
    review: "Heredograma: Pais iguais com filho diferente = Pais Heterozigotos, filho recessivo. Probabilidade de heterozigoto dado fenótipo normal = 2/3."
  },
  {
    id: 16,
    category: "Botânica",
    title: "Grupos Vegetais",
    stem: "Sobre a evolução das plantas:",
    correctSum: 31,
    propositions: [
      { number: 1, text: "Briófitas são avasculares, gametófito dominante, dependem de água.", isCorrect: true, explanation: "CORRETA. Musgos." },
      { number: 2, text: "Pteridófitas: primeiros vasos, esporófito dominante, ainda dependem de água.", isCorrect: true, explanation: "CORRETA. Samambaias." },
      { number: 4, text: "Gimnospermas: conquista do seco (pólen/semente).", isCorrect: true, explanation: "CORRETA. Pinheiros." },
      { number: 8, text: "Gimnospermas têm semente nua e estróbilo (pinha).", isCorrect: true, explanation: "CORRETA. Sem fruto." },
      { number: 16, text: "Angiospermas: flores e frutos (maior diversidade).", isCorrect: true, explanation: "CORRETA. Coevolução com polinizadores." }
    ],
    review: "Briófitas (Gametófito dom). Pteridófitas (Vasos). Gimnospermas (Semente/Pólen). Angiospermas (Flor/Fruto). Água necessária apenas para as duas primeiras."
  },
  {
    id: 17,
    category: "Citologia",
    title: "Organelas (Plasmócito)",
    stem: "Plasmócito produz e secreta anticorpos (proteínas). Quais organelas estão desenvolvidas?",
    correctSum: 15,
    propositions: [
      { number: 1, text: "Ribossomos: síntese proteica.", isCorrect: true, explanation: "CORRETA. Fábrica de proteínas." },
      { number: 2, text: "RER: síntese de proteínas para exportação.", isCorrect: true, explanation: "CORRETA. Via secretora." },
      { number: 4, text: "Golgi: empacotamento e secreção.", isCorrect: true, explanation: "CORRETA. Correio da célula." },
      { number: 8, text: "Mitocôndrias: energia (ATP) para o processo.", isCorrect: true, explanation: "CORRETA. Processo anabólico gasta energia." },
      { number: 16, text: "Peroxissomos: degradação de lipídios.", isCorrect: false, explanation: "INCORRETA. Não é o foco da secreção proteica." }
    ],
    review: "Via Secretora: Ribossomo -> RER -> Golgi -> Vesícula -> Membrana. Célula secretora precisa de muito RER e Golgi."
  },
  {
    id: 18,
    category: "Fisiologia Comparada",
    title: "Osmorregulação em Peixes",
    stem: "Sobre peixes de água doce e salgada:",
    correctSum: 31,
    propositions: [
      { number: 1, text: "Peixe de água doce é hipertônico (ganha água).", isCorrect: true, explanation: "CORRETA. Risco de explodir." },
      { number: 2, text: "Água doce: não bebe, urina muito diluída, absorve sais.", isCorrect: true, explanation: "CORRETA. Elimina excesso de água." },
      { number: 4, text: "Peixe de água salgada é hipotônico (perde água).", isCorrect: true, explanation: "CORRETA. Risco de desidratar." },
      { number: 8, text: "Água salgada: bebe água, urina concentrada, excreta sais.", isCorrect: true, explanation: "CORRETA. Retém água." },
      { number: 16, text: "Tubarões retêm ureia (isotônicos).", isCorrect: true, explanation: "CORRETA. Estratégia osmoconformadora." }
    ],
    review: "Doce: Ganha água -> Urina muito. Salgada: Perde água -> Bebe e Urina pouco. Tubarão: Uremia fisiológica."
  },
  {
    id: 19,
    category: "Zoologia",
    title: "Filogenia Animal",
    stem: "Sobre filos animais e embriologia:",
    correctSum: 63,
    propositions: [
      { number: 1, text: "Poríferos: parazoários, digestão intracelular.", isCorrect: true, explanation: "CORRETA. Sem tecidos." },
      { number: 2, text: "Cnidários: diblásticos, simetria radial.", isCorrect: true, explanation: "CORRETA. Águas-vivas." },
      { number: 4, text: "Platelmintos: triblásticos, acelomados.", isCorrect: true, explanation: "CORRETA. Planárias." },
      { number: 8, text: "Nematelmintos: pseudocelomados.", isCorrect: true, explanation: "CORRETA. Lombrigas." },
      { number: 16, text: "Artrópodes/Anelídeos/Moluscos: celomados, protostômios.", isCorrect: true, explanation: "CORRETA. Blastóporo gera boca." },
      { number: 32, text: "Equinodermos/Cordados: deuterostômios (ânus primeiro).", isCorrect: true, explanation: "CORRETA. Evolutivamente próximos." }
    ],
    review: "Evolução: Tecidos -> Bilateria -> Celoma -> Deuterostomia. Deuterostômios: Equinodermos e Cordados."
  },
  {
    id: 20,
    category: "Virologia",
    title: "Conceitos Básicos de Vírus",
    stem: "Sobre características gerais dos vírus:",
    correctSum: 15,
    propositions: [
      { number: 1, text: "Acelulares, sem metabolismo próprio.", isCorrect: true, explanation: "CORRETA. Parasitas obrigatórios." },
      { number: 2, text: "Parasitas intracelulares obrigatórios.", isCorrect: true, explanation: "CORRETA. Usam a célula para replicar." },
      { number: 4, text: "Genoma de DNA ou RNA, nunca os dois funcionais juntos (exceto mimivírus complexos, mas regra geral vale).", isCorrect: true, explanation: "CORRETA no contexto médio." },
      { number: 8, text: "HIV é retrovírus (Transcriptase Reversa RNA -> DNA).", isCorrect: true, explanation: "CORRETA. Integra ao genoma." },
      { number: 16, text: "Bacteriófagos infectam fungos.", isCorrect: false, explanation: "INCORRETA. Infectam bactérias." }
    ],
    review: "Vírus: Pacote genético (DNA/RNA) + Proteína. Sem metabolismo. Retrovírus faz DNA a partir de RNA."
  },
  {
    id: 21,
    category: "Citologia/Genética",
    title: "Terapia Mitocondrial (3 pais)",
    stem: "Sobre DNA mitocondrial e a técnica:",
    correctSum: 37,
    propositions: [
      { number: 1, text: "Bebê tem DNA nuclear dos pais e mitocondrial da doadora.", isCorrect: true, explanation: "CORRETA. Técnica '3 pais'." },
      { number: 2, text: "Herança mitocondrial é paterna.", isCorrect: false, explanation: "INCORRETA. É materna." },
      { number: 4, text: "Herança materna; zigoto recebe citoplasma do óvulo.", isCorrect: true, explanation: "CORRETA. Espermatozoide contribui só núcleo." },
      { number: 8, text: "Núcleo da mãe (doente) vai para óvulo da doadora (saudável sem núcleo).", isCorrect: false, explanation: "INCORRETA. O enunciado diz 'núcleo do óvulo da doadora é fecundado'. Na verdade transfere-se o pronúcleo." },
      { number: 16, text: "Mitocôndrias fazem fotossíntese.", isCorrect: false, explanation: "INCORRETA. Fazem respiração." },
      { number: 32, text: "Doenças mitocondriais afetam tecidos de alta energia (cérebro/músculo).", isCorrect: true, explanation: "CORRETA. Falta ATP." }
    ],
    review: "Herança Materna. Mitocôndria = Usina de Energia. Terapia troca as 'baterias' defeituosas mantendo o 'software' (núcleo) original."
  },
  {
    id: 22,
    category: "Ecologia",
    title: "Atualidades COP30 e Bioeconomia",
    stem: "Sobre COP30, Amazônia e clima:",
    correctSum: 21,
    propositions: [
      { number: 1, text: "Bioeconomia: floresta em pé e conhecimentos tradicionais.", isCorrect: true, explanation: "CORRETA. Valorizar a biodiversidade." },
      { number: 2, text: "PSA e REDD+ são incompatíveis com bioeconomia.", isCorrect: false, explanation: "INCORRETA. São complementares." },
      { number: 4, text: "Papel da Amazônia é sumidouro de carbono e regulação hídrica ('Pulmão' é mito).", isCorrect: true, explanation: "CORRETA. Floresta clímax consome o que produz de O2." },
      { number: 8, text: "Savanização fortaleceria rios voadores.", isCorrect: false, explanation: "INCORRETA. Enfraqueceria, causando secas no sul." },
      { number: 16, text: "Conhecimento tradicional converge com ciência climática.", isCorrect: true, explanation: "CORRETA. Observação empírica válida." }
    ],
    review: "Amazônia não é pulmão (é ar condicionado/regulator). Bioeconomia: lucro com conservação."
  },
  {
    id: 23,
    category: "Citologia",
    title: "Nova Organela (Glicolipissomo)",
    stem: "Análise de texto sobre organela fictícia/recente:",
    correctSum: 21,
    propositions: [
      { number: 1, text: "Função específica (enzima GLA, substrato GSL-X).", isCorrect: true, explanation: "CORRETA. Princípio da especificidade." },
      { number: 2, text: "Rara em células de alta atividade lipídica.", isCorrect: false, explanation: "INCORRETA. Deveria ser abundante." },
      { number: 4, text: "Classificada como lisossomo especializado (degradação).", isCorrect: true, explanation: "CORRETA. Plausível pela função digestiva." },
      { number: 8, text: "Origem direta do RER.", isCorrect: false, explanation: "INCORRETA. Lisossomos vêm do Golgi." },
      { number: 16, text: "Interação com REL (síntese lipídica) por contato.", isCorrect: true, explanation: "CORRETA. Organelas interagem." },
      { number: 32, text: "Disfunção similar à catalase (peroxissomo).", isCorrect: false, explanation: "INCORRETA. Seria similar a doenças lisossômicas." }
    ],
    review: "Interpretação de texto científico. Relacionar organela nova com conceitos clássicos (Golgi, Lisossomo, REL)."
  },
  {
    id: 24,
    category: "Citologia",
    title: "Hemifusoma (Tráfego Vesicular)",
    stem: "Sobre nova estrutura de tráfego vesicular:",
    correctSum: 13,
    propositions: [
      { number: 1, text: "Centro de triagem/reciclagem 'fusão parcial'.", isCorrect: true, explanation: "CORRETA. Interpretação do texto." },
      { number: 2, text: "Descoberta via microscopia confocal.", isCorrect: false, explanation: "INCORRETA. Texto diz Crio-ET (eletrônica)." },
      { number: 4, text: "Via independente de ESCRT (novo paradigma).", isCorrect: true, explanation: "CORRETA. Inovação do achado." },
      { number: 8, text: "Ligado à Síndrome HPS (biogênese de organelas lisossômicas).", isCorrect: true, explanation: "CORRETA. Correlação clínica." },
      { number: 16, text: "Media fusão completa para degradação.", isCorrect: false, explanation: "INCORRETA. Texto diz fusão PARCIAL e reciclagem, não degradação total." }
    ],
    review: "Microscopia Eletrônica vê detalhes que a Óptica (Confocal) não vê. Tráfego vesicular é complexo e vital."
  },
  {
    id: 25,
    category: "Genética de Populações",
    title: "Sistema ABO e Hardy-Weinberg",
    stem: "Frequências: O (ii) = 36% (0,36). Freq(A) = Freq(B).",
    correctSum: 63,
    propositions: [
      { number: 1, text: "Polialelia (3 alelos) e Codominância (IA e IB).", isCorrect: true, explanation: "CORRETA. Definição do sistema." },
      { number: 2, text: "Importante para transfusões.", isCorrect: true, explanation: "CORRETA. Evitar aglutinação." },
      { number: 4, text: "Fatores evolutivos alteram frequências gênicas.", isCorrect: true, explanation: "CORRETA. Seleção, deriva, etc." },
      { number: 8, text: "Freq AB é 8%. Cálculo: r²=0.36 -> r=0.6. p+q+r=1 -> p+q=0.4. Se p=q, então p=0.2. AB(2pq) = 2*0.2*0.2 = 0.08.", isCorrect: true, explanation: "CORRETA." },
      { number: 16, text: "Freq A + B = 56%. A(p²+2pr) + B(q²+2qr). Ou 100% - O(36%) - AB(8%) = 56%.", isCorrect: true, explanation: "CORRETA." },
      { number: 32, text: "6 genótipos, 4 fenótipos.", isCorrect: true, explanation: "CORRETA." }
    ],
    review: "Hardy-Weinberg: p+q+r=1. r² = freq(O). Polialelia: Mais de 2 alelos para um locus."
  }
];
