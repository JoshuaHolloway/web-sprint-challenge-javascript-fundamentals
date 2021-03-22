/* 🦁🦁🦁 Request 1: .forEach() 🦁🦁🦁
The zoos want to display both the scientific name and the animal name in front of the habitats. 
Use animalNames to populate and return the displayNames array with only the animal name and scientific name of each animal. 
displayNames will be an array of strings, and each string should follow this pattern: "name: {name}, scientific: {scientific name}"
*/

function animalNames($){
  const displayNames = [];                                //  name: {name}, scientific: {scientific name}
  $.forEach(elem => displayNames.push(`name: ${elem.animal_name}, scientific: ${elem.scientific_name}`));
  return displayNames;
}
export default animalNames;
