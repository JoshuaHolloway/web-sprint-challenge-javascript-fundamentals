/* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
The zoo needs a list of all their animal's names converted to lower case. 
Using lowerCaseNames use .map() to create a new array of strings with the animal's names in lowercase and return the new array. 
For example: ['jackal, asiatic', .....]
*/

export default _ => _.map(elem => elem.animal_name.toLowerCase());