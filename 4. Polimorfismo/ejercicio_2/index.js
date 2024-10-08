// ejercicio 2: Clases de  Vehículos con Polimorfismo
// Crea tres clases: Carro, Moto y Bicicleta, cada una con un método descripcion() que describa el tipo de vehículo.

class Carro {
    constructor(marca, modelo, color) {
        this.velocidad = parseInt(prompt(`Ingrese la velocidad del carro : `));
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    descripcion() {
        document.write(
            `=====================<br>` +
            `Informacion del carro<br>` +
            `=====================<br><br>` +
            `Marca : ${this.marca}<br>` +
            `Modelo : ${this.modelo}<br>` +
            `Color : ${this.color}<br>` +
            `Velocidad : ${this.velocidad}<br><br>` +
            `=====================`
        );
    }
}

class Moto {
    constructor(marca, modelo, color) {
        this.velocidad = parseInt(prompt(`Ingrese la velocidad de la moto : `));
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    descripcion() {
        document.write(
            `======================<br>` +
            `Informacion de la moto<br>` +
            `======================<br><br>` +
            `Marca : ${this.marca}<br>` +
            `Modelo : ${this.modelo}<br>` +
            `Color : ${this.color}<br>` +
            `Velocidad : ${this.velocidad}<br><br>` +
            `======================<br><br>`
        );
    }
}


class Bicicleta {
    constructor(marca, modelo, color) {
        this.tipo = prompt(`Ingresa el tipo de bicicleta : `);
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    descripcion() {
        document.write(
            `===========================<br>` +
            `Informacion de la bicicleta<br>` +
            `===========================<br><br>` +
            `Marca : ${this.marca}<br>` +
            `Modelo : ${this.modelo}<br>` +
            `Color : ${this.color}<br>` +
            `Tipo : ${this.tipo}<br><br>` +
            `===========================<br><br>`
        );
    }

}


function descripcion(vehiculos) {
    vehiculos.descripcion();
}

const objetcCarro = new Carro(`HIUNDA`, `jt-js`, `Rojo`);
const objectMoto = new Moto(`Kawasaki`, `jijd34-52`, `Negro`);
const objectBicicleta = new Bicicleta(`Red`, `h-678`, `Azul`);

descripcion(objetcCarro);
descripcion(objectMoto);
descripcion(objectBicicleta);