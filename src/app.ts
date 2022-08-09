// 
import { Invoice } from "./classes/Invoice.js";
import { ListItem } from "./classes/ListItem.js";
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
// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')!;

const list = new ListItem(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormater;
    let value:[string,string,number] = [tofrom.value, details.value, amount.valueAsNumber]
    if (type.value === 'invoice') {
        doc = new Invoice(...value)
    } else {
        doc = new Payment(...value)
    }
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.value
    // )
    list.render(doc, type.value, 'end')
})

const AddUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid }
}
let docOnes = AddUID({ name: 'Yoshi', age: 40 });
console.log(docOnes)
//Tuples    
let arr = ['ryu', 25, true]


let tup: [string, number, boolean] = ['ruy', 23, true]




// Enums
enum ResourceType { Book, Authur, Film }


interface Resource<T> {
    uid: number;
    resourceType: number;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.Authur,
    data: { name: 'shaun' }
}

const docFour: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.Book,
    data: ['bread']
}

