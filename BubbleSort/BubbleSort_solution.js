// Requirment: Sort an array of these integers in sorted order from least to greatest.
// Input: array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
// Output: array = [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643];
array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
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

bubbleSort(array);
