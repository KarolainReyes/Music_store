# MUSIC_STORE

La tienda music_store es un negocio especializado en la venta de discos de vinilo y CDs que atrae tanto a coleccioniastas como a amantes de la musica en general. Su catalogo abarca desde albumes clasicos dde rock, jazz y blues hasta ediciones limitadas de la musica contemporanea. 

En esta base de datos solicitada por la tienda y gestionada en MongoDB podrás encontrar información de los álbumes, información como el nombre del artista, el genero musical, la fecha de lanzamiento y otros datos importantes de cada álbum.

## Carateristicas de la Base de datos

Se escogió MongoDB por su flexibilidad y su facilidad de uso, los documentos almacenados en la colección 'albums' tiene la siguiente estructura:

´´´
{
    sku: 'M069',
    title:'La mujer que bota fuego',
    artist: 'Manuel Turizo',
    genre: 'Rock',
    release_year: 2022,
    format: 'Vinilo',
    price: 65000,
    stock: 2,
    rating: 4.9,
    tags: ['Oferta', 'nuevo', 'edición especial'],
    label: {
            name: 'Atlantic Records',
            country: 'Colombia'}
}
´´´
## Que encontrarás en el repositorio:

En este repositorio encontrarás una serie de consultas realizadas para poner a prueba el funcionamiento de la base de datos, tales como:

//Mostrar todos los albumes con precio mayor a 50000

    db.albums.find({price:{$gte:50000}}) //Lista todos los albumes
    db.albums.countDocuments({price:{$gte:50000}}) //Cuenta cuantos albumes tienen el genero 'Jazz'

## Autor

Karolain Reyes