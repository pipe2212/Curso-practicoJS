
function CalcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let index = 0; index < lista.length; index++) {
    //     sumaLista = sumaLista + lista[index];
        
    // }

    const sumaLista = lista.reduce(
        function (listado = 0, nuevoProducto) {
            return listado + nuevoProducto
        }

    )
    
    const promedioLista = sumaLista / lista.length   
    return promedioLista
}