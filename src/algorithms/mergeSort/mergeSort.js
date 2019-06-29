const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.round((arr.length - 1) / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (a, b) => {
  const leftArr = [...a];
  const rightArr = [...b];
  const sortedArr = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    let minEl = null;

    if (leftArr[0] < rightArr[0]) {
      minEl = leftArr.shift();
    } else {
      minEl = rightArr.shift();
    }

    sortedArr.push(minEl);
  }

  if (leftArr.length > 0) {
    return sortedArr.concat(leftArr);
  }

  if (rightArr.length > 0) {
    return sortedArr.concat(rightArr);
  }

  return sortedArr;
};
