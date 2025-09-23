import {TelefonoBasico} from "./TelefonoBasico";

export class ZTE2 extends TelefonoBasico {
    constructor(marca: string, modelo: number, precio: number, RAM: number) {
        super(marca, modelo, precio, RAM);
    }

    escribir(): void {
        console.log(`Escribiendo desde mi ${this.marca}`);
    }

    llamar(): void {
        console.log(`Llamando desde mi ${this.marca}`);
    }
}