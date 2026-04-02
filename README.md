<div align="center">

# 🔴 POKEDEX

### ⚡ Enciclopédia Nacional de Pokémon

<br>

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<br>

*Uma Pokédex moderna com design cyberpunk, animações fluidas e dados em tempo real da PokéAPI.*

<br>

</div>

---

## 📸 Screenshots

> 🖼️ *Adicione aqui screenshots da aplicação rodando.*

| Tela Principal | Card Expandido | Busca |
|:-:|:-:|:-:|
| ![Home](https://via.placeholder.com/300x200/07080c/00e5ff?text=Home) | ![Card](https://via.placeholder.com/300x200/07080c/00e5ff?text=Card+Stats) | ![Search](https://via.placeholder.com/300x200/07080c/00e5ff?text=Search) |

---

## ✨ Funcionalidades

- 🔍 **Busca em tempo real** — Pesquise por nome ou número do Pokémon
- 📦 **Carregamento por lotes** — Carrega 20 Pokémon por vez com botão "Load More"
- 🎨 **Cores por tipo** — Cada tipo de Pokémon tem sua paleta de cores exclusiva (18 tipos suportados)
- 📊 **Estatísticas expandíveis** — Clique no card para ver HP, ATK, DEF, SP.ATK, SP.DEF e SPD com barras animadas
- 🖼️ **Artwork oficial** — Imagens de alta qualidade direto do repositório oficial
- 🌙 **Design cyberpunk** — Tema escuro com efeitos de scanline, holografia e glow neon
- 📱 **Responsivo** — Grid adaptável que funciona em qualquer tela
- ⚡ **Performance** — React Compiler habilitado para otimização automática

---

## 🛠️ Tecnologias

<table>
  <tr>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="40"/><br><b>Next.js 16</b></td>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40"/><br><b>React 19</b></td>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40"/><br><b>TypeScript</b></td>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="40"/><br><b>Tailwind CSS 4</b></td>
  </tr>
</table>

- 🌐 **PokéAPI v2** — API REST pública com dados de todos os Pokémon
- 🔤 **Google Fonts** — Chakra Petch + Outfit
- ⚙️ **ESLint** — Linting com regras do Next.js
- 🧪 **React Compiler** — Compilação automática de componentes

---

## 🚀 Como Usar

### 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### 📥 Clonando o repositório

```bash
git clone https://github.com/dev-erickydias/pokedex.git
```

### 📦 Instalando dependências

```bash
cd pokedex
npm install
```

### ▶️ Rodando o projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador. 🎉

### 🏗️ Build de produção

```bash
npm run build
npm start
```

---

## 📁 Estrutura do Projeto

```
pokedex/
├── 📂 public/              # Arquivos estáticos (SVGs)
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 🎨 globals.css  # Tema, cores e animações
│   │   ├── 📐 layout.tsx   # Layout raiz (fontes, metadata)
│   │   └── 🏠 page.tsx     # Página principal
│   ├── 📂 components/
│   │   ├── 🔝 Header.tsx   # Cabeçalho com logo e busca
│   │   └── 🃏 PokemonCard.tsx  # Card interativo de Pokémon
│   └── 📂 lib/
│       └── 📡 pokemon.ts   # API, tipos e utilitários
├── ⚙️ next.config.ts       # Config do Next.js
├── 📦 package.json          # Dependências e scripts
└── 🔧 tsconfig.json         # Config do TypeScript
```

---

## 🎮 Como Funciona

1. **Ao abrir a página**, são carregados os primeiros 20 Pokémon da PokéAPI
2. **Use a barra de busca** para filtrar por nome (ex: "pikachu") ou número (ex: "025")
3. **Clique em um card** para expandir e ver as estatísticas detalhadas
4. **Clique em "Load More"** para carregar mais 20 Pokémon

---

## 👨‍💻 Autor

<div align="center">

**Ericky Dias**

[![GitHub](https://img.shields.io/badge/GitHub-dev--erickydias-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dev-erickydias)

</div>

---

<div align="center">

Feito com 💙 e muita ⚡ por **Ericky Dias**

</div>
