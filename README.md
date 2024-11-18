# Bootcamp React NTT 

## Semana 2 - Javascript


<div align="left">
<a href="https://skillicons.dev">
<img src="https://skillicons.dev/icons?i=html,css,js,vite" alt="Languages"/>
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
- **``index.html``**: Archivo principal que contiene la estructura HTML de la tienda.
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
│   │   ├── CategoryFilter.js
│   │   ├── ProductList.js
│   │   └── SearchBox.js
│   ├── pages
│   │   └── main.js
│   ├── services
│   │   ├── fetchCategories.js
│   │   └── fetchProducts.js
│   └── styles
│       └── styles.css
├── index.html
├── package-lock.json
└── package.json

```

## Implementación

- **Javascript**: La lista de productos  se ha diseñado como una cuadrícula que muestra un máximo de 3 columnas en pantallas grandes. En responsive, la cuadrícula se ajusta automáticamente para mostrar solo una columna.
    ```
    <script type="module" src="./src/pages/main.js"></script>
    ```
- **Componentes dinámicos**: Los componentes están definidos como módulos en la carpeta components y se conectan al DOM mediante JavaScript:
    - **``CategoryFilter.js``**: Renderiza un dropdown con las categorías obtenidas desde la API y permitir filtrar los productos según la selección
    - **``ProductList.js``**: Renderiza dinámicamente los productos obtenidos desde la API en formato de cards.
    - **``SearchBox.js``**: Implementar la funcionalidad de búsqueda en tiempo real al escribir un termino
- **Servicios APIs**: Se utilizo la función fetch de JavaScript. Estas funciones están encapsuladas en la carpeta services
    - **``fetchProducts.js``**: Obtiene la lista de productos y productos por categoría
    - **``fetchCategories.js``**: Obtiene las categorías
- **Vite - Vanilla**: Es un bundler moderno que permite desarrollar aplicaciones web
    - Proporciona recarga hot module replacement (HMR) mientras se trabaja con módulos ECMAScript.
    - Permite importar y exportar módulos JavaScript sin configuraciones adicionales.




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