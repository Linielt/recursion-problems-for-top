function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let halfWay = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, halfWay);
  let secondHalf = array.slice(halfWay, array.length);

  let sortedFirstHalf = mergeSort(firstHalf);
  let sortedSecondHalf = mergeSort(secondHalf);

  let sorted = [];
  let firstHalfIndex = 0;
  let secondHalfIndex = 0;

  while (
    firstHalfIndex < sortedFirstHalf.length &&
    secondHalfIndex < sortedSecondHalf.length
  ) {
    if (sortedFirstHalf[firstHalfIndex] <= sortedSecondHalf[secondHalfIndex]) {
      sorted.push(sortedFirstHalf[firstHalfIndex++]);
    } else if (
      sortedSecondHalf[secondHalfIndex] < sortedFirstHalf[firstHalfIndex]
    ) {
      sorted.push(sortedSecondHalf[secondHalfIndex++]);
    }
  }

  if (firstHalfIndex === sortedFirstHalf.length) {
    for (; secondHalfIndex < sortedSecondHalf.length; secondHalfIndex++) {
      sorted.push(sortedSecondHalf[secondHalfIndex]);
    }
  } else if (secondHalfIndex === sortedSecondHalf.length) {
    for (; firstHalfIndex < sortedFirstHalf.length; firstHalfIndex++) {
      sorted.push(sortedFirstHalf[firstHalfIndex]);
    }
  }

  return sorted;
}
