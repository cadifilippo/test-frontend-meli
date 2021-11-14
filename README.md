# Test Frontend Meli

## Requisitos

Los requisitos a cumplir estan al final de este archivo.

En la carpeta `specs` se encuentran las especificaciones visuales de los requisitos.

Para ejecutar el Proyecto debe tener instalado NodeJS (v14.18.1).

## Instalación

Se puede instalar el proyecto desde cada una de las sub carpetas:

    - frontend
    - backend

con el comando `npm install`, o utilizar el mismo comando desde la carpeta raíz del proyecto.

## Ejecución

Para ejecutar el proyecto, de la misma forma, se puede hacer desde el directorio individual, o desde la raíz.

```
  cd frontend
  npm start
  cd ..
  cd backend
  npm start
```

o

```
  npm start
```

## Pedido

### Test Práctico - Frontend

Bienvenido al test práctico para aspirantes al área de front-end de Mercado Libre.

A continuación presentamos el diseño y la descripción funcional de una pequeña aplicación que será la base del trabajo que deberás desarrollar.
La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de resultados, y la descripción del detalle del producto.

Tenés que usar el siguiente stack tecnológico para construir la aplicación:

- Cliente:

  - HTML
  - JS (Deseable utilizar React o Backbone)
  - CSS (Deseable utilizar Sass)

- Servidor:
  - Node >= 6
  - Express

Para resolverlo, te pedimos que tengas en cuenta:

- Usabilidad
- SEO
- Performance
- Escalabilidad

Primero, te presentamos las vistas de las pantallas que tenés que hacer:

1. [Caja de búsqueda](./specs/Specs_Buscador.png)
2. [Resultado de la búsqueda](./specs/Specs_Resultados.png)
3. [Detalle del producto](./specs/Specs_Detalle.png)

Te pedimos:

- En base a los diseños dados, construir las siguientes tres vistas:
  - Caja de búsqueda
  - Resultados de la búsqueda
  - Detalle del producto
- Las vistas son navegables de manera independiente y cuentan con su propia url:
  - Caja de Búsqueda: “/” ○ Resultados de la búsqueda:“/items?search=”
  - Detalle del producto: “/items/:id”
- Construir los siguientes endpoints para ser utilizados desde las vistas:

#### /api/items?q=:query

_Debe consultar el siguiente endpoint:_

_https://api.mercadolibre.com/sites/MLA/search?q=:query_

Y devolver los resultados en el formato indicado:

```
{
  “author”: {
    “name”: String
    “lastname”: String
  },
  categories: [String, String, String, ...],
  items: [
    {
      "id": String,
      "title": String,
      "price": {
        "currency": String,
        "amount": Number,
        "decimals": Number
      },
      “picture”: String,
      "condition": String,
      "free_shipping": Boolean
    },
    {...},
    {...},
    {...}
  ]
}
```

#### /api/items/:id

_Debe consultar los siguientes endpoints:_

*https://api.mercadolibre.com/items/:id*

*https://api.mercadolibre.com/items/:id/description*

Y devolver los resultados en el formato indicado:

```
{
  “author”: {
    “name”: String
    “lastname”: String
  },
  “item”: {
    "id": String,
    "title": String,
    "price": {
      "currency": String,
      "amount": Number,
      "decimals": Number,
    },
    “picture”: String,
    "condition": String,
    "free_shipping": Boolean,
    "sold_quantity", Number
    "description": String
  }
}
```

Descripción funcional de la aplicación

- En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el
  formulario navegar a la vista de Resultados de búsqueda, visualizando solo 4 productos. Luego,
  al hacer click sobre uno de ellos, debería navegar a la vista de Detalle de Producto.

- Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.

Entregable

- Repositorio en Github.
