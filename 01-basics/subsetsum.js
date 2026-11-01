function canPartition(nums) {
    let sum = nums.reduce((a, b) => a + b, 0);

    if (sum % 2 !== 0) return false;

    let target = sum / 2;
    let dp = new Set([0]);

    for (let num of nums) {
        let next = new Set(dp);

        for (let val of dp) {
            next.add(val + num);
        }

        dp = next;
    }

    return dp.has(target);
}

console.log(canPartition([1,5,11,5])); // true