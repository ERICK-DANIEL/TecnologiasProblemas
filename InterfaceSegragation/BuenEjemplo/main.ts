import {ZTE2} from "./ZTE2";
import {Iphone20} from "./Iphone20";
import {Xiaomi12} from "./Xiaomi12";

const zte = new ZTE2("ZTE", 2, 100, 2);
console.log(zte);
zte.escribir();
zte.llamar();

const xiaomi = new Xiaomi12("Xiaomi", 12, 500, 8);
console.log(xiaomi);
xiaomi.escribir();
xiaomi.llamar();
xiaomi.desbloqueoConHuella();

const iphone = new Iphone20("Iphone", 20, 1000, 16);
console.log(iphone);
iphone.escribir();
iphone.llamar();
iphone.desbloqueoConHuella();
iphone.usarAsistenciaVirtual();