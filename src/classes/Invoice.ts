import { HasFormater } from "../interfaces/hasFormater.js";
export class Invoice implements HasFormater {
    private client: string;
    readonly detail: string;
    public amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $ ${this.amount} for ${this.detail}`
    }
}