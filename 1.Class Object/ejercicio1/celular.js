/**
 * Clase celular
 */
class Celular {

    /**
     * 
     * @param {Object} objecto 
     */
    constructor(objecto) {
        const { modelo, marca, ram, bateria, cpu } = objecto;
        this.modelo = modelo;
        this.marca = marca;
        this.ram = ram;
        this.bateria = bateria;
        this.cpu = cpu;
    }

    /**
     * Funcion para obtener los datos del celular
     * @returns - Devuelve cada datos del celular
     */
    Detalles() {
        return document.write(
            `===============================<br><br>` +
            `<h3>Informacion del celular</h3><br>` +
            `<strong>Modelo :</strong> <span class="badge text-bg-primary">${this.modelo}</span><br>` +
            `<strong>Marca :</strong> <span class="badge text-bg-secondary">${this.marca}</span><br>` +
            `<strong>Ram :</strong> <span class="badge text-bg-warning">${this.marca}</span><br>` +
            `<strong>Bateria :</strong> <span class="badge text-bg-info">${this.cpu}</span><br><br>` +
            `===============================`
        );
    }

    /**
     * 
     * @returns 
     */
    carga() {
        if (this.bateria <= 100) {
            return document.write(`El celular esta descargado!`);
        } else {
            return document.write(`Celular con buena carga!!`)
        }
    }

    /**
     * 
     * @returns 
     */
    rendimiento() {
        if (this.cpu <= 500) {
            return document.write(`El rendimiento de ${this.marca} es algo lento!!`)
        } else {
            return document.write(`Vaya que buen redimiento tiene tu ${this.marca}!!`)
        }
    }
};

const celular1_a = {
    modelo: 'ut-p4561',
    marca: 'xiaomi',
    ram: 4,
    bateria: 5000,
    cpu: 600,
}

const celular2_a = {
    modelo: 'sm-00813',
    marca: 'Samsung',
    ram: 8,
    bateria: 10000,
    cpu: 900,
}

const celular3_a = {
    modelo: 'n-tu275',
    marca: 'Nokia',
    ram: 10,
    bateria: 70000,
    cpu: 1000,
}

const celular1 = new Celular(celular1_a);
const celular2 = new Celular(celular2_a);
const celular3 = new Celular(celular3_a);

celular1.Detalles()
celular2.Detalles()
celular3.Detalles()