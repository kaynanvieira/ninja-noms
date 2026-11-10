# 🍣 Ninja Noms

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