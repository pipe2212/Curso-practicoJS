function CalcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(
        function (listado = 0, nuevoProducto) {
            return listado + nuevoProducto
        }

    )
    
    const promedioLista = sumaLista / lista.length   
    return promedioLista
}

const lista = [
    100,
    200,
    500,
    4000000,
]
    
const mitadLista = parseInt (lista.length / 2);


function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    }
    else
    {

      return false;
    }
}
 
let mediana;

if (esPar (lista.length)) 
{
const elemento1 = lista [mitadLista - 1];
const elemento2 = lista [mitadLista];

 
 const promedioElemento1y2 = CalcularMediaAritmetica ([
  elemento1,
  elemento2,
    ]);

    mediana = promedioElemento1y2;
}
else{
mediana = lista [mitadLista]
}