function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

    return word[0].toUpperCase() + word.substring(1)

  
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let vat = ((vatRate/100)*originalPrice)+originalPrice;
  return +vat.toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let finalSalePrice =  originalPrice - (reduction/ 100)* originalPrice;
  return +finalSalePrice.toFixed(2);

}


function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const middle = Math.floor(str.length/2);
    if (str.length % 2 == 0) {
        return str[middle-1] + str[middle];
}else
        return str[middle] 
}


function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");

}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let reverse = [];
  for(let i in words){
    let word = words[i].split("").reverse().join("");
    reverse.push(word);
  }
  return reverse;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let counter = 0;
  for (const input of users) {
    if (input.status == 0) counter += 1;
  }
  return users.length;
}


function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0;
    for(const i in scores) {
        sum += scores[i];
    }
   
    let numbers = scores.length;
  
    return (sum / numbers).toFixed(0,2);
}


function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
