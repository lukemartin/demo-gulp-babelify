import {Person} from './module'

let luke = new Person('Luke');
luke.think(1000).then(() => {
        luke.greet();
    })
    .catch(err => {
        console.error(err);
    });