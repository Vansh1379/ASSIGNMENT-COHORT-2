/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let lar = numbers[0];
    let size = numbers.size();
    for(let i=0; i<size; i++)
    {
        if(numbers[i]>lar){
            lar = numbers[i];
        }
    }
    return  lar;
}

module.exports = findLargestElement;