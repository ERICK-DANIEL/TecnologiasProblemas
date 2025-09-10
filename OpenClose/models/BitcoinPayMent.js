import { PayMentMethod } from "./PayMentMethod";

export class BitcoinPayMent extends PayMentMethod {
    pay(amount) {
        console.log(`Pagando ${amount} con Bitcoin.`);
    }
}
