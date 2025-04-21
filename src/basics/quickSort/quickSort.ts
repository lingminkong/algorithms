let count = 0;

const quickSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  // randomize the pivot element
  const pivotIndex = Math.floor(Math.random() * array.length);
  const pivot = array[pivotIndex];

  const smallerArray = [];
  const largerArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    count += 1;
    const value = array[i];

    if (value <= pivot) {
      smallerArray.push(value);
    } else {
      largerArray.push(value);
    }
  }

  return [...quickSort(smallerArray), pivot, ...quickSort(largerArray)];
};

const array = [77, 12, 3, 1, 4, 6, 2, 5, 3, 9];

console.log(quickSort(array));
console.log(`count=${count}`);
