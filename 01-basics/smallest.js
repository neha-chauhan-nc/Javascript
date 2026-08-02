let arr = [12, 45, 8, 90, 23];

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Smallest =", min);