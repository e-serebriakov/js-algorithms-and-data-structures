const bubbleSort = (arr) => {
  const res = [...arr];

  for (let i = 1; i < res.length; i++) {
    for (let j = 0; j < res.length - i; j++) {
      if (res[j + 1] < res[j]) {
        [res[j], res[j + 1]] = [res[j + 1], res[j]];
      }
    }
  }

  return res;
}