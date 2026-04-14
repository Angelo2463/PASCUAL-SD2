console.log("Welcome to Session 21!");

// [Section] JavaScript Objects
// Imitates real-world objects and descriptions

let arr = [1, 2, 3, 4, 5];
let obj = {
    name: "Gonzales",
    age: 21,
};

console.log(arr);
console.log(obj);

let person = {
    fullName: "Popoy Barzaga",
    age: 21,
    height: 183,
    weight: 80,
};
console.log(person);

// Dot notation - Access value inside an object property
console.log(person.fullName);
console.log(`Hi, my name is ${person.fullName} and I am ${person.age} years old.`);

console.log(person['fullName']);

// Updating a value via dot notation
person.fullName = "Michael Barzaga";
console.log(person);

person.email = "Pipoy@mail.com";
console.log(person);

// Class and Objects
class Car {
    constructor(brand, fuel, displacement, seatCapacity) {
        this.brand = brand;
        this.fuel = fuel;
        this.displacement = displacement;
        this.seatCapacity = seatCapacity;
    }

    makeSound() {
        console.log("Vroom Vroom!");
    }
}

console.log(Car);

// Instance -> copy/duplicate of a class
let car = new Car("Toyota", "Gasoline", 1500, 5);
console.log(car);
console.log(car.brand);
car.makeSound();

let car2 = new Car("Honda", "Gasoline", 1500, 5);
console.log(car2);

// [SECTION] Pokemon

class Pokemon {
    constructor(name, level, baseHp, mana) {
        this.name = name;
        this.level = level;
        this.maxHp = baseHp * level;
        this.hp = this.maxHp;
        this.mana = mana;
    }

    tackle(target) {
        const damage = 50;
        target.hp = Math.max(0, target.hp - damage);
        console.log(`${this.name} uses Tackle on ${target.name}!`);
    }

    skill1(target) {
        let damage;
        let skillName;
        let manaCost = 20;

        if (this.name === "Pikachu") {
            skillName = "Thunderbolt";
            damage = 50 ;
        } else if (this.name === "Charmander") {
            skillName = "Flamethrower";
            damage = 40;
        } else {
            console.log(`${this.name} does not have a special skill.`);
            return;
        }

        if (this.mana < manaCost) {
            console.log(`${this.name} does not have enough mana to use ${skillName}!`);
            return;
        }

        target.hp = Math.max(0, target.hp - damage);
        this.mana -= manaCost;
        console.log(`${this.name} uses ${skillName} on ${target.name}!`);
        console.log(`${this.name} has ${this.mana} mana left.`);
    }

    potion() {
        if (this.hp < this.maxHp) {
            this.hp = Math.min(this.maxHp, this.hp + 20);
            console.log(`${this.name} uses a potion on themselves!`);
            console.log(`${this.name} health: ${this.hp} HP`);
        } else {
            console.log(`${this.name} already has full HP!`);
        }
    }
}

let pikachu = new Pokemon("Pikachu", 25, 100, 50);
console.log(pikachu);


let charmander = new Pokemon("Charmander", 20, 90, 40);
console.log(charmander);

pikachu.tackle(charmander);
pikachu.tackle(charmander);
pikachu.tackle(charmander);

console.log(charmander);

charmander.skill1(pikachu);
console.log(pikachu);
console.log(charmander);

charmander.skill1(pikachu);
console.log(pikachu);   
console.log(charmander); 

charmander.skill1(pikachu);
console.log(pikachu);
console.log(charmander);

charmander.potion();
charmander.potion();
charmander.potion();
console.log(charmander);
console.log(pikachu);

pikachu.skill1(charmander);
console.log(pikachu);   
console.log(charmander);

charmander.potion();
console.log(charmander);


