const cocktailSort = (arr) => {
  const res = [...arr];
  let left = 0;
  let right = res.length - 1;

  do {
    for (let i = left; i < right; i++) {
      if (res[i] > res[i + 1]) { 
        [res[i], res[i + 1]] = [res[i + 1], res[i]];
      }
    }

    right--;
    for (let i = right; left < i; i--) {
        if (res[i] < res[i - 1]) {
          [res[i], res[i - 1]] = [res[i - 1], res[i]];
        }
    }

    left++;
  } while (left < right)

  return res;
};
