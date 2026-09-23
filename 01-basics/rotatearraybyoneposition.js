function rotateByOne(arr) {
    const last = arr.pop();
    arr.unshift(last);
    return arr;
}

console.log(rotateByOne([1, 2, 3, 4, 5]));
// [5, 1, 2, 3, 4]