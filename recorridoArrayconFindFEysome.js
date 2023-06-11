var articulos =[
    {nombre:"bici",costo:3000},
    {nombre: "tv",costo:2500},
    {nombre: "libro",costo:320},
    {nombre:"celular",costo:2000},
    {nombre:"lapto",costo:500},
    {nombre:"teclado",costo:1700},
    {nombre:"audifonos",costo:1500},
];
var encuentraArticulo=articulos.find(function(articulo){
    return articulo.nombre==="lapto"
});//encontrar el primer elemento
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
} );//regresa los nombres de los articulos
var articulosbaratos=articulos.some(function(articulo){
    return articulo.costo<=700;
    });//cumple condicion si es verdadera
