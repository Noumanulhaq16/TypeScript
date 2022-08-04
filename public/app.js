// 
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormater;
// let docTwo: HasFormater;
// docOne = new Invoice('Yoshi', 'WebDev', 500)
// docTwo = new Payment('Fork', 'Yup', 211)
// let docs: HasFormater[] = []
// docs.push(docOne, docTwo)
// console.log(docs)
// const InvoiceOne = new Invoice('Mario', 'Work ON TypeScript', 250)
// const InvoiceTwo = new Invoice('Luigi', 'Work ON TypeScript', 300)
// // console.log(InvoiceOne,InvoiceTwo);
// let invoice: Invoice[] = [];
// invoice.push(InvoiceOne, InvoiceTwo)
// invoice.forEach(inv => {
//     console.log(inv.detail, inv.amount, inv.format())
// })
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.value
    // )
});
