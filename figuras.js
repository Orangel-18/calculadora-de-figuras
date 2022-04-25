//Cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Triángulo

console.group("Triángulos");

function perimetroT(cara1, cara2, suelo){
    lado1 = parseInt(cara1);
    lado2 = parseInt(cara2);
    base = parseInt(suelo);

    return lado1 + lado2 + base;
};

function areaT(base, alturaT){
    return (base * alturaT) / 2;
};

console.groupEnd();

//Circulo

console.group("Círculos");

function perimetroCirculo(radio) {
    return (radio * 2) * Math.PI;
}

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

console.groupEnd();

//Interacción con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("square_side");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("square_side");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroT() {
    const input1 = document.getElementById("triangle_side-1");
    const input2 = document.getElementById("triangle_side-2");
    const input3 = document.getElementById("triangle_base");

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
  
    const perimetro = perimetroT(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaT() {
    const input1 = document.getElementById("triangle_base");
    const input2 = document.getElementById("triangle_height");

    const value1 = input1.value;
    const value2 = input2.value;
  
    const area = areaT(value1, value2);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("circle_radius");
    const value = input.value;
  
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("circle_radius");
    const value = input.value;
  
    const area = areaCirculo(value);
    alert(area);
}