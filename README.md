# Bootcamp React NTT

## Semana 3 - React Implementación

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

- **`assets`**:

  - Almacena recursos como imágenes, íconos, fuentes, etc.
    - **`icons`**: Íconos en SVG.
    - **`images`**: Imágenes de logotipos o gráficos.

- **`components`**:

  - Contiene componentes reutilizables para la interfaz de usuario (UI), organizadas por Atomic Design
    - **`atoms`**: Componentes básicos como botones o inputs.
    - **`molecules`**: Componentes que combinan múltiples átomos, como tarjetas.
    - **`organisms`**: Estructuras más complejas, como barras de navegación.
    - **`layout`**: Componentes para definir la disposición general de la aplicación.
    - **`custom`**: Componentes personalizados.

- **`pages`**:

  - Contiene las vistas principales de la aplicación.

- **`services`**:

  - Define la lógica de negocio y gestiona las llamadas a APIs.
    - **`api/config`**: Configuración para instancias de `fetch` o rutas base.
    - **`mappers`**: Mapeadores para transformar datos recibidos de APIs.

- **`styles`**:

  - Centraliza los estilos CSS de la aplicación.
    - **`_variables.css`**: Define variables globales como colores y tipografías.
    - **`main.css`**: Archivo principal que importa otros estilos.

- **`config`**:

  - Configuración del entorno, como variables del env.

- **`context`**:

  - Implementa el estado global de la aplicación mediante patrones como React Context API.
    - **`types`**: Define tipos para el estado.
    - **`store`**: Contiene acciones y contextos como `cartContext`.
    - **`reducer`**: Define la lógica de reducción para manejar el estado global.

- **`hooks`**:

  - Contiene hooks personalizados como `useCart` para reutilizar lógica funcional.

- **`models`**:

  - Define modelos de datos, como `Category`, para tipar correctamente objetos en TypeScript.

- **`main.tsx`** y **`App.tsx`**:

  - **`main.tsx`**: Punto de entrada de la aplicación que inicializa React.
  - **`App.tsx`**: Componente principal que define las rutas y estructura básica.

- **`AppRouter.tsx`**:

  - Define las rutas de la aplicación.

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
│   │   ├── types
│   │   │   └── index.ts
│   │   ├── store
│   │   │   ├── cartActions.ts
│   │   │   └── ...
│   │   ├── reducer
│   │   │   ├── cartReducer.ts
│   │   │   └── ...
│   │   └── store
│   │       ├── cartContext.tsx
│   │       └── ...
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
│   ├── utils
│   │   ├── data
│   │   │   └── districts.json
│   │   ├── formatPrice.ts
│   │   └── validations.ts
│   ├── styles
│   │   ├── _animation.css
│   │   ├── _base.css
│   │   ├── _variables.css
│   │   └── main.css
│   ├── main.tsx
│   ├── App.tsx
│   └── AppRouter.tsx
├── .env
├── .env.example
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

#### Instalación de dependencias

```
npm install
```

#### Compila en desarrollo.

```
npm run dev
```

#### Abrir en el navegador

```
Local:   http://localhost:5173/
```
