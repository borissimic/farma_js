/*In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.*/

function createAnimal(chickens, cows, pigs) {
  const animals = {
    chickens,
    cows,
    pigs,
    totalLegs: function () {
      return this.chickens * 2 + (this.cows + this.pigs) * 4;
    },
  };

  return animals;
}
const vagon1 = createAnimal(3, 3, 3);
const vagon2 = createAnimal(5, 5, 8);

console.log(vagon1.totalLegs());
console.log(vagon2.totalLegs());
