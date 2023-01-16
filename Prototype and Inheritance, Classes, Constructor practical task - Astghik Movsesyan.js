//Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

class Animals {
    constructor() {
        this.name = 'Animal';
    }

    move() {
        console.log(`${this.name} can move`);
    }
}

class Cat extends Animals {
    constructor() {
        super();
        this.name = 'Cat';
    }
}

let cat = new Cat();
console.log(cat.name); // Output: Cat
cat.move(); // Output: Cat can move

