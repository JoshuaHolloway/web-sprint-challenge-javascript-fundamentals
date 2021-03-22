// 🦁🦁🦁 Topic 2: ADVANCED Array Methods 🦁🦁🦁
// Given this zoo data from around the United States, follow the instructions below. Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
  { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
  { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
  { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
  { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
  { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
  { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
  { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
  { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
  { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
];


import animalNames from './request1.js';
import lowerCaseNames from './request2.js'
// console.log(animalNames(zooAnimals));
console.log(lowerCaseNames(zooAnimals));
export {animalNames, lowerCaseNames};





/* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
The zoo is concerned about animals with a lower population count. 
Using lowPopulationAnimals use .filter() to create a new array of objects which contains only the animals with a population of less than 5.
*/

function lowPopulationAnimals(/*Your Code Here*/){
  /*Your Code Here*/
}


/* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
The zoo needs to know their total animal population across the United States. 
Using USApop find the total population from the zoos array using the .reduce() method. 
Remember the reduce method takes two arguments: a callback (which itself takes two args - the accumulator and the item), and an initial value for the count.
*/

function USApop(/*Your Code Here*/){
  /*Your Code Here*/
}