function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right);
    }

    return binarySearch(arr, target, left, mid - 1);
}

console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3