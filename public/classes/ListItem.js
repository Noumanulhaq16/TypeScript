export class ListItem {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pops) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pops === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
