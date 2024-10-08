class Electronico {

    constructor(marca, modelo, procesador) {
        this.marca = marca;
        this.modelo = modelo;
        this.procesador = procesador;
        this.ram = parseInt(prompt('Ingrese la cantidad de ram(Gb) : '));
    }


    detalles() {
        document.write(
            '<br><br>------------------------<br>' +
            'Detalles del Electronico<br>' +
            '------------------------<br><br>' +
            `Marca : ${this.marca}<br>` +
            `Modelo : ${this.modelo}<br>` +
            `Proceador : ${this.procesador}<br>` +
            `Ram : ${this.ram}<br><br>`
        )
    }

}



class Laptop extends Electronico {
    constructor(marca, modelo, procesador, discoDuro) {
        super(marca, modelo, procesador);
        this.discoDuro = discoDuro;
        this.bateria = parseInt(prompt('Ingrese la duracion de la bateria en horas : '));
    }

    encenderLaptop() {
        document.write(
            `Disco duro de la laptop : ${this.discoDuro}<br><br>` +
            `Duracion de la bateria en horas : ${this.bateria}<br><br>`
        )

        if (this.bateria <= 0) {
            document.write(`Al parecer la laptop, modelo ${this.modelo} y marca ${this.marca} no podra encender debido aque no tiene bateria!!!<br><br>`)
        } else {
            document.write(`Al parecer la laptop, modelo ${this.modelo} y marca ${this.marca} Podras usarla con normalidad!!!<br><br>`)
        }
    }

}

const laptop_1 = new Laptop('HONOR', 'H-PO899', 'S23-ULTRA', 'SSD 512GB')
laptop_1.detalles()
laptop_1.encenderLaptop()