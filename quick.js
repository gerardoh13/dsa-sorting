/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    let p = arr[start];
    let pIdx = start;
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < p) {
        pIdx++;
        [arr[pIdx], arr[i]] = [arr[i], arr[pIdx]];
      }
    }
    [arr[start], arr[pIdx]] = [arr[pIdx], arr[start]];
    return pIdx;
  }

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pIdx = pivot(arr, start, end);
    quickSort(arr, start, pIdx - 1);
    quickSort(arr, pIdx + 1, end);
  }
  return arr;
}

module.exports = { pivot, quickSort };
