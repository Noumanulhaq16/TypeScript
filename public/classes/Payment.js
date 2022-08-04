export class Payment {
    constructor(c, d, a) {
        this.recipent = c;
        this.detail = d;
        this.amount = a;
    }
    format() {
        return `${this.recipent} owes $ ${this.amount} for ${this.detail}`;
    }
}
