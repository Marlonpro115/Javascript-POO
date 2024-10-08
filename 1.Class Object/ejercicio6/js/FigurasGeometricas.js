class FigurasGeometricas {

    constructor(objecto) {
        const { nombre, lados, radio, area, forma } = objecto;
        this.nombre = nombre;
        this.lados = lados;
        this.radio = radio || null;
        this.area = area || null;
        this.forma = forma || 'Desconocida';
    }

    ObtenerInfo() {
        return document.write(
            `===============================<br><br>` +
            `<h3>Información de la figura geométrica</h3><br>` +
            `<div class="alert alert-info text-center">` +
            `<strong>Nombre :</strong> <span class="badge text-bg-primary">${this.nombre}</span><br>` +
            `<strong>Lados :</strong> <span class="badge text-bg-success">${this.lados}</span><br>` +
            `<strong>Radio :</strong> <span class="badge text-bg-secondary">${this.radio !== undefined ? this.radio : "No aplica"}</span><br>` +
            `<strong>Area :</strong> <span class="badge text-bg-warning">${this.area !== undefined ? this.area : "No aplica"}</span><br>` +
            `<strong>Forma :</strong> <span class="badge text-bg-danger">${this.forma}</span><br><br>` +
            `</div>` +
            `===============================`
        );
    }
}

const figura1_a = {
    nombre: "Cuadrado",
    lados: 4,
    radio: 5,
    area: 20,
    forma: "Cuadrado"
};

const figura2_a = {
    nombre: "Círculo",
    lados: 0,
    radio: 40,
    area: 20,
    forma: "Circular"
};

const figura3_a = {
    nombre: "Triangulo",
    lados: 3,
    radio: 60,
    area: 10,
    forma: "Triangulo"
};

const figura1 = new FigurasGeometricas(figura1_a);
const figura2 = new FigurasGeometricas(figura2_a);
const figura3 = new FigurasGeometricas(figura3_a);

figura1.ObtenerInfo();
figura3.ObtenerInfo();
figura2.ObtenerInfo();