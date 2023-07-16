/* Array de objetos bruto */
let arrayObjetosBrutos = new Array();
let arrayObjetosProcesados = new Array();

/* Peticion al servidor */
fetch("productos.json").then(respuesta => respuesta.json()).then(objeto => {
    arrayObjetosBrutos = objeto;
    /* Al finalizar la peticion.. */
    cargarArrayProductosProcesados();
});

/* Funcion procesar productos */
function cargarArrayProductosProcesados(){
    
    /* Iterar los objetos brutos */
    arrayObjetosBrutos.forEach(objeto =>{
        arrayObjetosProcesados.push(new Producto(objeto));
    });

    /* Terminado de iterar empieza a armar el catalogo */
    cargarCatalogo();

}

/* Funcion armar catalogo */
function cargarCatalogo(){

    /* Iterar los objetos procesados */
    arrayObjetosProcesados.forEach(objeto =>{
        /* Crear nuevo elemento articulo */
        let nuevoArticulo = document.createElement("article");
        nuevoArticulo.setAttribute("class","col-6 col-md-4 col-lg-3");
        /* Especificar contenido HMTL */
        nuevoArticulo.innerHTML = `
            <img class="imgProduct img-fluid" src="${objeto.image}" alt="${objeto.name}">
            <h3>${objeto.name}</h3>
            <p>
                <span class="precioOriginal">${objeto.priceOriginal}</span>
                <span class="precioDescuento">${objeto.priceDescuento}</span>
                <br><span class="precioFinal">${objeto.priceFinal}</span>
            </p>
            <button class="btn btn-primary" data-producto-sku="${objeto.sku}">Agregar al carrito</button>
        `;
        /* Añadir el nuevo articulo al catalogo */
        document.querySelector('#catalogo').append(nuevoArticulo);
    })

}