import { HasFormater } from "../interfaces/hasFormater.js";

export class ListItem {
    constructor(private container: HTMLUListElement) {

    }
    render(item: HasFormater, heading: string, pops: 'start' | 'end'){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');

        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if(pops === 'start'){
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }
    }
}