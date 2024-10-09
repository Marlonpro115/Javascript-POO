// Ejercicio 2: Crea una clase abstracta Empleado con un método abstracto calcular_salario(). 
// Luego, crea dos clases concretas EmpleadoTiempoCompleto y EmpleadoPorHoras que implementen calcular_salario() de manera distinta.

class Empleado {

    calcularSalario() {
        throw new Error("Método 'calcularSalario' no implementado");
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(horas) {
        super();
        this.horas = horas;
    }

    calcularSalario() {
        return 24 * 1000 + 3;
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(horas) {
        super();
        this.horas = horas;
    }

    calcularSalario() {
        return this.horas * 100;
    }
}

// Uso de las clases
const empleadoTiempoCompleto = new EmpleadoTiempoCompleto(24);
const empleadoPorHoras = new EmpleadoPorHoras(100);

document.write(
    `El empleado a tiempo completo ganó por su trabajo un total de: ${empleadoTiempoCompleto.calcularSalario()}<br><br>` +
    `El empleado por sus horas de trabajo ganó un total de: ${empleadoPorHoras.calcularSalario()}`
);
