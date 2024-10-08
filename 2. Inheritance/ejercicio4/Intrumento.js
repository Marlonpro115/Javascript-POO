class Intrumento {

    constructor(tipo, marca, material) {
        this.tipo = tipo
        this.marca = marca;
        this.material = material;
        this.precio = parseInt(prompt('Ingrese el precio del producto : '));
    }


    detalles() {
        document.write(
            '<br><br>------------------------<br>' +
            'Detalles del Intrumento<br>' +
            '------------------------<br><br>' +
            `Marca : ${this.marca}<br>` +
            `Tipo : ${this.tipo}<br>` +
            `Material : ${this.material}<br>` +
            `Preicio : ${this.precio}<br><br>`
        )
    }

}

class Guitarra extends Intrumento {
    constructor(tipo, marca, material, NumeroDeCuerdas) {
        super(tipo, marca, material);
        this.NumeroDeCuerdas = NumeroDeCuerdas;
        this.acordesBasicos = parseInt(prompt('Ingrese cuando acordes hay : '));
    }

    TocarGuitarra() {
        document.write(
            `El numero de cuerdas de la guitarra es : ${this.NumeroDeCuerdas}<br><br>` +
            `El numero de acordes es : ${this.acordesBasicos}<br><br>`
        )

        if (this.acordesBasicos <= 5) {
            document.write(`La guitarra no se puede tocar bien!!!<br><br>`)
        } else {
            document.write(`La guitarra se puede tocar con normalidad!!!<br><br>`)
        }
    }

}

const guitar_1 = new Guitarra('Guitara', 'Proyect', 'Metal', 5);
guitar_1.detalles();
guitar_1.TocarGuitarra();