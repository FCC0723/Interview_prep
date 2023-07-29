// Requirment: Sort an array of these integers in ascending or descending order.
// Input: An array unordered or not yet shorted.
// Output: The array is ordered based on least to greatest or reversed.

function bubbleSort(array) {
  // Step 1: We have a for loop with array - 1 steps to execute
  for (let i = 0; i <= array.length - 2; i++) {
    // Step 2: We sequentially compare each pair of elements from the last element to the first element
    for (let j = array.length - 1; j >= i + 1; j--) {
      // Step 3: If the [j-1] previous element is less than the j current element. we will swap them
      if (array[j] < array[j - 1]) {
        let temp;
        temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}
array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(bubbleSort(array));
