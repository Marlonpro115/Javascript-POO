class Animal {

    constructor(objecto) {
        const { nombre, edad, raza, comida, tipo } = objecto;
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.comida = comida;
        this.tipo = tipo;
    }

    Datos() {
        return document.write(
            `===============================<br><br>` +
            `<h3>Informacion del animal</h3><br>` +
            `<strong>Nombre :</strong> <span class="badge text-bg-primary">${this.nombre}</span><br>` +
            `<strong>Edad :</strong> <span class="badge text-bg-success">${this.edad}</span><br>` +
            `<strong>Raza :</strong> <span class="badge text-bg-secondary">${this.raza}</span><br>` +
            `<strong>Comida :</strong> <span class="badge text-bg-warning">${this.comida}</span><br>` +
            `<strong>Tipo :</strong> <span class="badge text-bg-danger">${this.tipo}</span><br><br>` +
            `===============================`
        );
    }
}

const animal1_a = {
    nombre: 'Juan',
    edad: 14,
    raza: 'Canina',
    comida: 'Comida de perros',
    tipo: 'perro'
};

const animal2_a = {
    nombre: 'Maria',
    edad: 4,
    raza: 'Aviar',
    comida: 'Semillas',
    tipo: 'Ave'
};

const animal3_a = {
    nombre: 'Carlos',
    edad: 50,
    raza: 'Mamifero',
    comida: 'Lechuga',
    tipo: 'Conejo'
};

const Animal1 = new Animal(animal1_a);
const Animal2 = new Animal(animal2_a);
const Animal3 = new Animal(animal3_a);

Animal1.Datos();
Animal3.Datos();
Animal2.Datos();