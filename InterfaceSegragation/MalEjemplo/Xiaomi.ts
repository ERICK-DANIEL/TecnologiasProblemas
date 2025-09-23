import {Telefono} from "./Telefono";

export class Xiaomi extends Telefono {
    constructor(marca: string, precio: number, modelo: number, RAM: number) {
        super(marca, precio, modelo, RAM);
    }

    escribir(): void {
        console.log("Escribiendo en el Xiaomi");
    }

    llamar(): void {
        console.log("Llamando desde el Xiaomi");
    }

    pagarConRFC(): void {
        console.log("Pagando con RFC en el Xiaomi");
    }

    usarAsistenciaVirtual(): void {
        console.log("Usando asistencia virtual en el Xiaomi");
    }

    desbloqueoConHuella(): void {
        console.log("Desbloqueo con huella en el Xiaomi");
    }
}
