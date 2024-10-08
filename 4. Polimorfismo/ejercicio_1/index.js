// Crea tres clases: Aprendiz, Instructor y Coordinador, cada una con un método mostrar_info()  
// que describa el tipo de vehículo y una función para mostrar el polimorfismo mostrar_informacion() 

// Clase Aprendiz  

class Aprendiz {
    constructor(nombres, apellidos, cedula, sexo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.sexo = sexo;
        this.formacion = prompt("Programa de formacion: ");
        this.regional = prompt("Regional: ");
    }

    mostrar_info() {
        document.write(
            `================================<br>` +
            `Hola, soy un aprendiz SENA<br>` +
            `${this.nombres} ${this.apellidos}<br>` +
            `CC: ${this.cedula}<br>` +
            `Sexo: ${this.sexo}<br>` +
            `Estudiante del programa: ${this.formacion} de la Regional ${this.regional}<br><br>`
        );
    }
}

// Clase Instructor  

class Instructor {
    constructor(nombres, apellidos, cedula, area) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.area = area;
    }

    mostrar_info() {
        document.write(
            `================================<br>` +
            `Hola, soy un instructor del SENA<br>` +
            `${this.nombres} ${this.apellidos}<br>` +
            `CC: ${this.cedula}<br>` +
            `Área de instrucción: ${this.area}<br><br>`
        );
    }
}

// Clase Coordinador  

class Coordinador {
    constructor(nombres, apellidos, cedula, departamento) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.departamento = departamento;
    }

    mostrar_info() {
        document.write(
            `================================<br>` +
            `Hola, soy un coordinador del SENA<br>` +
            `${this.nombres} ${this.apellidos}<br>` +
            `CC: ${this.cedula}<br>` +
            `Departamento: ${this.departamento}<br><br>`
        );
    }
}

// Función que muestra la información de cualquier tipo de objeto  

function mostrar_informacion(persona) {
    persona.mostrar_info();
};

// Instancias de cada clase

const objeto_aprendiz = new Aprendiz("Samuel Elias", "Vega Barrios", 1231338164, "Masculino");
const objeto_instructor = new Instructor("Laura", "Rodríguez", 987654321, "Programación");
const objeto_coordinador = new Coordinador("Carlos", "Martínez", 123456789, "Recursos Humanos");

// Llamado al método mostrar_info para cada objeto
mostrar_informacion(objeto_aprendiz);
mostrar_informacion(objeto_instructor);
mostrar_informacion(objeto_coordinador);