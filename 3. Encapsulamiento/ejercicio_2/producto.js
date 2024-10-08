

class Producto {
    constructor(nombre, precio, publicos, cantidad, categoria) {
        this._nombre = nombre;
        this._precio = precio;
        this.publicos = publicos;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    name() {
        return this._nombre;
    }

    precio() {
        return this._precio;
    }

    setName(newName) {
        this._nombre = newName;
    }

    setPrecio(newPrecio) {
        this._precio = newPrecio;
    }

    detalles() {
        document.write(
            '<br>---------------------<br>' +
            'Detalles del producto<br>' +
            '---------------------<br><br>' +
            `Nombre : ${this._nombre}<br>` +
            `Precio : ${this._precio}<br>` +
            `Publico : ${this.publicos}<br>` +
            `Cantidad : ${this.cantidad}<br>` +
            `Categoria : ${this.categoria}<br><br>`
        );
    }

}



const producto = new Producto('LavaRopa', 2000, 'Si', 40, 'Electrico')

producto.detalles()

document.write('---------------------------------------<br><br>')

producto.setName('Licuadora')
document.write(`Nombre : ${producto.name()}<br>`)
producto.setPrecio(5000)
document.write(
    `Precio : ${producto.precio()}<br>` +
    `Publico : ${producto.publicos}<br>` +
    `Cantidad : ${producto.cantidad}<br>` +
    `Categoria : ${producto.categoria}<br>`
)