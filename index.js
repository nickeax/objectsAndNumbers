import { Person } from './person.js';
import { PeopleManager } from './peopleManager.js';

let peopleManager = new PeopleManager();

peopleManager.buildList(100);
peopleManager.displayAll(14);