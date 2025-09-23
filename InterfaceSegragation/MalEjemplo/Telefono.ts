export abstract class Telefono {
    marca: string;
    precio: number;
    modelo: number;
    RAM: number;

    constructor(marca: string, precio: number, modelo: number, RAM: number) {
        this.marca = marca;
        this.precio = precio;
        this.modelo = modelo;
        this.RAM = RAM;
    }

    abstract escribir(): void;
    abstract llamar(): void;
    abstract pagarConRFC(): void;
    abstract usarAsistenciaVirtual(): void;
    abstract desbloqueoConHuella(): void;
}