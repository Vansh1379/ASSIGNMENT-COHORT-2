/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

  function isAnagram(str1, str2) {
    // Check if lengths of both strings are same
    let str1 = str1.split('').sort().join('');
    let str2 = str2.split('').sort().join('');
    return(str1 = str2);
  }
// function isAnagram(str1, str2) {
//   let str1 = str1.split('').sort().join('');
//   let str2 = str2.split('').sort().join('');
//   return (str1 = str2);
// }

module.exports = isAnagram;
