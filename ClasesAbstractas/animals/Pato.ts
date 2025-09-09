import { Animal } from './Animal.ts';
import { Volar } from '../skills/Volar.ts';
import { Nadar } from '../skills/INadar.ts';

export class Pato extends Animal implements Volar, Nadar{
  constructor(public nombre: string) {
    super(nombre);
  }

  hacerSonido(): void {
    console.log(`${this.nombre} hacer Cuak!!!!!!`);
  }

  volar(): void {
    console.log("El pato vuela");
  }

  nadar(): void {
    console.log("El pato nada");
  }
}