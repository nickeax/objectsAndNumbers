import { Person } from './person.js';
import { PeopleManager } from './peopleManager.js';

let peopleManager = new PeopleManager();
let peopleManager2 = new PeopleManager();
let peopleManager3 = new PeopleManager();

peopleManager.buildList(10);
peopleManager.displayAll(5, document.querySelector('#ex1'));

peopleManager2.buildList(23);
peopleManager2.displayAll(8, document.querySelector('#ex2'));

peopleManager2.buildList(150);
peopleManager2.displayAll(8, document.querySelector('#ex3'));