import { HasFormater } from "../interfaces/hasFormater.js";
export class Payment implements HasFormater {
    private recipent: string;
    readonly detail: string;
    public amount: number;

    constructor(c: string, d: string, a: number) {
        this.recipent = c;
        this.detail = d;
        this.amount = a;
    }

    format() {
        return `${this.recipent} owes $ ${this.amount} for ${this.detail}`
    }
}