# 📖 Documentação Técnica — Pokedex

---

## 📌 Nome do Projeto

**Pokedex** — Enciclopédia Nacional de Pokémon

## 📝 Descrição

Uma Pokédex moderna e interativa construída com **Next.js 16**, **React 19** e **Tailwind CSS 4**. A aplicação consome a [PokéAPI](https://pokeapi.co/) para exibir informações detalhadas sobre Pokémons, incluindo imagem oficial, tipos, e estatísticas base. Possui design futurista estilo cyberpunk com efeitos visuais como holografia, scanlines, e animações suaves.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| **Next.js** | 16.2.1 | Framework React para produção com SSR e App Router |
| **React** | 19.2.4 | Biblioteca para construção de interfaces |
| **TypeScript** | ^5 | Superset tipado de JavaScript |
| **Tailwind CSS** | ^4 | Framework CSS utilitário |
| **PostCSS** | — | Processador CSS (plugin do Tailwind) |
| **ESLint** | ^9 | Linter para qualidade de código |
| **React Compiler** | 1.0.0 | Compilador automático de React (Babel plugin) |
| **PokéAPI** | v2 | API REST pública com dados de Pokémon |

### 🔤 Fontes do Google

- **Chakra Petch** — Fonte display (títulos, labels, badges)
- **Outfit** — Fonte body (texto geral, input de busca)

---

## 📁 Estrutura do Projeto

```
pokedex/
├── public/                     # Arquivos estáticos
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── favicon.ico         # Ícone da aba do navegador
│   │   ├── globals.css         # Estilos globais e animações
│   │   ├── layout.tsx          # Layout raiz da aplicação
│   │   └── page.tsx            # Página principal (Home)
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Header.tsx          # Cabeçalho com logo e busca
│   │   └── PokemonCard.tsx     # Card individual de Pokémon
│   └── lib/                    # Utilitários e lógica de dados
│       └── pokemon.ts          # Tipos, fetch da API, cores e helpers
├── .gitignore                  # Arquivos ignorados pelo Git
├── AGENTS.md                   # Regras para agentes de IA (Next.js)
├── eslint.config.mjs           # Configuração do ESLint
├── next.config.ts              # Configuração do Next.js
├── package.json                # Dependências e scripts
├── package-lock.json           # Lock de dependências
├── postcss.config.mjs          # Configuração do PostCSS
└── tsconfig.json               # Configuração do TypeScript
```

---

## 🔍 Explicação Detalhada dos Arquivos

### 📄 `src/app/layout.tsx` — Layout Raiz

O layout raiz define a estrutura HTML base de toda a aplicação:

- **Fontes**: Carrega `Chakra Petch` (display) e `Outfit` (body) via `next/font/google`, definindo variáveis CSS `--font-display` e `--font-body`.
- **Metadata**: Define o título como "Pokedex" e a descrição como "National Pokemon Encyclopedia".
- **Idioma**: `lang="pt-BR"` para português brasileiro.
- **Tema visual**: Fundo escuro (`#07080c`), texto claro (`#e8eaed`), com antialiasing.
- **Efeito Scanlines**: Uma `div` fixa com overlay de linhas horizontais semitransparentes que cobre toda a tela, criando um efeito de monitor CRT.

### 📄 `src/app/page.tsx` — Página Principal (Home)

Componente client-side que gerencia toda a lógica da aplicação:

- **Estado**:
  - `pokemon`: Array com todos os Pokémon carregados.
  - `offset`: Controla a paginação (carrega de 20 em 20).
  - `loading`: Estado de carregamento.
  - `query`: Texto da busca.
- **`loadMore()`**: Busca o próximo lote de 20 Pokémon via `fetchBatch()`.
- **`useEffect`**: Carrega o primeiro lote ao montar o componente.
- **`filtered`** (useMemo): Filtra Pokémon por nome ou número (com padding de zeros).
- **Renderização**:
  - Componente `Header` com busca.
  - Grid responsivo de cards (`auto-fill, minmax(240px, 1fr)`).
  - Mensagem "No Pokemon found" quando a busca não retorna resultados.
  - Botão "Load More" com spinner animado durante carregamento.

### 📄 `src/app/globals.css` — Estilos Globais

Define o tema de cores e animações customizadas via Tailwind CSS v4:

- **Tema (`@theme inline`)**:
  - Cores: `deep`, `surface`, `card`, `card-hover`, `accent` (ciano), `red`, `dim`, `mid`, `border`.
  - Fontes: Referências às variáveis CSS de fontes.
- **Scrollbar customizada**: Fina (6px), com fundo escuro e thumb semitransparente.
- **Animações**:
  - `fillBar`: Anima barras de estatísticas de 0% até o valor final.
  - `cardReveal`: Entrada dos cards com fade + translate + scale.
  - `blink`: Pulsação do indicador "ONLINE" no header.
  - `spin`: Rotação do spinner de loading.

### 📄 `src/components/Header.tsx` — Componente de Cabeçalho

Cabeçalho sticky com fundo blur que contém:

- **Logo**: Círculo vermelho com glow (simula o botão da Pokédex original) + texto "POKEDEX" com tracking largo.
- **Indicador ONLINE**: Bolinha ciano pulsante com texto "ONLINE".
- **Subtítulo**: "National Pokemon Encyclopedia — Kanto Research Lab".
- **Campo de Busca**: Input estilizado com ícone de lupa SVG inline, placeholder, e efeitos de foco com glow ciano.

**Props**:
- `query: string` — Valor atual da busca.
- `onSearch: (q: string) => void` — Callback para atualizar a busca.

### 📄 `src/components/PokemonCard.tsx` — Card de Pokémon

Componente interativo que exibe informações de um Pokémon:

- **Visual**:
  - Fundo escuro com borda sutil.
  - Efeito holográfico no hover (gradiente diagonal com ciano e vermelho).
  - Linha de acento no topo que aparece no hover.
  - Animação de entrada com delay baseado no `index`.
- **Conteúdo**:
  - Número do Pokémon formatado com 3 dígitos (`#001`, `#025`, etc.).
  - Imagem oficial (artwork) do GitHub com glow colorido baseado no tipo.
  - Nome capitalizado.
  - Badges de tipo com cores específicas para cada tipo.
- **Expandível**: Ao clicar, expande/recolhe a seção de estatísticas com animação.
- **Estatísticas**: 6 stats (HP, ATK, DEF, SP.ATK, SP.DEF, SPD) com barras animadas e cores baseadas no valor:
  - Vermelho: < 50
  - Laranja: 50–79
  - Amarelo: 80–109
  - Verde: ≥ 110

### 📄 `src/lib/pokemon.ts` — Utilitários e Dados

Arquivo central de tipos, funções e constantes:

- **Interfaces TypeScript**:
  - `PokemonStat`: Estatística base com nome.
  - `PokemonType`: Tipo do Pokémon.
  - `Pokemon`: Interface completa com id, nome, sprites, tipos, stats, altura e peso.
- **Funções de Fetch**:
  - `fetchPokemon(id)`: Busca um Pokémon individual da PokéAPI.
  - `fetchBatch(offset, limit)`: Busca um lote de Pokémon em paralelo com `Promise.all`.
- **`TYPE_COLORS`**: Mapa de 18 tipos com cores de fundo, texto e glow (normal, fire, water, electric, grass, ice, fighting, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy).
- **`STAT_LABELS`**: Mapeamento de nomes de stats para abreviações (hp → HP, attack → ATK, etc.).
- **`getStatColor(value)`**: Retorna cor da barra de stat baseada no valor numérico.

### 📄 `next.config.ts` — Configuração do Next.js

- **React Compiler**: Habilitado (`reactCompiler: true`) para otimização automática de componentes.
- **Imagens remotas**: Permite carregar imagens de `raw.githubusercontent.com` (onde ficam as artworks oficiais dos Pokémon).

### 📄 `tsconfig.json` — Configuração do TypeScript

- Target ES2017, module ESNext, strict mode habilitado.
- Path alias: `@/*` → `./src/*` para imports limpos.
- Inclui suporte ao plugin do Next.js.

### 📄 `eslint.config.mjs` — Configuração do ESLint

- Usa presets `core-web-vitals` e `typescript` do Next.js.
- Ignora pastas `.next`, `out`, `build` e `next-env.d.ts`.

### 📄 `postcss.config.mjs` — Configuração do PostCSS

- Plugin único: `@tailwindcss/postcss` para processar classes do Tailwind CSS v4.

### 📄 `package.json` — Dependências e Scripts

- **Scripts disponíveis**:
  - `npm run dev` — Servidor de desenvolvimento
  - `npm run build` — Build de produção
  - `npm start` — Inicia servidor de produção
  - `npm run lint` — Executa ESLint

---

## 🚀 Como Instalar as Dependências

```bash
# Clone o repositório
git clone https://github.com/dev-erickydias/pokedex.git

# Entre na pasta do projeto
cd pokedex

# Instale as dependências
npm install
```

---

## ▶️ Como Rodar o Projeto Localmente

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### 🏗️ Build de Produção

```bash
# Gerar build de produção
npm run build

# Iniciar servidor de produção
npm start
```

---

## 🔗 Como Clonar o Repositório

```bash
git clone https://github.com/dev-erickydias/pokedex.git
```

---

## 📊 Fluxo de Dados da Aplicação

```
1. Página carrega → useEffect dispara loadMore()
2. loadMore() → fetchBatch(0, 20) → 20 chamadas paralelas à PokéAPI
3. Dados salvos no state `pokemon`
4. Usuário digita no campo de busca → state `query` atualiza
5. useMemo filtra lista por nome ou número
6. Grid renderiza PokemonCards filtrados
7. Clique no card → toggle estado `expanded` → mostra/esconde stats
8. Botão "Load More" → loadMore() com novo offset → mais 20 Pokémon
```

---

> 📅 Documentação gerada em Abril de 2026.
