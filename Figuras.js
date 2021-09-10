// Codigo del Cuadrado
console.group ("Cuadrado");

function perimetroCuadrado (lado)
{
 return  lado * 4;   
};

function areaCuadrado (lado) 
{
      return   lado * lado;
}

console.groupEnd();


// Codigo del Triangulo
console.group ("Triangulo");


function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo (base,altura) 
{
 return  (base * altura) / 2;
} 

console.groupEnd();


// Codigo Del Circulo
console.group ("Circulo");

function diametroCirculo(radio) {
    return radio * 2
}
const PI = Math.PI ;


function perimetroCirculo(radio) 
{
 const diametro = diametroCirculo (radio)
 return diametro * PI   
}

function areaCirculo(radio) 
{
 return (radio * radio) * PI;   
}

console.groupEnd()


// funcion para unir js con html

function calcularPerimetroCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado (value);
    alert (perimetro);
}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado (value);
    alert (area);
}
//circulo

function calcularPerimetroCirculo(params) {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo (value);
    alert (perimetro);
}

function calcularAreaCirculo(params) {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo (value);
    alert (area);
}

// triangulo

function calcularPerimetroTriangulo(params) {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const perimetro = perimetroTriangulo (value);
    alert (perimetro);
}

function calcularAreaTriangulo(params) {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const area = areaTriangulo (value);
    alert (area);
}