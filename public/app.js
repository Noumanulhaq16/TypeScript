// 
import { Invoice } from "./classes/Invoice.js";
import { ListItem } from "./classes/ListItem.js";
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
// console.log(form.children)
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListItem(ul);
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
    list.render(doc, type.value, 'end');
});
const AddUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOnes = AddUID({ name: 'Yoshi', age: 40 });
console.log(docOnes);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
