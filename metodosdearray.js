var articulos =[
    {nombre:"bici",costo:3000},
    {nombre: "tv",costo:2500},
    {nombre: "libro",costo:320},
    {nombre:"celular",costo:2000},
    {nombre:"lapto",costo:500},
    {nombre:"teclado",costo:1700},
];
var articulosFiltrados=articulos.filter(function(articulo){
    return articulo.costo<=500 //filtra cosas especificas
});
var nombreArticulos=articulos.map(function(articulo){
    return articulo.nombre //mapea justo lo q busco
    });