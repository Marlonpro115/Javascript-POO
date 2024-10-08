class Carro {

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
            `<h3>Informacion del carro</h3><br>` +
            `<strong>Marca :</strong> <span class="badge text-bg-primary">${this.marca}</span><br>` +
            `<strong>Modelo :</strong> <span class="badge text-bg-success">${this.modelo}</span><br>` +
            `<strong>Velocidad(Km) :</strong> <span class="badge text-bg-secondary">${this.velocidad}</span><br>` +
            `<strong>Motor :</strong> <span class="badge text-bg-warning">${this.motor}</span><br>` +
            `<strong>Color :</strong> <span class="badge text-bg-danger">${this.color}</span><br><br>` +
            `===============================`
        );
    }
}

const carro1_a = {
    marca: 'Nisan',
    modelo: 'kt-8',
    velocidad: 100,
    motor: 'upk-1000',
    color: 'rojo'
};

const carro2_a = {
    marca: 'Toyota',
    modelo: 't.7979',
    velocidad: 4562,
    motor: 'utsgs-1000',
    color: 'verde'
};

const carro3_a = {
    marca: 'Ferrari',
    modelo: 'ft-89',
    velocidad: 4500,
    motor: 's-ht-8',
    color: 'amarillo'
};

const carro1 = new Carro(carro1_a);
const carro2 = new Carro(carro2_a);
const carro3 = new Carro(carro3_a);

carro1.ObtenerInfo();
carro3.ObtenerInfo();
carro2.ObtenerInfo();