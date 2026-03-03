# Grupo Injepol - Website Institucional

Website institucional moderno e elegante para o **Grupo Injepol**, apresentando as empresas Injepol, Fenap e Moramo Brasil.

---

## 🎯 Início Rápido

**Primeira vez usando o projeto?**

👉 **Leia primeiro: [`INICIO-RAPIDO.md`](./INICIO-RAPIDO.md)** (3 minutos)

**Toda a documentação:**

📚 **[`INDICE.md`](./INDICE.md)** - Índice completo de toda documentação

---

## 🚀 Tecnologias

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 19**

## 📋 Pré-requisitos

- Node.js 18+ 
- npm, yarn ou pnpm

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm start
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## 📚 Documentação Completa

| Guia | Descrição | Tempo |
|------|-----------|-------|
| 📑 **[INDICE.md](./INDICE.md)** | Índice completo - navegue por toda documentação | 5 min |
| ⚡ **[INICIO-RAPIDO.md](./INICIO-RAPIDO.md)** | Setup rápido e primeiras edições | 3 min |
| 🎨 **[CUSTOMIZACAO.md](./CUSTOMIZACAO.md)** | Trocar cores, logos e imagens | 8 min |
| 🎯 **[DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)** | Referência de design e paleta | 6 min |
| 🚀 **[DEPLOY.md](./DEPLOY.md)** | Deploy completo (Vercel, VPS, Docker) | 12 min |
| 💡 **[SNIPPETS.md](./SNIPPETS.md)** | Códigos úteis e receitas prontas | 15 min |
| ✅ **[CHECKLIST.md](./CHECKLIST.md)** | Lista de verificação antes de publicar | 10 min |
| 📊 **[RESUMO-EXECUTIVO.md](./RESUMO-EXECUTIVO.md)** | Overview do projeto | 8 min |
| 🗂️ **[ESTRUTURA.md](./ESTRUTURA.md)** | Estrutura completa do projeto | 7 min |

---

## ⚠️ IMPORTANTE - Antes de Publicar

### Dados Placeholder

Os seguintes dados são **placeholders** e **DEVEM** ser atualizados antes de publicar:

🔴 **CRÍTICO:**
- [ ] E-mails de contato em `data/companies.ts`
- [ ] Números de WhatsApp em `data/companies.ts`

🟡 **IMPORTANTE:**
- [ ] Logos das empresas (atualmente são iniciais)
- [ ] Favicon (trocar `app/icon.svg`)

🟢 **RECOMENDADO:**
- [ ] Imagens hero/banner
- [ ] Imagens Open Graph (redes sociais)
- [ ] Configurar envio real do formulário

📋 **Use o [CHECKLIST.md](./CHECKLIST.md) completo antes de publicar!**

---

```
grupo-injepol/
├── app/                          # App Router do Next.js
│   ├── empresas/
│   │   ├── [slug]/
│   │   │   └── page.tsx         # Página dinâmica de cada empresa
│   │   └── page.tsx             # Lista de empresas
│   ├── contato/
│   │   └── page.tsx             # Página de contato
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Home page
│   ├── not-found.tsx            # Página 404
│   └── globals.css              # Estilos globais
├── components/                   # Componentes reutilizáveis
│   ├── Header.tsx               # Cabeçalho com navegação
│   ├── Footer.tsx               # Rodapé
│   ├── Hero.tsx                 # Banner hero
│   ├── Section.tsx              # Container de seção
│   ├── CompanyCard.tsx          # Card de empresa
│   ├── PillarCard.tsx           # Card de pilar/diferencial
│   ├── ContactForm.tsx          # Formulário de contato
│   ├── ContactCard.tsx          # Card de contato por empresa
│   ├── CTA.tsx                  # Call to action
│   ├── LogoPlaceholder.tsx      # Placeholder de logo
│   └── ImagePlaceholder.tsx     # Placeholder de imagem
├── data/
│   └── companies.ts             # Dados das empresas (EDITAR AQUI)
├── public/                       # Arquivos estáticos
├── tailwind.config.ts           # Configuração Tailwind
├── tsconfig.json                # Configuração TypeScript
└── package.json
```

## ✏️ Como Editar Conteúdo

### 1. Dados das Empresas

Edite o arquivo **`data/companies.ts`** para atualizar:
- Nomes e descrições das empresas
- Diferenciais e setores de atuação
- **Dados de contato (e-mail e WhatsApp)** ⚠️
- URLs dos sites oficiais
- Iniciais para logos placeholders

