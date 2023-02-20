export class Pedidos {
    public amount: number;
    public payment_date: Date;

    constructor(amount: number, payment_date: Date) {
        this.amount = amount;
        this.payment_date = payment_date;
    }
}
