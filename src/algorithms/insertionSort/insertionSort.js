const insertionSort = (arr) => {
  const res = [...arr];

  for (let i = 1; i < res.length; i++) {
    let j = i;

    while (j > 0 && res[j - 1] > res[j]) {
      [res[j], res[j - 1]] = [res[j - 1], res[j]];

      j -= 1
    }
  }

  return res;
}