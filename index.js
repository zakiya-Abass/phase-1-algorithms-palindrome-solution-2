function isPalindrome(word) {
  //iterate from the beginig to the midle
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    //check each letter to the coresponding letter from the end
    const j = word.length - 1 - i;
    const startChar = word[i];
    const endChar = word[j];
    //if any letters dont match ,return false;
    if (startChar !== endChar) {
      return false;
    } else {
      return true;
    }
  }
}

/* 
  Add your pseudocode here
  initializing a function that returns either true or false 
  the first letter should be equal to the last letter when reverted
  psudocode 
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
