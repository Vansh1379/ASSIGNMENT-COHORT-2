/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0;
    let n = str.length;
    let str1 = str.toUpperCase().split('');
    for(let i=0; i<n; i++){
      if  (str1[i] == "A" || str1[i] == "E" || str1[i] == "I" || str1[i] == "O" || str1[i] == "U"){
        count ++;
      } 
      if(count == 0){
        return 0;
      }
      else{
      return count;
      }
    }


}

module.exports = countVowels;