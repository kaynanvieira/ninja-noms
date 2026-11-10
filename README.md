# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler# 🍣 Ninja Noms

Uma Single Page Application (SPA) moderna e responsiva de culinária japonesa e fast-food, refatorada a partir de um projeto estático em HTML/CSS/JS para uma arquitetura moderna em **React + Vite**.

---

## 🚀 Tecnologias Utilizadas

* **React 18 / Vite** – Build rápido, modularização em componentes e desenvolvimento ágil.
* **React Router Dom (v6)** – Roteamento client-side dinâmico sem recarregamento de página.
* **Context API & Hooks** – Gerenciamento centralizado de estado global (`CartContext`).
* **LocalStorage API** – Persistência dos itens do carrinho entre sessões.
* **CSS Modular** – Arquitetura de estilos fatiada por escopo (`src/styles/`), mobile-first e responsiva.

---

## ✨ Funcionalidades

* **Cardápio Completo e Filtrado**: Produtos organizados por categorias (comida japonesa e fast-food).
* **Guia de Ingredientes & Preparo**: Detalhamento passo a passo com fotos e receitas.
* **Carrinho de Compras Interativo**:
  * Adição de itens de qualquer página do catálogo.
  * Controle de quantidade (`+` / `-`).
  * Remoção individual de produtos.
  * Cálculo dinâmico do total do pedido.
* **Feedback Visual & UX**:
  * Notificações flutuantes (*Toast*) ao adicionar itens.
  * Contador numérico (*Badge*) em tempo real no Header.
  * Rolagem automática para o topo (`ScrollToTop`) a cada troca de rota.
* **Layout Totalmente Responsivo**:
  * Menu lateral deslizante (*Drawer*) com botão hambúrguer no mobile.
  * Adaptação fluida de cards e imagens para todas as resoluções.

---

## 📂 Estrutura de Pastas

```text
ninja-noms/
├── public/
│   └── imagens/           # Recursos visuais e favicon
├── src/
│   ├── components/        # Componentes reutilizáveis (Header, Footer, ProductCard, Toast, etc.)
│   ├── context/           # Estado global do carrinho (CartContext)
│   ├── data/              # Modelagem centralizada de dados (products.js)
│   ├── pages/             # Páginas da aplicação (Home, Products, Ingredients, FastFood, Ecommerce)
│   ├── styles/            # CSS modularizado por domínio/componente
│   │   ├── ecommerce.css
│   │   ├── footer.css
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── home.css
│   │   ├── ingredients.css
│   │   ├── productCard.css
│   │   └── toast.css
│   ├── App.jsx            # Roteamento e provedores globais
│   ├── index.css          # Ponto de entrada e importação dos estilos
│   └── main.jsx           # Ponto de montagem da aplicação
├── index.html
├── package.json
└── vite.config.js

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
