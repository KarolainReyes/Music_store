//1. Crear la base de datos music_store

//use music_store

//2. A la coleccion albums insertar el ejemplo

db.albums.insertOne({})


//3.Agregar a todos los albumes las siguientes propiedades: 

//avaliable: true
//origin: importado

db.albums.updateMany({}, {$set:{avaliable: true, origin: 'Importado'}})

//4. Realizar las siguientes actualizaciones:

    //Álbun con SKU: M034, actualizar stock a 15.

    db.albums.updateOne({sku:'M034'}, {$set:{stock: 15}})

    //Álbum con SKU: M018, cambiar el country de label a 'Colombia'

    db.albums.updateOne({sku:'M018'}, {$set:{'label.country': 'Colombia'}})

    //Álbum con SKU: M059, agregar un nuevo tag 'Oferta'

    db.albums.updateOne({sku: 'M059'}, {$push: {tags: 'Oferta'}})

    //Álbum con SKU: M012, agregar nuevos tags 'Nuevo', 'Popular'

    db.albums.updateOne({sku: 'M012'}, {$push:{tags: {$each: ['Nuevo', 'Popular']}}})

    //Álbum con SKU: M025, agregar los tags 'Descuento', 'Outlet'
    
    db.albums.updateOne({sku: 'M025'}, {$push:{tags: {$each: ['Descuento', 'Outlet']}}})

    //Álbum titulado 'Thriller' cambiar el price a 80000

    db.albums.updateOne({title:'Thriller'}, {$set:{price: 80000}})

//5. Renombrar la propiedad origin a import_type

db.albums.updateMany({}, {$rename:{'origin': 'import_type'}})

//6. Cambiar el import_type a 'Nacional' para los albumes cuyo sello discográfico (lablel.country) sea 'Colombia'

db.albums.updateMany({'label.country': 'Colombia'}, {$set:{import_type: 'Nacional'}})

//7. Crear las siguientes consultas:

    //Mostrar los albumes del genero 'Jazz'

    db.albums.find({genre:'Jazz'})

    //Mostrar todos los albumes con precio mayor a 50000

    db.albums.find({price:{$gte:50000}}) //Lista todos los albumes
    db.albums.countDocuments({price:{$gte:50000}}) //Cuenta cuantos albumes tienen el genero 'Jazz'

    //Mostrar los albumes que no sean del genero 'Rock'

    db.albums.find({genre:{$ne: 'Rock'}})
    db.albums.countDocuments({genre:{$ne: 'Rock'}})

    //Mostrar sku, title y tags de los albumes con calificacion mayor a 4.5

    db.albums.find({rating :{$gt:4.5}}, {sku:1, title:1, tags:1, _id:0})

    //Mostar sku, title y price de los albumes con stock menor que 5

    db.albums.find({stock :{$lt:5}}, {sku:1, title:1, price:1, _id:0})

//8. Eliminar la propiedad avalible de todos los documentos:

db.albums.updateMany({},{$unset: {avaliable: ''}})

//9. Eliminar el tag 'descuento' del album con sku: M025

db.albums.updateOne({sku: 'M025'}, {$pull: {tags: 'Descuento'}})

//10. Eliminar los tags 'Nuevo' y 'Popular' del album con sku M012

db.albums.updateOne({sku: 'M012'}, {$pull: {tags: {$in: ['Nuevo', 'Popular']}}})

//11. Eliminar el album con sku: M043

db.albums.updateOne({sku: 'M012'}, {$pull: {tags: {$in: ['Nuevo', 'Popular']}}})

//12. Eliminar todos los albumes con stock igual a 0

db.albums.deleteMany({stock:0})