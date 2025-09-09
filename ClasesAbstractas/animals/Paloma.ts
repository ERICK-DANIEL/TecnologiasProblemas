import { Animal } from './Animal';
import { Volar} from '../skills/Volar.ts';

export class Paloma extends Animal implements Volar {
  constructor(public nombre: string) {
    super(nombre);
  }

  hacerSonido(): void {
    console.log(`${this.nombre} hacer Brrrrrr!!!`);
  }

  volar(): void {
    console.log(`${this.nombre} vuela por las nubes`);
  }
}