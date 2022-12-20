## 이진탐색

`정렬`되어 있는 배열에서 특정한 값을 찾아내는 알고리즘

```js
const binarySearch = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = parseInt((start + end) / 2);
    if (target === arr[mid]) return mid;

    if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};
```
