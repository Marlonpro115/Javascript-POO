class Electrodomesticos {

    constructor(marca, color) {
        this.marca = marca;
        this.color = color;
        this.capacidad = parseInt(prompt('Ingrese la capacidad de la bateria(mAh) : '));
    }


    detalles() {
        document.write(
            '<br><br>------------------------<br>' +
            'Detalles del dispositivo<br>' +
            '------------------------<br><br>' +
            `Marca : ${this.marca}<br>` +
            `Color : ${this.color}<br>` +
            `Capacidad(mAh) : ${this.capacidad}<br><br>`
        )
    }

}



class Refrigerador extends Electrodomesticos {
    constructor(marca, color, tipo) {
        super(marca, color, tipo);
        this.tipo = tipo;
        this.temperatura = parseInt(prompt('Ingrese la temperatura del refrigerador (°C) : '));
    }

    ajustarTemperatura() {
        document.write(
            `El tipo de refigerador : ${this.tipo}<br><br>`
        )

        if (this.temperatura > 5) {
            document.write(`Deberias ajutar la tempratura de ${this.temperatura} a menor 5<br><br>`)
        } else {
            document.write('La temperatura del refigerador es perfecta!!!')
        }
    }

}

const Electro_1 = new Refrigerador('Honor', 'Rojo', 'Super Veloz')
Electro_1.detalles()
Electro_1.ajustarTemperatura()