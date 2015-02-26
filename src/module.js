export class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hi, ${this.name}`);
    }
    think(duration) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, duration);
        });
    }
}