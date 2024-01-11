# CinemaHome Con Framework Angular


Índice

[1. Descripción del proyecto](#1-descripcion-del-proyecto)

[2. Historias de usuario](#2-historias-de-usuario)

[3. Filtro y ordenamiento de peliculas](#3-filtro-y-ordenamiento-de-peliculas)

[4. Detalles pelicula](#4-detalle-pelicula)

[5. Prototipo de baja y alta fidelidad en Figma](#5-prototipo-de-baja-y-alta-fidelidad-en-figma)

[6. Funcionalidades](#6-funcionalidades)

[7. Consideraciones técnicas](#7consideraciones-técnicas)

[8. ApiKey](#8apikey)

[9. Prueba unitarias y Test](#9prueba-test-y-unitarias)

[10.Despliegue en Vercel](#10-despliegue-en-vercel)


## 1. Descripción del proyecto.

![imagen de cine](/src/assets/img/ART-3.3-CINE-300x200.jpg)

CinemaHome es una plataforma de transmisión de películas desarrollada con Angular y alimentada por la API de The Movie Database (TMDb). Esta aplicación tiene como objetivo proporcionar a los  usuarios una experiencia cinematográfica desde la comodidad de sus hogares, permitiéndoles  explorar una amplia variedad de películas y disfrutar de contenido de calidad de manera conveniente y personalizada.

Angular, con su robustez y estructura basada en componentes, se revela como el marco de desarrollo ideal. La modularidad inherente de Angular permite la creación eficiente de componentes específicos para cada función, desde el catálogo de películas , filtro, ordenamiento y visualizar los detalles de una película individual.

## 2. Historias de usuario.

Historia de Usuario 1: Visualización del Catálogo de Películas.

![imagen 1 peliculas](/src/assets/img/escritorio%201%20peliculas.png)

Como usuaria de CinemaHome quiero poder visualizar el catálogo completo de películas que presente la información de manera clara y organizada. Esto me permitirá explorar fácilmente las opciones disponibles y tomar decisiones informadas sobre qué película quiero ver.

Criterios de Aceptación:

Para cada película se muestra: poster, título original , año de lanzamiento , voto promedio y popularidad.


Historia de Usuario 2 : Filtro y ordenamiento de Películas.

![imagen 2 filtro y ordenamiento](/src/assets/img/peliculas%20por%20filtro-ordenamiento%20ascendente.png)

Como usuaria de CinemaHome, deseo tener la capacidad de filtrar y ordenar el catálogo de películas según los criterios admitidos por The Movie Database (TMDb) API V3. Esto me permitirá encontrar películas específicas y organizar la lista de manera que se adapte a mis preferencias.

Criterios de Aceptación:

El filtrado deben incluye diversidad de genero: Ciencia ficción,aventura, animación, historia, drama, terror entre otras 
La ordenación debe ser por popularidad, fecha de estreno y por votacion promedio de manera ascendente y descendente.

Historia de Usuario 3: Detalle pelicula.

![imagen 3 detalles pelicula](/src/assets/img/detalle%20pelicula.png)

Como usuaria de CinemaHome, deseo tener la capacidad de consultar los detalles completos de una película específica para obtener información detallada sobre su genero, fecha de estreno, votacion promedio, descripcion de  la pelicula y cualquier dato adicional relevante. Esto me permitirá tomar decisiones informadas antes de decidir ver la película.

Criterios de Aceptación:

Al hacer clic en una película, debería dirigirme a una página detallada de esa película para obtener más información como: el genero, votación promedio, votación total, año de lanzamiento entre otras.

## 3. Filtro y ordenamiento de peliculas.

El componente de filtro y ordenamiento desempeña un papel esencial en la interfaz de usuario de CinemaHome, proporcionando a los usuarios la capacidad de refinar y organizar la visualización del catálogo de películas según sus preferencias individuales. Este componente se integra de manera intuitiva en la experiencia de usuario, facilitando la exploración y selección de películas de manera eficiente.

Filtros:

El componente ofrece opciones de filtro que permiten a los usuarios elegir segun su criterio como género, tomando en cuanta que esta aplicación cuenta con diverso tripo de genero.
Los filtros se aplican de manera interactiva, actualizando instantáneamente la tabla de películas para mostrar solo aquellas que cumplen con los criterios seleccionados.

Ordenamiento:

Los usuarios pueden ordenar el catálogo de películas por diferentes criterios, como año de lanzamiento, popularidad y votacion promedio.

## 4. Detalles pelicula.

El componente de detalle de película en CinemaHome ofrece a los usuarios una experiencia inmersiva al proporcionar información detallada y completa sobre una película seleccionada. Al hacer clic en una película en el catálogo, los usuarios son redirigidos a esta vista detallada, donde pueden explorar elementos como la descripción, votación promedio, votacion total y fecha de estreno y asi como tambien visualizar el poster de la pelicula.


## 5. Prototipo de baja y alta fidelidad en figma.

![prototipo figma](/src/assets/img/prototipo%20de%20baja%20fidelidad%20figma.png)
![prototipo figma](/src/assets/img/prototipo%20de%20baja%20fidelidad%20detalle.png)

Este fue el diseño que se habia realizado en un principio , la cual se le cambió el color para darle un estilo muy parecido al cine, siendo más atractivo para el usuario.

## 6. Funcionalidades

Este proyecto esta realizado por 7 componentes y un servicio, las cuales permite tener cada información segmentada. 

Entre los componente tenemos: 

* Header.
* Home.
* Contenedor-filtro-ordenamiento.
* Cards.
* Paginacion. 
* Footer.
* Peliculas-detalles

Servicio:

Tenemos un servicio llamado apiService y esta nos permite hacer las peticiones HTTP para las peliculas.


## 7. Consideraciones técnicas

Se uso el endpoint themoviedb discover / movie, https://api.themoviedb.org/3/discover/movie para las peliculas y asi también obtener el ordenamiento de las peliculas, sea por popularidad ascendente y descendente, votación promedio ascendente y descendente y total votación ascendente y descendente.
Para el fitro se uso el endpoint genres/ movie list , https://api.themoviedb.org/3/genre/movie/list y asi obteniendo el id del genero.

En el peliculas-detalles se uso el endpoint movies / details, 
https://api.themoviedb.org/3/movie/{movie_id} .


## 8. ApiKey

Para hacer las solicitudes de las peliculas fue requerido del themoviedb un apiKey para las peticiones.



## 9. Prueba unitarias y Test

en un entorno de Angular utilizando el framework de pruebas Jasmine y TestBed.




## 10. 10.Despliegue en Vercel
