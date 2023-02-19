function bubbleSort(arr) {
    let len = arr.length - 1
  for (let i = 0; i < len; i++) {
    let swap = false
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true
      }
    }
    if (!swap) return arr
  }
  return arr;
}

module.exports = bubbleSort;
