// 
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormater } from "./interfaces/hasFormater.js";

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


const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc : HasFormater;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value,details.value,amount.valueAsNumber)
    }
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.value
    // )
})