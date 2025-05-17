# Bootcamp React NTT

## Proyecto Integrador

<div align="left">
<a href="https://skillicons.dev">
<img src="https://skillicons.dev/icons?i=html,css,ts,react,vite,jest" alt="Languages"/>
</a>
</div>

## My Market

**My Market** es una aplicación web retail que permite a los usuarios explorar productos, categorías, precios y gestionar un carrito de compras con funcionalidades avanzadas y validaciones dinámicas.

### Web

![Prototipo](/src/assets/images/screens/prototipo-1.png)
![Prototipo](/src/assets/images/screens/prototipo-2.png)
![Prototipo](/src/assets/images/screens/prototipo-5.png)
![Prototipo](/src/assets/images/screens/prototipo-3.png)
![Prototipo](/src/assets/images/screens/prototipo-4.png)

### Mobile

<div style="display: flex; justify-content: space-around; align-items: center; gap: 10px; flex-wrap:wrap">
    <img src="/src/assets/images/screens/prototipo-mobile-1.png" alt="Prototipo" style="width: 30%; height: auto;">
    <img src="/src/assets/images/screens/prototipo-mobile-2.png" alt="Prototipo" style="width: 30%; height: auto;">
    <img src="/src/assets/images/screens/prototipo-mobile-3.png" alt="Prototipo" style="width: 30%; height: auto;">
    <img src="/src/assets/images/screens/prototipo-mobile-4.png" alt="Prototipo" style="width: 30%; height: auto;">
    <img src="/src/assets/images/screens/prototipo-mobile-5.png" alt="Prototipo" style="width: 30%; height: auto;">
</div>

## Funcionalidades Implementadas

- [✔] Diseño y solución responsive para todas las vistas.
- [✔] Visualizacion de los productos y categorias.
- [✔] Busqueda de los productos por medio categorias.
- [✔] Filtrar de los productos por busqueda.
- [✔] Integración de los servicios [DummyJSON](https://dummyjson.com/docs/).
- [✔] Manejo de rutas con `react-router-dom`.
- [✔] Validaciones dinámicas en el formularios mostrando mensajes personalizados en caso de campos vacíos (Login, Formulario de envío, etc.).
- [✔] Implementación de un HOC (Higher Order Component) para proteger rutas privadas y gestionar redirecciones.
- [✔] Persistencia de sesión con `localStorage` para mantener al usuario autenticado al recargar la página.
- [✔] Opción de "Cerrar sesión" que elimina los datos de sesión, limpia el estado global y redirecciona al login.
- [✔] Paginación personalizada mediante un hook reutilizable.
- [✔] Gestión de carrito con incrementos, decrementos y eliminación de productos.
- [✔] Validación dinámica de formularios de compra, mostrando mensajes de error personalizados.
- [✔] Implementación de pruebas unitarias con Jest y Testing Library para componentes, hooks y funcionalidades.
- [✔] Cobertura de pruebas detallada para garantizar la calidad del código.
- [✔] Modal para la funcionalidad de "Olvidé mi contraseña" con validación del formato de correo y confirmación de envío.

## Metodología BEM

Los estilos de la aplicación están organizados utilizando BEM (Block Element Modifier) para garantizar escalabilidad y mantenibilidad.

## Estructura del Proyecto

El proyecto utiliza una arquitectura modular y escalable basada en Atomic Design. Las carpetas están organizadas de la siguiente manera:

### Atomic Design en Componentes

- **Atoms**: Componentes básicos e independientes (e.g., Button, Input).
- **Molecules**: Combinación de átomos para crear elementos más complejos (e.g., Card, FormField).
- **Organisms**: Componentes completos que forman secciones significativas (e.g., Navbar).
- **Custom**: Componentes completos que forman secciones significativas (e.g., ProductList).

### Estructura de Carpetas

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
│   │   ├── Login
│   │   │   ├── __test__
│   │   │   │   └── Login.test.tsx
│   │   │   └── index.tsx
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

## Testing

Se utilizaron Jest y Testing Library para cubrir las funcionalidades principales del proyecto:

- Pruebas de componentes (renderizado, interacciones y props).
- Validación de hooks personalizados.
- Pruebas de rutas y redirecciones.
- Mocking de servicios y validación de errores.
- Cobertura de pruebas.

#### Ejecutar pruebas con jest.

```
npm run test
```

```
npm run test:coverage
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
