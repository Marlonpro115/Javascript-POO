class Empleado {

    constructor(objecto) {
        const { puesto, edad, horas, nombre, genero, tarifa_por_hora } = objecto;
        this.puesto = puesto;
        this.edad = edad;
        this.horas = horas;
        this.nombre = nombre;
        this.genero = genero;
        this.tarifa_por_hora = tarifa_por_hora || 10;
    }

    ObtenerInfo() {
        return document.write(
            `===============================<br><br>` +
            `<h3>Informacion del Empleado</h3><br>` +
            `<strong>Nombre :</strong> <span class="badge text-bg-primary">${this.nombre}</span><br>` +
            `<strong>Edad :</strong> <span class="badge text-bg-success">${this.edad}</span><br>` +
            `<strong>Horas trabajadas : </strong> <span class="badge text-bg-secondary">${this.horas}</span><br>` +
            `<strong>Puesto :</strong> <span class="badge text-bg-warning">${this.puesto}</span><br>` +
            `<strong>Genero :</strong> <span class="badge text-bg-danger">${this.genero}</span><br><br>` +
            `===============================`
        );
    }
}

const empleado1_a = {
    puesto: 'Médico',
    edad: 34,
    horas: 600,
    nombre: 'Juan',
    genero: 'H',
    tarifa_por_hora: 20,
};

const empleado2_a = {
    puesto: 'Mécanico',
    edad: 50,
    horas: 1000,
    nombre: 'Carlos',
    genero: 'H',
    tarifa_por_hora: 5,
};

const empleado3_a = {
    puesto: 'Minero',
    edad: 56,
    horas: 2000,
    nombre: 'Steve',
    genero: 'H',
    tarifa_por_hora: 100,
};

const empleado1 = new Empleado(empleado1_a);
const empleado2 = new Empleado(empleado2_a);
const empleado3 = new Empleado(empleado3_a);

empleado1.ObtenerInfo();
empleado3.ObtenerInfo();
empleado2.ObtenerInfo();