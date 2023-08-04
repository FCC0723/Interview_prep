/**
 * Sort an array of these integers in ascending.
 * @param {number[]} array - An array unordered or not yet sorted.
 * @returns {number[]} - The array is ordered from least to greatest.
 */
function selectionSort(array) {
  for (let i = 0; i <= array.length - 2; i++) {
    let minValueIndex = i;
    for (let j = i + 1; j <= array.length - 1; j++) {
      if (array[j] < array[minValueIndex]) {
        minValueIndex = j;
      }
    }
    swapElements(array, minValueIndex, i);
  }
  return array;
}

/**
 * Swap Two Array Elements
 * @param {number[]} array 
 * @param {number} index1 
 * @param {number} index2 
 */
const swapElements = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

array = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
console.log(selectionSort(array));
