import {TelefonoBasico} from "./TelefonoBasico";
import {DesbloqueoBiometrico} from "./DesbloqueoBiometrico";
import {AsistenteVirtual} from "./AsistenteVirtual";

export class Iphone20 extends TelefonoBasico implements DesbloqueoBiometrico, AsistenteVirtual {
    constructor(marca: string, modelo: number, precio: number, RAM: number) {
        super(marca, modelo, precio, RAM);
    }

    escribir(): void {
        console.log(`Escribiendo desde mi ${this.marca}`);
    }

    llamar(): void {
        console.log(`Llamando desde mi ${this.marca}`);
    }

    desbloqueoConHuella(): void {
        console.log(`Desbloqueando mi ${this.marca} con huella`);
    }

    usarAsistenciaVirtual(): void {
        console.log(`Usando el asistente virtual en mi ${this.marca}`);
    }
}