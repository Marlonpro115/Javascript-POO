// Ejercicio 4: Instrumentos Musicales con Polimorfismo
// Crea clases: Guitarra, Piano, y Trompeta, cada una con un método tocar() que describa la información técnica del instrumento.

class Guitarra {
    constructor(tipo, marca, material) {
        this.tipo = tipo;
        this.marca = marca;
        this.material = material;
        this.cuerdas = parseInt(prompt('Ingrese el numero de cuerdas : '));
    }

    tocar() {
        document.write(
            '<strong>Informacion de la guitarra</strong><br><br>' +
            'La guitarra es un instrumento musical de cuerda pulsada, compuesto de una caja de madera, un mástil sobre el que va adosado el diapasón o trastero —generalmente con un agujero acústico en el centro de la tapa (boca)—, y seis cuerdas. Sobre el diapasón van incrustados los trastes, que permiten las diferentes notas.<br><br>')
    }
}

class Piano {
    constructor(tipo, marca, material) {
        this.tipo = tipo
        this.marca = marca
        this.material = material
        this.cuerdas = parseInt(prompt('Ingrese el numero de cuerdas : '))
    }

    tocar() {
        document.write(
            '<strong>Informacion del piano</strong><br><br>' +
            'El piano es un instrumento de cuerda pulsada: su interior contiene cuerdas conectadas a unos macillos. Cada tecla mueve un macillo dentro del piano y al presionar las teclas, esos macillos golpean las cuerdas. Cuanto más fuerte se tocan las teclas, más fuerte golpean y por lo tanto, más fuerte será el sonido.<br><br>')
    }
}

class Trompeta {
    constructor(tipo, marca, material) {
        this.tipo = tipo;
        this.marca = marca;
        this.material = material;
        this.cuerdad = parseInt(prompt('Ingrese el numero de cuerdas : '));
    }

    tocar() {
        document.write(
            '<strong>Informacion de la trompeta</strong><br><br>' +
            'La trompeta es un instrumento musical de viento, que pertenece a la familia de los instrumentos de viento metal, fabricado en aleación de metal. El sonido se produce gracias a la vibración de los labios del intérprete en la parte denominada boquilla a partir de la columna del aire (flujo del aire). Comúnmente, suele estar afinada en si ♭ (bemol), es decir, un tono por debajo de la afinación escrita en el pentagrama, aunque también hay trompetas afinadas en fa, en do, en la y en mi, - bemol -.Al músico que toca la trompeta se le conoce como trompetista o trompeta.<br><br>')
    }
}

function mostarComoSeToca(intrumento) {
    intrumento.tocar();
}

const objectGuitarra = new Guitarra('Bajo', 'M-523', 'Metalico');
const objectPiano = new Piano('Elegante', 'k-14141', 'Madera');
const objectTrométa = new Trompeta('Florcorica', 'Yin-1', 'Metalico');

document.write('<br><br>');
mostarComoSeToca(objectGuitarra);
mostarComoSeToca(objectPiano);
mostarComoSeToca(objectTrométa);