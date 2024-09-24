function removeDuplicates(arr) {
    let uniqueArray = [];
    let seenElements = {}; // Object to keep track of elements
  
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // If the element is not in the seenElements object, add it to uniqueArray
      if (!seenElements[arr[i]]) {
        uniqueArray.push(arr[i]);
        seenElements[arr[i]] = true; // Mark the element as seen
      }
    }
  
    return uniqueArray;
  }
  
  // Example usage:
  const inputArray = [1, 3, 6, 1, 4, 3, 1, 6];
  console.log(removeDuplicates(inputArray)); 
  // Output: [1, 3, 6, 4]
  