```typescript
// Exemplo de como editar uma empresa
{
  id: 'injepol',
  name: 'Injepol',
  contactEmail: 'contato@injepol.com.br',  // ← ATUALIZAR
  whatsapp: '(47) 99999-9999',             // ← ATUALIZAR
  // ... outros campos
}
```

### 2. Logos das Empresas

Para substituir os placeholders de logo por logos reais:

1. Adicione as imagens na pasta `public/logos/`
2. Edite o componente `LogoPlaceholder.tsx` ou use `<Image>` do Next.js diretamente nos componentes

```tsx
// Exemplo usando next/image
import Image from 'next/image';

<Image 
  src="/logos/injepol.png" 
  alt="Injepol" 
  width={96} 
  height={96}
/>
```

### 3. Textos Institucionais

Edite diretamente nas páginas:
- **Home**: `app/page.tsx`
- **Empresas**: `app/empresas/page.tsx`
- **Contato**: `app/contato/page.tsx`

### 4. Cores e Estilos

O tema usa principalmente tons de cinza (slate) para um visual industrial moderno. 

Para personalizar cores, edite:
- **Tailwind**: `tailwind.config.ts`
- **CSS Global**: `app/globals.css`

Paleta atual:
- Primário: `slate-900` (cinza escuro quase preto)
- Secundário: `slate-700` (cinza médio)
- Background: `slate-50` / `white`
- Bordas: `slate-200`

### 5. Metadata e SEO

Cada página tem metadata configurada. Edite em:
- Layout principal: `app/layout.tsx`
- Páginas individuais: propriedade `metadata` em cada `page.tsx`

## 📱 Responsividade

O site é totalmente responsivo:
- **Mobile**: 1 coluna
- **Tablet** (md): 2 colunas
- **Desktop** (lg): 3 colunas

Classes Tailwind usadas:
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Padding/margin: `px-4 sm:px-6 lg:px-8`
- Tipografia: `text-3xl md:text-4xl lg:text-5xl`

## ♿ Acessibilidade

O site implementa boas práticas de acessibilidade:
- Headings semânticos (`<h1>`, `<h2>`, etc.)
- Labels em todos os inputs
- `aria-label` nos elementos interativos
- Foco visível (`focus:ring-2`)
- Textos alternativos (`alt`) em imagens

## 🎨 Componentes Principais

### Hero
Banner principal com gradiente e overlay.

```tsx
<Hero
  title="Título Principal"
  subtitle="Subtítulo opcional"
  description="Descrição opcional"
/>
```

### CompanyCard
Card para apresentar empresas.

```tsx
<CompanyCard
  name="Nome da Empresa"
  description="Descrição breve"
  tags={['Tag1', 'Tag2']}
  logoInitials="AB"
  href="/empresas/slug"
/>
```

### ContactForm
Formulário de contato com validação básica (atualmente mock).

Para integrar com backend:
1. Edite a função `handleSubmit` em `components/ContactForm.tsx`
2. Substitua o `console.log` por chamada API real

## 📧 Formulário de Contato

**Importante**: O formulário atual é um **mock** (simulação). 

Para implementar envio real:
1. Configure um backend ou serviço de e-mail (ex: SendGrid, Resend, NodeMailer)
2. Crie uma API route em `app/api/contact/route.ts`
3. Atualize `ContactForm.tsx` para chamar a API

Exemplo básico:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Enviar e-mail aqui
  return Response.json({ success: true });
}
```

## 🔍 SEO

Metadata configurada para todas as páginas:
- Title dinâmico
- Description
- Keywords
- Open Graph (pronto para adicionar imagens)

Para adicionar imagens OG:
1. Adicione `opengraph-image.png` em cada pasta de rota
2. Ou configure manualmente em `metadata.openGraph.images`

## 🚢 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Outras plataformas
```bash
npm run build
npm start
```

O build gera arquivos estáticos otimizados em `.next/`

## 📝 Checklist Antes de Publicar

- [ ] Atualizar dados de contato reais em `data/companies.ts`
- [ ] Substituir logos placeholders por imagens reais
- [ ] Configurar envio real do formulário de contato
- [ ] Adicionar imagens Open Graph
- [ ] Revisar todos os textos
- [ ] Testar em mobile, tablet e desktop
- [ ] Verificar links externos (sites oficiais)
- [ ] Configurar domínio personalizado
- [ ] Adicionar Google Analytics (opcional)

## 🤝 Suporte

Para dúvidas ou ajustes, consulte:
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação TypeScript](https://www.typescriptlang.org/docs)

---

Desenvolvido com Next.js, TypeScript e Tailwind CSS.
