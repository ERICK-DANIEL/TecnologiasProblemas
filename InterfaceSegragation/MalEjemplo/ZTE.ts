import { Telefono } from "./Telefono";

export class ZTE extends Telefono {
    constructor(marca: string, precio: number, modelo: number, RAM: number) {
        super(marca, precio, modelo, RAM);
    }

    escribir(): void {
        console.log("Escribiendo en el ZTE");
    }

    llamar(): void {
        console.log("Llamando desde el ZTE");
    }

    pagarConRFC(): void {
        console.log("Este dispositivo ZTE no tiene acceso a esta función");
    }

    usarAsistenciaVirtual(): void {
        console.log("Este dispositivo ZTE no tiene acceso a esta función");
    }

    desbloqueoConHuella(): void {
        console.log("Este dispositivo ZTE no tiene acceso a esta función");
    }
}