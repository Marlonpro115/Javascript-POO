class Dispositivo {

    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = año
        this.capacidad = parseInt(prompt('Ingrese la capacidad de la bateria(mAh) : '));
    }


    detalles() {
        document.write(
            '<br><br>------------------------<br>' +
            'Detalles del dispositivo<br>' +
            '------------------------<br><br>' +
            `Marca : ${this.marca}<br>` +
            `Modelo : ${this.modelo}<br>` +
            `Año de salida : ${this.ano}<br>` +
            `Capacidad(mAh) : ${this.capacidad}<br><br>`
        )
    }

}



class Stmarfhone extends Dispositivo {
    constructor(marca, modelo, año, sistema) {
        super(marca, modelo, año);
        this.sistema = sistema;
        this.conectividad = prompt('Ingrese su tipo de conectividad(4G, 3G) : ');
    }

    encender() {
        document.write(
            `El sistema operativo del telefono : ${this.sistema}<br><br>` +
            `Tipo de conectividad : ${this.conectividad}<br><br>`
        )

        if (this.capacidad <= 0) {
            document.write(`El starfhone no puede encender porque esta a ${this.capacidad}% bateria!!!<br><br>`)
        } else {
            document.write('El telefono si puede encender con normalidad!!!<br><br>')
        }
    }

}


const telefono_1 = new Stmarfhone('Samsumg', 's-45l', 2004, 'Android');
telefono_1.detalles();
telefono_1.encender();