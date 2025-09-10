import { PayMentMethod } from "./PayMentMethod";

export class CreditCardPayMent extends PayMentMethod {
    pay(amount) {
        console.log(`Pagando ${amount} con tarjeta de crédito.`);
    }
}