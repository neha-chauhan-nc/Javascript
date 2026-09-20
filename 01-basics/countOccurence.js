function countOccurrences(arr) {
    const freq = {};

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    return freq;
}

console.log(countOccurrences([1, 2, 2, 3, 1, 1]));