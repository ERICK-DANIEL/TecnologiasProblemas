import { PayMentService } from "./services/PayMentService";
import { CreditCardPayMent } from "./models/CreditCardPayMent";
import { PayPalPayMent } from "./models/PayPalPayMent";
import { BitcoinPayMent } from "./models/BitcoinPayMent";
import { PayMentMethod } from "./models/PayMentMethod";

const paymentService = new PayMentService();

const creditCardPayment = new CreditCardPayMent();
const paypalPayment = new PayPalPayMent();
const bitcoinPayment = new BitcoinPayMent();

paymentService.serviceProcess(creditCardPayment, 100);
paymentService.serviceProcess(paypalPayment, 200);
paymentService.serviceProcess(bitcoinPayment, 300);