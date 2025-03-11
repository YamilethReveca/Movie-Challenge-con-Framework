# Movie Challenge con Framework Angular

## Índice

* [1. Descripción del proyecto](#1-descripcion-del-proyecto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Filtro y ordenamiento de películas](#3-filtro-y-ordenamiento-de-peliculas)
* [4. Detalles de película](#4-detalles-de-pelicula)
* [5. Prototipo de baja y alta fidelidad en Figma](#5-prototipo-de-baja-y-alta-fidelidad-en-figma)
* [6. Funcionalidades](#6-funcionalidades)
* [7. Consideraciones técnicas](#7-consideraciones-tecnicas)
* [8. API Key](#8-api-key)
* [9. Pruebas unitarias y test](#9-pruebas-unitarias-y-test)
* [10. Despliegue en Vercel](#10-despliegue-en-vercel)


### 1. Descripción del Proyecto

Movie Challenge es una plataforma desarrollada con Angular, que permite a los usuarios explorar y descubrir una amplia variedad de películas mediante la API de The Movie Database (TMDb).

Este proyecto, construido con componentes modulares, incluye funcionalidades como el filtrado, ordenamiento y paginación de películas, ofreciendo una experiencia interactiva y atractiva. Además, el diseño se trabajó con CSS y SASS, asegurando una interfaz moderna y responsive.

### 2. Historias de Usuario

Historia de Usuario 1: Visualización del Catálogo de Películas

Como usuaria, quiero ver el catálogo de películas de manera clara y organizada para poder explorar y elegir la que desee ver.

Criterios de Aceptación:

Se muestra el póster, título original, año de lanzamiento, voto promedio y popularidad.

Historia de Usuario 2: Filtro y Ordenamiento de Películas



Como usuaria, quiero filtrar y ordenar las películas según género, popularidad y votación para encontrar las que más me interesan.

Criterios de Aceptación:

Filtrado por género (Ciencia ficción, Drama, Terror, etc.).

Ordenamiento por popularidad, fecha de estreno y votación promedio.

Historia de Usuario 3: Detalle de Película



Como usuaria, quiero ver información detallada de una película para conocer más sobre ella antes de verla.

Criterios de Aceptación:

Al hacer clic en una película, se muestra género, descripción, votación promedio y total, y fecha de estreno.

### 3. Filtro y Ordenamiento de Películas

El componente de filtro y ordenamiento permite refinar y organizar la lista de películas de forma intuitiva.

Filtros: Por género, con opción de selección dinámica.

Ordenamiento: Ascendente y descendente por popularidad, fecha de estreno y votación promedio.

### 4. Detalles de Película

El componente de detalles proporciona una experiencia inmersiva con información detallada de cada película, incluyendo:

Descripción, género y fecha de estreno.

Votación promedio y total.

Póster y otros datos relevantes.

### 5. Prototipo de Baja y Alta Fidelidad en Figma

El diseño inicial evolucionó para asemejarse más a una experiencia de cine, con colores y estilos más atractivos.

### 6. Funcionalidades

El proyecto está compuesto por 7 componentes y un servicio:

Componentes:

HeaderComponent

HomeComponent

ContenedorFiltroOrdenamientoComponent

CardsComponent

PaginacionComponent

FooterComponent

PeliculasDetallesComponent

Servicio:

ApiService: Maneja las peticiones HTTP a la API de TMDb.

### 7. Consideraciones Técnicas

Se utilizaron los siguientes endpoints de TMDb:

discover/movie: Para obtener la lista de películas y aplicar ordenamientos.

genre/movie/list: Para obtener los géneros y sus IDs.

movie/{movie_id}: Para obtener los detalles de una película específica.

### 8. API Key

Para acceder a los datos de TMDb, se utilizó una API Key proporcionada por la plataforma.

### 9. Pruebas Unitarias y Test

El proyecto incluye pruebas unitarias utilizando Jasmine y TestBed en un entorno Angular.

### 10. Despliegue en Vercel

Este proyecto está desplegado en Vercel y puedes verlo en el siguiente enlace:

🔗 [Movie Challenge en Vercel](https://movie-challenge-con-framework.vercel.app/)

🚀 Conclusión

Este fue el primer proyecto desarrollado con Angular, permitiendo el aprendizaje y aplicación de componentes, enrutamiento, servicios, consumo de API REST y estilos con CSS/SASS. Movie Challenge es una plataforma que brinda una experiencia fluida para los amantes del cine. 🎬✨

