class Libro {
    constructor(titulo, autor, isbn, publicoEditorial) {
        this._titulo = titulo;
        this._autor = autor;
        this._isbn = isbn;
        this.publicoEditorial = publicoEditorial;
    }

    getTitulo() {
        return this._titulo;
    }

    getAutor() {
        return this._autor;
    }

    getIsbn() {
        return this._isbn;
    }

    setTitulo(newTitle) {
        this._titulo = newTitle;
    }

    setAutor(newAutor) {
        this._autor = newAutor;
    }

    setIsbn(newIsbn) {
        this._isbn = newIsbn;
    }

    detalles() {
        document.write(
            '-------------------<br>' +
            'Detalles del libro<br>' +
            '-------------------<br><br>' +
            `Titulo : ${this._titulo}<br>` +
            `Autor : ${this._autor}<br>` +
            `Isbn : ${this._isbn}<br>` +
            `Publico editorial : ${this.publicoEditorial}<br><br>`
        );
    }
}



const libro = new Libro('Mariposas', 'Link', '1514kakfksy24', 'Publico');
libro.detalles();

document.write('---------------------------------------<br><br>');

libro.setTitulo('Las mariposas');
document.write(`Titulo : ${libro.getTitulo()}<br>`);
libro.setAutor('Link Marcus');
document.write(`Precio : ${libro.getAutor()}<br>`);
libro.setIsbn('siowh9184');
document.write(`ISBN : ${libro.getIsbn()}<br>`)
document.write(`Publico editorial : ${libro.publicoEditorial}<br><br>`);