# Bootcamp React NTT

## Semana 4 - Pruebas Unitarias

<div align="left">
<a href="https://skillicons.dev">
<img src="https://skillicons.dev/icons?i=html,css,ts,react,vite,jest" alt="Languages"/>
</a>
</div>

## My Market

Este proyecto es una aplicación web retail llamada "My Market". Permite a los usuarios ver productos, categorías y precios, y agregar productos a un carrito de compras.

![Prototipo](/src/assets/images/screens/pruebas-unitarias.png)

## Estructura del Proyecto

```

├── public
│   └── vite.svg
├── .vscode
│   └── settings.json
├── src
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button
│   │   │   │   └── __test__
│   │   │   │       └── Button.test.tsx
│   │   │   └── ...
│   │   ├── custom
│   │   │   ├── ProductCard
│   │   │   │   └── __test__
│   │   │   │       └── ProductCard.test.tsx
│   │   │   └── ...
│   │   ├── molecules
│   │   │   ├── Card
│   │   │   │   └── __test__
│   │   │   │       └── Card.test.tsx
│   │   │   └── ...
│   │   └── organisms
│   │       ├── NavBar
│   │   │   │   └── __test__
│   │   │   │       └── NavBar.test.tsx
│   │   │   └── ...
│   ├── context
│   │   ├── actions
│   │   │   └── __test__
│   │   │       ├── cartActions.test.ts
│   │   │       └── productActions.test.ts
│   │   ├── reducer
│   │   │   └── __test__
│   │   │       ├── cartReducer.test.ts
│   │   │       └── productReducer.test.ts
│   │   ├── types
│   │   └── store
│   ├── hooks
│   │   ├── useCart.ts
│   │   └── ...
│   ├── models
│   │   ├── Category.ts
│   │   └── ...
│   ├── pages
│   │   ├── Cart
│   │   │   ├── __test__
│   │   │   │   └── Cart.test.tsx
│   │   ├── Helpers
│   │   │   └── __test__
│   │   │       └── Empty.test.tsx
│   │   └── Home
│   │       └── __test__
│   │           └── Home.test.tsx
│   ├── services
│   │   ├── api
│   │   │   └── __test__
│   │   │       ├── categoryServices.test.ts
│   │   │       ├── fetchInstance.test.ts
│   │   │       └── productServices.test.ts
│   │   └── mappers
│   │       └── __test__
│   │           ├── cartMapper.test.ts
│   │           ├── categoryMapper.test.ts
│   │           └── productMapper.test.ts
│   ├── utils
│   │   ├── __mocks__
│   │   │   ├── cart.ts
│   │   │   ├── district.ts
│   │   │   ├── products.ts
│   │   │   └── select.ts
│   │   └── __test__
│   │       ├── formatPrice.test.ts
│   │       └── validation.test.ts
│   ├── styles
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

#### Ejecutar pruebas con jest.

```
npm run test
```

```
npm run test:coverage
```
