// Ejercicio 3: Animales con Polimorfismo
// Crea tres clases: Perro, Gato, y Pájaro, cada una con un método sonido() que haga el sonido correspondiente.

class Perro {
    constructor(raza, sexo, edad) {
        this.peso = parseInt(prompt(`Ingrese el peso : `));
        this.raza = raza;
        this.sexo = sexo;
        this.edad = edad;
    }

    mostrar_info() {
        document.write(
            `=====================<br>` +
            `Informacion del perro<br>` +
            `=====================<br><br>` +
            `Raza : ${this.raza}<br>` +
            `Sexo : ${this.sexo}<br>` +
            `Edad : ${this.edad}<br>` +
            `Peso : ${this.peso}<br>` +
            `=====================<br><br>`
        );
    }

    sonido() {
        document.write(`=====================<br>`);
        document.write(`El perro hace : "Guau!!"<br>`);
        document.write(`=====================<br><br>`)
    }
}


class Gato {
    constructor(raza, sexo, edad) {
        this.peso = parseInt(prompt(`Ingrese el peso : `));
        this.raza = raza;
        this.sexo = sexo;
        this.edad = edad;
    }

    mostrar_info() {
        document.write(
            `=====================<br>` +
            `Informacion del perro<br>` +
            `=====================<br><br>` +
            `Raza : ${this.raza}<br>` +
            `Sexo : ${this.sexo}<br>` +
            `Edad : ${this.edad}<br>` +
            `Peso : ${this.peso}<br>` +
            `=====================<br><br>`
        );
    }

    sonido() {
        document.write(`=====================<br>`);
        document.write(`El gato hace : "Miau!!"<br>`);
        document.write(`=====================<br><br>`)
    }

}

class Pajaro {
    constructor(raza, sexo, edad) {
        this.peso = parseInt(prompt(`Ingrese el peso : `));
        this.raza = raza;
        this.sexo = sexo;
        this.edad = edad;
    }

    mostrar_info() {
        document.write(
            `=====================<br>` +
            `Informacion del perro<br>` +
            `=====================<br><br>` +
            `Raza : ${this.raza}<br>` +
            `Sexo : ${this.sexo}<br>` +
            `Edad : ${this.edad}<br>` +
            `Peso : ${this.peso}<br>` +
            `=====================<br><br>`
        );
    }

    sonido() {
        document.write(`=====================<br>`);
        document.write(`El loro hace : "Kiruuuu!!"<br>`);
        document.write(`=====================<br><br>`);
    }
}

function mostar_sonido(animal) {
    animal.sonido();
};


const objectPerro = new Perro(`Hotdog`, `M`, 15);
const objectGatp = new Gato(`Blanca`, `F`, 10);
const objectPajaro = new Pajaro(`Loro`, `M`, 4);

mostar_sonido(objectPerro);
mostar_sonido(objectGatp);
mostar_sonido(objectPajaro);