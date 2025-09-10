import { PayMentMethod } from "./PayMentMethod";

export class PayPalPayMent extends PayMentMethod {
    pay(amount) {
        console.log(`Pagando ${amount} con PayPal.`);
    }
}
