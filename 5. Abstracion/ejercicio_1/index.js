class FormaGeometrica {
    calcularArea() {
        throw new Error("Método 'calcularArea' no implementado");
    }
}

class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return (Math.PI * (this.radio ** 2)).toFixed(1);
    }
}

// Uso de las clases
const cuadrado = new Cuadrado(5);
document.write(`Área del cuadrado: ${cuadrado.calcularArea()}<br><br>`);

const circulo = new Circulo(3);
document.write(`Área del círculo: ${circulo.calcularArea()}<br><br>`);