import { Person } from './person.js';

const output = document.querySelector('#output');
const names = ["Natalia", "Nick", "Timmy", "Ellen", "Jade", "Charles", "Joe", "Brad", "Sally", "Silly", "Jack", "Mark", "Mick", "Sue", "Jenny"];
const domains = ["facebook", "google", "yahoo", "amazon", "youtube", "gmail", "outlook", "hotmail"];
const tlds = ["com", "biz", "gov", "net", "org", "io"];

export class PeopleManager {
    constructor() {
        this.peopleArr = [];
    }
    buildList(num) {
        for (let i = 0; i < num; i++) {
            this.peopleArr.push(new Person(
                this.randomElement(names),
                this.randomNum(100),
                this.createEmail(this.randomElement(names))
            ));
        }
    }

    displayAll(rptHeader) {
        output.innerHTML = "";
        output.innerHTML += `<div class="row">`;
        Object.keys(this.peopleArr[0]).forEach(x => {
            output.innerHTML += `<span class="item bold">${x.slice(1,)}</span>`
        });
        output.innerHTML += `</div>`;
        this.peopleArr.forEach((x, i) => {
            if (i % rptHeader === 0 && i !== 0) {
                output.innerHTML += `<div class="row">`;
                Object.keys(x).forEach(y => output.innerHTML += `<span class="item bold">${y.slice(1,)}</span>`);
                output.innerHTML += `</div>`;
            }

            output.innerHTML += `<div class="row">`;
            Object.values(x).forEach(x => output.innerHTML += `<span class="item">${x}<//span>`);
            output.innerHTML += `</div>`;
        })
    }

    randomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    randomNum(max) {
        return Math.floor(Math.random() * max);
    }

    createEmail(str) {
        return `${str.toLowerCase()}@${this.randomElement(domains)}.${this.randomElement(tlds)}`;
    }
}