function topKFrequent(nums, k) {
    const freq = {};

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    return Object.keys(freq)
        .sort((a, b) => freq[b] - freq[a])
        .slice(0, k)
        .map(Number);
}

console.log(topKFrequent([1,1,1,2,2,3], 2));
// [1,2]