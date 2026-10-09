function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;

    const map = { 0: 1 };

    for (let num of nums) {
        sum += num;

        if (map[sum - k]) {
            count += map[sum - k];
        }

        map[sum] = (map[sum] || 0) + 1;
    }

    return count;
}

console.log(subarraySum([1,1,1], 2)); // 2