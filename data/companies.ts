export interface Company {
  id: string;
  name: string;
  slug: string;
  logoInitials: string;
  logoPath: string;
  slogan?: string;
  description: string;
  diferenciais: string[];
  setorTags: string[];
  siteUrl: string;
  contactEmail: string;
  whatsapp: string;
}

export const companies: Company[] = [
  {
    id: 'injepol',
    name: 'Injepol',
    slug: 'injepol',
    logoInitials: 'IJ',
    logoPath: '/images/logos/logo-injepol.webp',
    slogan: 'Injepol: a escolha inteligente.',
    description: 'A Injepol é especializada em injeção de poliuretano e peças técnicas para diversos segmentos — hospitalar, lazer, utilidade doméstica, segurança e automotivo. Possui alto nível técnico no processo de injeção e construção de moldes, estrutura com máquinas injetoras de alta capacidade e atua em parceria com outras indústrias no desenvolvimento de novos produtos e na redução de custos de fabricação.',
    diferenciais: [
      'Alto padrão técnico em moldes e injeção',
      'Máquinas de alta capacidade (peças diversas em tamanho/peso)',
      'Segurança do trabalho como prioridade',
      'Parceria no desenvolvimento e redução de custos',
      'Valores: compromisso, confiança, ética e profissionalismo'
    ],
    setorTags: ['Hospitalar', 'Lazer', 'Utilidade Doméstica', 'Segurança', 'Automotivo'],
    siteUrl: 'https://www.injepol.com.br/',
    contactEmail: 'injepol@injepol.com.br',
    whatsapp: '(47) 99251-2651'
  },
  {
    id: 'fenap',
    name: 'Fenap',
    slug: 'fenap',
    logoInitials: 'FN',
    logoPath: '/images/logos/logo-fenap.webp',
    slogan: '',
    description: 'A Fenap Poliuretano e Artefatos de Madeira Ltda atua desde 1971 no segmento de injeção de poliuretano, sendo pioneira no Brasil na injeção de PU Rígido Estrutural. Atende setores como hospitalar, automobilístico, moveleiro, refrigeração, construção civil, informática, pet shop, acessórios para gôndolas e check-outs, acessórios para banheiras de hidromassagem, além de peças técnicas e projetos especiais sob encomenda. Trabalha com sistemas como PU Estrutural Rígido, Integral Skin, Espuma Flexível, Espuma Rígida e Embalagem. Possui setor de marcenaria para produção de acessórios de mobiliário e decoração.',
    diferenciais: [
      'Tradição desde 1971 (pioneirismo em PU rígido estrutural)',
      'Excelência em qualidade e conhecimento técnico',
      'Apoio técnico para resolver desafios e detalhes construtivos',
      'Setor de marcenaria para soluções complementares'
    ],
    setorTags: ['Hospitalar', 'Automobilístico', 'Moveleiro', 'Refrigeração', 'Construção Civil', 'Pet Shop'],
    siteUrl: 'https://fenap.com.br/',
    contactEmail: 'fenap@fenap.com.br',
    whatsapp: '(47) 99251-2651'
  },
  {
    id: 'moramo',
    name: 'Moramo Brasil',
    slug: 'moramo',
    logoInitials: 'MB',
    logoPath: '/images/logos/logo-moramo.webp',
    slogan: '',
    description: 'A Moramo Brasil é uma marca voltada a produtos de decoração e casa, com foco em design, qualidade e peças com valor agregado. Integra o Grupo Injepol, somando presença em um mercado voltado ao consumidor final, mantendo o compromisso com padrão, acabamento e confiabilidade.',
    diferenciais: [
      'Produtos para casa e decoração',
      'Design e valor agregado',
      'Padrão de qualidade e acabamento',
      'Sinergia industrial e foco em confiabilidade'
    ],
    setorTags: ['Decoração', 'Casa', 'Design'],
    siteUrl: 'https://www.moramo.com.br/',
    contactEmail: 'loja@moramo.com.br',
    whatsapp: '(47) 99251-2651'
  }
];

export interface Pillar {
  id: string;
  title: string;
  description: string;
}

export const groupPillars: Pillar[] = [
  {
    id: 'knowhow',
    title: 'Know-how e tradição',
    description: 'Décadas de experiência em processos industriais e desenvolvimento de soluções sob medida.'
  },
  {
    id: 'excelencia',
    title: 'Excelência técnica',
    description: 'Engenharia de processos, construção de moldes e suporte técnico para parceiros.'
  },
  {
    id: 'escala',
    title: 'Escala e flexibilidade',
    description: 'Estruturas produtivas capazes de atender peças e demandas variadas.'
  },
  {
    id: 'confianca',
    title: 'Confiança e parceria',
    description: 'Relações duradouras, ética e comprometimento com resultados.'
  },
  {
    id: 'seguranca',
    title: 'Segurança e conformidade',
    description: 'Treinamentos, EPIs e cultura de segurança na operação.'
  }
];
