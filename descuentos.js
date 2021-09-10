
function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = precio * descuento / 100;
    const precioFinal = (precio - porcentajePrecioConDescuento);
    return precioFinal
    
}

function DescuentoTotal() {
    const inputPrecio= document.getElementById("inputPrecio")
    const Precio = inputPrecio.Value;
    const inputDescuento = document.getElementById("inputDescuento")
    const Descuento = inputDescuento.Value;

    const totalPagar= calcularPrecioConDescuento (Precio,Descuento)
    alert ( "total a pagar "+ totalPagar )
}
