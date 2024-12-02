# Bootcamp React NTT

## Proyecto Integrador

<div align="left">
<a href="https://skillicons.dev">
<img src="https://skillicons.dev/icons?i=html,css,ts,react,vite,jest" alt="Languages"/>
</a>
</div>

## My Market

Este proyecto es una aplicación web reta
il llamada "My Market". Permite a los usuarios ver productos, categorías y precios, y agregar productos a un carrito de compras.

![Prototipo](/src/assets/images/screens/prototipo-1.png)
![Prototipo](/src/assets/images/screens/prototipo-2.png)
![Prototipo](/src/assets/images/screens/prototipo-5.png)
![Prototipo](/src/assets/images/screens/prototipo-3.png)
![Prototipo](/src/assets/images/screens/prototipo-4.png)

<div style="display: flex; justify-content: space-around; align-items: center; gap: 10px;">
    <img src="/src/assets/images/screens/prototipo-mobile-1.png" alt="Prototipo" style="width: 30%; height: auto;">
    <img src="/src/assets/images/screens/prototipo-mobile-2.png" alt="Prototipo" style="width: 30%; height: auto;">
    <img src="/src/assets/images/screens/prototipo-mobile-3.png" alt="Prototipo" style="width: 30%; height: auto;">
    <img src="/src/assets/images/screens/prototipo-mobile-4.png" alt="Prototipo" style="width: 30%; height: auto;">
</div>

## Estructura del Proyecto

La arquitectura de carpetas en este branch está organizada de la siguiente manera:

- **`assets`**:

  - Almacena recursos como imágenes, íconos, fuentes, etc.
    - **`icons`**: Íconos en SVG.
    - **`images`**: Imágenes de logotipos o gráficos.

- **`components`**:

  - Contiene componentes reutilizables para la interfaz de usuario (UI), organizadas por Atomic Design
    - **`atoms`**: Componentes básicos como botones o inputs.
    - **`molecules`**: Componentes que combinan múltiples átomos, como cards.
    - **`organisms`**: Estructuras más complejas, como navbars.
    - **`layout`**: Componentes para definir la disposición de una página.
    - **`custom`**: Componentes personalizados.

- **`pages`**:

  - Contiene las vistas principales de la aplicación.

- **`services`**:

  - Gestiona las llamadas a APIs.
    - **`api/config`**: Configuración para instancias de `fetch` o rutas base.
    - **`mappers`**: Funciones para transformar datos recibidos de APIs.

- **`styles`**:

  - Centraliza los estilos CSS de la aplicación.
    - **`_variables.css`**: Define variables globales como colores y tipografías.
    - **`main.css`**: Archivo principal que importa otros estilos.

- **`config`**:

  - Configuración del entorno con las variables del env.

- **`context`**:

  - Implementa el estado global de la aplicación mediante patrones como React Context API.
    - **`types`**: Define tipos para el estado.
    - **`store`**: Contiene acciones y contextos como `cartContext`.
    - **`reducer`**: Define la lógica de reducción para manejar el estado global.

- **`hooks`**:

  - Contiene hooks personalizados como `useCart` para reutilizar lógica funcional.

- **`models`**:

  - Define modelos de datos, como `Category`, para tipar correctamente objetos en TypeScript.

- **`utils`**:

  - Contiene funciones y datos auxiliares que se utilizan en diferentes partes del proyecto.
    - **`data`**: Contiene datos estructurados sobre distritos.
    - **`formatPrice.ts`**: Define una función para formatear precios según una moneda.
    - **`validations`**: Contiene funciones de validación reutilizables para verificar datos ingresados.

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
│   │   │   │   ├── __test__
│   │   │   │   │   └── Button.test.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── Button.tsx
│   │   │   ├── ...
│   │   │   └── index.tsx
│   │   ├── custom
│   │   │   ├── ProductCard
│   │   │   │   ├── __test__
│   │   │   │   │   └── ProductCard.test.tsx
│   │   │   │   ├── ProductCard.module.css
│   │   │   │   └── ProductCard.tsx
│   │   │   └── ...
│   │   ├── layout
│   │   │   └── MainLayout
│   │   │       ├── MainLayout.module.css
│   │   │       └── MainLayout.tsx
│   │   ├── molecules
│   │   │   ├── Card
│   │   │   │   ├── __test__
│   │   │   │   │   └── Card.test.tsx
│   │   │   │   ├── Card.module.css
│   │   │   │   └── Card.tsx
│   │   │   ├── ...
│   │   │   └── index.tsx
│   │   └── organisms
│   │       ├── NavBar
│   │       │   ├── __test__
│   │       │   │   └── NavBar.test.tsx
│   │       │   ├── NavBar.module.css
│   │       │   └── NavBar.tsx
│   │       ├── ...
│   │       └── index.tsx
│   ├── config
│   │   └── envs.ts
│   ├── context
│   │   ├── actions
│   │   │   └── __test__
│   │   │       ├── cartActions.test.ts
│   │   │       └── productActions.test.ts
│   │   ├── types
│   │   │   └── index.ts
│   │   ├── store
│   │   │   ├── cartActions.ts
│   │   │   └── ...
│   │   ├── reducer
│   │   │   ├── __test__
│   │   │   │   ├── cartReducer.test.ts
│   │   │   │   └── productReducer.test.ts
│   │   │   ├── cartReducer.ts
│   │   │   └── ...
│   │   └── store
│   │       ├── cartContext.tsx
│   │       └── ...
│   ├── hooks
│   │   ├── useCart.ts
│   │   └── ...
│   ├── guard
│   │   └── ProtectedRoute.tsx
│   ├── models
│   │   ├── Category.ts
│   │   └── ...
│   ├── pages
│   │   ├── Cart
│   │   │   ├── __test__
│   │   │   │   └── Cart.test.tsx
│   │   │   └── index.tsx
│   │   ├── Helpers
│   │   │   └── __test__
│   │   │       └── Empty.test.tsx
│   │   └── Home
│   │       ├── __test__
│   │       │   └── Home.test.tsx
│   │       └── index.tsx
│   ├── services
│   │   ├── api
│   │   │   ├── __test__
│   │   │   │   ├── fetchInstance.test.ts
│   │   │   │   └── productServices.test.ts
│   │   │   ├── config
│   │   │   │   ├── fetchInstance.ts
│   │   │   │   └── paths.ts
│   │   │   └── productServices.ts
│   │   └── mappers
│   │       ├── __test__
│   │       │   ├── cartMapper.test.ts
│   │       │   └── ...
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
├── jest.config.ts
├── jest.setup.ts
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

#### Ejecutar pruebas con jest.

```
npm run test
```

```
npm run test:coverage
```
