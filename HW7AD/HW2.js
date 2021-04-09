function Doctor (walk, eat, drink, cure) {
    this.walk = walk;
    this.eat = eat;
    this.drink = drink;
    this.cure = cure;
}

function Dentist (walk, eat, drink, cure) {
    this.walk = walk;
    this.eat = eat;
    this.drink = drink;
    this.cure = cure;
}

function Surgen (walk, eat, drink, cure) {
    this.walk = walk;
    this.eat = eat;
    this.drink = drink;
    this.cure = cure;
}

Doctor.prototype.cureDiseases = function () {
    return `Doctor walks with ${this.walk} speed, eat ${this.eat} and drink ${this.drink}. Also cure ${this.cure}.`
}

Dentist.prototype = new Doctor();

Surgen.prototype = new Doctor();

var Ben = new Doctor (10, 'burger', 'cocacola', 'head ache');
var Stasy = new Dentist(2, 'rice', 'water', 'teeth ache');
var Stan = new Surgen(3, 'meat', 'coffe', 'stomach ache')

console.log(Ben)
console.log(Ben.cureDiseases());

console.log(Stasy)
console.log(Stasy.cureDiseases());

console.log(Stan)
console.log(Stan.cureDiseases());

//-----------------------------------------------------------------//
// class Man  {
//     constructor (walk, eat, drink) {
//         this.walk = walk;
//         this.eat = eat;
//         this.drink = drink;
//     }
//     showInfo () {
//         return `Man walks with speed ${this.walk} km/h, eat ${this.eat}, drink ${this.drink}`
//     }
// }

// class Doctor extends Man {
//     constructor (walk, eat, drink, cure) {
//         super(walk, eat, drink);
//         this.cure = cure;
//     }
//     showInfo () {
//         return `Doctor walks speed ${this.walk} km/h, eat ${this.eat}, drink ${this.drink}, and cure ${this.cure}`
//     }
// }

// class Soldier extends Man {
//     constructor (walk, eat, drink, shoot) {
//         super (walk, eat, drink);
//         this.shoot = shoot;
//     }
//     showInfo () {
//         return `Soldier walks speed ${this.walk} km/h, eat ${this.eat}, drink ${this.drink}, and shoot ${this.shoot}`
//     }
// }

// let Frank = new Man (7, 'bread', 'coke')
// let Bob = new Doctor(5, 'meat', 'soda', 'diseases');
// let James = new Soldier(10, 'poregge', 'water', 'bullets')

// console.log(Frank.showInfo());
// console.log(Bob.showInfo());
// console.log(James.showInfo());