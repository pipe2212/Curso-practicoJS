// Codigo del Cuadrado
console.group ("Cuadrado");

//const ladoCuadrado = 35;
//console.log ("Los lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado (lado)
{
 return  lado * 4;   
};
//console.log ("Los lados del cuadrado miden: " + perimetroCuadrado + "cm");

function areaCuadrado (lado) 
{
      return   lado * lado;
}
//console.log (" El area del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();
// Codigo del Triangulo
console.group ("Triangulo");

// const ladoTriangulo1 = 6;
// const BaseTriangulo =  4;
// const ladoTriangulo2 = 6;
// const alturaTriangulo =  5.5;

// console.log (
//  "los lados del triangulo son: " 
//  + ladoTriangulo1 
//  + "cm,"  
//  + ladoTriangulo2 
//  + "cm,"  
//  + BaseTriangulo 
//  + "cm"
// );

// console.log ("La Altura Del Triangulo Es: " + alturaTriangulo);


function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
} 
// console.log ("El Perimeto Del Triangulo Es :" + perimetroTriangulo + "cm");

// console.log ("La Area Del triangulo Es : " + areaTriangulo + "cm2" );
function areaTriangulo (base,altura) 
{
 return  (base * altura) / 2;
} 

console.groupEnd();

// Codigo Del Circulo
console.group ("Circulo");

// const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI ;

// console.log ("El Radio Del Circulo Es: " + radioCirculo  + "cm");
// console.log ("El Diametro Del Circulo Es:" + diametroCirculo + "cm" );

const perimetroCirculo = diametroCirculo * PI ;
// console.log ("El Perimetro Del Circulo Es:" + perimetroCirculo + "cm" );
function areaCirculo(radio) 
{
 return (radio * radio) * PI;   
}

// console.log ("El Area Del Circulo Es:" + areaCirculo + "cm2" );