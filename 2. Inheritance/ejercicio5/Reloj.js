/**
 * Clase de relojes
 */
class Reloj {
    /**
     * 
     * @param {String} marca 
     * @param {String} tipo 
     * @param {String} material 
     */
    constructor(marca, tipo, material) {
        this.tipo = tipo
        this.marca = marca;
        this.material = material;
        this.precio = parseInt(prompt('Ingrese el precio del producto : '));
    }


    /**
     * @returns {String}
     */
    detalles() {
        document.write(
            '<br><br>------------------------<br>' +
            'Detalles del reloj<br>' +
            '------------------------<br><br>' +
            `Marca : ${this.marca}<br>` +
            `Tipo : ${this.tipo}<br>` +
            `Material : ${this.material}<br>` +
            `Preicio : ${this.precio}<br><br>`
        );
    }
}

/**
 * Clase de reloj inteligente
 */
class RelojInteligente extends Reloj {
    /**
     * 
     * @param {String} marca 
     * @param {String} tipo 
     * @param {String} material 
     * @param {String} pantalla 
     */
    constructor(marca, tipo, material, pantalla) {
        super(marca, tipo, material);
        this.pantalla = pantalla;
        this.acordesBasicos = prompt('Ingrese el sistema operativo del reloj : ');
        this.bateria = parseInt(prompt('Ingrese la baterial actual del reloj : '));
    }

    /**
     * @returns {String}
     */
    encenderReloj() {
        document.write(
            `El tipo de pantalla del reloj es : ${this.pantalla}<br><br>` +
            `El sistema operativo del reloj es : ${this.sistema}<br><br>` +
            `Bateria actual del reloj : ${this.bateria}<br><br>`
        );

        if (this.bateria <= 0) {
            document.write(`El reloj ${this.tipo} tiene la bateria baja y no puede encender!!!<br><br>`);
        } else {
            document.write(`El reloj ${this.tipo} puede encender con normalidad!!!<br><br>`);
        }
    }

}

const reloj_1 = new RelojInteligente('Smart', 'Inteligente', 'Metal', 'OLED');
reloj_1.detalles();
reloj_1.encenderReloj();