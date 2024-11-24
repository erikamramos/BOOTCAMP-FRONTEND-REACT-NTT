# Bootcamp React NTT

## Semana 3 - React Fundamentos

<div align="left">
<a href="https://skillicons.dev">
<img src="https://skillicons.dev/icons?i=html,css,ts,react,vite" alt="Languages"/>
</a>
</div>

## My Market

Este proyecto es una aplicación web retail llamada "My Market". Permite a los usuarios ver productos, categorías y precios, y agregar productos a un carrito de compras.

![Prototipo](/src/assets/images/screens/prototipo.png)

## Estructura del Proyecto

La arquitectura de carpetas en este branch está organizada de la siguiente manera:

- **src**: Archivo principal que contiene la estructura HTML de la tienda.
  - **assets**: Almacena las images o recursos que se utilizan.
  - **components**: Contiene componentes reutilizables de la interfaz de usuario (UI) que encapsulan funcionalidades específicas
  - **pages**: Inicializa la página principal. Realiza la llamada a los servicios, se conectan los componentes, y se renderiza la vista principal
  - **services**: Contiene los módulos sobre la lógica de negocio y las llamadas a APIs externas.
  - **styles**: Contiene los estilos del diseño visual de la aplicación
- **`index.html`**: Archivo principal que contiene la estructura HTML de la tienda.
- **`package.json` y `package-lock.json`**: Gestionan las dependencias del proyecto y la configuración de scripts de desarrollo.

```

├── public
│   └── vite.svg
├── .vscode
│   └── settings.json
├── src
│   ├── assets
│   │   ├── icons
│   │   │   ├── search-line.svg
│   │   │   └── ...
│   │   └── images
│   │       └── logo.png
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button
│   │   │   │   ├── Button.module.css
│   │   │   │   └── Button.tsx
│   │   │   ├── ...
│   │   │   └── index.tsx
│   │   ├── custom
│   │   │   ├── ProductCard
│   │   │   │   ├── ProductCard.module.css
│   │   │   │   └── ProductCard.tsx
│   │   │   └── ...
│   │   ├── layout
│   │   │   └── MainLayout
│   │   │       ├── MainLayout.module.css
│   │   │       └── MainLayout.tsx
│   │   ├── molecules
│   │   │   ├── Card
│   │   │   │   ├── Card.module.css
│   │   │   │   └── Card.tsx
│   │   │   ├── ...
│   │   │   └── index.tsx
│   │   └── organisms
│   │       ├── NavBar
│   │       │   ├── NavBar.module.css
│   │       │   └── NavBar.tsx
│   │       ├── ...
│   │       └── index.tsx
│   ├── config
│   │   └── envs.ts
│   ├── context
│   │   ├── actions.ts
│   │   ├── reducer.ts
│   │   └── store
│   │       ├── cartContext.tsx
│   │       └── productContext.tsx
│   ├── hooks
│   │   ├── useCart.ts
│   │   └── ...
│   ├── models
│   │   ├── Category.ts
│   │   └── ...
│   ├── pages
│   │   └── main.js
│   ├── services
│   │   ├── api
│   │   │   ├── config
│   │   │   │   ├── fetchInstance.ts
│   │   │   │   └── paths.ts
│   │   │   └── productServices.ts
│   │   └── mappers
│   │       ├── categoryMapper.ts
│   │       └── ...
│   ├── styles
│   │   ├── _animation.css
│   │   ├── _base.css
│   │   ├── _variables.css
│   │   └── main.css
├── index.html
├── .prettierrc
├── eslint.config.js
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── vite.config.ts

```

## Configuración del proyecto

```
npm install
```

#### Compila y recarga automáticamente en desarrollo.

```
npm run dev
```

#### Ábrelo con tu navegador para ver el resultado.

```
Local:   http://localhost:5173/
```
