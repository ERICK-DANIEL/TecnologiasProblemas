export abstract class TelefonoBasico {
    marca: string;
    modelo: number;
    precio: number;
    RAM: number;

    constructor(marca: string, modelo: number, precio: number, RAM: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.RAM = RAM;
    }

    abstract escribir(): void;
    abstract llamar(): void;
}