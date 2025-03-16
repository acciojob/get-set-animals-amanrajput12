//complete this code
class Animal {
	constructor(species){
     this.species=species
	}
	get species(){
		return this.species;
	}
	makeSound(){

		return  console.log("The " +this.species +" makes a sound");
	}
}

class Dog extends Animal {

	constructor(species){
		super(species);
	}
	bark(){
		return console.log('woof')
	}
}

class Cat extends Animal {
constructor(species){
  super(species);
	
}
	purr(){
		return  console.log('purr')
	}
}

const myCat = new Cat("Siamese");

myCat.makeSound();

myCat.purr();

const myDog = new Dog("Golden Retriever");

myDog.makeSound();

myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
