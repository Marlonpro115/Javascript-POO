class Motos {

    constructor(objecto) {
        const { marca, modelo, velocidad, motor, color } = objecto;
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.motor = motor;
        this.color = color;
    }

    ObtenerInfo() {
        return document.write(
            `===============================<br><br>` +
            `<h3>Informacion de la Moto</h3><br>` +
            `<strong>Marca :</strong> <span class="badge text-bg-primary">${this.marca}</span><br>` +
            `<strong>Modelo :</strong> <span class="badge text-bg-success">${this.modelo}</span><br>` +
            `<strong>Velocidad :</strong> <span class="badge text-bg-secondary">${this.velocidad}</span><br>` +
            `<strong>Motor :</strong> <span class="badge text-bg-warning">${this.motor}</span><br>` +
            `<strong>Color :</strong> <span class="badge text-bg-danger">${this.color}</span><br><br>` +
            `===============================`
        );
    }
}

const moto1_a = {
    marca: 'Yamaha',
    modelo: 'YZF-R1',
    velocidad: 299,
    motor: '998cc',
    color: 'Azul'
};

const moto2_a = {
    marca: 'Boxer',
    modelo: 'bx-535',
    velocidad: 569,
    motor: '9dgscc',
    color: 'Negro'
};

const moto3_a = {
    marca: 'Kawasaku',
    modelo: 'k-l5242',
    velocidad: 1000,
    motor: '9arwa663',
    color: 'Rojo'
};

const moto1 = new Motos(moto1_a);
const moto2 = new Motos(moto2_a);
const moto3 = new Motos(moto3_a);

moto1.ObtenerInfo();
moto3.ObtenerInfo();
moto2.ObtenerInfo();