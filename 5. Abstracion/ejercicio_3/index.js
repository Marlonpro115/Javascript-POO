// Ejercicio 3: Crea una clase abstracta TareaEmpleado con un método abstracto realizar_tarea(). 
// Implementa las clases Ingeniero y Doctor que heredan de TareaEmpleado e implementan el método realizar_tarea() de manera específica según su especialidad.

class TareaEmpleado {
    realizarTarea() {
        throw new Error("Método 'realizarTarea' no implementado");
    }
}

class Ingeniero extends TareaEmpleado {
    constructor(horas, accion) {
        super();
        this.horas = horas;
        this.accion = accion;
    }

    realizarTarea() {
        document.write(
            `==========================================================<br>` +
            `El Ingeniero ha realizado su trabajo correctamente!!!<br><br>` +
            `Horas de trabajo: ${this.horas}<br>` +
            `Acción realizada: ${this.accion}<br>` +
            `==========================================================<br>`
        );
    }
}

class Doctor extends TareaEmpleado {
    constructor(horas, accion) {
        super();
        this.horas = horas;
        this.accion = accion;
    }

    realizarTarea() {
        document.write(
            `==========================================================<br>` +
            `El Doctor ha realizado su trabajo correctamente!!!<br><br>` +
            `Horas de trabajo: ${this.horas}<br>` +
            `Acción realizada: ${this.accion}<br>` +
            `==========================================================<br>`
        );
    }
}

// Uso de las clases
const ingeniero = new Ingeniero(12, 'Supervisar');
const doctor = new Doctor(45, 'Operar');

ingeniero.realizarTarea();
doctor.realizarTarea();
