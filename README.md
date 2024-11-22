# Bootcamp React NTT 

## Semana 2 - Typescript


<div align="left">
<a href="https://skillicons.dev">
<img src="https://skillicons.dev/icons?i=html,css,ts,vite" alt="Languages"/>
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
    - **enums**: Enumeraciones usadas en el proyecto, como constantes que evitan el uso de valore
    - **pages**: Inicializa la página principal. Realiza la llamada a los servicios, se conectan los componentes, y se renderiza la vista principal
    - **services**: Contiene los módulos sobre la lógica de negocio y las llamadas a APIs externas.
    - **mappers**: Contiene transformadores de datos, usados para mapear datos de las APIs
    - **models**: Define las interfaces y tipos utilizados en el proyecto define el tipado.
    - **styles**: Contiene los estilos del diseño visual de la aplicación 
- **``index.html``**: Archivo principal que contiene la estructura HTML de la tienda.
- **``tsconfig.json``**: Archivo de configuración para TypeScript, que define reglas y opciones del compilador para el proyecto.
- **``package.json`` y ``package-lock.json``**:  Gestionan las dependencias del proyecto y la configuración de scripts de desarrollo.

```

├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   ├── icons
│   │   │   ├── search-line.svg
│   │   │   └── ...
│   │   └── images
│   │       └── logo.png
│   ├── components
│   │   ├── CategoryFilter.ts
│   │   └── ProductList.ts
│   ├── enums
│   │   └── SortOptions.ts
│   ├── mappers
│   │   ├── categoryMapper.ts
│   │   └── productMapper.ts
│   ├── models
│   │   ├── Category.ts
│   │   └── Product.ts
│   ├── pages
│   │   └── Home
│   │       └── index.ts
│   ├── services
│   │   ├── cartServices.ts
│   │   ├── productServices.ts
│   │   └── categoryServices.ts
│   ├── utils
│   │   ├── helper.ts
│   │   └── ratingStars.ts
│   ├── vite-env.d.ts
│   ├── styles
│   │   └── styles.css
│   └── main.ts
├── index.html
├── package-lock.json
└── package.json
└── tsconfig.json

```

## Implementación

- **Typescript**: En el proyecto está organizado en módulos, lo que significa que cada archivo tiene una función específica
    ```
    <script type="module" src="./src/main.ts"></script>
    ```
- **Componentes dinámicos**: Los componentes están definidos como módulos en la carpeta components y se conectan al DOM mediante Typescript, realizando la migracion de Javascript:
    - **``CategoryFilter.ts``**: Renderiza un dropdown con las categorías obtenidas desde la API y permitir filtrar los productos según la selección
    - **``ProductList.ts``**: Renderiza dinámicamente los productos obtenidos desde la API en formato de cards.
    - **``SearchBar.ts``**: Implementar la funcionalidad de búsqueda en tiempo real al escribir un termino
- **Servicios APIs**: Se utilizo la función fetch de Typescript. Estas funciones están encapsuladas en la carpeta services
    - **``fetchProducts.js``**: Obtiene la lista de productos y productos por categoría
    - **``fetchCategories.js``**: Obtiene las categorías
- **Models & Mappers**
    - **``Category.ts``**: Define la estructura de datos de una categoría.
    - **``Product.ts``**: Define la estructura de datos de un producto
    - **``categoryMapper.ts``**: Mapea las categorías obtenidas de la API con el tipo Category
    - **``productMapper.ts``**: Mapea los productos obtenidos de la API con el tipo Product y ProductResponse
- **Enums**
    - **``SortOptions.ts``**:Enumera las opciones de ordenamiento disponibles para los productos
- **Vite**: Es un bundler moderno que permite desarrollar aplicaciones web
    - Proporciona recarga hot module replacement (HMR) mientras se trabaja con módulos ECMAScript.
    - Permite importar y exportar módulos Typescript sin configuraciones adicionales.




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