// Level 1-1
let bucketList = ["USA", "Japan", "Portugal"];
let luckyNumbers = [22, 12, 5, 42];
let favoritePeople = ["me", "also me", "always me"];

console.log(bucketList);
console.log(luckyNumbers);
console.log(favoritePeople);

// Level 1-2
console.log(bucketList[0]);
console.log(bucketList[1]);
console.log(bucketList[2]);

console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(luckyNumbers[3]);

console.log(favoritePeople[0]);
console.log(favoritePeople[1]);
console.log(favoritePeople[2]);

// Level 1-3
console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);

// Level 1-4
console.log(bucketList.length);
bucketList.push("Indonesia", "South America");
console.log(bucketList);
console.log(bucketList.length);

// Level 1-5
console.log(bucketList.pop());
console.log(bucketList);

console.log(luckyNumbers.pop());
console.log(luckyNumbers);

// Level 1-6
console.log(favoritePeople.shift());
console.log(favoritePeople);

// Level 1-7
bucketList.unshift("Australia", "New Zealand");
console.log(bucketList);

// Level 1-8
console.log(bucketList.slice(2, 4));
console.log(bucketList);

// Level 1-9
let numList = [23, 54, 75];
numList.push(22, 12, 42, 5, 7); 
numList.unshift(10, 6, 15, 8, 13);
console.log(numList);
numList.pop();
numList.pop();
console.log(numList);
numList.shift();
numList.shift();
console.log(numList);

// Level 1-10
const futuramaQuote = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";
let futuramaQuoteSplitOne = futuramaQuote.split(".");
let futuramaQuoteSplitTwo = futuramaQuote.split(" ");
console.log(futuramaQuoteSplitOne);
console.log(futuramaQuoteSplitTwo);
