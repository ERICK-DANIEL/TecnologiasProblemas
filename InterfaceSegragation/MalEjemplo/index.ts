import {ZTE} from "./ZTE";
import {Iphone16} from "./Iphone16";
import {Xiaomi} from "./Xiaomi";

const zte = new ZTE("ZTE", 5000, 2022, 4);
const iphone = new Iphone16("Iphone", 20000, 2023, 8);
const xiaomi = new Xiaomi("Xiaomi", 7000, 2022, 6);

console.log(zte);
zte.escribir();
zte.llamar();
zte.pagarConRFC();
zte.usarAsistenciaVirtual();
zte.desbloqueoConHuella();

console.log(iphone);
iphone.escribir();
iphone.llamar();
iphone.pagarConRFC();
iphone.usarAsistenciaVirtual();
iphone.desbloqueoConHuella();

console.log(xiaomi);
xiaomi.escribir();
xiaomi.llamar();
xiaomi.pagarConRFC();
xiaomi.usarAsistenciaVirtual();
xiaomi.desbloqueoConHuella();