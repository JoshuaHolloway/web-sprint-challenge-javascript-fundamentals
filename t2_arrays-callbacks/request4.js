/* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
The zoo needs to know their total animal population across the United States. 
Using USApop find the total population from the zoos array using the .reduce() method. 
Remember the reduce method takes two arguments: a callback (which itself takes two args - the accumulator and the item), and an initial value for the count.
*/

const init_val = 0;
export default _ => _.reduce((sum, elem) => sum + elem.population, init_val);