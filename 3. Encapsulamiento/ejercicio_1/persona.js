class Personas {
    constructor(nombres, apellidos, identidad, fechaDeNacimiento, sexo) {
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._identidad = identidad;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.sexo = sexo;
    }

    nombres() {
        return this._nombres;
    }

    apellidos_() {
        return this._apellidos;
    }

    identidad() {
        return this._identidad;
    }

    setName(newName) {
        this._nombres = newName;
    }

    setApellidos(newApellido) {
        this._apellidos = newApellido;
    }

    detalles() {
        document.write(
            `<br>----------------------<br>` +
            'Detalles de la persona<br>' +
            '----------------------<br><br>' +
            `Nombres : ${this._nombres}<br>` +
            `Apellidos : ${this._apellidos}<br>` +
            `N° de identidad : ${this._identidad}<br>` +
            `Fecha de nacimiento : ${this.fechaDeNacimiento}<br>` +
            `Sexo : ${this.sexo}<br><br>`
        )
    }
}

const persona = new Personas('Jorge', 'Rojas', 141425326262, '14/09/1987', 'M')

persona.detalles()

document.write('---------------------------------------<br><br>')

persona.setName('Carlos')
document.write(`Nombres : ${persona.nombres()}<br>`)
persona.setApellidos('Perez')
document.write(
    `Apellidos : ${persona.apellidos_()}<br>` +
    `N° de idnetidad : ${persona.identidad()}<br>` +
    `Fecha de nacimiento : ${persona.fechaDeNacimiento}<br>` +
    `Sexo : ${persona.sexo}<br>`
)